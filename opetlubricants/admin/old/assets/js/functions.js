/*var player = [],
    ws = $(window).scrollTop(),
    YTInterval,
    calture = JSON.parse(translation);*/

$(function () {

    var productList = $("#product-list");

    UI.setup();

    /*setMobileMenu();*/

    onResize();
    $(window).on("resize", onResize);
    $(window).on("scroll", onScroll);

    $("#mobile-menu-btn, #mobile-menu-overlay-bg").on("click", function (e) {
        e.preventDefault();
        var isOpen = $html.hasClass("open-header-menu");
        $html[isOpen ? "removeClass" : "addClass"]("open-header-menu");
    });

    $("#mobile-header-menu").on("click", "a", function (e) {
        var el = $(this),
            li = el.parent(),
            isOpen = li.hasClass("open-submenu"),
            ul = li.find("ul"),
            ulHeight = ul.find("li").length * ul.find("li:first-child").outerHeight() + 10;

        if (ul.length > 0) {
            e.preventDefault();
            li[isOpen ? "removeClass" : "addClass"]("open-submenu").siblings(".open-submenu").removeClass("open-submenu").find("ul").css("height", 0);
            ul.css("height", isOpen ? 0 : ulHeight);
        }

    });

   /* $(".box-menu, .box-header-menu").each(function () {
        setBoxMenuSelect(this);
    });*/

    $(".box-dot-menu").each(function () {
        setBoxDotMenuSelect(this);
    });

    $(".box-filter").each(function () {
        setBoxFilterSelect(this);
    });


    $(".box-menu, .box-header-menu, .box-filter").on("click", "> nav ul li > button:first-child", function (e) {
        e.preventDefault();
        var el = $(this),
            menu = el.closest("nav").parent(),
            fnc = menu.data("fnc");

        el.parent().addClass("selected").siblings().removeClass("selected");
        if (typeof fnc != "undefined") {
            window[fnc](e);
        }
    });


    $("#fullcheck-slider > div, .product-desc > div").on("click", function (e) {
        e.preventDefault();
        $(this).parent().addClass("collapse");
    });

    $(".accordion-head").on("click", "> h3 > a", function (e) {
        e.preventDefault();
        var el = $(this),
            parent = el.parent().parent(),
            content = parent.parent(),
            desc = parent.next(),
            descHeight = desc.find("> div").outerHeight(),
            isOpen = content.hasClass("collapse");



        content[isOpen ? "removeClass" : "addClass"]("collapse").siblings(".collapse").removeClass("collapse").find(".accordion-desc").css("height", 0).prev().find(".btn > b").html(calture.accordion_button_text).parent().find(".fa-close").removeClass("fa-close").addClass("fa-arr-right");
        desc.css("height", isOpen ? 0 : descHeight);
        el.find(".btn > b").html(isOpen ? calture.accordion_button_text : calture.accordion_button_close).parent().find(".fa").first().removeClass().addClass("fa fa-" + (isOpen ? "arr-right" : "close"));
    });

    if ($("[data-map]").length > 0) {
        $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBgQ957HDs9SzGDBKv6L041X-MGzP_PRoE&v=3.33', function (e) {
            var googleMap = [],
                marker = [];
            $("[data-map]").each(function (i) {
                var el = $(this),
                    id = "map-" + (new Date().getTime()),
                    data = parseData(el.data("map"));

                el.attr("id", id);

                googleMap[i] = new google.maps.Map(document.getElementById(id), {
                    center: data,
                    zoom: 15
                });

                marker[i] = new google.maps.Marker({
                    position: data,
                    map: googleMap[i]
                });
            });
        });
    }

    if ($("[data-youtube]").length > 0) {
        $.getScript('https://www.youtube.com/iframe_api', function () {
            YTReady();
        });
    }

    $(".box-video-play-btn").on("click", "> button", function (e) {
        e.preventDefault();
        var el = $(this),
            parent = el.parent(),
            video = parent.next(),
            index = video.data("id");

        parent.hide();
        player[index].playVideo();

    });

    $("[data-overlay-video]").on("click", function (e) {
        e.preventDefault();
        var el = $(this),
            src = el.data("overlay-video");

        new createOverlay({
            type: "media-video",
            media: {
                type: "videoIframe",
                src: src
            }
        });
    });

    $("[data-overlay-image]").on("click", function (e) {
        e.preventDefault();
        var el = $(this),
            src = el.data("overlay-image");

        new createOverlay({
            type: "media-image",
            media: {
                type: "image",
                src: src
            },
            loading: true
        });
    });

    $("[data-overlay-pdf]").on("click", function (e) {
        if (!isMobile) {
            e.preventDefault();
            var el = $(this),
                src = el.data("overlay-pdf");

            new createOverlay({
                type: "iframe",
                media: {
                    type: "iframe",
                    src: src
                }
            });
        }
    });

    $(".fullcheck-swiper-item").on("click", "> button", function (e) {
        var el = $(this),
            parent = el.parent(),
            index = parent.index();

        fullcheckCarouselChange(parent, index);

    });

    $(".expert-box-content").on("click", "button", function (e) {
        e.preventDefault();
        var el = $(this),
            data = {
                title: el.find("span").text(),
                description: el.next("figure").text(),
            };


        var html = $.tmpl($("#expertOverlayTemp"), data).html();

        new createOverlay({
            head: calture.expert_module_title,
            html: html
        });
    });


    if (productList.length > 0) {
        if (checkCookie() < 0) {
            var productItemsArr = [],
                productItems = productList.find(".product-item");

            for (var i = 0; i < 5; i++) {
                var el = $(productItems[i]),
                    obj = {
                        url: el.find("a").attr("href"),
                        title: el.find("a").attr("title"),
                        img: el.find("img").attr("src")
                    };
                productItemsArr.push(obj);

            }

            var html = $.tmpl($("#productSwiperTemp"), { items: productItemsArr, itemsLength: productItems.length });
            productList.afterUI($(html));

            $("body").on("click", ".all-product-btn", function (e) {
                e.preventDefault();
                productList.next().remove();
                productList.removeAttr("data-subpage");
                setCookie();
            });
        } else {
            productList.removeAttr("data-subpage");
        }
    }

    $(".product-sizes").on("click", "a", function (e) {
        e.preventDefault();
        var el = $(this),
            img = el.attr("href"),
            productSizeLength = el.parent().find("a").length,
            productImage = $(".product-image").find("img");

        if (productSizeLength > 1) {
            if (img == productImage.attr("src")) return;
            productImage.parent().addClass("loading");
            var image = new Image();
            image.onload = function () {
                productImage.attr("src", img).parent().removeClass("loading");
            };
            image.src = img;
        }
    });

    $(".step-container").on("click", ".read-more-btn button", function (e) {
        e.preventDefault();
        var el = $(this),
            data = parseData(el.data("tmpl")),
            html = $("#" + data.template).tmpl(Services[data.data]),
            stepItem = el.closest(".step-item"),
            content = el.closest(".step-container").addClass("loading");

        el.parent().remove();
        UI.loadImage($(html), function () {
            content.removeClass("loading");
            stepItem.find(".row").append(html);
        });
    });

    $("body").on("click", ".fullmatch-brand-item button", function (e) {
        e.preventDefault();
        var el = $(this),
            id = el.data("makeid"),
            stepContent = el.closest(".step-item"),
            col = el.closest(".step-item-col"),
            isForm = el.closest(".select-oil-result").length > 0;



        if (isForm) {
            $('[name="fullMatchBrand"]').val('').trigger("change");
            $(".select-oil-result").html('').hide();
            return false;
        }

        if (stepContent.hasClass("loading")) return false;

        if (col.length > 0) {
            var stepContent = col.closest(".step-item"),
                step = stepContent.data("step"),
                newStep = step - 1;
            stepContent.remove();
            $('[data-step="' + newStep + '"]').show();
            changeStep(newStep);
        } else {
            el.prop("disabled", true).parent()[id ? "addClass" : "removeClass"]("selected loading").siblings().removeClass("selected");
            Services.getFullMatchModelList(el, id);
            //$('[data-step="1"]').find(".next-step-container button").prop("disabled", (id ? false : true));
            //$('[data-step="1"]').find('[name="fullMatchBrand"]').val(id ? id : "");
        }

    });

    $(".step-container").on("click", ".fullmatch-model-item > div > button", function (e) {
        e.preventDefault();
        var el = $(this),
            id = el.data("modelid"),
            parent = el.closest(".fullmatch-model-item"),
            stepContent = el.closest(".step-item"),
            list = parent.find(".fullmatch-type-list"),
            isOpen = parent.hasClass("open");

        if (stepContent.hasClass("loading")) return false;

        if (isOpen) {
            $html.removeClass("footer-zindex-0");
            parent.removeClass("open");
        } else {
            $html.addClass("footer-zindex-0");
            if (list.length > 0) {
                parent.addClass("open").siblings().removeClass("open");
            } else {
                el.prop("disabled", true);
                parent.addClass("loading");
                Services.getFullMatchTypeList(el, id);
            }
        }
    });

    $(".step-container").on("click", ".fullmatch-type-list li", function (e) {
        e.preventDefault();
        var el = $(this),
            id = el.data("typeid"),
            stepContent = el.closest(".step-item"),
            parent = el.closest(".fullmatch-model-item"),
            placeholder = parent.find("button").data("placeholder");

        if (stepContent.hasClass("loading")) return false;


        $(".fullmatch-model-item u span").html(placeholder);
        $(".fullmatch-model-item li").removeClass("selected");
        el.addClass("selected");
        parent.removeClass("open").addClass("selected loading").siblings().removeClass("selected").closest(".step-item").addClass("loading");
        parent.find("u span").html(el.text());
        Services.getFullMatchRecommendationList(el, id);
        //$('[name="fullMatchModel"]').val(id);
    });

    //$(".step-container").on("click", ".next-step-container button", function (e) {
    //    e.preventDefault();
    //    var el = $(this),
    //        parent = el.closest(".step-item"),
    //        step = parent.data("step"),
    //        val = parent.find('input[type="hidden"]').val(),
    //        method = '';

    //    if (el.is("disabled")) return false;

    //    el.addClass("loading").closest(".step-item").addClass("loading");

    //    el.prop("disabled", true);
    //    switch (step) {
    //        case 1:
    //            method = 'getFullMatchModelList';
    //            break;
    //        case 2:
    //            method = 'getFullMatchRecommendationList';
    //            break;
    //    }

    //    Services[method](el, val);
    //});

    $("body").on("click", ".acc-item h5", function (e) {
        e.preventDefault();
        var el = $(this),
            parent = el.parent();


        parent.addClass("open").find("div").slideDown().parent().siblings().removeClass("open").find("div").slideUp();

    });

    $("body").on("click", ".fullmatch-detail-btn button", function (e) {
        e.preventDefault();
        var el = $(this),
            action = el.data("action");

        switch (action) {
            case "collapse":
                $(".acc-item h5").first().trigger("click");
                break;
            case "expand":
                $(".acc-item").addClass("open").find("div").slideDown();
                break;
            case "print":
                $.print("#fullmatch-print-area", {
                    stylesheet: "/Assets/inc/style.css"
                });
                break;

        }
    });

    $(".banner-media").on("click", ".circle-icon-btn button", function (e) {
        e.preventDefault();
        var el = $(this),
            video = el.closest(".banner-media").find("video");

        //console.log(video);

        video[0].play();
        el.hide();
    });

    $(".fullmatch-search-container").on("click", ".submit-btn", function (e) {
        e.preventDefault();
        var el = $(this);

        if (el.parent().hasClass("selected")) {
            el.prev().val('');
            el.parent().removeClass("selected");
            $('[data-step="3"]').remove();
            $('[data-step="1"]').show();
            changeStep(1);
        }
    });

    setFullMatchStep();

    $("[data-share]").on("click", function (e) {
        var $el = $(this),
            shareUrl = window.location.href,
		    shareLink = '',
		    share;

        switch ($el.data("share")) {
            case 'fb': shareLink = "//www.facebook.com/sharer/sharer.php?u=" + shareUrl; share = "Facebook"; break;
            case 'tw': shareLink = "//twitter.com/share?url=1&amp;text=" + encodeURIComponent($('meta[name="description"]').attr("content") + " " + shareUrl); share = "Twitter"; break;
            case 'in': shareLink = "//www.linkedin.com/shareArticle?mini=true&url=" + shareUrl + "&title=&summary=" + encodeURIComponent($('meta[name="description"]').attr("content")); share = "LinkedIn"; break;
            case 'gp': shareLink = "//plus.google.com/share?url=" + shareUrl; share = "Google"; break;
        }
        if (typeof ga != "undefined") ga('send', 'social', share, 'share', shareUrl);
        window.open(shareLink, "", "width=600, height=300");
    });
});

function getCookie() {
    var cookie = [];
    if (typeof $.cookie("opetShowAll") != "undefined") {
        cookie = ($.cookie("opetShowAll")).split("|");
    }
    return cookie;
}

function setCookie() {
    var cookie = $.cookie("opetShowAll") || "",
        expireDate = new Date(),
        val = window.location.href,
        newVal = (cookie == "" ? "" : cookie + "|") + val;
    expireDate.setTime(expireDate.getTime() + (60 * 60 * 1000));
    $.cookie("opetShowAll", newVal, { path: "/", expires: expireDate });
}

function checkCookie() {
    var cookieArr = getCookie(),
        href = window.location.href;

    return $.inArray(href, cookieArr);
}

function featuredProductsChange(e) {
    var el = $(e.currentTarget),
        index = el.parent().index();

    $(".featured-products-container > div:eq(" + index + ")").addClass("active").siblings().removeClass("active");
}

function fullcheckCarouselChange(parent, index) {
    var videoId = parent.find("button").data("fullcheck-video"),
        videoContent = $("#fullcheck-slider").parent().prev();

    $("#fullcheck-slider > div:eq(" + index + ")").css("position", "relative").fadeIn().siblings().hide().css("position", "absolute");
    parent.addClass("selected").siblings().removeClass("selected");


    videoContent.find(".box-video-play-btn").css("background-image", "url('https://img.youtube.com/vi/" + videoId + "/maxresdefault.jpg')").show();
    videoContent.find(".box-video-player").replaceWith('<div class="box-video-player" data-youtube="' + videoId + '"></div>');
    onYouTubeIframe();
}

function onResize() {
    var fs = $("#fullcheck-slider");
    if (fs.length > 0) {
        if (fs.parents(".detail").length == 0) {
            var h = 0;
            $("#fullcheck-slider > div").each(function () {
                var el = $(this),
                    elHeight = el.outerHeight();

                if (elHeight > h) {
                    h = elHeight;
                }

            });

            $("#fullcheck-slider").css("height", h);

        }
    }

    //fixedNextStepBtn();

    setListBorder();

    setTimeout(stepSwiperChange, 101);

    scaleCaptcha();
}

function onScroll() {
    ws = $(window).scrollTop();
    //fixedNextStepBtn();
}

//function fixedNextStepBtn() {
//    var nsc = $(".next-step-container");
//    if (nsc.length > 0) {
//        $.each(nsc, function () {
//            var el = $(this),
//                parent = el.parent(),
//                parentHeight = parent.offset().top + parent.height() - 100,
//                elTop = el.offset().top,
//                isFixed = ws > elTop;

//            $html[isFixed ? "addClass" : "removeClass"]("fixed-next-step-btn");
//            el.find("> div").css({ "width": (isFixed ? parent.width() : "auto"), "margin-left": (isFixed ? parent.width() * -.5 : "auto") });
//            el.css({ "display": (ws > parentHeight ? "none" : "block") });

//        });

//    }
//}

function setBoxMenuSelect(el) {

    var $el = $(el),
        content = $el,
        menu = $el.find("> nav"),
        append = "appendUI",
        html =
        '<div class="box-menu-select">' +
            '<select class="select-item" data-options="{\'icon\': true, \'onchange\': \'boxMenuChange\', \'placeholder\': \'' + calture.select + '\'}"><option value="-1"></option>';


    menu.find("> ul li").each(function (i) {
        var li = $(this);
        html += '<option value="' + i + '"' + (li.hasClass("selected") ? " selected" : "") + '>' + li.find("> * > span").text() + '</option>';
    });

    html += '</select></div>';


    if ($el.hasClass("box-header-menu")) {

        content = $el.parents(".box-header");
        append = "afterUI";
        html = '<div class="box-menu">' + html + '</div>';

    }

    content[append]($(html));
}

function setBoxDotMenuSelect(el) {

    var $el = $(el),
        content = $el,
        menu = $el.find("> [data-swiper]"),
        html = '<select class="select-item" data-options="{ \'onchange\': \'boxDotMenuChange\', \'placeholder\': \'' + calture.select + '\'}"><option value="-1"></option>';

    menu.find(".swiper-slide").each(function (i) {
        var item = $(this);
        html += '<option value="' + i + '"' + (item.hasClass("selected") ? " selected" : "") + '>' + item.find("a").text() + '</option>';
    });

    html += '</select>';

    content.appendUI($(html));
}

function boxMenuChange(el) {
    var $el = $(el),
        val = $el.val(),
        content = $el.parents(".with-box-header-menu").length > 0 ? $el.parents(".with-box-header-menu").find(".box-header-menu") : $el.parents(".box-menu");

    var item = content.find("> nav ul li:eq(" + val + ") > *");

    if (val == "-1") return false;

    if (item.is("button")) {
        item.trigger("click");
    } else {
        item[0].click();
    }

}

function boxDotMenuChange(el) {
    var $el = $(el),
        val = $el.val(),
        content = $el.parents(".box-dot-menu").find("[data-swiper]");

    var item = content.find("> .swiper-container .swiper-slide:eq(" + val + ") > *");


    item[0].click();


}

function setBoxFilterSelect(el) {

    var $el = $(el),
        filter = $el.find("> nav"),
        html = '<select class="select-item" data-options="{\'class\': \'filter\', \'onchange\': \'boxFilterChange\', \'placeholder\': \'' + calture.product_filter_options + '\'}"><option value="-1">' + calture.reset + '</option>';

    filter.find("> ul li").each(function (i) {
        var li = $(this);
        html += '<option value="' + i + '"' + (li.hasClass("selected") ? " selected" : "") + '>' + li.find("> * > span").text() + '</option>';
    });

    html += '</select>';

    $el.appendUI($(html));
}

function boxFilterChange(el) {
    var $el = $(el),
        val = $el.val(),
        content = $el.parents(".box-filter");
    if (val == "-1") {
        content.find("> nav ul li.selected button").last().trigger("click");
    } else {
        content.find("> nav ul li:eq(" + val + ") button").first().trigger("click");
    }
}

function setMobileMenu() {
    var html = '';
    $("#footer-menu > div").each(function () {
        var el = $(this);

        html += '<li><a href="#" title="' + el.find("h4").text() + '">' + el.find("h4").text() + '<i class="fa fa-arr-right"></i></a><ul>';

        el.find("nav ul li").each(function () {
            var li = $(this);
            html += li[0].outerHTML;
        });

        html += '</ul></li>';

    });

    $("#mobile-header-menu").find("> ul").html(html);
    $("#mobile-term-menu").find("> ul").html($(".footer-term-menu ul")[0].innerHTML);
    $("#mobile-header-social").html($("#footer-social")[0].innerHTML);
}


function YTReady() {

    YTInterval = setInterval(function () {
        if (YT.loaded == 1) {
            clearInterval(YTInterval);
            onYouTubeIframe();
        }
    }, 100);
}

function onYouTubeIframe() {
    $("[data-youtube]").each(function (i) {
        var el = $(this),
            id = "video-" + i,
            youtubeId = el.data("youtube");

        if (el.hasClass("created")) return;

        el.addClass("created");

        el.attr("id", id).attr("data-id", i);

        el.prev().find("> button").show();

        player[i] = new YT.Player(id, {
            videoId: youtubeId,
            playerVars: {
                autoplay: 0,
                autohide: 1,
                showinfo: 0,
                modestbranding: 0,
                rel: 0,
                enablejsapi: 1,
                controls: 1
            },
            events: {
                "onStateChange": function (e) {
                    if (e.data === 0) {
                        setTimeout(function () {
                            $("#" + id).prev().show();
                        }, 500);
                    }
                }
            }
        });

    });
}

function docBrandChange(e) {
  
    var el = $(e),
        val = el.val();
    if (val == "") {
        $('[name="docCategory"], [name="docSubCategory"]').prop("disabled", true).html('<option></option>').trigger("change", true);
    } else {
        Services.getCategoryList(val);
    }
}

function docCategoryChange(e) {
    var el = $(e),
        val = el.val();

    if (val == "") {
        $('[name="docSubCategory"]').prop("disabled", true).html('');
    } else {
        Services.getSubCategoryList($('[name="docBrand"]').val(), val);
    }
}


function parseData(data) {
    var data = data || "{}";
    return JSON.parse(data.replace(/\'/g, '"'));
}

function stringifyData(data) {
    return JSON.stringify(data).replace(/\"/g, "'");
}

function phoneFormatter(no) {
    return no.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '0 ($1) $2 $3 $4');
}

function executeFunctionByName(functionName, context /*, args */) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
}

function pagination(data) {

    var pagerHtml = '<div class="flex">',
        pagerSelect = '<select class="select-item">',
        pageCount = data.pageCount,
        content = data.content.next().data("service", data.service),
        page = Number(data.currentPage) + 1;

    content.html('');

    if (pageCount > 1) {
        for (var i = 0; i < pageCount; i++) {
            pagerSelect += '<option value="' + (i + 1) + '"' + (i + 1 == page ? "selected" : "") + '>' + (i + 1) + '</option>';
        }
        pagerSelect += '</select>';

        pagerHtml += '<' + (page != 1 ? 'button type="button"' : 'span') + ' class="arr left"><i class="fa fa-arr-left"></i></' + (page != 1 ? 'button' : 'span') + '>';
        pagerHtml += pagerSelect;
        if (pageCount < 7) {
            for (var i = 1; i <= pageCount; i++) {
                pagerHtml += '<button type="button" ' + (i == page ? 'class="selected"' : "") + '>' + i + '</button>';
            }
        } else {
            if (page < 4) {
                for (var i = 1; i < 5; i++) {
                    pagerHtml += '<button type="button" ' + (i == page ? 'class="selected"' : "") + '>' + i + '</button>';
                }
                pagerHtml += '<span>...</span>';
                pagerHtml += '<button type="button">' + pageCount + '</button>';
            } else if (pageCount - page < 3) {
                pagerHtml += '<button type="button">' + 1 + '</button>';
                pagerHtml += '<span>...</span>';
                for (var i = pageCount - 3; i <= pageCount; i++) {
                    pagerHtml += '<button type="button" ' + (i == page ? 'class="selected"' : "") + '>' + i + '</button>';
                }
            } else {
                pagerHtml += '<button type="button">' + 1 + '</button>' +
                             '<span>...</span>' +
                             '<button type="button">' + (page - 1) + "</button>" +
                             '<button type="button" class="selected">' + page + '</button>' +
                             '<button type="button">' + (page + 1) + '</button>' +
                             '<span>...</span>' +
                             '<button type="button">' + pageCount + '</button>';
            }
        }
        pagerHtml += '<' + (page != pageCount ? 'button type="button"' : 'span') + ' class="arr right"><i class="fa fa-arr-right"></i></' + (page != pageCount ? 'button' : 'span') + '>';
        pagerHtml += '</div>';

        content.appendUI($(pagerHtml));

        content.one("click", "button", function (e) {
            e.preventDefault();
            var el = $(this),
                service = content.data("service"),
                selected = content.find(".selected"),
                pageNumber = el.hasClass("arr") ? ((Number(selected.text()) - 1) + (el.hasClass("left") ? -1 : 1)) : Number(el.text()) - 1;

            if (!el.hasClass("selected")) { executeFunctionByName(service, window, pageNumber); }
        });

        content.one("change", ".select-item", function (e) {
            var el = $(this),
                service = content.data("service"),
                pageNumber = Number(el.val()) - 1;

            executeFunctionByName(service, window, pageNumber);
        });
    }

}

function setListBorder() {
    var listLength = $(".list-item.document").length;
    if (listLength > 0) {
        $(".list-item-border").remove();
        $(".list-item.document").each(function (i) {
            var el = $(this);
            if (wiw >= 1200) {
                if ((i + 1) % 4 == 0 && i != 0 && i + 1 != listLength) {
                    el.after('<div class="list-item-border" />');
                }
            } else if (wiw >= 992) {
                if ((i + 1) % 3 == 0 && i != 0 && i + 1 != listLength) {
                    el.after('<div class="list-item-border" />');
                }
            } else if (wiw >= 576) {
                if ((i + 1) % 2 == 0 && i != 0 && i + 1 != listLength) {
                    el.after('<div class="list-item-border" />');
                }
            } else {
                if (i + 1 != listLength) {
                    el.after('<div class="list-item-border" />');
                }
            }
        });
    }

}

function fullMatchFormMenuChange(e) {
 
    var el = $(e.currentTarget),
        id = el.data("id");
    Services.getFullMatchMakeList($('[name="fullMatchBrand"]')[0], id);
}

function fullMatchStepMenuChange(e) {
    var el = $(e.currentTarget),
        id = el.data("id");
    Services.getFullMatchMakeList(el[0], id);
}

function setFullMatchStep() {
    $(".fullmatch-step").each(function () {
        var el = $(this),
            button = el.find(".box-menu .selected button"),
            id = button.data("id");
        Services.getFullMatchMakeList(button[0], id);
    });
}

function changeStep(step) {
    var selectedItem = $(".step-menu-swiper").find(".swiper-slide:eq(" + (step - 1) + ")").removeClass("active").addClass("selected"),
        swiperID = $(".step-menu-swiper").find(".swiper-container").attr("id"),
        swiper = UI.getSwiper(swiperID),
        prevItem = selectedItem.prev(),
        nextItem = selectedItem.next();

    //$html.removeClass("fixed-next-step-btn");
    //$(".next-step-container > div").removeAttr("style");
    $("html, body").animate({ scrollTop: selectedItem.closest(".box-container").offset().top });

    swiper.slideTo((step - 1), 0);

    if (prevItem.length > 0) {
        selectedItem.prevAll().removeClass("selected").addClass("active");
    }

    if (nextItem.length > 0) {
        selectedItem.nextAll().removeClass("selected active");
    }
}

function stepSwiperChange() {
    if ($(".step-menu-swiper").length > 0) {
        var selectedItem = $(".step-menu-swiper").find(".swiper-slide.selected").index(),
            swiperID = $(".step-menu-swiper").find(".swiper-container").attr("id"),
            swiper = UI.getSwiper(swiperID);

        swiper.slideTo(selectedItem, 0);
    }
}

function imgError(el, src) {
    return el.src = "/Assets/img/" + src + ".png";
}

function iOSVersion() {
    if (md.os() == "iOS") {
        if (md.version("iOS") < 10) {
            return 1;
        }
    }
    return 0;
}


function scaleCaptcha() {
    var captcha = $("[data-recaptcha]"),
        reCaptchaWidth = 304;
    if (captcha.length > 0) {
        $.each(captcha, function () {
            var el = $(this),
                containerWidth = el.width(),
                captchaScale = 1;
            if (reCaptchaWidth > containerWidth) {
                captchaScale = containerWidth / reCaptchaWidth;

            }

            el.find("> div").css({ 'transform': 'scale(' + captchaScale + ')' });
        });
    }
}


//Callback
function setSelectBox(result, obj, isEmptyOption) {
    var data = result.data;

    if (data.length > 0) {
        var html = '<option></option>';
        $.each(data, function (i) {
            if (this != "") {
                var label = this,
                    val = this,
                    itemData = {};

                if (typeof obj.val != "undefined" && typeof obj.label != "undefined") {
                    label = '';
                    $.each(obj.label, function (j) {

                        if (data[i][obj.label[j]] != "") {
                            if (j > 0) label += " | ";
                            label += data[i][obj.label[j]];
                        }
                    });

                    val = data[i][obj.val];

                    if (typeof obj.data != "undefined") {
                        $.each(obj.data, function (k) {

                            itemData[obj.data[k]] = data[i][obj.data[k]];
                        });
                    }
                }

                html += '<option value="' + val + '"' + (Object.keys(itemData).length > 0 ? ' data-data="' + stringifyData(itemData) + '"' : '') + '>' + label + '</option>';
            }
        });

        $('[name="' + obj.name + '"]').html(html).prop("disabled", false);
    }
    $('[name="' + obj.name + '"]').parent().removeClass("loading");
}