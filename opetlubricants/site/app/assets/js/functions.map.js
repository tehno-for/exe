var iscountyselected = false,
    previouscountyselected = "blank",
    start = true,
    past = null,
    mapPath = [];

$(function () {
    if ($("#map").length > 0) {
        var r = Raphael('map', 1420, 838),
        attributes = {
            fill: '#fff',
            stroke: '#dbe7f3',
            'stroke-width': 0.5,
            'stroke-linejoin': 'round'
        }
        arr = new Array();
        r.setViewBox(0, 0, 1050, 620); // original map was designed at 1050x620

        for (var county in paths) {

            var obj = r.path(paths[county].path);

            obj.attr(attributes);

            arr[obj.id] = county;

            if (arr[obj.id] != 'blank') {

                obj.data('selected', 'notSelected');


                obj.node.id = paths[arr[obj.id]].name.replace(/i/g, "İ").toUpperCase();
                obj.node.setAttribute("data-key", county);

                obj.click(function () {
                    //if (typeof ga != "undefined") ga('send', 'event', 'is ortaklari', 'harita');
                    var citySelect = $('[name="stationCity"]');
                    if (!citySelect.is(":disabled")) {
                        citySelect.val(this.node.id).trigger("change");
                        citySelect.closest("[data-form]").find(".submit-btn").trigger("click");
                    }

                });

                function hoverin(e) {
                    $("#map-tooltip").html(paths[arr[this.id]].name.replace(/i/g, "İ").toUpperCase());
                    if (paths[arr[this.id]].value == 'notSelected') {
                        this.animate({ fill: '#e9f7ff' }, 200);
                    }
                }

                function mousemove(e) {
                    $("#map-tooltip").css({ "top": e.pageY + 25, "left": e.pageX }).show();
                }

                function hoverout(e) {
                    if (paths[arr[this.id]].value == 'notSelected') {
                        this.animate({ fill: '#fff' }, 200);
                    }
                    $("#map-tooltip").hide();

                }

                obj.mouseout(hoverout);
                obj.mouseover(hoverin);
                obj.mousemove(mousemove);
                mapPath[paths[arr[obj.id]].key] = obj;

            }

        }
    }

});

function mapSelected(val) {
    var el = $("#" + val),
        key = $(el).attr("data-key");
    if (paths[key].value == 'notSelected') {

        mapPath[key].animate({ fill: '#2384c7' }, 200);

        paths[previouscountyselected].value = "notSelected";
        paths[key].value = "isSelected";

        previouscountyselected = paths[key].key;

        if (!start && past != mapPath[key]) {
            past.animate({ fill: '#fff' }, 200);
        }
        past = mapPath[key];
        start = false;

    } else if (paths[key].value == 'isSelected') {
        return false;
    }
}

function mapCityChange(el) {
    Services.getDistrictList(el);
    mapSelected($(el).val());
}

function setStationList(response) {
    var data = response.data,
        html = $.tmpl($("#stationTableTemp"), data),
        content = $("#station-list");
    content.html(html).parent().show();

    pagination({
        service: "Services.getStationList",
        content: content,
        currentPage: data.currentPage,
        pageCount: data.pageCount
    });
}