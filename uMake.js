function hover() {



    document.querySelector(".umake").addEventListener("mouseenter", function () {

        document.querySelector(".dropdown1").style.display = "block";
        document.querySelector("#arr1").style.rotate = "90deg";

    });

    document.querySelector(".dropdown1").addEventListener("mouseenter", function () {

        document.querySelector(".dropdown1").style.display = "block";
        document.querySelector("#arr1").style.rotate = "90deg";
    });


    document.querySelector(".umake").addEventListener("mouseleave", function () {

        document.querySelector(".dropdown1").style.display = "none";
        document.querySelector("#arr1").style.rotate = "0deg";
    });

    document.querySelector(".dropdown1").addEventListener("mouseleave", function () {

        document.querySelector(".dropdown1").style.display = "none";
        document.querySelector("#arr1").style.rotate = "0deg";
    });




    document.querySelector(".features").addEventListener("mouseenter", function () {

        document.querySelector(".dropdown2").style.display = "block";
        document.querySelector("#arr2").style.rotate = "90deg";

    });

    document.querySelector(".dropdown2").addEventListener("mouseenter", function () {

        document.querySelector(".dropdown2").style.display = "block";
        document.querySelector("#arr2").style.rotate = "90deg";
    });


    document.querySelector(".features").addEventListener("mouseleave", function () {

        document.querySelector(".dropdown2").style.display = "none";
        document.querySelector("#arr2").style.rotate = "0deg";
    });

    document.querySelector(".dropdown2").addEventListener("mouseleave", function () {

        document.querySelector(".dropdown2").style.display = "none";
        document.querySelector("#arr2").style.rotate = "0deg";
    });




    document.querySelector(".whymake").addEventListener("mouseenter", function () {

        document.querySelector(".dropdown3").style.display = "block";
        document.querySelector("#arr3").style.rotate = "90deg";

    });

    document.querySelector(".dropdown3").addEventListener("mouseenter", function () {

        document.querySelector(".dropdown3").style.display = "block";
        document.querySelector("#arr3").style.rotate = "90deg";
    });


    document.querySelector(".whymake").addEventListener("mouseleave", function () {

        document.querySelector(".dropdown3").style.display = "none";
        document.querySelector("#arr3").style.rotate = "0deg";
    });

    document.querySelector(".dropdown3").addEventListener("mouseleave", function () {

        document.querySelector(".dropdown3").style.display = "none";
        document.querySelector("#arr3").style.rotate = "0deg";
    });
};

hover();

function mouseFollower() {
    document.querySelector(".main").addEventListener("mousemove", function (dets) {

        document.querySelector(".mousefollower").style.left = dets.x + "px";
        document.querySelector(".mousefollower").style.top = dets.y + "px";
    });
};

mouseFollower();

var watchbtn = document.querySelector("#watchbtn");
var mainvid = document.querySelector(".mainvid");
var main = document.querySelector(".main");
var icon = document.querySelector("#close");
var cover = document.querySelector(".cover");
var mo = document.querySelector(".mousefollower");

watchbtn.addEventListener("click", function () {


    mainvid.style.top = "55%";
    cover.style.display = "block";
    mo.style.opacity = "0";

});

icon.addEventListener("click", function () {

    mainvid.style.top = "-100%";
    cover.style.display = "none";
    mo.style.opacity = "1";
    // mainvid.style.display= "none";

});

var menu = document.querySelector(".menuicon");
var circle = document.querySelector(".circle");
var items = document.querySelector(".circle-items");
var flag = true;


menu.addEventListener("click", function () {

    if (flag === true) {

        circle.style.scale = "6";
        menu.innerHTML = '<i class="ri-close-line"></i>';
        items.style.scale="1";
        
        flag = false;
    }else{
        
        items.style.scale="0";
        circle.style.scale = "0";
        menu.innerHTML = '<i class="ri-menu-4-fill"></i>';
        flag = true;
    }

});



