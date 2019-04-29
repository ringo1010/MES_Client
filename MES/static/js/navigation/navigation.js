/* 维护一个所有菜单选项的数组 */
var menuList = [
	{
		id: "print-barcode",
		title: "标签打印",
		icon:"glyphicon glyphicon-print item-icon",
		href:"../support/labelPrint",
		permissionId:'1'
	},
	{
		id: "user-info",
		title: "查看个人信息",
		icon:"glyphicon glyphicon-list-alt item-icon",
		href:"../user/userInfo",
		permissionId:'2'
	},
	{
		id: "password-manage",
		title: "密码管理",
		icon:"iconfont icon-mima item-icon",
		href:"../user/passwordManage",
		permissionId:'3'
	},
	{
		id: "permission-manage",
		title: "用户角色与权限",
		icon:"glyphicon glyphicon-user item-icon",
		href:"../user/permissionManage",
		permissionId:'4'
	},
]
console.log(menuList)
/* 初始化菜单功能数组，过滤掉权限没有的功能 */
var permissionIds=[1,2,4]
var userMenuList = $.grep(menuList,function(n,i){
	console.log(n);
	console.log(i)
	for(var i=0;i<permissionIds.length;i++){
		if(permissionIds[i]==n.permissionId){
			return n
		}
	}
})
console.log(userMenuList)
jQuery(function($) {
	
	/* 导航栏搜索框方法开始 */
	//current用来记录当前元素的索引值
	var current = 0;
	//showList为列表中和所输入的字符串匹配的项
	var showList = [];
	$("#sidebar-search-div").hide();
	/* 根据搜索框输入的值模糊搜索所有的功能 */
	$("#sidebar-search-input").on('keyup focus', function(e) {
		$("#sidebar-search-div .sidebar-search-ul").empty();
		if($(this).val()==""){
			$("#sidebar-search-div").hide();
			return
		}
		$("#sidebar-search-div").show();
		var searchVal = $(this).val();
		/* 遍历菜单选项的数组，与搜索词匹配的放入一个新数组 */
		$.each(userMenuList, function(index, item) {
			if (item.title.indexOf(searchVal) != -1) {
				showList.push({
					id: item.id,
					title: item.title
				});
			}
		});
		/* 遍历新数组，在下拉框中添加数组的内容 */
		for (i = 0; i < showList.length; i++) {
			console.log(showList[i]);
			var li = $("<li>" + showList[i].title + "</li>");
			li.addClass("sidebar-search-item");
			li.on('mousedown', {
				id: showList[i].id
			}, searchItem);
			
			$("#sidebar-search-div .sidebar-search-ul").append(li);
		}
		showList = [];

	})
	$("#sidebar-search-input").blur('keyup', function() {
		$("#sidebar-search-div").hide();
		$("#sidebar-search-div .sidebar-search-ul").empty();
		showList = [];
	})
	/* 导航栏搜索框方法结束 */

	/* 初始化折叠所有菜单 */
	$(".panel-collapse").each(function() {
		$(this).collapse('hide');
	})
	/* 点击菜单栏切换样式图标,通过监听collapse事件执行回调方法 */
	$(".collapse-item").on('show.bs.collapse hide.bs.collapse', function(e) {
		$(e.currentTarget).find('a:first span:last').toggleClass('glyphicon-chevron-down glyphicon-chevron-right');
		/* 阻止事件冒泡，防止上级菜单也切换图标 */
		e.stopPropagation();
	});
});
/* 显示左边导航栏 */
function showSidebar() {
	$(".sidebar-wrapper").animate({
		left: '0px'
	}, 400);
}

/* 隐藏左边导航栏 */
function hideSidebar() {
	$(".sidebar-wrapper").animate({
		left: '-300px'
	}, 400);
}

/* 折叠所有菜单选项 */
function collapseInAll(){
	$(".panel-collapse").each(function(){
		$(this).collapse('hide');
	})
}
/* 展开所有菜单选项 */
function collapseOutAll(){
	$(".panel-collapse").each(function(){
		$(this).collapse('show');
	})
}
/* 用户选择下拉框的选项后，自动打开选项所在的位置并变色提示 */
function searchItem(e) {
	$("#" + e.data.id).parents(".panel-collapse").collapse('show');
	//如果选项位置超过浏览器高度就将滚动条动画滚动到指定位置
	if($("#" + e.data.id).offset().top>$(window).height()){
			$(".sidebar-wrapper").animate({
				scrollTop: $("#" + e.data.id).offset().top - $(".sidebar-wrapper").offset().top + $(".sidebar-wrapper").scrollTop()-200
			},200)
	}
	/* 将所选功能背景变色提示用户 */
	var bgColor = $("#" + e.data.id).parent('.collapse-item').css('background');
	$("#" + e.data.id).parent('.collapse-item').animate({
		'backgroundColor': 'skyblue'
	}, 300);
	$("#" + e.data.id).parent('.collapse-item').animate({
		'backgroundColor': bgColor
	}, 500);
}