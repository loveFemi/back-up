function allTouch(dom) {
    var obj={
        tap:function (callback) {
            var startx;
            var starty;
            var start;
            dom.addEventListener("touchstart", function (e) {
                if (e.changedTouches.length > 1) {
                    return;
                }
                startx = e.changedTouches[0].clientX;
                starty = e.changedTouches[0].clientY;
                start = Date.now();
            });
            dom.addEventListener("touchend", function (e) {
                var endx = e.changedTouches[0].clientX;
                var endy = e.changedTouches[0].clientY;
                var end = Date.now();
                if (e.changedTouches.length > 1) {
                    return;
                }
                if (end - start > 300) {
                    return;
                }
                if (Math.abs(endx - startx) > 5 || Math.abs(endy - starty) > 5) {
                    return;
                }
                callback&&callback(e);
            })
        },
        swipe:function (callback) {
            var startx; //开始的横坐标
            var starty; //开始的纵坐标
            var start; //开始的时间
            dom.addEventListener("touchstart", function (e) {
                if (e.changedTouches.length > 1) {
                    return;
                }
                startx = e.changedTouches[0].clientX;
                starty = e.changedTouches[0].clientY;
                start = Date.now();
            });
            dom.addEventListener("touchend", function (e) {
                if (e.changedTouches.length > 1) {
                    return;
                }
                var endx = e.changedTouches[0].clientX;
                var endy = e.changedTouches[0].clientY;
                var end = Date.now();
                var direction;
                if (end - start < 800) {
                    if (Math.abs(endx - startx) > 15) {
                        direction = endx - startx > 0 ? "right" : "left";
                    } else if (Math.abs(endy - starty) > 15) {
                        direction = endy - starty > 0 ? "down" : "up";
                    } else {
                        return;
                    }
                }
                callback && callback(direction);
            })
        }
    };
    return obj;
}