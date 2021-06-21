var errorMessage = document.getElementById('errorMessage');

function validate() {
    if(!chkName())
        return;
    if(!chkEmail())
        return;
    if(!chkMessage())
        return;
    errorMessage.innerHTML = "Message submited!"
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

function chkMessage() {
    var message = document.getElementById('messageTxt').value;
    if(message == '') {
        errorMessage.innerHTML = 'Message must be filled';
        return false;
    }
    return true;
}