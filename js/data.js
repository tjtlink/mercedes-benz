jQuery(document).ready(function(jQuery) {
    //

     let mercedes_store = [
         {name: "C 180 AMG" , price : '1 tỷ 499', image : 'images/c180amg_do.png'},
         {name: "C 300 AMG" , price : '1 tỷ 969', image : 'images/c300amg_xanh.png'},
         {name: "C 200 Exclusive" , price : '1 tỷ 699', image : 'images/c200ex_trang.webp'},
         {name: "E 200 Exclusive" , price : '2 tỷ 310', image : 'images/e200ex_den.webp'},
         {name: "E 300 AMG" , price : '2 tỷ 950', image : 'images/e300amg_trang.webp'},
         {name: "S 450 L luxury" , price : '4 tỷ 969', image : 'images/s450lluxury_nau.jpg'},
         {name: "S 450 Limited Edition" , price : '4 tỷ 299', image : 'images/s450limited_den.jpg'},
         {name: "GLC 200" , price : '1 tỷ 799', image : 'images/glc200_trang.webp'},
         {name: "GLC 200 4matic" , price : '2 tỷ 099', image : 'images/glc2004matic_trang.webp'},
         {name: "GLC 300 4matic" , price : '2 tỷ 499', image : 'images/glc3004matic_trang.jpg'},
         {name: "GLB 200 AMG" , price : '1 tỷ 999', image : 'images/glb200amg_trang.webp'},
         {name: "GLS 450 4matic" , price : '4 tỷ 999', image : 'images/gls4504matic_trang.webp'},
         {name: "GLE 450 4matic" , price : '4 tỷ 409', image : 'images/gle4504matic_trang.webp'},
         {name: "A 35 4matic" , price : '2 tỷ 259', image : 'images/a354matic_trang.png'},
         {name: "V 250 AMG" , price : '3 tỷ 129', image : 'images/v250amg_trang.webp'},
         {name: "Maybach S 450 4matic" , price : '7 tỷ 469', image : 'images/maybachs4504matic_den.webp'},
         {name: "Maybach S 560 4matic" , price : '11 tỷ 099', image : 'images/s5604matic_xanh.png'},
         {name: "AMG GT R" , price : '11 tỷ 590', image : 'images/amggtr_xanh.webp'},
         {name: "Mercedes-AMG G63" , price : '10 tỷ 950', image : 'images/g63amg_den.webp'}
     ];
     
     let store_html = ``;
     jQuery.each(mercedes_store, function( index, value ) {
         const html_car = `<div class="element grid classic2_cols animated2">
                             <div class="one_half gallery2 grid static filterable portfolio_type themeborder" data-id="post-2" style="background-image:url(${value.image});">
                                 <a class="car_image" href="javascript:void(0);"></a>
                                 <div class="portfolio_info_wrapper">
                                     <div class="car_attribute_wrapper">
                                         <h4>${value.name}</h4>
                                     </div>
                                     <div class="car_attribute_price">
                                         <div class="car_attribute_price_day two_cols">
                                             <span class="single_car_currency">đ</span><span class="single_car_price">${value.price}</span>
                                         </div>
                                     </div>
                                     <br class="clear" />
                                 </div>
                             </div>
                         </div>`;

         store_html += html_car;
     });

     jQuery('#portfolio_filter_wrapper').html(store_html);

 });