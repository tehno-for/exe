import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import { Editor } from '@tinymce/tinymce-react';

import MultiRowInput from "../FormElements/MultiRowInput";
import {TextInput} from "../FormElements";

const EntityItemDetails = ({entity, className, item, sessionKey, siteUrl, onChangeItem}) => {
    const [link, setLink] = useState("");
    const [urlName, setUrlName] = useState("");
    const [seoKeywords, setSeoKeywords] = useState("");
    const [seoDescription, setSeoDescription] = useState("");
    const [title, setTitle] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [body, setBody] = useState("");
    const [editor, setEditor] = useState(null);

    useEffect(()=>{
        setLink(item.link);
        setUrlName(item.urlName);
        setSeoKeywords(item.seoKeywords);
        setSeoDescription(item.seoDescription);
        setTitle(item.title);
        setShortDescription(item.shortDescription);
        setBody(item.body);
        if (editor) {
            editor.setContent(item.body);
        }
    },[item, editor]);



    useEffect( () => {
        onChangeItem({
            lang: item.lang,
            link,
            urlName,
            seoKeywords,
            seoDescription,
            title,
            shortDescription,
            body
        })
    }, [link, urlName, seoDescription, seoKeywords, shortDescription, title, body, item, onChangeItem]);

    const handleEditorChange = (data, editor) => {
        setBody(data);
    }

    return (
        <div className={classNames(className, "entity-item-details")} data-lang={item.lang}>
            {entity && entity.hasLink === 1 && <label htmlFor={`linkItemDetail${item.lang}`}>Link</label>}
            {entity && entity.hasLink === 1 && <TextInput id={`linkItemDetail${item.lang}`} value={link} onChange={event=>{setLink(event.target.value);}}/>}
            {entity && entity.hasSeo === 1 && <label htmlFor={`urlNameItemDetail${item.lang}`}>SEO URL</label>}
            {entity && entity.hasSeo === 1 && <TextInput id={`urlNameItemDetail${item.lang}`} value={urlName} onChange={event=>{setUrlName(event.target.value);}}/>}
            {entity && entity.hasSeo === 1 && <label htmlFor={`seoKeywordsItemDetail${item.lang}`}>SEO Keywords</label>}
            {entity && entity.hasSeo === 1 && <TextInput id={`seoKeywordsItemDetail${item.lang}`} value={seoKeywords} onChange={event=>{setSeoKeywords(event.target.value);}} />}
            {entity && entity.hasSeo === 1 && <label htmlFor={`seoDescriptionItemDetail${item.lang}`}>SEO Description</label>}
            {entity && entity.hasSeo === 1 && <TextInput id={`seoDescriptionItemDetail${item.lang}`} value={seoDescription} onChange={event=>{setSeoDescription(event.target.value);}} />}
            {entity && entity.hasTitle === 1 && <label htmlFor={`titleItemDetail${item.lang}`}>Заголовок</label>}
            {entity && entity.hasTitle === 1 && <TextInput id={`titleItemDetail${item.lang}`} value={title} onChange={event=>{setTitle(event.target.value);}} />}
            {entity && entity.hasShortDescription === 1 && <label htmlFor={`shortDescriptionItemDetail${item.lang}`}>Краткое описание</label>}
            {entity && entity.hasShortDescription === 1 && <MultiRowInput id={`shortDescriptionItemDetail${item.lang}`} value={shortDescription} onChange={event=>{setShortDescription(event.target.value);}}  />}
            {entity && entity.hasBody === 1 && <Editor
                apiKey="bxy8y2bkefsd84rsn9fvqio1wlni21rzb8y7f34bo56hrhca"
                initialValue={body}
                init={{
                    setup: editor => {
                        setEditor(editor);
                    },
                    height: 400,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen image table hr charmap nonbreaking pagebreak legacyoutput',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: [
                        'undo redo | media | image | bold italic forecolor backcolor | link anchor charmap nonbreaking pagebreak | removeformat',
                        'alignleft aligncenter alignright alignjustify | hr fontselect fontsizeselect styleselect | bullist outdent indent |  ',
                        'table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol '
                        ],
                    images_upload_credentials: true,
                    image_caption: true,
                    image_advtab: true,
                    images_upload_handler: function (blobInfo, success, failure) {
                        var xhr, formData;

                        xhr = new XMLHttpRequest();
                        xhr.withCredentials = false;
                        xhr.open('POST', `${siteUrl}/upload/images/uploads`);

                        xhr.onload = function() {
                            var json;

                            if (xhr.status !== 200) {
                                failure('HTTP Error: ' + xhr.status);
                                return;
                            }

                            json = JSON.parse(xhr.responseText);

                            if (!json || !json.data ) {
                                failure('Invalid JSON: ' + xhr.responseText);
                                return;
                            }

                            success(`${siteUrl}/assets/images/uploads/${blobInfo.filename()}`);
                        };

                        formData = new FormData();
                        formData.append('file', blobInfo.blob(), blobInfo.filename());
                        formData.append('objectType', 'entity_item_secondary');
                        formData.append('objectId', '-1');
                        formData.append('sessionKey', sessionKey);

                        xhr.send(formData);
                    }
                }}
                onEditorChange={handleEditorChange}
            />}
        </div>
    )
};

export default EntityItemDetails;