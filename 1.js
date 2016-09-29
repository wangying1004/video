(function() {
    var img1 = document.getElementById("img1");
    var video = document.getElementById("video");
    var img2 = document.getElementById("img2");
    var jindutiaoleft = document.getElementById('jindutiaoleft');
    var jindutiao = document.getElementById('jindutiao');
    var jindutiaowai = document.getElementById('jindutiaowai');
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
        var baifen = video.currentTime / video.duration;
        var jindutiaoleft = document.getElementById("jindutiaoleft");
        jindutiao.style.width = baifen * 390 + "px";
        jindutiaoleft.style.left = baifen * 390 +180+ "px";
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

    var quan = document.getElementById('quan');
    quan.onmouseover = function() {
        document.getElementById('zong').style.display = "block";
    }
    quan.onmouseout = function() {
        document.getElementById('zong').style.display = "none";
    }
    video.onclick = function() {
        if (video.paused == true) {
            video.play();
            document.getElementById('img2').style.display = "none";
        } else {
            video.pause();
            document.getElementById('img2').style.display = "block";
        }
    }

    
    jindutiaoleft.ondragend = function(event) {
        var length = event.clientX - jindutiaowai.offsetLeft;
        var percent = (length) / jindutiaowai.offsetWidth;
        jindutiao.style.width = percent * 390 + "px";
        jindutiaoleft.style.left = percent * 390 +180 + "px";
        video.currentTime = percent * video.duration;

    }
    jindutiaoleft.ondrag = function(event) {
            var length = event.clientX - jindutiaowai.offsetLeft;
            var percent = (length) / jindutiaowai.offsetWidth;
            jindutiao.style.width = percent * 390 + "px";
            jindutiaoleft.style.left = percent * 390+180 + "px";
            video.currentTime = percent * video.duration;
        }
        //视频条
    
    jindutiaowai.onmousedown = function(event) {
            var length = event.clientX - jindutiao.offsetLeft;
            var percent = (length) / jindutiaowai.offsetWidth;
            jindutiao.style.width = percent * 390+ "px";
            video.currentTime = percent * video.duration;
        }
        //点击视频拖动条

    var jianhao = document.getElementById('jianhao');
    var jiahao = document.getElementById('jiahao');
    var yltiao = document.getElementById('yltiao');
    var ylleft = document.getElementById('ylleft');
    jianhao.onclick = function() {
        video.volume -= 0.1;
    }
    jiahao.onclick = function() {
        video.volume += 0.1;
    }
    video.onvolumechange = function() {
        yltiao.style.width = video.volume * 100 + "px";
        ylleft.style.left = video.volume * 100 + 680 + "px";
    }

    var add = document.getElementById('add');
        var xzwj = document.getElementById('xzwj');
        add.onclick = function() {
            var file = xzwj.files[0]
            var url = URL.createObjectURL(file);
            console.log(url);
            myvideo.src = url;
        }




}(window))
