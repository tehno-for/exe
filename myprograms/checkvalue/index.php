<?php
/**
 * Created by PhpStorm.
 * Author: Konstantin Kaluzhnikov k.kaluzhnikov@gmail.com
 * Date: 22.08.2017
 */

namespace Controller;

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use \Xandros15\SlimPagination\Pagination;
use \Xandros15\SlimPagination\PageList;

class Frontend extends BaseController
{
    public function index(Request $request, Response $response, Array $args) {

        $sql = "SELECT I.industryId, I.onMain, MAX(P.createdAt)
                FROM industries I
                INNER JOIN posts_industries PI ON I.industryId = PI.industryId
                INNER JOIN posts P ON P.postId = PI.postId AND P.status = 1 AND P.finishedAt >= NOW()
                WHERE I.onMain = 1
                GROUP BY I.industryId, I.onMain
                ORDER BY MAX(P.createdAt) DESC";
        $stmt = $this->db->prepare($sql);
        $stmt->execute();
        $industries = $stmt->fetchAll();

        $containers = array();

        $containers[] = $this->renderer->fetch('Frontend/Blog/blog_stile1.twig', $this->getVipPosts(10));

        foreach ($industries as $key => $industry){
            $containers[] = $this->renderer->fetch('Frontend/Blog/blog_stile1.twig', $this->getPosts($industry['industryId'], 10));

            if(in_array($key, [0])){
                $containers[] = $this->getPageBanner();
            }
        }

        $data = array(
            'page'       => $this->getPage('main'),
            'containers' => $containers
        );

        return $this->render($response, 'Frontend/index.twig', $data);
    }

    public function about(Request $request, Response $response, Array $args) {

        $data = array(
            'page' => $this->getPage('about'),
        );

        return $this->render($response, 'Frontend/page.twig', $data);
    }

    public function services(Request $request, Response $response, Array $args) {

        $data = array(
            'page' => $this->getPage('services'),
        );

        return $this->render($response, 'Frontend/page.twig', $data);
    }

    public function rules(Request $request, Response $response, Array $args) {

        $data = array(
            'page' => $this->getPage('rules'),
        );

        return $this->render($response, 'Frontend/page.twig', $data);
    }

    public function reklam(Request $request, Response $response, Array $args) {

        $data = array(
            'page' => $this->getPage('reklam'),
        );

        return $this->render($response, 'Frontend/page.twig', $data);
    }

    public function contact(Request $request, Response $response, Array $args) {

        if($request->isPost()) {
            $vars = $request->getParsedBody();

            $stmt = $this->db->prepare("SELECT * FROM users WHERE login = 'admin'");
            $stmt->execute();
            $admin = $stmt->fetch();

            $emailFrom = array($vars['email'] => $vars['name']);
            $emailTo   = array($admin['email'] => $admin['name']);
            $emailBody = $this->renderer->fetch('Emails/contacts.twig', array(
                'from' => $vars['name'].' <'.$vars['email'].'>',
                'text' => $vars['text']
            ));

            $logger = new \Swift_Plugins_Loggers_ArrayLogger();
            $this->mailer->registerPlugin(new \Swift_Plugins_LoggerPlugin($logger));

            // Setting all needed info and passing in my email template.
            $message = (new \Swift_Message($this->trans('Contacts').': '.$vars['name']))
                ->setFrom($emailFrom)
                ->setTo($emailTo)
                ->setBody($emailBody)
                ->setContentType("text/html");

            // Send the message
            if($this->mailer->send($message)){
                $this->flash->addMessage('success', $this->trans('Email was send'));
            }else{
                // Dump the log contents
                // NOTE: The EchoLogger dumps in realtime so dump() does nothing for it. We use ArrayLogger instead.
                //echo "Error:" . $logger->dump();
                //return $response;

                $this->flash->addMessage('error', $this->trans('An error occurred. Please contact administrator'));
            }
            return $response->withStatus(302)->withHeader('Location', $this->router->pathFor('home', ['lang' => $this->lang]));
        }

        $data = array(
            'page' => $this->getPage('contacts'),
        );

        return $this->render($response, 'Frontend/contact.twig', $data);
    }

    public function blog(Request $request, Response $response, Array $args) {
        $data = array();

        $options = array(
            Pagination::OPT_PARAM_NAME  => 'page',
            Pagination::OPT_PARAM_TYPE  => PageList::PAGE_ATTRIBUTE,
            Pagination::OPT_PER_PAGE    => 10,
            Pagination::OPT_SIDE_LENGTH => 3,
        );

        $categoryId = $request->getAttribute('id', 0);
        $page       = $request->getAttribute($options[Pagination::OPT_PARAM_NAME], 1);
        $offset     = $options[Pagination::OPT_PER_PAGE] * ($page - 1);

        $sql = "SELECT I.industryId, IL.title FROM industries I INNER JOIN industries_lang IL ON I.industryId = IL.industryId WHERE I.industryId = ? AND IL.lang=?";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$categoryId, $this->lang]);
        if(!$category = $stmt->fetch()){
            throw new \Slim\Exception\NotFoundException($request, $response);
        }
        $data['category_name'] = $category['title'];

        $countSQL = "SELECT COUNT(*) total
                     FROM posts P
                     INNER JOIN posts_lang L ON L.postId = P.postId AND L.lang = '".$this->lang."'
                     INNER JOIN users U ON P.userId = U.userId
                     INNER JOIN posts_industries PI ON PI.postId = P.postId AND PI.industryId = :industryId
                     WHERE P.status = 1 AND P.finishedAt >= NOW()";

        $dataSQL  = "SELECT P.*, L.*, U.name, PF.file
                     FROM posts P
                     INNER JOIN posts_lang L ON L.postId = P.postId AND L.lang = '".$this->lang."'
                     LEFT JOIN (
                         SELECT A.postId, A.file
                         FROM posts_files A
                         INNER JOIN (
                             SELECT MAX(a.fileId) fileId, a.postId
                             FROM posts_files a
                             WHERE type LIKE 'image%'
                             GROUP BY a.postId
                         ) B ON A.fileId = B.fileId
                     ) PF ON PF.postId = P.postId
                     INNER JOIN users U ON P.userId = U.userId
                     INNER JOIN posts_industries PI ON PI.postId = P.postId AND PI.industryId = :industryId
                     WHERE P.status = 1 AND P.finishedAt >= NOW()
                     ORDER BY P.createdAt DESC
                     LIMIT :limit OFFSET :offset";

        $countQuery = $this->db->prepare($countSQL);
        $dataQuery  = $this->db->prepare($dataSQL);

        $countQuery->bindValue(':industryId', $categoryId,                        \PDO::PARAM_INT);

        $dataQuery->bindValue(':industryId', $categoryId,                        \PDO::PARAM_INT);
        $dataQuery->bindValue(':limit',      $options[Pagination::OPT_PER_PAGE], \PDO::PARAM_INT);
        $dataQuery->bindValue(':offset',     $offset,                            \PDO::PARAM_INT);

        $countQuery->execute();
        $dataQuery->execute();

        $options[Pagination::OPT_TOTAL] = $countQuery->fetch()['total'];
        $data['items']                  = $dataQuery->fetchAll();

        $pagination = new Pagination($request, $this->router, $options);
        $data['pagination'] = $this->renderer->fetch('Frontend/pagination.twig', ['pagination' => $pagination]);

        $data['page'] = array(
            'title'       => $category['title'],
            'keywords'    => $category['title'],
            'description' => $category['title'],
            'text'        => '',
        );

        return $this->render($response, 'Frontend/blog.twig', $data);
    }

    public function postType(Request $request, Response $response, Array $args) {
        $data = array();

        $options = array(
            Pagination::OPT_PARAM_NAME  => 'page',
            Pagination::OPT_PARAM_TYPE  => PageList::PAGE_ATTRIBUTE,
            Pagination::OPT_PER_PAGE    => 10,
            Pagination::OPT_SIDE_LENGTH => 3,
        );

        $categoryId = $request->getAttribute('id', 0);
        $page       = $request->getAttribute($options[Pagination::OPT_PARAM_NAME], 1);
        $offset     = $options[Pagination::OPT_PER_PAGE] * ($page - 1);

        $sql = "SELECT T.typeId, L.title FROM postTypes T INNER JOIN postTypes_lang L ON T.typeId = L.typeId WHERE T.typeId = ? AND L.lang=?";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$categoryId, $this->lang]);
        if(!$category = $stmt->fetch()){
            throw new \Slim\Exception\NotFoundException($request, $response);
        }
        $data['category_name'] = $category['title'];

        $countSQL = "SELECT COUNT(*) total
                     FROM posts P
                     INNER JOIN posts_lang L ON L.postId = P.postId AND L.lang = '".$this->lang."'
                     INNER JOIN users U ON P.userId = U.userId
                     WHERE
                         P.typeId = :typeId
                     AND P.status = 1 AND P.finishedAt >= NOW()";

        $dataSQL  = "SELECT P.*, L.*, U.name, PF.file
                     FROM posts P
                     INNER JOIN posts_lang L ON L.postId = P.postId AND L.lang = '".$this->lang."'
                     LEFT JOIN (
                         SELECT A.postId, A.file
                         FROM posts_files A
                         INNER JOIN (
                             SELECT MAX(a.fileId) fileId, a.postId
                             FROM posts_files a
                             WHERE type LIKE 'image%'
                             GROUP BY a.postId
                         ) B ON A.fileId = B.fileId
                     ) PF ON PF.postId = P.postId
                     INNER JOIN users U ON P.userId = U.userId
                     WHERE
                         P.typeId = :typeId
                     AND P.status = 1 AND P.finishedAt >= NOW()
                     ORDER BY P.createdAt DESC
                     LIMIT :limit OFFSET :offset";

        $countQuery = $this->db->prepare($countSQL);
        $dataQuery  = $this->db->prepare($dataSQL);

        $countQuery->bindValue(':typeId',    $categoryId,                        \PDO::PARAM_INT);

        $dataQuery->bindValue(':typeId',     $categoryId,                        \PDO::PARAM_INT);
        $dataQuery->bindValue(':limit',      $options[Pagination::OPT_PER_PAGE], \PDO::PARAM_INT);
        $dataQuery->bindValue(':offset',     $offset,                            \PDO::PARAM_INT);

        $countQuery->execute();
        $dataQuery->execute();

        $options[Pagination::OPT_TOTAL] = $countQuery->fetch()['total'];
        $data['items']                  = $dataQuery->fetchAll();

        $pagination = new Pagination($request, $this->router, $options);
        $data['pagination'] = $this->renderer->fetch('Frontend/pagination.twig', ['pagination' => $pagination]);

        $data['page'] = array(
            'title'       => $category['title'],
            'keywords'    => $category['title'],
            'description' => $category['title'],
            'text'        => '',
        );

        return $this->render($response, 'Frontend/blog.twig', $data);
    }

    public function post(Request $request, Response $response, Array $args) {
        $data = array();

        $sql  = "SELECT
                    P.*, L.*,
                    U.name u_name, U.phone u_phone, U.email u_email, U.site u_site, U.facebook u_facebook, U.country u_country,
                    UC.name u_city,
                    PC.name city,
                    PF.file,
                    PT.title as postType
                 FROM posts P
                 INNER JOIN posts_lang L ON L.postId = P.postId AND L.lang = ?
                 LEFT JOIN (
                     SELECT A.postId, A.file
                     FROM posts_files A
                     INNER JOIN (
                         SELECT MAX(a.fileId) fileId, a.postId
                         FROM posts_files a
                         WHERE type LIKE 'image%'
                         GROUP BY a.postId
                     ) B ON A.fileId = B.fileId
                 ) PF ON PF.postId = P.postId
                 INNER JOIN users U ON P.userId = U.userId
                 INNER JOIN postTypes_lang PT ON PT.typeId = P.typeId AND PT.lang = ?
                 LEFT JOIN cities UC ON UC.cityId = U.cityId
                 LEFT JOIN cities PC ON PC.cityId = P.cityId
                 WHERE
                     P.postId = ?
                 AND P.status = 1 AND P.finishedAt >= NOW()";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$this->lang, $this->lang, $args['id']]);
        if(!$data['item'] = $stmt->fetch()){
            throw new \Slim\Exception\NotFoundException($request, $response);
        }

        $sql = "SELECT I.industryId, IL.title
                FROM industries I
                INNER JOIN industries_lang IL ON I.industryId = IL.industryId AND lang=?
                INNER JOIN posts_industries PI ON PI.industryId = I.industryId
                WHERE PI.postId = ?";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$this->lang, $args['id']]);
        $data['item']['industries'] = $stmt->fetchAll();

        $sql = "SELECT * FROM posts_files WHERE postId = ?";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$args['id']]);

        while($file = $stmt->fetch()){
            if(\Helpers\Helpers::isImageMIME($file['type'])){
                $data['item']['images'][] = $file;
            }else{
                $data['item']['files'][] = $file;
            }
        }

        $data['page'] = array(
            'title'       => $data['item']['title'],
            'keywords'    => implode(',', array_column($data['item']['industries'], 'title')),
            'description' => $data['item']['title'],
            'text'        => '',
        );

        return $this->render($response, 'Frontend/post.twig', $data);
    }

    public function searchPost(Request $request, Response $response, Array $args) {

        $query = $request->getQueryParam('q', '');

        $data = array(
            'category_name' => $query,
        );

        if(strlen($query) <= 3){
            return $this->render($response, 'Frontend/blog.twig', $data);
        }

        $options = array(
            Pagination::OPT_PARAM_NAME  => 'page',
            Pagination::OPT_PARAM_TYPE  => PageList::PAGE_ATTRIBUTE,
            Pagination::OPT_PER_PAGE    => 10,
            Pagination::OPT_SIDE_LENGTH => 3,
        );

        $page       = $request->getAttribute($options[Pagination::OPT_PARAM_NAME], 1);
        $offset     = $options[Pagination::OPT_PER_PAGE] * ($page - 1);

        $countSQL = "SELECT COUNT(*) total
                     FROM posts P
                     INNER JOIN posts_lang L ON L.postId = P.postId AND L.lang = '".$this->lang."'
                     INNER JOIN users U ON P.userId = U.userId
                     WHERE
                        P.status = 1 AND P.finishedAt >= NOW()
                     AND (
                         P.price = :query OR MATCH (L.title, L.text_search) AGAINST (:query)
                     )";

        $dataSQL = "SELECT P.*, L.*, U.name, PF.file
                    FROM posts P
                    INNER JOIN posts_lang L ON L.postId = P.postId AND L.lang = '".$this->lang."'
                    LEFT JOIN (
                        SELECT A.postId, A.file
                        FROM posts_files A
                        INNER JOIN (
                            SELECT MAX(a.fileId) fileId, a.postId
                            FROM posts_files a
                            WHERE type LIKE 'image%'
                            GROUP BY a.postId
                        ) B ON A.fileId = B.fileId
                    ) PF ON PF.postId = P.postId
                    INNER JOIN users U ON P.userId = U.userId
                    WHERE
                        P.status = 1 AND P.finishedAt >= NOW()
                    AND (
                        P.price = :query OR MATCH (L.title, L.text_search) AGAINST (:query)
                    )
                    LIMIT :limit OFFSET :offset";

        $countQuery = $this->db->prepare($countSQL);
        $dataQuery  = $this->db->prepare($dataSQL);

        $countQuery->bindValue(':query', $query,                             \PDO::PARAM_STR);

        $dataQuery->bindValue(':query',  $query,                             \PDO::PARAM_STR);
        $dataQuery->bindValue(':limit',  $options[Pagination::OPT_PER_PAGE], \PDO::PARAM_INT);
        $dataQuery->bindValue(':offset', $offset,                            \PDO::PARAM_INT);

        $countQuery->execute();
        $dataQuery->execute();

        $options[Pagination::OPT_TOTAL] = $countQuery->fetch()['total'];
        $data['items']                  = $dataQuery->fetchAll();

        $pagination = new Pagination($request, $this->router, $options);
        $data['pagination'] = $this->renderer->fetch('Frontend/pagination.twig', ['pagination' => $pagination]);

        $data['page'] = array(
            'title'       => $this->trans('Search').' - '.$query,
            'keywords'    => $this->trans('Search').','.$query,
            'description' => $this->trans('Search').' '.$query,
            'text'        => '',
        );

        return $this->render($response, 'Frontend/blog.twig', $data);
    }

    public function valutes(Request $request, Response $response, Array $args) {
        $result = '';
        foreach($this->getValutes() as $key => $valute){
            $result .= sprintf('<strong>%s (%s)</strong>: %s', $valute['name'], $key, $valute['value']);
        }

        return $response->withJson($result, 200);
    }

    public function frontendMiddleware(Request $request, Response $response, callable $next)
    {
        $twigEnv = $this->renderer->getEnvironment();

        $twigEnv->addGlobal('footerAbout',    $this->getFooterAbout());
        $twigEnv->addGlobal('industries',     $this->getCategories());
        $twigEnv->addGlobal('postTypes',      $this->getPostTypes());
        $twigEnv->addGlobal('recent_posts',   $this->recentPosts());
        $twigEnv->addGlobal('pop_categories', $this->popularCategories(5));
    //    $twigEnv->addGlobal('valutes',        $this->getValutes());

        $twigEnv->addGlobal('head_banner',    $this->getHeadBanner());
        $twigEnv->addGlobal('side_banner',    $this->getSideBanner());
        $twigEnv->addGlobal('code_banners',   $this->getCodeBanners());

        return $next($request, $response, $next);
    }


    protected function getPage($alias){
        $data = array_fill_keys(['title', 'keywords', 'description', 'text'], '');

        $sql = "SELECT P.*, L.title, L.keywords, L.description, L.text
                FROM pages P
                INNER JOIN pages_lang L ON L.pageId=P.pageId AND L.lang=?
                WHERE alias=?";

        $stmt = $this->db->prepare($sql);
        $stmt->execute([$this->lang, $alias]);
        if($item = $stmt->fetch()){
            $data = array(
                'title'       => $item['title'],
                'keywords'    => $item['keywords'],
                'description' => $item['description'],
                'text'        => $item['text'],
            );
        }

        return $data;
    }

    protected function getPosts($industryId, $limit = 10, $offset = 0){
        $data = array();

        $industryId = (int) $industryId;

        $sql = "SELECT I.industryId, IL.title FROM industries I INNER JOIN industries_lang IL ON I.industryId = IL.industryId WHERE I.industryId = ? AND IL.lang=?";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$industryId, $this->lang]);
        $data['industry'] = $stmt->fetch();

        $sql  = "SELECT P.*, L.*, U.name, PF.file, PTL.title as postType
                 FROM posts P
                 INNER JOIN posts_lang L ON L.postId = P.postId AND L.lang = '".$this->lang."'
                 LEFT JOIN (
                     SELECT A.postId, A.file
                     FROM posts_files A
                     INNER JOIN (
                         SELECT MAX(a.fileId) fileId, a.postId
                         FROM posts_files a
                         WHERE type LIKE 'image%'
                         GROUP BY a.postId
                     ) B ON A.fileId = B.fileId
                 ) PF ON PF.postId = P.postId
                 INNER JOIN users U ON P.userId = U.userId
                 INNER JOIN posts_industries PI ON PI.postId = P.postId AND PI.industryId = :industryId
                 INNER JOIN postTypes_lang PTL ON PTL.typeId = P.typeId AND PTL.lang = '".$this->lang."'
                 WHERE P.status = 1 AND P.finishedAt >= NOW()
                 ORDER BY P.finishedAt DESC
                 LIMIT :limit OFFSET :offset";

        $stmt = $this->db->prepare($sql);
        $stmt->bindValue(':industryId',  $industryId,  \PDO::PARAM_INT);
        $stmt->bindValue(':limit',       $limit,       \PDO::PARAM_INT);
        $stmt->bindValue(':offset',      $offset,      \PDO::PARAM_INT);
        $stmt->execute();

        $data['items'] = $stmt->fetchAll();

        return $data;
    }

    protected function getVipPosts($limit = 10, $offset = 0){
        $data = array();

        $sql  = "SELECT P.*, L.*, U.name, PF.file, PTL.title as postType
                 FROM posts P
                 INNER JOIN posts_lang L ON L.postId = P.postId AND L.lang = '".$this->lang."'
                 LEFT JOIN (
                     SELECT A.postId, A.file
                     FROM posts_files A
                     INNER JOIN (
                         SELECT MAX(a.fileId) fileId, a.postId
                         FROM posts_files a
                         WHERE type LIKE 'image%'
                         GROUP BY a.postId
                     ) B ON A.fileId = B.fileId
                 ) PF ON PF.postId = P.postId
                 INNER JOIN users U ON P.userId = U.userId
                 INNER JOIN postTypes_lang PTL ON PTL.typeId = P.typeId AND PTL.lang = '".$this->lang."'
                 WHERE P.status = 1 AND P.finishedAt >= NOW()
                 AND P.isVip = 1
                 ORDER BY P.createdAt DESC
                 LIMIT :limit OFFSET :offset";

        $stmt = $this->db->prepare($sql);
        $stmt->bindValue(':limit',       $limit,       \PDO::PARAM_INT);
        $stmt->bindValue(':offset',      $offset,      \PDO::PARAM_INT);
        $stmt->execute();

        $data['items'] = $stmt->fetchAll();

        return $data;
    }

    protected function getFooterAbout(){
        $sql = "SELECT L.text
                FROM pages P
                INNER JOIN pages_lang L ON L.pageId=P.pageId AND L.lang=?
                WHERE alias='main'";

        $stmt = $this->db->prepare($sql);
        $stmt->execute([$this->lang]);
        return $stmt->fetchColumn();
    }

    protected function getCategories(){
        $stmt = $this->db->prepare("SELECT I.industryId, IL.title FROM industries I INNER JOIN industries_lang IL ON I.industryId = IL.industryId AND lang=?");
        $stmt->execute([$this->lang]);
        $data = $stmt->fetchAll();

        return $data;
    }

    protected function getPostTypes(){
        $stmt = $this->db->prepare("SELECT T.typeId, L.title FROM postTypes T INNER JOIN postTypes_lang L ON T.typeId = L.typeId AND lang=?");
        $stmt->execute([$this->lang]);
        $data = $stmt->fetchAll();

        return $data;
    }

    protected function recentPosts($limit = 10, $offset = 0){
        $data = array();

        $sql  = "SELECT P.*, L.*, U.name, PF.file
                 FROM posts P
                 INNER JOIN posts_lang L ON L.postId = P.postId AND L.lang = '".$this->lang."'
                 LEFT JOIN (
                     SELECT A.postId, A.file
                     FROM posts_files A
                     INNER JOIN (
                         SELECT MAX(a.fileId) fileId, a.postId
                         FROM posts_files a
                         WHERE type LIKE 'image%'
                         GROUP BY a.postId
                     ) B ON A.fileId = B.fileId
                 ) PF ON PF.postId = P.postId
                 INNER JOIN users U ON P.userId = U.userId
                 WHERE P.status = 1 AND P.finishedAt >= NOW()
                 ORDER BY P.createdAt DESC
                 LIMIT :limit OFFSET :offset";

        $stmt = $this->db->prepare($sql);
        $stmt->bindValue(':limit',       $limit,       \PDO::PARAM_INT);
        $stmt->bindValue(':offset',      $offset,      \PDO::PARAM_INT);
        $stmt->execute();

        $data['items'] = $stmt->fetchAll();

        return $data;
    }

    protected function popularCategories($limit = 8){
        $sql = "SELECT
                    PI.industryId, IL.title, COUNT(*) COUNT
                FROM posts_industries PI
                INNER JOIN industries_lang IL ON PI.industryId = IL.industryId
                WHERE IL.lang=:lang
                GROUP BY PI.industryId, IL.title
                ORDER BY COUNT(*) DESC
                LIMIT :limit";
        $stmt = $this->db->prepare($sql);
        $stmt->bindValue(':lang',  $this->lang,  \PDO::PARAM_INT);
        $stmt->bindValue(':limit', $limit,       \PDO::PARAM_INT);
        $stmt->execute();

        $data = $stmt->fetchAll();
        return $data;
    }


    protected function getValutes(){
        $date = date('d.m.Y');

        $file = PUBLIC_DIR.'valutes.xml';

        if(!file_exists($file)){
            file_put_contents($file, '');
        }


        $xml = simplexml_load_file($file);

        if($xml === false || (string) ($xml['Date']) != $date){
            $url = 'https://www.cbar.az/currencies/'.$date.'.xml';
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $xmlresponse = curl_exec($ch);
            $xml=simplexml_load_string($xmlresponse);

            if($xml === false){
                return array();
            }

            file_put_contents($file, $xmlresponse);
        }

        $xml = $xml->xpath("//Valute[@Code='USD' or @Code='EUR' or @Code='RUB' or @Code='GBP' or @Code='TRY' or @Code='GEL' or @Code='IRR']");

        $valutes = array_fill_keys(['USD', 'EUR', 'RUB', 'GBP', 'TRY', 'GEL', 'IRR'], '');
        foreach($xml as $node){
            $valutes[(string) $node['Code']] = ['name' => (string) $node->Name, 'value' => (float) $node->Value];
        }
      //  ksort($valutes, SORT_NATURAL | SORT_FLAG_CASE);
        return $valutes;
    }

    protected function getHeadBanner(){
        $data = $this->getBanner('head_banner');
        if(is_null($data)){
            $data = array(
                'url'   => $this->router->pathFor('contact', ['lang' => $this->lang]),
                'img'   => '/resources/img/banners/banner-728-x-90az.jpg',
                'title' => 'Ad 728x90',
            );
        }
        return $data;
    }

    protected function getSideBanner(){
        $data = $this->getBanner('side_banner');
        if(is_null($data)){
            $data = array(
                'url'   => $this->router->pathFor('contact', ['lang' => $this->lang]),
                'img'   => '/resources/img/banners/banner-300-x-250az.jpg',
                'title' => 'Ad 300x250',
            );
        }

       return $data;
    }

    protected function getPageBanner(){
        $data = $this->getBanner('page_banner');
        if(is_null($data)){
            $data = array(
                'url'   => $this->router->pathFor('contact', ['lang' => $this->lang]),
                'img'   => '/resources/img/banners/banner-728-x-90az.jpg',
                'title' => 'Ad 728x90',
            );
        }

        return $this->renderer->fetch('Frontend/Banner/pageBanner.twig', array('banner' => $data));
    }

    protected function getBanner($type){
        $data = null;

        $stmt = $this->db->prepare("SELECT * FROM banners WHERE type = ? AND start <= NOW() AND stop >= NOW() ORDER BY views LIMIT 5");
        $stmt->execute([$type]);
        $items = $stmt->fetchAll();
        if(count($items) > 0){
            $id = array_rand($items);
            $data = array('url' => $items[$id]['url'], 'img' => '/uploads/banners/'.$items[$id]['file'], 'title' => $items[$id]['title']);
            $this->db->prepare("UPDATE banners SET views = views+1 WHERE bannerId = ?")->execute([$items[$id]['bannerId']]);
        }

        return $data;
    }

    protected function getCodeBanners(){
        $stmt = $this->db->prepare("SELECT * FROM banners WHERE type = ? AND start <= NOW() AND stop >= NOW() ORDER BY bannerId ");
        $stmt->execute(['code_banner']);
        $items = array();
        while($item = $stmt->fetch()){
            $items[] = $item['code'];
        }

        return $items;
    }
}

?>
