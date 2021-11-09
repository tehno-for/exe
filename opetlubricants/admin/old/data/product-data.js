const dataObj = 
[
    {
        MainCategoryID:"1",
        MainCategoryName:"Opet Lubricant",
        SubCategoryList:[
            {
                SubCategoryID:"1",
                SubCategoryName:"PASSENGER AND LIGHT COMMERCIAL VEHICLE LUBRICANTS",
                SubCategoryIcon:"is-araba",
                MainCategoryName:"Opet Lubricant",
                ProductList:[
                    {
                        productId:"1",
                        title : "20FULLTECH 0W-301",
                        content : "1 Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor ",
                        image : "assets/img/new/500463459fulltech0w-304l(1).jpg",
                        productSize : ["11L","41L"],
                        technicalData : "http://www.opetfuchs.com.tr/content/pdf/tds_fulltech_0w30.pdf",
                        safetyData : "http://www.opetfuchs.com.tr/content/pdf/en_gbf_fulltech_0w30.pdf",
                        technicalSupport : "mailto:teknikservisler@opetfuchs.com.tr"
                    },
                    {
                        productId: "2",
                        title : "30FULLTECH 0W-301",
                        content : "2 Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor ",
                        image : "assets/img/new/500463459fulltech0w-304l(1).jpg",
                        productSize : ["11L","41L"],
                        technicalData : "http://www.opetfuchs.com.tr/content/pdf/tds_fulltech_0w30.pdf",
                        safetyData : "http://www.opetfuchs.com.tr/content/pdf/en_gbf_fulltech_0w30.pdf",
                        technicalSupport : "mailto:teknikservisler@opetfuchs.com.tr"

                    }
                ]
            },
            {
                SubCategoryID:"2",
                SubCategoryName:"HEAVY DUTY VEHICLE LUBRICANTS",
                SubCategoryIcon:"is-uzun-arac",
                MainCategoryName:"Opet Lubricant",
                ProductList:[
                    {
                        productId:"200",
                        title : "200FULLTECH 0W-301",
                        content : "200-1 Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor ",
                        image : "assets/img/new/500466924fullprohtsynld5w-3020l(1).jpg",
                        productSize : ["611L","41L"],
                        technicalData : "http://www.opetfuchs.com.tr/content/pdf/tds_fulltech_0w30.pdf",
                        safetyData : "http://www.opetfuchs.com.tr/content/pdf/en_gbf_fulltech_0w30.pdf",
                        technicalSupport : "mailto:teknikservisler@opetfuchs.com.tr"
                    },
                    {
                        productId:"201",
                        title : "201FULLTECH 0W-301",
                        content : "200-2 Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor ",
                        image : "assets/img/new/opet-fuchs-varil.jpg",
                        productSize : ["11L","41L"],
                        technicalData : "http://www.opetfuchs.com.tr/content/pdf/tds_fulltech_0w30.pdf",
                        safetyData : "http://www.opetfuchs.com.tr/content/pdf/en_gbf_fulltech_0w30.pdf",
                        technicalSupport : "mailto:teknikservisler@opetfuchs.com.tr"
                    }
                ]
            }
        ]
    }

]


function GetMainCategoryByJson() {
    var mainCategoryList[]=new Array[];//json'dan al

    for(var i =0;i < mainCategoryList.length; i++){
        $('#header-menu .flex').append('<li><a href="javascript:;" onclick="GenerateProductZone(mainCategoryList[i].MainCategoryID)">'+ mainCategoryList.[i].MainCategoryName+'</a></li>');
    }
}


function GenerateProductZone(mainCategoryID) {

    // MAIN CATEGORY'E GORE SUBCATEGORY DATASI CEKILIR VE  HTML E BASILIR
    //MainCategory ID'sine bağlı subcategory'leri ceken fonksiton lazım
    var subCategoryList=GetSubCategoryByMainCategoryID(mainCategoryID);
    //subcategory'e gore html'i generate edeceğiz.
    for(var i =0;i < subCategoryList.length; i++){
        $('#menu_area2 .flex').append('<li><a href="javascript:;" onclick="GetProductForSlider(subCategoryList[i].SubCategoryID,mainCategoryID)"><i class="subCategoryList.[i].SubCategoryIcon"></i><span>'+ subCategoryList[i].SubCategoryName+'</span></a></li>');
    }

    // SLIDER DATASI CEKILIR VE SLIDER HTML E BASILIR
    var sliderItemList=GetProductForSlider(subCategoryList[0].SubCategoryID,mainCategoryID);//SubCategory ve Main Category ID'lerine göre ilk slider için datalar cekilir.
//subcategory ve maincagory'e gore slider html'i generate edeceğiz.
    for(var i =0;i < sliderItemList.length; i++){
        $('.swiper-wrapper ').append('<li><a href="javascript:;" ><i class="sliderItemList.[i].productId"></i><span>'+ sliderItemList[i].title+'</span></a></li>');
    }


}


function GetProductForSlider(subCategoryID,mainCategoryID) {

    $('#mineral_oils2_list').hide();//All Product div'i gizlenir.
    $('#btn_show_all').attr("onclick","ShowAllProduct("+subCategoryID+","+mainCategoryID+")");//Master All Product Butonuna dinamik parametre ekleniyor.

    var sliderIetmList=new Array();//Json'dan subCategoryID,mainCategoryID göre 5 adet data cekilmeli
    return sliderIetmList;
}

function GetSubCategoryByMainCategoryID(mainCategoryID) {
    var subCategoryList[]=new Array[];//jsn'dan al

    return subCategoryList;
}

function ShowAllProduct(subCategoryID,mainCategoryID) {
    $('#mineral_oils2').hide();//Slider div'i gizlenir.
    var productList=new Array();//Json'dan subCategoryID,mainCategoryID göre tüm ürünler cekilmeli

//subcategory ve maincagory'e gore urunler html'i generate edeceğiz.

    for(var i =0;i < productList.length; i++){
        $('#mineral_oils2_list ').append('<li><a href="javascript:;" id="productList[i].productId"><i class="subCategoryList.[i].SubCategoryIcon"></i><span>'+ subCategoryList[i].SubCategoryName+'</span></a></li>');
    }
}

