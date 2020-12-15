window.onload = function () {
    var arr = [{ //  1
        width: 150,
        top: 26.25,
        left: 18.75,
        opacity: 20,
        zIndex: 2
    }, { // 2
        width: 225,
        top: 45,
        left: 0,
        opacity: 80,
        zIndex: 3
    }, { // 3
        width: 300,
        top: 37.5,
        left: 43,
        opacity: 100,
        zIndex: 4
    }, { // 4
        width: 225,
        top: 45,
        left: 225,
        opacity: 80,
        zIndex: 3
    }, { //5
        width: 150,
        top: 26.25,
        left: 281.25,
        opacity: 20,
        zIndex: 2
    }];

    //0.获取元素
    var slide = document.getElementById("slide");
    var liArr = slide.getElementsByTagName("li");
    var arrow = slide.children[1];
    var arrowChildren = arrow.children;
    //设置一个开闭原则变量，点击以后修改这个值。
    var flag = true;

    /**
     * 获取元素样式兼容写法
     * @param ele
     * @param attr
     * @returns {*}
     */
    function getStyle(ele, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(ele, null)[attr];
        }
        return ele.currentStyle[attr];
    }

    //参数变为3个
    //参数变为3个
    function animate(ele, json, fn) {
        //先清定时器
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            //开闭原则
            var bool = true;


            //遍历属性和值，分别单独处理json
            //attr == k(键)    target == json[k](值)
            for (var k in json) {
                //四部
                var leader;
                //判断如果属性为opacity的时候特殊获取值
                if (k === "opacity") {
                    leader = getStyle(ele, k) * 100 || 1;
                } else {
                    leader = parseInt(getStyle(ele, k)) || 0;
                }

                //1.获取步长
                var step = (json[k] - leader) / 10;
                //2.二次加工步长
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                //3.赋值
                //特殊情况特殊赋值
                if (k === "opacity") {
                    ele.style[k] = leader / 100;
                    //兼容IE678
                    ele.style.filter = "alpha(opacity=" + leader + ")";
                    //如果是层级，一次行赋值成功，不需要缓动赋值
                    //为什么？需求！
                } else if (k === "zIndex") {
                    ele.style.zIndex = json[k];
                } else {
                    ele.style[k] = leader + "px";
                }
                //4.清除定时器
                //判断: 目标值和当前值的差大于步长，就不能跳出循环
                //不考虑小数的情况：目标位置和当前位置不相等，就不能清除清除定时器。
                if (json[k] !== leader) {
                    bool = false;
                }
            }

            //只有所有的属性都到了指定位置，bool值才不会变成false；
            if (bool) {
                clearInterval(ele.timer);
                //所有程序执行完毕了，现在可以执行回调函数了
                //只有传递了回调函数，才能执行
                if (fn) {
                    fn();
                }
            }
        }, 16);
    }

    //1.鼠标放到轮播图上，两侧的按钮显示，移开隐藏。
    slide.onmouseenter = function () {
        //arrow.style.opacity = 1;
        animate(arrow, {
            "opacity": 100
        });
    }
    slide.onmouseleave = function () {
        //arrow.style.opacity = 1;
        animate(arrow, {
            "opacity": 0
        });
    }

    move();
    //3.把两侧按钮绑定事件。(调用同一个方法，只有一个参数，true为正向旋转，false为反向旋转)
    arrowChildren[0].onclick = function () {
        if (flag) {
            flag = false;
            move(true);
        }
    }
    arrowChildren[1].onclick = function () {
        if (flag) {
            flag = false;
            move(false);
        }
    }

    //4.书写函数。
    function move(bool) {
        //判断：如果等于undefined,那么就不执行这两个if语句
        if (bool === true || bool === false) {
            if (bool) {
                arr.unshift(arr.pop());
            } else {
                arr.push(arr.shift());
            }
        }
        //在次为页面上的所有li赋值属性，利用缓动框架
        for (var i = 0; i < liArr.length; i++) {
            animate(liArr[i], arr[i], function () {
                flag = true;
            });
        }
    }

    
    //校园环境展示
	//定义滚动速度
	var speed = 20;
	//获取<div id="imgbox">元素
	var imgbox = document.getElementById("imgbox");
	//复制一个<span>，用于无缝滚动
	imgbox.innerHTML += imgbox.innerHTML;
	//获取两个<span>元素
	var span = imgbox.getElementsByTagName("span");
	//启动定时器，调用滚动函数
	var timers = setInterval(marquee,speed);
	//鼠标移入时暂停滚动，移出时继续滚动
	imgbox.onmouseover = function(){
		clearInterval(timers);
	}
	imgbox.onmouseout = function(){
		timers=setInterval(marquee,speed);
	};
	//滚动函数
	function marquee(){
		//当第1个<span>被完全卷出时
		if(imgbox.scrollLeft > span[0].offsetWidth){
			//将被卷起的内容归0
			imgbox.scrollLeft = 0;
		}else{
			//否则向左滚动
			++imgbox.scrollLeft;
		}
	}
}
