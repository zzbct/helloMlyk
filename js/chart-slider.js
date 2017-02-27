var chartArray = new Array(3);
var chart1Array = new Array(3);
chartArray[0] = "q-month-table";
chartArray[1] = "q-week-table";
chartArray[2] = "q-day-table";
chart1Array[0] = "h-month-table";
chart1Array[1] = "h-day-table";
chart1Array[2] = "h-week-table";
var flag;
var flag1;
var listen;
var listen1;
var i = 0;
var j = 0;
var k = 0;
function chartSlide(){
	listen = hasMouseInQchart(0);
	listen1 = hasMouseInQchart(1);
	if(listen!=0 && listen1!=1)
	{
		flag = document.getElementById(chartArray[i]);
		flag.style.display='none';
		i++;
		if(i==3){
			i=0;
		}
		flag = document.getElementById(chartArray[i]);
		flag.style.display='block';
		flag = document.getElementById(chartArray[i]);
		flag.style.display='none';
		i++;
		if(i==3){
			i=0;
		}
		flag = document.getElementById(chartArray[i]);
		flag.style.display='block';
		flag1 = document.getElementById(chart1Array[j]);
		flag1.style.display='none';
		j++;
		if(j==3){
		j=0;
		}
		flag1 = document.getElementById(chart1Array[j]);
		flag1.style.display='block';
		setTimeout("chartSlide()",2000);
	}
	else if(listen==0){
		flag1 = document.getElementById(chart1Array[j]);
		flag1.style.display='none';
		j++;
		if(j==3){
		j=0;
		}
		flag1 = document.getElementById(chart1Array[j]);
		flag1.style.display='block';
		setTimeout("chartSlide()",2000);
	}
	else if(listen1==1){
		flag = document.getElementById(chartArray[i]);
		flag.style.display='none';
		i++;
		if(i==3){
			i=0;
		}
		flag = document.getElementById(chartArray[i]);
		flag.style.display='block';
		flag = document.getElementById(chartArray[i]);
		flag.style.display='none';
		i++;
		if(i==3){
			i=0;
		}
		flag = document.getElementById(chartArray[i]);
		flag.style.display='block';
		setTimeout("chartSlide()",2000);
	}
}
/*替换id*/
function chartSlide1(){
	flag = document.getElementById(chartArray[i]);
	if(i==2){
		i=-1;
	}
	i++;
	flag.setAttribute("id",chartArray[i]);
	setTimeout("chartSlide1()",1000);
}
/*鼠标进入时修改value值*/
function changeValue0_in(){
	var divArray = document.getElementsByClassName("item");
	divArray[0].value='0';
}
function changeValue1_in(){
	var divArray1 = document.getElementsByClassName("item");
	divArray1[1].value='1';
}
function changeValue0_out(){
	var divArray1 = document.getElementsByClassName("item");
	divArray1[0].value='87';
}
function changeValue1_out(){
	var divArray1 = document.getElementsByClassName("item");
	divArray1[1].value='88';
}
/*通过检测value值，确定鼠标悬停时的效果*/
function hasMouseInQchart(div_id){
	var divArray = document.getElementsByClassName("item");
	var state_id = parseInt(divArray[div_id].value);
	return state_id;
}