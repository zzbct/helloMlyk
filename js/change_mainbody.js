
function changeMainbodyTo(sd){
	$('#main-body-change').load('../src/disease_database/head.html');
	var sig = $(sd).attr('value');
	if(document.readyState=='complete'){
		filterMov1(sig);
	}
}
function changeMainbodyToHome(){
	$('#main-body-change').load('../src/Main_page.html');
}
function changeMainbodyToSign(){
	$('#main-body-change').load('../src/sign.html');
}
function changeMainbodyToLogin(){
	$('#main-body-change').load('../src/login.html');
}
function changeMainbodyToFund(){
	$('#main-body-change').load('../src/fund.html');
}
function changeMainbodyToCompliantbox(){
	$('#main-body-change').load('../src/compliant_box.html');
}
function changeMainbodyToUpmov(){
	$('#main-body-change').load('../src/updating_mov.html');
}
function changeMainbodyToUparticle(){
	$('#main-body-change').load('../src/updating_article.html');
}
function changeMainbodyToHead(){
	$('#main-body-change').load('../src/disease_database/head.html');
}
function changeMainbodyToAbdomen(){
	$('#main-body-change').load('../src/disease_database/abdomen.html');
}
function changeMainbodyToNeck(){
	$('#main-body-change').load('../src/disease_database/neck.html');
}
function changeMainbodyToWaist(){
	$('#main-body-change').load('../src/disease_database/waist.html');
}
function changeMainbodyToHip(){
	$('#main-body-change').load('../src/disease_database/hip.html');
}
function changeMainbodyToArmandleg(){
	$('#main-body-change').load('../src/disease_database/armAndleg.html');
}
function changeMainbodyToSkin(){
	$('#main-body-change').load('../src/disease_database/skin.html');
}
function changeMainbodyToBack(){
	$('#main-body-change').load('../src/disease_database/back.html');
}
function changeMainbodyToHair(){
	$('#main-body-change').load('../src/disease_database/hair.html');
}
function changeMainbodyToOther(){
	$('#main-body-change').load('../src/disease_database/otherArea.html');
}
function changeMainbodyToHth(){
	$('#main-body-change').load('../src/commucation/heardToheard.html');
}
function changeMainbodyToO_req(){
	$('#main-body-change').load('../src/commucation/open_req.html');
}
function changeMainbodyToS_req(){
	$('#main-body-change').load('../src/commucation/solve_req.html');
}

