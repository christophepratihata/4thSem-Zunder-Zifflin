var errorMessage = document.getElementById('errorMessage');

function validate() {
    if(!chkName())
        return;
    if(!chkEmail())
        return;
    if(!chkGender())
        return;
    if(!chkAddress())
        return;
    if(!chkCity())
        return;
    if(!checkedBox())
        return;
    errorMessage.innerHTML = "Register Success";
}

function chkName() {
    var name = document.getElementById('nameTxt').value;
    if(name == '') {
        errorMessage.innerHTML = 'Name must be filled';
        return false;
    }
    if(name.length < 3) {
        errorMessage.innerHTML = 'Name must be more than 3 characters';
        return false;
    }
    return true;
}

function chkEmail() {
    var email = document.getElementById('emailTxt').value;
    if(email == '') {
        errorMessage.innerHTML = 'Email must be filled';
        return false;
    }
    if(!email.endsWith('@email.com')) {
        errorMessage.innerHTML = 'Email must ends with "@email.com"';
        return false;
    }
    return true;
}

function chkGender() {
    var gender = document.getElementById('genderTxt').value;
    if(gender == '') {
        errorMessage.innerHTML = 'Gender must be choosen';
        return false;
    }
    return true;
}

function chkAddress() {
    var address = document.getElementById('addressTxt').value;
    if(address == '') {
        errorMessage.innerHTML = 'Address must be filled';
        return false;
    }
    if(address.length < 10) {
        errorMessage.innerHTML = "Address must be more than 10 characters";
        return false;
    }
    return true;
}

function chkCity() {
    var city = document.getElementById('cityTxt').value;
    if(city == '') {
        errorMessage.innerHTML = 'City must be filled';
        return false;
    }
    if(city.length < 2) {
        errorMessage.innerHTML = "City must be more than 2 characters";
        return false;
    }
    return true;
}

function checkedBox() {
    var checked = document.getElementById('checked').checked;
    if(!checked) {
        errorMessage.innerHTML = 'You must agree with the terms and condition'
        return false;
    }
    return true;
}