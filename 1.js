(function() {
    var img1 = document.getElementById("img1");
    var video = document.getElementById("video");
    var img2 = document.getElementById("img2");
    img1.onclick = function() {
        if (video.paused) {
            video.play();
            img2.style.display = "none";
            img3.style.display = "none";

        } else {
            video.pause();
            img2.style.display = "block";
            img3.style.display = "block";

        }
    }
    img2.onclick = function() {
        if (video.paused) {
            video.play();
            img2.style.display = "none";
            img3.style.display = "none";
        }
    }
    img3.onclick = function() {
        if (video.paused) {
            video.play();
            img2.style.display = "none";
            img3.style.display = "none";
        }
    }


    var div1 = document.getElementById("div1");
    video.ontimeupdate = function() {
        div1.innerHTML = parseInt(video.currentTime) + "/" + parseInt(video.duration);
    }

    video.ontimeupdate = function() {
        var tim1 = parseInt(video.currentTime);
        if (tim1 % 60 < 10) {
            tim1 = parseInt(tim1 / 60) + ":0" + tim1 % 60;
        } else {
            tim1 = parseInt(tim1 / 60) + ":" + tim1 % 60;
        }
        var tim2 = parseInt(video.duration);
        if (tim2 % 60 < 10) {
            tim2 = parseInt(tim2 / 60) + ":0" + tim2 % 60;
        } else {
            tim2 = parseInt(tim2 / 60) + ":" + tim2 % 60;
        }
        div1.innerHTML = tim1 + "/" + tim2;
        var baifen = video.currentTime/video.duration;
            var jindutiaoleft = document.getElementById("jindutiaoleft");
            jindutiao.style.width = baifen * 390 + "px";
            jindutiaoleft.style.left = baifen *390 + "px";
    }

    var img5 = document.getElementById("img5");
    var img6 = document.getElementById("img6");
    img5.onclick = function() {
        if (video.muted == false) {
            video.muted = true;
            img6.style.display = "block";
        }
    }
    img6.onclick = function() {
        if (video.muted == true) {
            video.muted = false;
            img6.style.display = "none";
        }
    }
    video.poster = "img/3.jpg";



}(window))
