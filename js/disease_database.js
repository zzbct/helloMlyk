function filterMov(filterObj){
	/*j将点击的选项颜色置为绿色，其余为黑色*/
	filterObj.style.color='#82B486';
	var className=$(filterObj).attr("class");
	var eventObj = document.getElementsByClassName(className);
	var eventObj_len = eventObj.length;
	var fv=$(filterObj).attr("value");
	for(var eindex=0;eindex<eventObj_len;eindex++){
		var ev=$(eventObj[eindex]).attr('value');
		if(ev!=fv){
			eventObj[eindex].style.color='#000000';
		}
	}
	/*筛选信息*/
	var wholeObj = document.getElementsByClassName("mov-list");
	var wholeObj_len = wholeObj.length;
	for(var w_index=0;w_index<wholeObj_len;w_index++){
		var wv=$(wholeObj[w_index]).attr("value");
		if(wv==fv){
			wholeObj[w_index].style.display='block';
		}
		else{
			wholeObj[w_index].style.display='none';
		}
	}
}
function filterMov1(filter){
	alert('run man!');
	var wholeObj = document.getElementsByClassName("mov-list");
	var wholeObj_len = wholeObj.length;
	for(var w_index=0;w_index<wholeObj_len;w_index++){
		var wv=$(wholeObj[w_index]).attr("value");
		if(wv==filter){
			wholeObj[w_index].style.display='block';
		}
		else{
			wholeObj[w_index].style.display='none';
		}
	}
}