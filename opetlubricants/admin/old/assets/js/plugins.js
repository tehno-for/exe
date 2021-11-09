/* @abbas */
var isMobile = false,
    $html = $("html"),
    wih = window.innerHeight,
    wiw = window.innerWidth,
    md = new MobileDetect(window.navigator.userAgent),
    transformProperty = {
        "WebkitTransform": "-webkit-transform",
        "MozTransform": "-moz-transform",
        "OTransform": "-o-transform",
        "msTransform": "-ms-transform",
        "transform": "transform"
    }[Modernizr.prefixed("transform")],

	transitionEndProperty = {
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'transitionend',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd',
	    'transition': 'transitionend'
	}[Modernizr.prefixed('transition')],

	transitionProperty = {
	    'WebkitTransition': '-webkit-transition',
	    'MozTransition': '-moz-transition',
	    'OTransition': '-o-transition',
	    'msTransition': '-ms-transition',
	    'transition': 'transition'
	}[Modernizr.prefixed('transition')],
    css = { transforms: $html.hasClass("csstransforms"), transitions: $html.hasClass("csstransitions") };

(function (a) {
    if (/android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|meego.+mobile|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
        isMobile = true;
        $html.addClass("mobile-device");
    } else {
        $html.addClass("desktop-device");
    }
})(navigator.userAgent || navigator.vendor || window.opera);

$(window).on("resize", function () {
    wih = window.innerHeight;
    wiw = window.innerWidth;
});


$.fn.formStyle = function () {
    var $this = $(this);

    $this.each(function () {
        var elem = $(this),
            options = parseData(elem.data("options"));

        if (!elem.parent().hasClass("custom-radio") && !elem.parent().hasClass("custom-checkbox") && !elem.parent().hasClass("custom-select")) {
            if (elem.is(":radio")) {
                elem.wrap('<span class="custom-radio' + (typeof options.class != "undefined" ? " " + options.class : "") + '" />');
                if (elem.is(':checked')) {
                    elem.parent().addClass('active');
                }

                elem.closest(".custom-radio").on("click", function () {
                    var elem = $(this);
                    var name = elem.find('input').attr('name');
                    $('input[name="' + name + '"]').prop("checked", false);
                    elem.find('input').prop("checked", true);
                    $('input[name="' + name + '"]').parent(".error").removeClass("error");
                    $('input[name="' + name + '"]').parent().removeClass('active');
                    elem.addClass('active');
                });

            } else if (elem.is(":checkbox")) {
                elem.wrap('<span class="custom-checkbox' + (typeof options.class != "undefined" ? " " + options.class : "") + '" />');
                if (elem.is(':checked')) {
                    elem.parent().addClass('active');
                }

                elem.closest(".custom-checkbox").on("click", function () {

                    var elem = $(this),
                        cb = elem.find('input'),
                        onchange = cb.data("onchange");

                    if (elem.is('.active')) {
                        cb.prop('checked', false);
                        elem.removeClass('active');
                    } else {
                        cb.prop('checked', true);
                        elem.addClass('active');
                    }
                    if (typeof onchange != "undefined") {
                        window[onchange](cb);
                    }

                });

            } else if (elem.is("select")) {

                elem.wrap('<div class="custom-select' + (typeof options.class != "undefined" ? " " + options.class : "") + '" />');
                if (typeof options.width != "undefined") {
                    elem.parent().css('width', options.width);
                }
                elem.parent().prepend('<span class="t" /><span class="arr fa"></span>');

                elem.each(function () {
                    var elem = $(this),
                        op = parseData(elem.data("options"));

                    _setSelect(elem, op);

                    if (elem.find("select").is('.display-none')) {
                        elem.hide();
                    }

                    if (typeof op.init != "undefined") {
                        executeFunctionByName(op.init, window, elem);
                    }

                    elem.closest(".custom-select").find("select").on('change', function (e, d) {
                        var elem = $(this),
                            onchange = op.onchange;


                        if (typeof d == "undefined") {
                            if (typeof onchange != "undefined") {
                                executeFunctionByName(onchange, window, elem);
                            }
                        }

                        _setSelect(elem, op);


                    }).on("focusin", function () {
                        var elem = $(this);
                        elem.parent().addClass("focus");
                    }).on("focusout", function () {
                        var elem = $(this);
                        elem.parent().removeClass("focus");
                    });

                    elem.on("click", function () {

                        if (elem.find("select").is(":disabled")) return;

                        if ($(this).parent().is('.active')) {
                            $(this).parent().removeClass('active');
                        } else {
                            $(this).parent().addClass('active');
                        }
                    }).on('focusout', function () {
                        if (elem.find("select").is(":disabled")) return;
                        $(this).parent().removeClass('active');
                    });
                });


            }
        }


    });

    function _setSelect(el, op) {

        var selectOptions = el.find("option"),
            selectOptionsLenght = selectOptions.length;

        if (selectOptionsLenght == 1 && selectOptions.val() == "") {
            el.prop("disabled", true);
        }

        if (op.icon) {
            var boxMenuSelect = el.closest(".box-menu-select"),
                boxMenu = boxMenuSelect.prev().length > 0 ? boxMenuSelect.prev() : boxMenuSelect.parents(".box-container").find(".box-header-menu");
            
            if (el.val() == "-1") {
                el.parent().find("span.t").addClass("flex").text(op.placeholder);
            } else {
                if (boxMenuSelect.length > 0) {
                    var isBtn = boxMenu.find("li.selected > button").length > 0;
                    el.parent().find("span.t").addClass("flex").html(boxMenu.find("li.selected > *" + (isBtn ? "> span" : "") + "").html());
                }
            }

        } else {
            el.parent().find("span.t").removeClass('placeholder').text(el.find("option:selected").text());

            if (el.val() == "" || el.val() == "-1" || el.val() == null) {
                el.parent().find("span.t").addClass('placeholder').text(op.placeholder);
            }
        }

    }


};

$.fn.formValidation = function (options) {

    var $t = $(this);

    $t.each(function () {
        var defaults = {
            submit: function () { }
        };

        var settings = $.extend({}, defaults, options);

        var $this = $(this);

        formElements($this);

        $this.on("click", ".submit-btn", function (e) {
            e.preventDefault();
            formValidationSubmit();
        });

        function formValidationSubmit() {
            validate($this);
            if ($this.find(".error").length == 0) {
                $this.find(".submit-btn").prop("disabled", true).addClass("loading");
                settings.submit.call($this);
            }
        }

        function inputValidate(el) {
            var b = false,
                data = parseData(el.data("validation")),
                val = el.val();

            for (var key in data) {
                if (!data[key] || key == "options") return;
                switch (key) {
                    case "empty":
                        b = val == "" || val === null || val == "0";
                        break;
                    case "email":
                        b = optional(el) && !$.trim(val).match(/^[_A-Za-z0-9](([\.\-]?[_a-zA-Z0-9\+]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/);
                        break;
                    case "numeric":
                        b = optional(el) && val < 1;
                        break;
                    case "radio":
                        b = typeof $('input[name="' + el.attr("name") + '"]:checked').val() == "undefined";
                        break;
                    case "checkbox":
                        b = !el.is(":checked");
                        break;
                    case "tckn":
                        b = optional(el) && checkIdentityNumber(el) == false;
                        break;
                    case "gsm":
                        b = optional(el) && !val.match(/^5[0-9]{9}$/);
                        break;
                    case "gsmcode":
                        b = optional(el) && !val.match(/^5[0-9]{2}$/);
                        break;
                    case "gsmphone":
                        b = optional(el) && !val.match(/^[0-9]{7}$/);
                        break;
                    case "phone":
                        b = optional(el) && !val.match(/^[0-9]{10}$/);
                        break;
                    case "text":
                        b = optional(el) && !val.match(/\w*[A-Za-z_ðüþýöçÐÜÞÝÖÇ]+/);
                        break;
                    case "namesurname":
                        b = optional(el) && !val.match(/\w*[A-Za-z_ðüþýöçÐÜÞÝÖÇ]+\s{1}\w*[A-Za-z_ðüþýöçÐÜÞÝÖÇ]+/);
                        break;
                    case "date":
                        b = optional(el) && isValidDate(val) == false;
                        break;
                    case "time":
                        b = optional(el) && isValidTime(val) == false;
                        break;
                    case "equalto":
                        var eq = data.equalto;
                        b = optional(t) && t.val() != $("[name=" + eq + "]").val();
                        break;
                    default:
                        break;
                }

                var parent = el.parent();
                if (el.is("select") || el.is(":radio") || el.is(":checkbox")) {
                    parent = parent.parent();
                }

                parent[b ? "addClass" : "removeClass"]("error");

            }
            return !b;
        }

        function optional(el) {
            var data = parseData(el.data("validation")),
                val = el.val();
            if (typeof data.empty == "undefined") {
                b = val != "";
            } else {
                b = true;
            }
            return b;
        }

        function validate(elem) {
            elem.find(".error").removeClass("error");

            var b = true;

            elem.find("[data-validation]:not(:disabled)").each(function () {
                var el = $(this);
                var tb = inputValidate(el);

                if (b) b = tb;

            });

            return b;

        }

        function formElements(elem) {
            $("body").on("blur", ".error [data-validation]", function () {
                var el = $(this);
                setTimeout(function () { inputValidate(el); }, 150);
            }).on("keyup", "input[data-validation]", function (e) {
                var t = $(this);
                e.preventDefault();
                e = e || window.e;
                if (e.keyCode == 13) {
                    $this.find(".submit-btn").trigger("click");
                }
            });
        }

        function parseData(data) {
            var data = data || "{}";
            return JSON.parse(data.replace(/\'/g, '"'));
        }

        function checkIdentityNumber(identityNumber) {
            if (identityNumber == "00000000000")
                return false;
            else {

                var base = Math.floor(parseInt(identityNumber) / 100);
                var digit1 = parseInt(identityNumber.substring(0, 1));
                var digit2 = parseInt(identityNumber.substring(1, 2));
                var digit3 = parseInt(identityNumber.substring(2, 3));
                var digit4 = parseInt(identityNumber.substring(3, 4));
                var digit5 = parseInt(identityNumber.substring(4, 5));
                var digit6 = parseInt(identityNumber.substring(5, 6));
                var digit7 = parseInt(identityNumber.substring(6, 7));
                var digit8 = parseInt(identityNumber.substring(7, 8));
                var digit9 = parseInt(identityNumber.substring(8, 9));
                var oddSum = digit9 + digit7 + digit5 + digit3 + digit1;
                var evenSum = digit8 + digit6 + digit4 + digit2;
                var total = oddSum * 3 + evenSum;
                var check1 = (10 - (total % 10)) % 10;

                oddSum = check1 + digit8 + digit6 + digit4 + digit2;
                evenSum = digit9 + digit7 + digit5 + digit3 + digit1;
                total = oddSum * 3 + evenSum;
                check2 = (10 - (total % 10)) % 10;

                base = base * 100 + check1 * 10 + check2;

                return (base == identityNumber);
            }
        }

        function isValidDate(dateString) {
            if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
                return false;


            var parts = dateString.split("/");
            var day = parseInt(parts[0], 10);
            var month = parseInt(parts[1], 10);
            var year = parseInt(parts[2], 10);

            if (year < 1000 || year > 3000 || month == 0 || month > 12)
                return false;

            var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
                monthLength[1] = 29;

            return day > 0 && day <= monthLength[month - 1] && year >= 1900;
        }

        function isValidTime(timeString) {

            if (!/^\d{1,2}:\d{1,2}$/.test(timeString))
                return false;

            var parts = timeString.split(":");
            var hour = parseInt(parts[0], 10);
            var min = parseInt(parts[1], 10);

            return parts.length === 2 && hour >= 0 && hour <= 23 && min >= 0 && min <= 59;



        }
    });

};

function createOverlay(data) {

    var t = this;

    t.html = data.html;

    if (data.media) {
        switch (data.media.type) {
            case "image":
                t.html = '<img id="overlay-image" src="' + data.media.src + '" />';
                break;
            case "videoIframe":
                t.html = '<div class="video-container"><div class="video-content"><iframe class="video-player" src="https://www.youtube.com/embed/' + data.media.src + '?rel=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div></div>';
                break;
            case "iframe":
                t.html = '<iframe src="' + data.media.src + '#view=Fit" class="overlay-iframe" frameborder="0" allowfullscreen></iframe>';
                break;
        }
    }

    if (data.type == "message") {
        t.html += '<div class="overlay-btn-content"><button type="button" id="no-btn" class="alert-btn btn border link"><b>KAPAT</b></button></div>';
    }

    var overlayHtml =
        '<div class="overlay-wrapper">' +
            '<div class="overlay-container">' +
                '<div>' +
                    (typeof data.head != "undefined" ? '<div class="overlay-head"><h3 class="opet-reg">' + data.head + '</h3></div>' : '') +
                    '<div class="overlay-content">' +
                        '<div class="overlay-stage">' +
                         t.html +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';

    this.overlay = $('<div ' + (typeof data.id != "undefined" ? 'id="' + data.id + '"' : '') + ' class="overlay inc ' + (typeof data.oClass != "undefined" ? data.oClass : "") + '" ' + (typeof data.type != "undefined" ? 'data-type="' + data.type + '"' : '') + ' ' + (typeof data.width != "undefined" ? 'data-width="' + data.width + '"' : '') + ' tabindex="-1" />').appendTo("body").appendUI($(overlayHtml));
    var overlayHeight = this.overlay.outerHeight();



    if (!$("#overlay-bg").is(":visible")) {
        this.overlayBg = $('<div id="overlay-bg" />').appendTo("body");
    } else {
        this.overlayBg = $("#overlay-bg");
    }

    if (typeof data.loading != "undefined" && data.loading) {
        this.overlayBg.addClass("loading");
    }

    if (!data.hideClose) {
        this.closeBtn = $('<button type="button" class="overlay-close-btn"><i class="fa fa-close"></i></button>').appendTo(this.overlay.find('.overlay-container' + (typeof data.type != "undefined" && data.type == "media-image" ? '' : ' > div')));
        this.closeBtn.on("click", function (e, d) {
            e.preventDefault();
            t.closeOverlay(d);
        });
    }

    if (typeof data.overlayBack == "undefined") {
        this.overlayBg.addClass("open");
    }

    this.overlayResize = function () {

        var content = t.overlay.find(".overlay-content"),
            container = t.overlay.find(".overlay-container"),
            containerDiv = container.find("> div"),
            totalPadding = parseInt((containerDiv.css("padding-top")).replace("px", "")) + parseInt((containerDiv.css("padding-bottom")).replace("px", "")) + (container.find(".overlay-head").height() || 0);

        if (!data.media) {
            content.css({ "height": "auto" });
        }
        containerDiv.removeAttr("style");
        content.find("#overlay-image").removeAttr("style");

        var contentHeight = containerDiv.outerHeight(),
            containerHeight = container.outerHeight();

        if (contentHeight > wih - 20) {
            if (typeof data.media != "undefined") {
                if (data.media.type == "video" || data.media.type == "videoIframe") {
                    var w = (wih - totalPadding) * (1920 / 1080);
                    containerDiv.css({ "width": w });
                }
                if (data.media.type == "image") {
                    content.find("#overlay-image").css("max-height", wih - 40);
                }
            } else {
                content.css({ "height": wih - totalPadding - 40 });
            }
        }
    }

    this.hideOverlay = function () {
        t.overlay.removeClass("open");
        t.status = "hide";
    }

    this.showOverlay = function () {

        t.overlay.addClass("open");
        t.status = "show";
    }


    this.isOverlayBgHide = true;
    if (typeof data.isForm != "undefined" && data.isForm) {
        this.isOverlayBgHide = false;
    }
    this.hideOverlayBg = function (e) {
        t.isOverlayBgHide = e;
    }

    this.loadItems = [];
    var loadIndex = 0,
        tmpLoadItm = [];
    this.overlayImgLoad = function () {
        t.overlay.find("img").each(function () {
            var el = $(this);
            t.loadItems.push(el.attr("src"));
        });
        t.loadData();
    }

    this.loadData = function () {

        var i = t.loadItems[loadIndex];

        tmpLoadItm[loadIndex] = new Image();
        tmpLoadItm[loadIndex].src = i;
        tmpLoadItm[loadIndex].onload = t.loadComplete;
        tmpLoadItm[loadIndex].oncomplete = function () { this.onload() };
        tmpLoadItm[loadIndex].onerror = function () { console.log("IMG ERROR!! " + i.src); t.loadComplete(); };

    }

    this.loadComplete = function () {
        loadIndex++;
        if (t.loadItems.length > loadIndex) {
            t.loadData();
        } else {
            $("#overlay-bg").removeClass("loading");
            t.overlayResize();
            t.showOverlay();
            delete tmpLoadItm;
        }
    }

    if (!data.loading) {
        this.overlayResize();
        this.showOverlay();
    } else {
        t.overlayImgLoad();
    }
    t.status = "show";

    if (typeof data.fnc != "undefined") {
        if ($.isFunction(data.fnc)) {
            data.fnc();
        }
    }

    $(window).on("resize", function () {
        t.overlayResize();
    });

    this.closeOverlay = function () {
        t.overlay.removeClass("open");
        if (typeof data.closeFnc != "undefined") {
            if ($.isFunction(data.closeFnc)) {
                data.closeFnc();
            }
        }
        if (t.isOverlayBgHide) {
            t.overlayBg.removeClass("open");
        }

        t.overlay[0].addEventListener(transitionEndProperty, function (e) {

            t.status = "remove";
            t.overlay.remove();
            if (t.isOverlayBgHide) {
                if (!$("#overlay-bg").hasClass("open")) {
                    t.overlayBg.remove();
                }
            }
        }, true);

        if (t.status == "hide") {
            t.overlay.remove();
        }

    }

    this.overlay.on("click", function (e) {
        if (($(e.target).hasClass("overlay-container") || ($(e.target).hasClass("overlay-stage") && data.type == "media")) && !data.hideClose && !$("#overlay-bg").hasClass("loading")) {
            t.closeOverlay();
        }
    });

    this.overlay.on("click", ".alert-btn", function (e, d) {
        e.preventDefault();
        var btn = $(this);
        if (btn.attr("id") == "ok-btn") {
            if ($.isFunction(data.confirmFnc)) {
                if (typeof data.confirmData == "undefined") {
                    data.confirmFnc();
                } else {
                    data.confirmFnc(data.confirmData);
                }
            }
        }
        t.closeOverlay(d);
    });


    return t;

};

