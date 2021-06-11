function validateField() {
	var box = document.getElementById('email');
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var telephone = document.getElementById('telephone').value;


	var regx = /^([a-z 0-9 \. -]+)@([a-z 0-9 -]+)\.([a-z 0-9 \. -]{2,5}).([a-z 0-9]{2,8})?$/;
	if (regx.test(box.value) == false) {
		box.style.border = 'solid 2px red';
		return false;
		
	} else {
		alert(name + " \n" + email +" \n" + telephone );
		return true;
		
	}
}