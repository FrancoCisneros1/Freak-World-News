window.onload = function(){
    var spaceReg = /\s/;
    var symbolsReg = /([@"'!_.?*+^$#])/;
    var numbersReg = /[0-9]/;
    var passReg = /[a-zA-Z]/;
    var emailEx = /[a-zA-z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-z]+/gi

    //Var Validation:
    var nameV = document.getElementById('user_group')
    var emailV = document.getElementById('email')
    var passwV = document.getElementById('password')
    var passw2V = document.getElementById('repeat_password')
    var ageV = document.getElementById('age')
    var phoneV = document.getElementById('phone')
    var addressV = document.getElementById('address')
    var cityV = document.getElementById('city')
    var postalV = document.getElementById('postalCode')
    var dniV = document.getElementById('dni')
    var formV = document.getElementById('submit')

    //Var Error:
    var nameF = document.getElementById('name_error')
    var emailF = document.getElementById('email_error')
    var passwF = document.getElementById('password_error')
    var passw2F = document.getElementById('password2_error')
    var ageF = document.getElementById('age_error')
    var phoneF = document.getElementById('phone_error')
    var addressF = document.getElementById('address_error')
    var cityF = document.getElementById('city_error')
    var postalF = document.getElementById('postalCode_error')
    var dniF = document.getElementById('dni_error')
    var formF = document.getElementById('formulary_error') 


    function regularCheck(a, b){
        if (a.value.match(b)){
            return 1;
        } else {
            return 0;
        }
    };

    //
    // Name validation
    //

    function nameVal(){
        var spaceName = regularCheck(nameV, spaceReg);
        var numberName = regularCheck(nameV, numbersReg);
        var symbolName = regularCheck(nameV, symbolsReg);
        if (spaceName === 0 || numberName === 1 || symbolName === 1 || nameV.value.length < 6 || nameV.value.length === 0){
            nameF.style.display = 'block'
            return 1;
        } else {
            return 0;
        }
    }

    function nameErrorOff(){
        nameF.style.display = 'none'
    } 
    nameV.addEventListener('blur', nameVal);
    nameV.addEventListener('focus', nameErrorOff);

    //
    //Email validation
    //
    // spaceEmail 1 - emailFormat 0 - 

    function emailVal(){
        var spaceEmail = regularCheck(emailV, spaceReg);
        var emailFormat = regularCheck(emailV, emailEx);
        if (spaceEmail === 1 || emailFormat === 0){
            emailF.style.display = 'block';
        } else {
            return 0;
        }
    }

    function emailErrorOff(){
        emailF.style.display = 'none'
    }
    emailV.addEventListener('blur', emailVal);
    emailV.addEventListener('focus', emailErrorOff);

    //
    //Password validation
    //
    // numbPass 0 - passReg 0
    function passVal(){
        var numbPass = regularCheck(passwV, numbersReg)
        var wordPass = regularCheck(passwV, passReg)
        if (numbPass === 0 || wordPass === 0 || passwV.value.length < 8){
            passwF.style.display = 'block';
        } else {
            return 0;
        }
    }
    function passErrorOff(){
        passwF.style.display = 'none'
    }
    passwV.addEventListener('blur', passVal);
    passwV.addEventListener('focus', passErrorOff);

    //
    //Password2 validation
    //

    function pass2Val(){
        if (passw2V.value !== passwV.value){
            passw2F.style.display = 'block';
        } else {
            return 0;
        }
    }
    function pass2ErrorOff(){
        passw2F.style.display = 'none'
    }
    passw2V.addEventListener('blur', pass2Val);
    passw2V.addEventListener('focus', pass2ErrorOff);

    //
    //Age validation
    //

    function ageVal(){
        var ageNum = regularCheck (ageV, numbersReg)
        if (ageV.value < 17 || ageNum === 0){
            ageF.style.display = 'block';
        } else {
            return 0;
        }
    }
    function ageErrorOff(){
        ageF.style.display = 'none'
    }
    ageV.addEventListener('blur', ageVal);
    ageV.addEventListener('focus', ageErrorOff);

    //
    //Phone validation
    //

    function phoneVal(){
        var numbPhone = regularCheck(phoneV, spaceReg)
        var simbolPhone = regularCheck(phoneV, symbolsReg)
        if (numbPhone === 1 || simbolPhone === 1 || phoneV.value.length < 7){
            phoneF.style.display = 'block';
        } else {
            return 0;
        }
    }
    function phoneErrorOff(){
        phoneF.style.display = 'none'
    }
    phoneV.addEventListener('blur', phoneVal);
    phoneV.addEventListener('focus', phoneErrorOff);

    //
    //address validation
    //
    //numbaddress 0 - spaceaddress 0 - letaddress 0 

    function addressVal(){
        var numbaddress = regularCheck(addressV, numbersReg)
        var spaceaddress = regularCheck(addressV, spaceReg)
        var letaddress = regularCheck(addressV, passReg)
        if (numbaddress === 0 || spaceaddress === 0 || letaddress === 0 || addressV.value.length < 5){
            addressF.style.display = 'block';
        } else {
            return 0;
        }   
    }
    function addressErrorOff(){
        addressF.style.display = 'none'
    }

    addressV.addEventListener('blur', addressVal);
    addressV.addEventListener('focus', addressErrorOff);

    //
    // City validation
    //

    function cityVal(){
        if (cityV.value.length < 3){
            cityF.style.display = 'block'
        } else {
            return 0;
        }
    }
    function cityErrorOff(){
        cityF.style.display = 'none'
    }
    cityV.addEventListener('blur', cityVal);
    cityV.addEventListener('focus', cityErrorOff);

    //
    //Postal code validation
    //

    function postVal(){
        if (postalV.value.length < 3){
            postalF.style.display = 'block'
        } else {
            return 0;
        }
    }
    function postalErrorOff(){
        postalF.style.display = 'none'
    }
    postalV.addEventListener('blur', postVal);
    postalV.addEventListener('focus', postalErrorOff);

    // 
    //Dni validation
    //

    function dniVal(){
        var numbDni = regularCheck(dniV, numbersReg)
        if (dniV.value.length < 7 || dniV.value.length > 8 || numbDni === 0 ){
            dniF.style.display = 'block'
        } else {
            return 0;
        }
    }
    function dniErrorOff(){
        dniF.style.display = 'none'
    }
    dniV.addEventListener('blur', dniVal);
    dniV.addEventListener('focus', dniErrorOff);

    //
    //Form Validation
    //

    function errorForm (){
        var errors = ''
        if (nameVal() != 0){
            formF.style.display = 'block'
            errors = errors + '-Name: It must have more than 6 letters and at least one space in between. \n '
        }  if (emailVal() != 0){
            formF.style.display = 'block'
            errors = errors + '-Email: Wrong email format. \n '
        }  if (passVal() != 0 ){
            formF.style.display = 'block'
            errors = errors + '-Password: It must have more than 8 letters and numbers. \n '
        }  if (pass2Val() != 0){
            formF.style.display = 'block'
            errors = errors + '-Repeat password: Password does not match. \n '
        }  if (ageVal() != 0){
            formF.style.display = 'block'
            errors = errors + '-Age: Whole number greater than or equal to 18.\n '
        }  if (phoneVal() != 0){
            formF.style.display = 'block'
            errors = errors + '-Phone: Number of at least 7 digits, do not accept spaces, hyphens or parentheses.\n '
        }  if (addressVal() != 0){
            formF.style.display = 'block'
            errors = errors + '-Address: At least 5 characters, with letters, numbers and a space in between. \n '
        }  if (cityVal() != 0){
            formF.style.display = 'block'
            errors = errors + '-City: It must have a minimum of 3 characters. \n'
        }  if (postVal() != 0){
            formF.style.display = 'block'
            errors = errors + '-Postal code: It must have a minimum of 3 characters. \n '
        }  if (dniVal() != 0){
            formF.style.display = 'block'
            errors = errors + '-Dni: It must have more than 7 ur 8 numbers.\n '
        }  if (errors === ''){
            alert('Register succesfull')
            return errors;
        }  else {
            alert('You have errors in the form: ' + errors)
            return errors;
        }
    }

    //formV.addEventListener('click', errorForm);

    //Modal

    var modalGroup = document.getElementById('modal')
    var modalClose = document.getElementById('modal_close')

    modalClose.addEventListener('click', closeModal);

    function closeModal () {
        modalGroup.style.display = 'none'
    }


    //http?
    var modalTitle = document.getElementById('titleModal')
    var modalData = document.getElementById('modalData')

    //Modal Error function
    function errorModal(err) {
        modal.style.display = 'block';
        modalTitle.innerText = 'Oopps we are having a error! Please try again.';
        modalData.innerText = `${err}`;
    }

    function successufullModal(data) {
        var jsonToString = JSON.stringify(data);
        modal.style.display = 'block';
        modalTitle.innerText = 'Your register is completed!';
        //modalData.innerHTML = `<li>${jsonToString}</li>`;
        window.localStorage.setItem('nameStorage', nameV.value);
        window.localStorage.setItem('emailStorage', emailV.value);
        window.localStorage.setItem('ageStorage', ageV.value);
        window.localStorage.setItem('phoneStorage', phoneV.value);
        window.localStorage.setItem('addresStorage', addressV.value);
        window.localStorage.setItem('dniStorage', dniV.value);
        window.localStorage.setItem('cityStorage', cityV.value);
        window.localStorage.setItem('postalStorage', postalV.value);
    }

    formV.onclick = function (){
        var url = `https://curso-dev-2021.herokuapp.com/newsletter?name=${nameV.value}&email=${emailV.value}&age=${ageV.value}&phone=${phoneV.value}&address=${addressV.value}&city=${cityV.value}&postalcode=${postalV.value}&dni=${dniV.value}`;
        fetch(url)
            .then(
                function (res) {
                    if (res.status === 200){
                    return res.json();
                    } else{
                        return res.text()
                        .then (function(msg){
                            throw new Error(msg);
                        })
                    }
            })
            .then(function (data){
                errorList = errorForm();
                console.log('entro', data)
                if (errorList === '' ){
                    successufullModal(data);}
                else{                 
                    throw errorList;
                }
            })
            .catch(function (err) {
                errorModal(err);
            })
        }

    function getLocalStorage() {
        var currentUserName = localStorage.getItem('nameStorage');
        var currentUserEmail = localStorage.getItem('emailStorage');
        var currentUserAge = localStorage.getItem('ageStorage');
        var currentUserPhone = localStorage.getItem('phoneStorage');
        var currentUserAddress = localStorage.getItem('addressStorage');
        var currentUserCity = localStorage.getItem('cityStorage');
        var currentUserPostal= localStorage.getItem('postalStorage');
        var currentUserDni = localStorage.getItem('dniStorage');
 
        nameV.value = currentUserName;
        emailV.value = currentUserEmail;
        ageV.value = currentUserAge;
        phoneV.value = currentUserPhone;
        addressV.value = currentUserAddress;
        cityV.value = currentUserCity;
        postalV.value = currentUserPostal;
        dniV.value = currentUserDni;
    
    }
    getLocalStorage();
}