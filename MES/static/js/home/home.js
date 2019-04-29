jQuery(function($){
	/* 初始化从用户的桌面收藏夹表中获取用户个人收藏的所有功能 */
	var desktop=[
		{
			id: "print-barcode",
			title: "标签打印",
			icon:"glyphicon glyphicon-print item-icon",
			iconColor:"green",
			href:"../support/labelPrint",
			bgColor:"pink",
		},
		{
			id: "user-info",
			title: "查看个人信息",
			icon:"glyphicon glyphicon-list-alt item-icon",
			iconColor:"pink",
			href:"../user/userInfo",
			bgColor:"orange",
		}
	]
	for(var i =0,j=desktop.length;i<j;i++){
		createFunItem(desktop[i].title,desktop[i].href,desktop[i].icon,desktop[i].iconColor,desktop[i].bgColor);
	}
	
	/* 给导航栏未加入到桌面的功能增加加入方法 */
	var excludList=[]
	x:for(var i =0,j=userMenuList.length;i<j;i++){
		console.log(userMenuList[i]);
		y:for(var x =0,y=desktop.length;x<y;x++){
		console.log(desktop[x]);
			if(userMenuList[i].id==desktop[x].id){
				console.log("跳过");
				continue x;
			}
		}
		console.log("添加");
		excludList.push(userMenuList[i])
	}
	console.log(excludList)
	for(var i =0,j=excludList.length;i<j;i++){
		addPlusIcon(excludList[i].id,excludList[i].title,excludList[i].href,excludList[i].icon)
	}
});
/* 功能加入桌面方法 */
function addPlusIcon(id,title,href,icon){
	var plusIcon = $("<span class='glyphicon glyphicon-plus item-icon'></span>")
	$("#"+id).append(plusIcon)
	/* 点击后在桌面创建功能选项，并删除添加选项 */
	plusIcon.on('click',function(){
		createFunItem(title,href,icon);
		$("#"+id).children(".glyphicon-plus").remove();
	})
}
/* 创建一个桌面的功能选项 */
function createFunItem( title = '自定义功能',href="#",iconClass="iconfont iconfont-lg icon-shezhi",iconColor="black",bgColor = 'gray') {
	var link = $('<a></a>'); //创建功能选项链接
	link.attr("href", href); //添加href路径
	link.hide(); //先隐藏

	var funItem = $('<div></div>'); //创建功能选项div
	funItem.attr('class', 'fun-item'); //添加class
	funItem.css('background', bgColor); //添加背景颜色

	var itemPic = $('<span></span>'); //图标容器
	itemPic.attr('class', 'item-pic'); //添加样式
	itemPic.css('color', iconColor); //添加图标颜色
	itemPic.appendTo(funItem); 

	var spanIcon = $('<i></i>'); //创建图标
	spanIcon.attr('class', iconClass); //添加图标
	spanIcon.appendTo(itemPic); 

	var itemTitle = $('<span></span>'); //创建标题
	itemTitle.attr('class', 'item-title'); 
	itemTitle.html(title);
	itemTitle.appendTo(funItem); 

	funItem.appendTo(link); 
	link.appendTo('#main');
	link.fadeIn(1000);//慢慢显示出来
}