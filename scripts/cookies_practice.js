"use strict";

/*
    File:   cookies_practice.js
    Author: Michael Grzesina (cst000)
    Course: CWEB 190
    Date:   Winter 2022
    Purpose: Create and display cookies on a web page
*/

window.onload = function() {
    document.getElementById("btnDisplay").onclick = function() {
        document.getElementById("cookieValues").innerText = document.cookie;
    };

    document.getElementById("btnSet").onclick = function() {
        let cookieName = document.getElementById("nameField").value;
        let cookieValue = document.getElementById("valueField").value;
        let cookieString = encodeURIComponent(cookieName) + "=" + encodeURIComponent(cookieValue);

        if (document.getElementById("cookieP").checked) {
            //let dateString = "Sun, 30 Jun 2023 12:00:00 GMT";
            let expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate() + 7);
            let dateString = expiryDate.toUTCString();
            cookieString += "; expires=" + dateString;
        }

        document.cookie = cookieString;
    };
};
