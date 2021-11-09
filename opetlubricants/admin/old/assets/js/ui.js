/* @abbas */
(function () {
    var origAppend = $.fn.append;
    $.fn.appendUI = function () {
        return origAppend.apply(this, UI.setup(arguments[0]));
    }

    var origAter = $.fn.after;
    $.fn.afterUI = function () {
        return origAter.apply(this, UI.setup(arguments[0]));
    }
})();


var UI = {};

(function () {
    var u = {},
        recaptchaArr = [],
        swiperArr = [],
        videoArr = [],
        videoLoadItems = [],
        videoLoadIndex = 0,
        tmpVideoLoadItems = [],
        imgLoadItems = [],
        imgLoadIndex = 0,
        tmpImgLoadItems = [];

    u.setup = function (element) {

        element = element || "body";
        var $element = $(element);

        u.resize($element);

        setTimeout(function () {
            $element.find("input[type=checkbox].custom-style, input[type=radio].custom-style, select.select-item").formStyle();
            $(".numeric").numeric({ allowMinus: false, allowThouSep: false, allowDecSep: false });
            $('.date').mask('09/09/0000');
            u.formValidationInit($element);
            u.recaptcha($element);
            u.swiperInit($element);
            u.setVideo($element);
            u.autocompleteInit($element);
        }, 100);
        return element;


    }

    u.getSwiper = function (id) {
        return swiperArr[id];
    }

    u.swiperInit = function (element) {
        var $element = typeof element.data("data-swiper") != "undefined" ? element : element.find("[data-swiper]");

        if ($element.length > 0) {
            $element.each(function (i) {
                var $this = $(this),
                    $swiper = $this.find(".swiper-container"),
                    $parent = $this.parent(),
                    itemLength = $swiper.find(".swiper-slide").length,
                    t = new Date().getTime() + i,
                    id = $this.attr("id"),
                    swiperID = "swiper-" + t,
                    data = parseData($this.data("swiper"));

                $swiper.attr("id", swiperID);

                if (data.options.slidesPerView != itemLength || itemLength != 1) {

                    if (typeof id == "undefined") {
                        id = "swiper-content-" + t;
                        $this.attr("id", id);
                    }

                    data.options.resistanceRatio = 0;
                    data.options.nested = true;

                    if (typeof data.options.navigation != "undefined" && data.options.navigation) {

                        var navClass = data.navClass || "";
                        $this.append('<button type="button" class="swiper-button-prev ' + navClass + '"><i class="fa fa-arr-left"></i></button><button type="button" class="swiper-button-next ' + navClass + '"><i class="fa fa-arr-right"></i></button>');
                        data.options.navigation = {
                            nextEl: '#' + id + ' .swiper-button-next',
                            prevEl: '#' + id + ' .swiper-button-prev'
                        }
                    }

                    if (typeof data.options.pagination != "undefined" && data.options.pagination) {
                        $this.append('<div class="swiper-pagination"></div>');
                        data.options.pagination = {
                            el: '#' + id + ' .swiper-pagination'
                        }
                    }



                    swiperArr[swiperID] = new Swiper("#" + swiperID, data.options);

                    if (typeof data.heightCalc != "undefined") {
                        _heightCalc($swiper);
                        $(window).on("resize", function () {
                            setTimeout(function () { _heightCalc($swiper); }, 250);
                        });
                    }

                    if (typeof data.onChanged != "undefined") {
                        swiperArr[swiperID].on('slideChange', function () {

                            var index = swiperArr[swiperID].realIndex,
                                parent = $swiper.find(".swiper-slide:eq(" + index + ")");

                            window[data.onChanged](parent, index);
                        });


                        swiperArr[swiperID].on('resize', function () {
                            var parent = $swiper.find(".selected"),
                                index = parent.index();

                            swiperArr[swiperID].slideTo(index);

                        });
                    }

                }

            });
        }
    }

    u.formValidationInit = function (element) {
        var $element = typeof element.data("form") != "undefined" ? element : element.find("[data-form]");

        if ($element.length > 0) {
            $element.each(function (i) {
                var el = $(this),
                    id = el.attr("id"),
                    t = new Date().getTime() + i,
                    form = parseData(el.data("form"));

                if (typeof id == "undefined") {
                    id = "form-" + t;
                    el.attr("id", id);
                }

                if (!el.hasClass("create")) {

                    el.addClass("create");

                    $("#" + id).formValidation({
                        submit: function () {
                            Services.formSubmit(form.service, this);
                        }
                    });
                }
            });
        }
    }

    u.autocompleteInit = function (element) {
        var $element = typeof element.data("autocomplete") != "undefined" ? element : element.find("[data-autocomplete]");

        if ($element.length > 0) {
            $element.each(function (i) {
                var el = $(this),
                    id = el.attr("id"),
                    t = new Date().getTime() + i,
                    autocomplete = parseData(el.data("autocomplete"));

                if (typeof id == "undefined") {
                    id = "autocomplete-" + t;
                    el.attr("id", id);
                }

                el.parent().attr("id", "autocomplete-content-" + t);

                if (!el.hasClass("create")) {

                    el.addClass("create");

                    $("#" + id).autocomplete({
                        appendTo: "#" + el.parent().attr("id"),
                        source: function (request, response) {
                            if (request.term.length > 2) {
                                el.parent().addClass("loading");
                                Services[autocomplete.source](el, request.term, response);
                            }
                        },
                        minLength: 2,
                        position: { my: "left+15 top" },
                        select: function (event, ui) {
                            $('[data-step="3"]').remove();
                            Services[autocomplete.select]($(event.target), ui.item.id);
                            el.parent().addClass("selected");
                        }

                    });
                }
            });
        }
    }

    u.resize = function (element) {

        $(window).on("resize", function () {
            if ($(".accordion-container").length > 0) {
                $(".collapse .accordion-desc").each(function () {
                    var el = $(this),
                        descHeight = el.find("> div").outerHeight();

                    el.css("height", descHeight);
                });
            }
        });


    }

    u.recaptcha = function (element) {
        var $element = typeof element.data("data-recaptcha") != "undefined" ? element : element.find("[data-recaptcha]");

        if ($element.length > 0) {


            $.getScript('//www.google.com/recaptcha/api.js').done(function () {
                var recaptchaInterval = setInterval(function () {
                    
                    if (typeof grecaptcha != "undefined" && typeof grecaptcha.render != "undefined") {
                        
                        clearInterval(recaptchaInterval);
                        $element.each(function (i) {
                            var el = $(this),
                                t = new Date().getTime() + i,
                                data = parseData(el.data("recaptcha")),
                                id = el.attr("id");


                            if (typeof id == "undefined") {
                                id = "recaptcha-" + t;
                                el.attr("id", id);
                            }

                            recaptchaArr[id] = grecaptcha.render(document.getElementById(id), {
                                'sitekey': recaptchaSiteKey,
                                'hl': data.lang,
                                'callback': function (e) {
                                    el.parent().find('input[type="hidden"]').val(e);
                                }
                            });
                        });

                        scaleCaptcha();
                    }
                }, 100);

            });

        }
    }

    u.resetRecaptcha = function (id) {
        grecaptcha.reset(recaptchaArr[id]);
        $("#" + id).parent().find('input[type="hidden"]').val('');
    }

    u.setVideo = function (element) {
        var $element = typeof element.data("data-video") != "undefined" ? element : element.find("[data-video]");

        
        if ($element.length > 0) {
            $element.each(function () {
                var el = $(this),
                    data = parseData(el.data("video"));

                if (el.hasClass("created")) return;

                el.addClass("created");
                var videoIndex = videoLoadItems.push(data.src);
                videoArr[videoIndex - 1] = el;
            });

            _loadVideo();
        }
        
    }

    u.loadImage = function (html, callBack) {
        _setLoadImage(html, callBack);
    };

    function _loadVideo() {

        var videoContent = videoArr[videoLoadIndex],
            data = parseData(videoContent.data("video")),
            attr = "";
            

        /*/if (data.loop) {
            attr = 'loop';
        }*/

        var video = $('<video src="' + data.src + '" muted ' + attr + '></video>');
        video[0].preload = "auto";

        videoContent.html(video);

        tmpVideoLoadItems[videoLoadIndex] = video[0];
        tmpVideoLoadItems[videoLoadIndex].addEventListener("canplaythrough", _loadVideoComplete);
    }

    function _loadVideoComplete() {
        tmpVideoLoadItems[videoLoadIndex].removeEventListener("canplaythrough", _loadVideoComplete);
        var video = videoArr[videoLoadIndex].find("video"),
            iOS9 = iOSVersion();
        video.parent().removeClass("loading");

        if (iOS9) {
            video.parent().append('<div class="circle-icon-btn"><button type="button"><span><i class="fa fa-play"></i></span></button></div>');
        } else {
            video[0].play();
        }

        videoLoadIndex++;

        if (videoLoadItems.length > videoLoadIndex) {
            _loadVideo();
        }
    }

    function _setLoadImage(html, callBack) {
        imgLoadItems = [];
        imgLoadIndex = 0;
        tmpImgLoadItems = [];
        var imgs = html.find("img");
        $.each(imgs, function () {
            var el = $(this),
                src = el.attr("src");
            imgLoadItems.push(src);
        });

        _loadImage(callBack);
    }

    function _loadImage(callBack) {
        var i = imgLoadItems[imgLoadIndex];

        tmpImgLoadItems[imgLoadIndex] = new Image();
        tmpImgLoadItems[imgLoadIndex].src = i;
        tmpImgLoadItems[imgLoadIndex].onload = function () { _loadImageComplete(callBack) };
        tmpImgLoadItems[imgLoadIndex].oncomplete = function () { this.onload() };
        tmpImgLoadItems[imgLoadIndex].onerror = function () { _loadImageComplete(callBack); };
    }

    function _loadImageComplete(callBack) {
        imgLoadIndex++;
        if (imgLoadItems.length > imgLoadIndex) {
            _loadImage(callBack);
        } else {
            callBack();
        }
    }

    function _heightCalc(el) {
        el.css("height", "auto");
        var h = el.find(".swiper-wrapper").height();
        el.css("height", h);
    }

    UI = u;
})();
