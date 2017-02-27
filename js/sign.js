/*根据用户注册等级，切换注册界面*/
var signtarget;
var sign_i;
function sign_rank_slider(item_value){
	signtarget = document.getElementsByClassName('sign-body-window');
	rank_num = parseInt(item_value);
	signtarget[rank_num].style.display='block';
	for(sign_i=0;sign_i<3;sign_i++){
		if(sign_i!=rank_num){
			signtarget[sign_i].style.display='none';
		}
	}
}