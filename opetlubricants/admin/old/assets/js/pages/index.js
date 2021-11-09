var page = {
    variables: {
        data: null
    },
    init: function () {
        var variables = page.variables;
        var services = page.services;

        services.loadData(function () {
            services.loadHeaderMenu();
        });
        page.events.init();

    },
    services: {
        loadData: function (onCompleted) {
            var variables = page.variables;

            $.get("data.json", function (response) {
                variables.data = response;
                if (onCompleted !== undefined)
                    onCompleted();
            });
        },
        loadHeaderMenu: function () {
            var variables = page.variables;

            $('#header-menu > ul').html("");
            $.tmpl($('#template-header-menu-item'), variables.data).appendTo("#header-menu > ul");
            $('#header-menu > ul > li:first-child > a').click();
        },
    },
    events: {
        init: function () {
            var variables = page.variables;

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
                $('#products-slider').html("");
                $.tmpl($('#template-product-all'), mainCategory).appendTo("#products-all");
                $.tmpl($('#template-product-slider'), mainCategory).appendTo("#products-slider");

                //Reset show all
                $('#products-slider-container').show();
                $('#products-all').hide();
                $('#show-all').show();
            });

            $('body').on('change', '#select-categories', function () {
                var id = $(this).val();
                $('#name_area').html($('#select-categories option:selected').text());
                $('#categories > ul > li > a[data-id=' + id + ']').click();
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

                $('#products-slider').html("");
                $.tmpl($('#template-product-slider'), data).appendTo("#products-slider");
                UI.setup();

                //Reset show all
                $('#products-slider-container').show();
                $('#products-all').hide();
                $('#show-all').show();
            });

            $('body').on('click', '.slide-item', function () {
                var mainCategoryId = $(this).attr("data-main-category-id");
                var categoryId = $(this).attr("data-category-id");
                var productId = $(this).attr("data-id");

                var mainCategory = $.grep(variables.data, function (element) {
                    return element.id == mainCategoryId;
                })[0];

                var category = $.grep(mainCategory.categories, function (element) {
                    return element.id == categoryId;
                })[0];

                var product = $.grep(category.products, function (element) {
                    return element.id == productId;
                })[0];

                $('#technical_pop_up .popup_content').html("");
                $.tmpl($('#template-detail'), product).appendTo("#technical_pop_up .popup_content");
                $('#technical_pop_up .overlay-head h3').html(mainCategory.name);

                $('#technical_pop_up').show();
                $('#pop_Up1').addClass('open');
                $('#overlay-bg1').addClass('open');
            });
        }
    }
};