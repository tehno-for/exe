var page = {
    variables: {
        data: null
    },
    techSupport: {
        data: null
    },
    init: function () {
        var variables = page.variables;
        var services = page.services;

        services.loadData(function () {
                services.loadHeaderMenu();
            },
            function () {
                services.loadTechSupport();
            });
        page.events.init();

    },
    services: {
        loadData: function (onCompleted, onCompleted2) {
            var variables = page.variables;
            var techSupport = page.techSupport;

            $.get("/techSupport.json", function (response) {
                techSupport.data = response.data;
                if (onCompleted2 !== undefined)
                    onCompleted2();
            });
        },
        loadHeaderMenu: function () {
            var variables = page.variables;

        },
        loadTechSupport: function () {
            var techSupport = page.techSupport;

            $('#techSupportBox').html("");
            $.tmpl($('#template-tech-support'), techSupport.data).appendTo("#techSupportBox");

            $(".pop_in_text").click(function () {
                $('body').addClass('hiddes_S');
                $('#technical_pop_up1').show();
                $('#pop_Up').addClass('open');
                $('#overlay-bg').addClass('open');
                var dataTitle = $(this).text();
                var dataText = $(this).attr("data-val");
                $(".expert-overlay-content").html("<h3 class=\"roboto-medium\">" + dataTitle + "</h3> <p>" + dataText + "</p>");
            });

            techSupport.data.forEach(ts => {
                $(`u[data-svg="${ts.name}"]`).html(ts.svg);
            })
        },
    },
    events: {
        init: function () {
            var variables = page.variables;
            var techSupport = page.techSupport;

            $('body').on("click", "#header-menu > ul > li > a", function () {
                var mainCategoryId = $(this).attr("data-id");

                var mainCategory = $.grep(variables.data, function (element) {
                    return element.id == mainCategoryId;
                })[0];

                $('#main-category-name').html(mainCategory.name);

                $('#select-categories').html("<option value='-1'>Choose</option>");

                $.each(mainCategory.categories, function (index, el) {
                    $('#select-categories').append("<option value='" + el.id + "'>" + el.name + "</option>");
                });

                $('#categories > ul').html("");
                $.tmpl($('#template-category'), mainCategory).appendTo("#categories > ul");
                // $('#categories > ul > li:first-child > a').click();

                $('#products-all').html("");
                $.tmpl($('#template-product-all'), mainCategory).appendTo("#products-all");

            });

            $('body').on('change', '#select-categories', function () {
                var id = $(this).val();
                $('#name_area').html($('#select-categories option:selected').text());
                document.querySelector('#categories > ul > li > a[data-id="' + id + '"]').click();
            });

            $('body').on("click", "#categories > ul > li > a", function () {
                var mainCategoryId = $(this).attr("data-main-category-id");
                var categoryId = $(this).attr("data-id");

                $(this).parents("ul").find("li").removeClass("selected");
                $(this).parents("li").addClass("selected");

                var mainCategory = $.grep(variables.data, function (element) {
                    return element.id == mainCategoryId;
                })[0];

                $('#select-categories').val(categoryId);
                $('#name_area').html($('#select-categories option:selected').text());

                var data = {
                    id: mainCategory.id,
                    categories: $.grep(mainCategory.categories, function (element) {
                        return element.id == categoryId;
                    })
                };

                $('#products-all').html("");
                $.tmpl($('#template-product-all'), data).appendTo("#products-all");

                UI.setup();

            });

        }
    }
};