"use strict";
let $ = require('jquery');

console.log("hello buddy");

function getCookieData() {
    $.ajax({
        url: "../cookies.JSON"
    }).done((cookieData) => {
 
        console.log(cookieData);
 
   });
 }
 getCookieData();