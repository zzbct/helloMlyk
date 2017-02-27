function showMainmenu(idd){
	var target = document.getElementsByClassName('mm-2');
	if(target[idd].style.display=='block'){
		target[idd].style.display='none';
	}
	else{
		target[idd].style.display='block';
	}
}