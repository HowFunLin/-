//入口函数
$(document).ready(function () {
    //需求：鼠标放入一级li中，让他里面的ul显示。移开隐藏。
    var jqli = $(".box>ul>li");
    var chili = $(".main>ul>li");
    
    chili.hide();

    //绑定事件
    jqli.mouseover(function () {
        $(this).children("ul").children("li").show();
        $(this).children("ul").stop().slideDown(600);
    });

    //绑定事件(移开隐藏)
    jqli.mouseleave(function () {
        $(this).children("ul").stop().slideUp(600);
    });
	
	//获得#SwitchNav中所有的<li>元素
	var lis = document.getElementById("SwitchNav").getElementsByTagName("li");
	//获得#SwitchBigPic中所有的<a>元素
	var spans=document.getElementById("SwitchBigPic").getElementsByTagName("span");
	//保存当前焦点元素的索引
	var current_index=0;
	//启动定时器
	var timer = setInterval(autoChange,3000);
	//遍历lis，为各<li>元素添加事件
	for(var i=0;i<lis.length;i++){
		//<li>的鼠标移入事件
		lis[i].onmouseover = function(){
			//定时器存在时清除定时器
			if(timer){
				clearInterval(timer);
			}
			//遍历lis
			for(var i=0;i<lis.length;i++){
				//设置当前焦点元素的样式
				if(lis[i]==this){
					spans[i].className = "sp";
					lis[i].className = "sp";
					//保存当前索引，当恢复自动切换时继续切换
					current_index = i;
				//设置非当前焦点元素的样式
				}else{
					spans[i].className = "";
					lis[i].className = "";
				}
			}
		}
		//<li>的鼠标移出事件
		lis[i].onmouseout = function(){
			//启动定时器，恢复图片自动切换
			timer = setInterval(autoChange,3000);
		}
	}
	//定时器周期函数-图片自动切换
	function autoChange(){
		//自增索引
		++current_index;
		//当索引自增达到上限时，索引归0
		if (current_index == lis.length) {
			current_index=0;
		}
		//遍历lis，将所有元素取消焦点样式
		for (var i=0; i<lis.length; i++) {
			spans[i].className = "";
			lis[i].className = "";
		}
		//为当前索引元素添加焦点样式
		spans[current_index].className = "sp";
		lis[current_index].className = "sp";
	}
});
