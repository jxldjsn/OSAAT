<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!doctype html>
<html>
<head>
<meta name="viewport"
	content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>我的私人音乐</title>
<link rel="stylesheet" type="text/css" href="Css/allmymusic.css" />
<link rel="stylesheet" type="text/css" href="Css/allmymusictable.css" />
<link rel="stylesheet" type="text/css"
	href="Css/allmymusicstickysort.css" />
<script type="text/javascript" language="javascript"
	src="Js/allmymusic.js"></script>
</head>

<body>
	<div id="WZYmusic">
		我的私人音乐

		<p align="right" style="margin-top: -65px;">
			<a href="musicupload.jsp" class="btn twitter"> <i
				class="icons fi-social-twitter"></i> <span class="text">
					上传我的音乐 </span>
			</a> <span>&nbsp;&nbsp;</span> <a href="MusicIndex.action" class="btn twitter"> <i
				class="icons fi-social-twitter"></i> <span class="text">
					音乐 </span>
			</a> &nbsp;
		</p>
	</div>

	<div id="mymusiccontent">
		<div class="demo" id="basic">
			<table>
				<thead>
					<tr>
						<th>音乐图片</th>
						<th>歌手姓名</th>
						<th>音乐标题</th>
						<th>操作</th>

					</tr>
				</thead>
				<tfoot>
					<tr>
						<th>音乐图片</th>
						<th>歌手姓名</th>
						<th>音乐标题</th>
						<th>操作</th>

					</tr>
				</tfoot>
				<tbody>
					<c:forEach items="${songlist}" var="item" varStatus="status">
						<tr>
							<td class="user-avatar"><img src="<%=basePath %>OSAAT/music/Images/${item.imagesrc}"
								alt="samantha morgan" title="samantha morgan" /></td>
							<td class="user-name">${item.songer}</td>
							<td class="user-email">${item.songname}</td>
							<td class="user-phone">
								<form action="MusicDelete.action" method="post">
									<input type="hidden" value="${item.songid}" name="songId" > 
									<input type="submit"
										class="btnsubmit" value="删 除"
										onmouseover="this.style.backgroundPosition='left -36px'"
										onmouseout="this.style.backgroundPosition='left top'" />
								</form>
							</td>
						</tr>
					</c:forEach>
					
				</tbody>
			</table>
		</div>
	</div>

	<div id="WZYmusicfoolter">
		<p align="center">版权所有@WZY</p>
	</div>

	<script src="Js/jquery-2.1.1.min.js"
		type="text/javascript"></script>
	<script>
		window.jQuery
				|| document
						.write('<script src="Js/jquery-2.1.1.min.js"><\/script>')
	</script>
	<script
		src="http://cdnjs.cloudflare.com/ajax/libs/jquery-throttle-debounce/1.1/jquery.ba-throttle-debounce.min.js"></script>
	<script type="text/javascript" src="Js/jquery.stickysort.js"></script>

	<script>
		$(function() {
			// We select for tables universally - you can change the selector to target the tables you want
			// Basic table
			$('#basic table').stickySort();

			// Basic table with sort
			$('#basic-sort table').stickySort({
				sortable : true
			});

			// Biaxial
			$('#biaxial .bx1').stickySort();
			$('#biaxial .bx2').stickySort({
				sortable : true
			});

			// Final
			$('#final table').stickySort({
				sortable : true
			});

			// The codes below has no impact on the functionality of StickySort functionality
			//-----------------------------------------------------------------------------------------------------------------
			// Smooth scrolling plugin by Chris Coiyer
			// Source: http://css-tricks.com/snippets/jquery/smooth-scrolling/
			$('a[href*=#]:not([href=#])')
					.click(
							function() {
								if (location.pathname.replace(/^\//, '') == this.pathname
										.replace(/^\//, '')
										&& location.hostname == this.hostname) {
									var target = $(this.hash);
									target = target.length ? target
											: $('[name=' + this.hash.slice(1)
													+ ']');
									if (target.length) {
										$('html,body').animate({
											scrollTop : target.offset().top
										}, 1000);
										return false;
									}
								}
							});

			// Section toggle
			$('section.demo h2')
					.append(
							'<a href="#" title="Collapse section" class="toggle">Collapse</a>')
					.on(
							'click',
							'a',
							function(e) {
								e.preventDefault();
								if (!$(this).data('state')
										|| $(this).data('state') == 0) {
									$(this).data('state', 1).attr('title',
											'Expand section').text('Expand')
											.parent().siblings().stop(true,
													true).slideUp();
								} else {
									$(this).data('state', 0).attr('title',
											'Collapse section')
											.text('Collapse').parent()
											.siblings().stop(true, true)
											.slideDown();
								}
							});

			// Unrelated to sticky header function
			$('table')
					.each(
							function() {
								if ($(this).attr('data-color') != undefined) {
									$(this)
											.find('tbody td')
											.each(
													function() {
														if ($(this).text()
																.match(/^\d+$/)) {
															$(this)
																	.css(
																			{
																				'background-color' : 'hsl('
																						+ parseInt($(
																								this)
																								.text())
																						+ ',75%,85%)'
																			});
														}
													});
								}
							});
		});
	</script>

</body>
</html>
