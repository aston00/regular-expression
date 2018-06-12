//form blur event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zipcode').addEventListener('blur', validateZipcode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName(){
    let name = document.getElementById('name');
    //SHoulkd be ltter between 2 and 10 times doesnt matter lovercase or uppercase
    let re = /^[A-Za-z]{2,10}$/;

    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateZipcode(){
    let zipcode = document.getElementById('zipcode');
    //SHoulkd be 5 numbers from 0-9 and after that optional dash(-)  4 numbers
    let re = /^[0-9]{5}(-[0-9]{4})?$/;

    if(!re.test(zipcode.value)){
        zipcode.classList.add('is-invalid');
    } else {
        zipcode.classList.remove('is-invalid');
    }
}

function validateEmail(){
    let email = document.getElementById('email');
    //SHoulkd be ltter between 2 and 10 times doesnt matter lovercase or uppercase
    let re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)){
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function validatePhone(){
    let phone = document.getElementById('phone');
    //Begining with literal '(' -optional => digit 3 times => optional ')' => optional '- or . or space' => another 3 digits => optional '-.  or space' => 4 more digits
    let re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}/;

    if(!re.test(phone.value)){
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}
