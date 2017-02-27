var mov_num = 6;
var target;
var movArray = new Array(6);
var infoArray = new Array(6);
movArray[0] = '../image/bg-img0.jpg';
movArray[1] = '../image/bg-img1.jpg';
movArray[2] = '../image/bg-img2.jpg';
movArray[3] = '../image/bg-img3.jpg';
movArray[4] = '../image/bg-img4.jpg';
movArray[5] = '../image/bg-img5.jpg';
infoArray[0] = '作为 CSS 的一种扩展，Less 不仅完全兼容 CSS 语法，'+
			 '而且连新增的特性也是使用 CSS 语法。这样的设计使得学习'+
			 ' Less 很轻松，而且你可以在任何时候回退到 CSS。';
infoArray[1] = '可以在 CSS 预处理器中声明变量，并在整个样式单中使用，'
			'支持任何类型的变量，例如颜色、数值（不管是否包括单位）、'+
			'文本。然后你可以任意引用该变量。';
infoArray[2] = 'Mixins 有点像是函数或者是宏，当你某段 CSS 经常需要在'+
			'多个元素中使用时，你可以为这些共用的 CSS 定义一个 Mixin,'+
			'然后你只需要在需要引用这些 CSS 地方调用该 Mixin 即可';
infoArray[3] = 'CSS 预处理器一般都会内置一些颜色处理函数用来对颜色值进行'+
			'处理，例如加亮、变暗、颜色梯度等。';
infoArray[4] = '要生成具有 3D 效果的文本可以使用 text-shadows ，唯一的问题'+
			'就是当要修改颜色的时候就非常的麻烦，而通过 mixin 和颜色函数可以'+
			'很轻松的实现';
infoArray[5] = 'merge 特性能够聚合多个属性从而形成一个用逗号分隔的单一属性。'+
			'merge 对于像 background 和 transform 这类属性非常有用';
function slide_Pre(){
	movtarget = document.getElementById("mov-slider");
	infotarget = document.getElementById("info-slider");
	pos = parseInt(movtarget.value);
	if(pos>0){
		movtarget.src = movArray[pos-1];
		infotarget.innerHTML = infoArray[pos-1];
		movtarget.value = (pos-1).toString();
	}
	else{
		movtarget.src = movArray[5];
		infotarget.innerHTML=infoArray[5];
		movtarget.value = '5'
	}
}
function slide_Next(){
	movtarget = document.getElementById("mov-slider");
	infotarget = document.getElementById("info-slider");
	pos = parseInt(movtarget.value);
	if(pos<5){
		movtarget.src = movArray[pos+1];
		infotarget.innerHTML = infoArray[pos+1];
		movtarget.value = (pos+1).toString();
	}
	else{
		movtarget.src=movArray[0];
		infotarget.innerHTML=infoArray[0];
		movtarget.value = '0'
	}
}