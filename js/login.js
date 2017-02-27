/*  mp_obj：个人中心对象
	sign_obj:"注册链接"对象
	login_obj:"登录链接"对象
*/
function login_req(){
	var mp_obj = document.getElementById("memberpage-link");
	var sign_obj = document.getElementById("sign-link");
	var login_obj = document.getElementById("login-link");
	mp_obj.style.display = 'block';
	sign_obj.style.display = 'none';
	login_obj.style.display = 'none';
	changeMainbodyToHome();
}