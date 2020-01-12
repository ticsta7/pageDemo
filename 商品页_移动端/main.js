window.onload = function() {
    slider();
};

function slider() {

    var imgOrder = document.querySelector('#imgOrder')
    var slideList = document.querySelector('.slideList');
    var container = document.querySelector('.guodu5');

    var width = container.offsetWidth;
    // console.log('container.width:', width);

    slideList.style.left = -width + 'px'; // 初始化图片位置

    var index = 1;
    var startX = 0;
    var moveX = 0;
    var distX = 0;
    var isMove = false;

    slideList.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });

    slideList.addEventListener('touchmove', function(e) {
        moveX = e.touches[0].clientX;
        isMove = true;
        distX = moveX - startX;
        moveImg(-index * width + distX)
    });

    slideList.addEventListener('touchend', function(e) {
        if (Math.abs(distX) > (width / 3) && isMove) {
            index = (distX > 0) ? (index - 1) : (index + 1);
            addTransition();
            moveImg(-index * width);
        } else {
            // 如果没到1/3 ，就返回去
            addTransition();
            moveImg(-index * width);
        }
        wufeng()
        setOrder()
        isMove = false;
        startX = 0;
        moveX = 0;
        distX = 0;
    });






    // 公用方法

    var moveImg = function(x) {
        slideList.style.left = x + 'px';
    }

    var setOrder = function(o) {
        imgOrder.innerHTML = index;
    }

    var addTransition = function() {
        slideList.style.webkitTransition = 'all .5s ';
        slideList.style.transition = "all .5s";
    }

    var removeTransition = function() {
            slideList.style.webkitTransition = 'none';
            slideList.style.transition = "none";
        }
        // 无缝
    var wufeng = function() {
        if (index > 5) {
            index = 1;
            removeTransition();
            moveImg(-index * width);
        } else if (index <= 0) {
            index = 5;
            removeTransition();
            moveImg(-index * width);
        }
    }

}