var Services = {};

$(function () {
    var s = {},
        _ = {},
        stationListPageSize = 5;


    s.formSubmit = function (fnc, e) {
        var $el = $(e),
            id = $el.attr("id"),
            formData = $("#" + id).serializeJSON(),
            data = parseData($el.data("form")),
            event = data.event || fnc,
            eventData = data.eventData || "";


        if (typeof data.eventData != "undefined") {
            eventData = "";
            for (ed in data.eventData) {
                eventData += (ed > 0 ? " - " : "") + $('[name="' + data.eventData[ed] + '"]').find("option:selected").text();
            }
        }
        //console.log(event, eventData);
        $el.find(".submit-btn").prop("disabled", true);
        if (typeof ga != "undefined") ga('send', 'event', 'Form', 'submit', event, eventData);
        _[fnc](formData, $el);
    };


    s.getCityList = function (el) {
        var obj = {
            method: "getCityList",
            city: $(el).val()
        }
        $('[name="stationCity"]').parent().addClass("loading");
        _callService(obj, setSelectBox, { name: "stationCity" });
    }

    s.getDistrictList = function (el) {
        var obj = {
            method: "getDistrictList",
            city: $(el).val()
        }
        $('[name="stationDistrict"]').prop("disabled", true).val(0).trigger("change", true).parent().addClass("loading");
        _callService(obj, setSelectBox, { name: "stationDistrict" });
    }

    s.getStationList = function (pageNumber) {

        var formData = {
            stationCity: $('[name="stationCity"]').val(),
            stationDistrict: $('[name="stationDistrict"]').val(),
            pageNumber: Number(pageNumber)
        }

        _.getStationList(formData);
    }

    s.getCategoryList = function (brandId) {
        var formData = {
            brandid: brandId
        }
        _.getCategoryList(formData);
    }

    s.getSubCategoryList = function (brandId, categoryId) {
        var formData = {
            brandid: brandId,
            categoryid: categoryId
        }

        _.getSubCategoryList(formData);
    }

    s.getFullMatchMakeList = function (el, categoryId) {
        var $el = $(el),
            isSelect = $el.is("select"),
            formData = {
                categoryid: categoryId || $(".fullmatch-form").find(".box-menu .selected button").data("id")
            };
        if (isSelect) {
            $el.prop("disabled", true).html('').val(0).trigger("change", true).parent().addClass("loading");
            $('[name="fullMatchModel"], [name="fullMatchType"]').prop("disabled", true).html('').val(0).trigger("change", true);
        } else {
            $(".step-container").addClass("loading").find(".step-item").remove();
            $(".step-container").prev().find(".swiper-slide").removeClass("selected active").first().addClass("selected");
        }
        _.getFullMatchMakeList(formData, $el);
    }

    s.getFullMatchModelList = function (el, makeId) {
        var $el = $(el),
            isSelect = $el.is("select"),
            formData = {
                makeid: makeId || $el.val()
            };

        //console.log(makeId);

        if (isSelect) {
            $('[name="fullMatchModel"]').prop("disabled", true).html('').val(0).trigger("change", true).parent().addClass("loading");
            $('[name="fullMatchType"]').prop("disabled", true).html('').val(0).trigger("change", true);
            if ($el.val() == "") {
                $('[data-step="1"]').removeClass("loading");
                return false;
            }
        }
        _.getFullMatchModelList(formData, $el);
    }

    s.getFullMatchTypeList = function (el, modelId) {
        var $el = $(el),
            isSelect = $el.is("select"),
            formData = {
                modelid: modelId || $el.val()
            };
        if (isSelect) {
            $('[name="fullMatchType"]').prop("disabled", true).html('<option></option>').val(0).trigger("change", true).parent().addClass("loading");
            if ($el.val() == "") {
                $('[data-step="2"]').removeClass("loading");
                return false;
            }
        }
        _.getFullMatchTypeList(formData, $el);
    }

    s.getFullMatchRecommendationList = function (el, typeId) {
        var formData = {
            fullMatchType: typeId
        };

        _.getFullMatchRecommendationList(formData, el);
    }


    s.getFullMatchSearch = function (el, val, response) {
        var formData = {
            fullmatchSearch: val
        };

        _.getFullMatchSearch(formData, el, response);
    }

    _.getFullMatchSearch = function (formData, el, response) {
        var obj = {
            method: 'getFullMatchSearch',
            categoryid: $(".fullmatch-step").find(".selected button").data("id"),
            keyword: formData.fullmatchSearch
        };
        _callService(obj, function (data) {
            el.parent().removeClass("loading");
            response($.map(data.data, function (item) {
                return {
                    label: item.name,
                    value: item.name,
                    id: item.typeId
                }
            }));
        }, null, el, function () {
            el.parent().removeClass("loading");
        });
    }

    _.getFullMatchMakeList = function (formData, el) {
        var isSelect = el.is("select"),
            obj = {
                method: 'getFullMatchMakeList',
                categoryid: formData.categoryid
            }

        _callService(obj, function (data) {
            if (isSelect) {
                el.closest(".box-content").find(".select-oil-result").html('').hide();
                setSelectBox(data, { name: "fullMatchBrand", label: ["name"], val: "makeId", data: ["makeId", "name", "imagePath"] });
            } else {
                s.brandPage = [];
                if (data.data.length > 24) {
                    var page = [];
                    $.each(data.data, function (i) {
                        if (i < 24) {
                            page.push(this);
                        } else {
                            s.brandPage.push(this);
                        }
                    });
                    data.data = page;
                }

                var html = $("#fullMatchStepBrandTemp").tmpl(data)[0].outerHTML;
                UI.loadImage($(html), function () {
                    el.removeClass("loading").closest(".step-item").removeClass("loading");
                    el.closest(".box-container").find(".step-container").removeClass("loading").append(html);
                });

            }
        });
    }


    _.getFullMatchModelList = function (formData, el) {
        var isSelect = el.is("select"),
            obj = {
                method: 'getFullMatchModelList',
                makeid: formData.makeid
            }

        _callService(obj, function (data) {
            if (isSelect) {
                el.closest(".box-content").find(".select-oil-result").html('').hide();
                setSelectBox(data, { name: "fullMatchModel", label: ["name", "code", "year"], val: "modelId", data: ["modelId", "name", "imagePath", "code", "year"] });
            } else {
                //console.log(data);
                s.modelPage = [];
                if (data.data.length > 12) {
                    var page = [];
                    $.each(data.data, function (i) {
                        if (i < 12) {
                            page.push(this);
                        } else {
                            s.modelPage.push(this);
                        }
                    });
                    data.data = page;
                }

                var selectedItem = el.closest(".step-item").find(".fullmatch-brand-item.selected button");
                data.brand = {};
                data.brand.imagePath = selectedItem.find("img").attr("src");
                data.brand.makeId = selectedItem.data("makeid");
                data.brand.name = selectedItem.find("span").text();
                data.brand.selected = true;
                var html = $("#fullMatchStepModelTemp").tmpl(data)[0].outerHTML;
                UI.loadImage($(html), function () {
                    el.prop("disabled", false);
                    $('[data-step="1"]').hide();
                    changeStep(2);
                    el.parent().removeClass("loading").closest(".step-item").removeClass("loading");
                    el.closest(".box-container").find(".step-container").append(html);
                });
            }
        });
    }

    _.getFullMatchTypeList = function (formData, el) {
        var isSelect = el.is("select"),
            obj = {
                method: 'getFullMatchTypeList',
                modelid: formData.modelid
            }

        _callService(obj, function (data) {
            if (isSelect) {
                el.closest(".box-content").find(".select-oil-result").html('').hide();
                setSelectBox(data, { name: "fullMatchType", label: ["name"], val: "typeId" });
            } else {

                var content = el.parent(),
                    html = $("#fullMatchStepTypeListTemp").tmpl(data)[0].outerHTML;

                el.prop("disabled", false);
                el.removeClass("loading").closest(".step-item").removeClass("loading");
                content.append(html).parent().removeClass("loading").addClass("open").siblings().removeClass("open");
            }
        });
    }

    _.getFullMatchRecommendationList = function (formData, el) {
        obj = {
            method: 'getFullMatchRecommendationList',
            typeid: formData.fullMatchType
        }



        _callService(obj, function (data) {

            var html = '',
                isForm = el.hasClass("form-content"),
                model = {},
                brand = {};

            if (isForm) {
                brand = parseData($('[name="fullMatchBrand"]').find("option:selected").data("data"));
                model = parseData($('[name="fullMatchModel"]').find("option:selected").data("data"));

                brand.selected = true;

                data.model = model;
                data.brand = brand;

                html = $("#fullMatchResultTemp").tmpl(data)[0].innerHTML;
            } else {
                
                var selectedItem = el.closest(".step-item").find(".fullmatch-model-item li.selected").closest(".fullmatch-model-item").find("button"),
                    brandItem = el.closest(".step-item").find(".fullmatch-brand-item.selected button");


                model.name = data.data.name;
                model.imagePath = data.data.imagePath;
                model.code = data.data.code || "";
                model.year = data.data.year;
                data.model = model;

                if (brandItem.length > 0) {
                    brand.imagePath = brandItem.find("img").attr("src");
                    brand.makeId = brandItem.data("makeid");
                    brand.name = brandItem.find("span").text();
                    brand.selected = true;
                    data.brand = brand;
                }

                if (typeof ga != "undefined") ga('send', 'event', 'Form', 'submit', 'Fullmatch', brand.name + ' - ' + model.name + ' - ' + model.code + ' ' + model.year);

                html = $("#fullMatchResultTemp").tmpl(data)[0].outerHTML;
            }

            UI.loadImage($(html), function () {

                el.prop("disabled", false).removeClass("loading");

                if (isForm) {
                    el.closest(".box-content").find(".select-oil-result").html(html).show();

                } else {
                    $('[data-step="1"], [data-step="2"]').hide();
                    changeStep(3);
                    el.closest(".fullmatch-model-item").removeClass("loading").closest(".step-item").removeClass("loading");
                    el.closest(".box-container").find(".step-container").append(html);
                }
            });
        }, null, el);
    }

    _.getCategoryList = function (formData, el) {
        obj = {
            method: 'getCategoryList',
            brandid: formData.brandid
        }

        $('[name="docCategory"]').prop("disabled", true).html('<option></option>').val(0).trigger("change", true).parent().addClass("loading");
        $('[name="docSubCategory"]').prop("disabled", true).html('<option></option>').val(0).trigger("change", true);
        _callService(obj, setSelectBox, { name: "docCategory", label: ["name"], val: "categoryId" });
    }

    _.getSubCategoryList = function (formData, el) {
        obj = {
            method: 'getSubCategoryList',
            brandid: formData.brandid,
            categoryId: formData.categoryid
        }

        $('[name="docSubCategory"]').prop("disabled", true).html('<option></option>').val(0).trigger("change", true).parent().addClass("loading");
        _callService(obj, setSelectBox, { name: "docSubCategory", label: ["name"], val: "categoryId" });
    }

    _.getStationList = function (formData, el) {
        obj = {
            method: 'getStationList',
            city: formData.stationCity,
            district: formData.stationDistrict || "",
            pageNumber: Number(formData.pageNumber || 0),
            pageSize: stationListPageSize
        }

        _callService(obj, setStationList, null, el);
    }

    _.saveContactRequest = function (formData, el) {
        obj = {
            method: 'saveContactRequest',
            namesurname: formData.nameSurname,
            email: formData.email,
            city: formData.city,
            phone: formData.phone,
            message: formData.message,
            captcha: formData.captcha
        }

        _resetCaptcha(el);

        _callService(obj, function (data) {
            _resetForm(el);
            new createOverlay({
                head: calture.form_success_head,
                html: calture.contact_form_success_message,
                type: "message",
                width: "small"
            });
        }, null, el);
    }

    _.saveDealerRequest = function (formData, el) {
        var error = false,
            errorMessage = "",
            contactAddress = $('[name="contactAddress"]').find("option:selected").text();
        if ((formData.contactAddress == "Ev" && formData.homeAddress == "") || (formData.contactAddress == "İş" && formData.businessAddress == "") || (formData.contactAddress == "Ev" && formData.otherAddress == "")) {
            error = true;
            errorMessage += '<p>- ' + contactAddress + ' ' + calture.dealer_form_address_error + '</p>';
        }

        if (formData.phone == "" && formData.officePhone == "" && formData.mobilePhone == "") {
            error = true;
            errorMessage += '<p>- ' + calture.dealer_form_phone_error + '</p>';
        }

        _resetCaptcha(el);

        if (error) {
            new createOverlay({
                head: calture.form_error,
                html: errorMessage,
                type: "message",
                width: "small",
                oClass: "warning"
            });
            el.find(".submit-btn").prop("disabled", false).removeClass("loading");
        } else {
            var obj = {
                method: "saveDealerRequest",
                nameSurname: formData.nameSurname,
                birthplace: formData.birthplace,
                birthday: formData.birthday,
                gender: formData.gender,
                nationality: formData.nationality,
                contactAddress: formData.contactAddress,
                homeAddress: formData.homeAddress,
                businessAddress: formData.businessAddress,
                otherAddress: formData.otherAddress,
                email: formData.email,
                city: formData.city,
                phone: formData.phone,
                officePhone: formData.officePhone,
                mobilePhone: formData.mobilePhone,
                businessLine: formData.businessLine,
                isDealer: formData.isDealer,
                companyName: formData.companyName,
                captcha: formData.captcha
            }

            _callService(obj, function (data) {

                _resetForm(el);

                new createOverlay({
                    head: calture.form_success_head,
                    html: calture.dealer_form_success_message,
                    type: "message",
                    width: "small"
                });
            }, null, el);
        }
    }

    _.searchResult = function (formData, el) {
        var data = parseData(el.data("form"));
        window.location.href = data.searchUrl + "?q=" + formData.headerSearch;
    }

    _.docFilter = function (formData, el) {
      
        var filterQuery = "?brandid=" + formData.docBrand + "&categoryid=" + (formData.docSubCategory || formData.docCategory);
        if (!formData.docBrand) filterQuery = "";
        window.location.href = window.location.pathname + filterQuery;
    }

    _.digitalCatalogueLogin = function (formData, el) {
        obj = {
            method: 'Login',
            username: formData.username,
            password: formData.password,
            captcha: formData.captcha
        }

        _resetCaptcha(el);

        _callService(obj, function (response) {
            //console.log(response);
            _resetForm(el);
            window.location.href = "/Static/digital-catalogue/";
            /*var windowName = "digitalCatalogue";
            var popUp = window.open("/Static/digital-catalogue/", windowName);
            if (popUp == null || typeof (popUp) == 'undefined') {
                alert('Please disable your pop-up blocker and click the "Open" link again.');
            } else {
                popUp.focus();
            }*/
        }, null, el);
    }

    function _callBack(data, callBack, callBackData, el, errorFnc, method) {

        if (el && el instanceof jQuery) {
            el.find(".submit-btn").prop("disabled", false).removeClass("loading");
        }
        if (data.status) {
            callBack(data, callBackData);
            /*if (el && el.find(".submit-btn").length > 0) {
                if (typeof ga != "undefined") ga('send', 'event', 'form', 'success', method);
            }*/
        } else {
            //console.log(errorFnc);
            if (typeof errorFnc != "undefined") {
                errorFnc(data);
            } else {
                /*if (el && el.find(".submit-btn").length > 0) {
                    if (typeof ga != "undefined") ga('send', 'event', 'form', 'fail', method);
                }*/
                new createOverlay({
                    head: calture.form_error,
                    html: data.description,
                    type: "message",
                    width: "small",
                    oClass: "warning"
                });
            }
        }
    }

    function _resetForm(el) {
        el.find('input[type="text"], input[type="password"]').val('');
        el.find('select').val(0).trigger("change");
    }

    function _resetCaptcha(el) {
        var captcha = el.find('[data-captcha]');

        if (captcha.length > 0) {
            var captchaID = captcha.attr("id");
            UI.resetRecaptcha(captchaID);
        }
    }

    function _callService(data, callBack, callBackData, el, errorFnc) {
        data.langCode = langCode;
        $.post("/handler/service.ashx", data, function (response) {
            _callBack(response, callBack, callBackData, el, errorFnc, data.method);
        });
    }

    s.modelPage = [];
    s.brandPage = [];
    Services = s;
});
