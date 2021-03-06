document.writeln("<!DOCTYPE html>");
document.writeln("<html>");
document.writeln("	<head>");
document.writeln("		<meta charset=\'utf-8\'>");
document.writeln("		<meta http-equiv=\'X-UA-Compatible\' content=\'IE=edge\'>");
document.writeln("		<!-- 在移动设备浏览器上user-scalable=no可以禁用其缩放（zooming）功能 -->");
document.writeln("		<meta name=\'viewport\' content=\'width=device-width, initial-scale=1\'>");
document.writeln("		<!-- 默认采用高速模式渲染页面 -->");
document.writeln("		<meta name=\'renderer\' content=\'webkit\'>");
document.writeln("		<!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->");
document.writeln("		<title>Bootstrap 101 Template</title>");
document.writeln("		<!-- jquery -->");
document.writeln("		<script src=\'../static/lib/jquery.min.js\'></script>");
document.writeln("		<!-- bootstrap -->");
document.writeln("		<script src=\'../static/lib/Bootstrap-v3.3.7/js/bootstrap.js\'></script>");
document.writeln("		<!-- jquery颜色动画js -->");
document.writeln("		<script src=\'../static/lib/jquery.color.js\'></script>");
document.writeln("		<!-- 本页面js -->");
document.writeln("		<script src=\'../static/js/navigation/navigation.js\'></script>");
document.writeln("		");
document.writeln("		<!-- bootstrap -->");
document.writeln("		<link href=\'../static/lib/Bootstrap-v3.3.7/css/bootstrap.css\' rel=\'stylesheet\' />");
document.writeln("		<!-- animate -->");
document.writeln("		<link rel=\'stylesheet\' href=\'../static/lib/animate.css\' />");
document.writeln("		<!-- 本页面css -->");
document.writeln("		<link href=\'../static/css/navigation/navigation.css\' rel=\'stylesheet\' />");
document.writeln("		<!-- 自定义icon字体 -->");
document.writeln("		<link rel=\'stylesheet\' href=\'../static/css/icons/iconfont.css\' />");
document.writeln("	</head>");
document.writeln("	<body>");
document.writeln("		<!-- 头部导航栏 -->");
document.writeln("		<div class=\'page-header\'>");
document.writeln("			<!-- 显示菜单按钮 -->");
document.writeln("			<a href=\'#\' onClick=\'showSidebar()\' class=\'btn btn-xs btn-default\' role=\'button\'><span class=\'glyphicon glyphicon-align-justify\'></a>");
document.writeln("		</div>");
document.writeln("		<!-- 左侧菜单栏 -->");
document.writeln("		<nav class=\'sidebar-wrapper simple-scroll\'>");
document.writeln("			<!-- 隐藏菜单按钮 -->");
document.writeln("			<div class=\'sidebar-brand\'>");
document.writeln("				<button onClick=\'hideSidebar()\' class=\'btn btn-xs\'><span class=\'glyphicon glyphicon-chevron-left\'></span></button>");
document.writeln("				<a href=\'#\'>SIDEBAR</a>");
document.writeln("			</div>");
document.writeln("			<!-- 菜单头部 -->");
document.writeln("			<div class=\'sidebar-header\'>");
document.writeln("				<!-- 用户图片 -->");
document.writeln("				<div class=\'user-pic\'>");
document.writeln("					<img class=\'img-responsive img-rounded mCS_img_loaded\' src=\'../static/img/home/user.jpg\' />");
document.writeln("				</div>");
document.writeln("				<div class=\'user-info\'>");
document.writeln("					<div>username</div>");
document.writeln("					<div>user-role</div>");
document.writeln("					<div class=\'user-status\'>");
document.writeln("						<a href=\'#\'><span class=\'label label-success\'>Online</span></a>");
document.writeln("					</div>");
document.writeln("				</div>");
document.writeln("			</div>");
document.writeln("			<!-- 功能搜索框 -->");
document.writeln("			<div class=\'sidebar-search\'>");
document.writeln("				<div>");
document.writeln("					<div class=\'input-group\'>");
document.writeln("						<input id=\'sidebar-search-input\' type=\'text\' class=\'form-control search-menu\' aria-label=\'Right Align\'");
document.writeln("						 placeholder=\'search...\' />");
document.writeln("						<div id=\'sidebar-search-div\' class=\'simple-scroll\'>");
document.writeln("							<ul class=\'sidebar-search-ul\'></ul>");
document.writeln("						</div>");
document.writeln("					</div>");
document.writeln("				</div>");
document.writeln("			</div>");
document.writeln("			<!-- 功能菜单栏 -->");
document.writeln("			<div id=\'sidebar-menu\' class=\'panel-group sidebar-menu\'>");
document.writeln("				<ul>");
document.writeln("					<!-- 一级菜单列表 -->");
document.writeln("					<li class=\'header-menu\'>");
document.writeln("						<span>Dropdown menu</span>");
document.writeln("						<span class=\'glyphicon glyphicon-plus\' onClick=\'collapseOutAll()\'></span>");
document.writeln("						<span class=\'glyphicon glyphicon-minus\' onClick=\'collapseInAll()\'></span>");
document.writeln("					</li>");
document.writeln("					<li class=\'sidebar-dropdown\'>");
document.writeln("						<div class=\'panel panel-default collapse-item\'>");
document.writeln("							<div class=\'collapse-item\'>");
document.writeln("								<a class=\'fc-menu\' data-toggle=\'collapse\' data-parent=\'#sidebar-menu\' href=\'#basicMenu\'>");
document.writeln("									<span>常用功能</span>");
document.writeln("									<span class=\'glyphicon glyphicon-chevron-right item-icon\'></span>");
document.writeln("								</a>");
document.writeln("							</div>");
document.writeln("							<div id=\'basicMenu\' class=\'panel-collapse collapse\'>");
document.writeln("								<div class=\'panel-body\'>");
document.writeln("									<div class=\'collapse-item\'>");
document.writeln("										<a id=\'print-barcode\' class=\'sc-menu\' href=\'#\'>");
document.writeln("											<span>标签打印</span>");
document.writeln("											<span class=\'glyphicon glyphicon-print item-icon\'></span>");
document.writeln("										</a>");
document.writeln("									</div>");
document.writeln("								</div>");
document.writeln("							</div>");
document.writeln("						</div>");
document.writeln("						<div class=\'panel panel-default collapse-item\'>");
document.writeln("							<div class=\'collapse-item\'>");
document.writeln("								<a class=\'fc-menu\' data-toggle=\'collapse\' data-parent=\'#sidebar-menu\' href=\'#record-menu\'>");
document.writeln("									<span>用户模块</span>");
document.writeln("									<span class=\'glyphicon  glyphicon-chevron-right item-icon\'></span>");
document.writeln("								</a>");
document.writeln("							</div>");
document.writeln("							<div id=\'record-menu\' class=\'panel-collapse collapse\'>");
document.writeln("								<div class=\'panel-body\'>");
document.writeln("									<div class=\'collapse-item\'>");
document.writeln("										<a id=\'user-info\' class=\'sc-menu\' href=\'#\'>");
document.writeln("											<span>查看个人信息</span>");
document.writeln("											<span class=\'glyphicon glyphicon-list-alt item-icon\'></span>");
document.writeln("										</a>");
document.writeln("									</div>");
document.writeln("									<div class=\'panel panel-default collapse-item\'>");
document.writeln("										<div class=\'collapse-item\'>");
document.writeln("											<a class=\'sc-menu\' data-toggle=\'collapse\' data-parent=\'#record-menu\' href=\'#record-classify\'>");
document.writeln("												<span>权限管理</span>");
document.writeln("												<span class=\'glyphicon glyphicon-chevron-right item-icon\'></span>");
document.writeln("											</a>");
document.writeln("										</div>");
document.writeln("										<div id=\'record-classify\' class=\'panel-collapse collapse\'>");
document.writeln("											<div class=\'panel-body\'>");
document.writeln("												<!-- <div class=\'collapse-item\'>");
document.writeln("													<a id=\'password-manage\' class=\'tc-menu\' href=\'#\'>");
document.writeln("														<span>密码管理</span>");
document.writeln("														<span class=\'iconfont icon-mima item-icon\'></span>");
document.writeln("													</a>");
document.writeln("												</div> -->");
document.writeln("												<div class=\'collapse-item\'>");
document.writeln("													<a id=\'permission-manage\' class=\'tc-menu\' href=\'#\'>");
document.writeln("														<span>用户角色与权限</span>");
document.writeln("														<span class=\'glyphicon glyphicon-user item-icon\'></span>");
document.writeln("													</a>");
document.writeln("												</div>");
document.writeln("											</div>");
document.writeln("										</div>");
document.writeln("									</div>");
document.writeln("								</div>");
document.writeln("							</div>");
document.writeln("						</div>");
document.writeln("					</li>");
document.writeln("				</ul>");
document.writeln("			</div>");
document.writeln("		</nav>");
document.writeln("		");
document.writeln("	</body>");
document.writeln("</html>");
document.writeln("");