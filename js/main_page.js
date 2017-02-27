/*控制main_page.html中右侧栏的显示和隐藏*/
function hideOrshow_charts(controlObj){
	var target_state = document.getElementById('main-right').style.display;
	if(target_state=='block'){
		document.getElementById('main-right').style.display='none';
		document.getElementById('main-body-right').style.width=20+'px';
		controlObj.src='../image/show-icon0.jpg';
	}
	else{
		document.getElementById('main-right').style.display='block';
		document.getElementById('main-body-right').style.width='25%';
		controlObj.src='../image/hide-icon0.jpg';
	}
}