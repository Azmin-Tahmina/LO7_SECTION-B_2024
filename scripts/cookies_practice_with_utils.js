"use strict";

/*
    File:   cookies_practice_with_utils.js
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
        let days = 0; // 0 days will create a session cookie

        if (document.getElementById("cookieP").checked) {
            // Set the expiration date to 7 days in the future
            days = 7;
        }

        setCookie(cookieName, cookieValue, days);
    };
};
