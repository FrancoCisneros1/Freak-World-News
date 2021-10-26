var spaceReg = /\s/;
var symbolsReg = /([@"'!_.?*+^$#])/;
var numbersReg = /[0-9]/;
var dotCom = /.com/;
var mailReg = /@/;
var subdomain = /(?<=@)[a-z]/;
var passReg = /[a-zA-Z]/;
var emailEx = /[a-zA-z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-z]+/gi

//Var Validation:
var nameV = document.getElementById('user_group')
var emailV = document.getElementById('email')
var passwV = document.getElementById('password')
var passw2V = document.getElementById('repeat_password')
var ageV = document.getElementById('age')
var phoneV = document.getElementById('phone')
var adressV = document.getElementById('adress')
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
var adressF = document.getElementById('adress_error')
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

//*
// Name validation
//*

function nameVal(){
    var spaceName = regularCheck(nameV, spaceReg);
    var numberName = regularCheck(nameV, numbersReg);
    var symbolName = regularCheck(nameV, symbolsReg);
    if (spaceName === 0 || numberName === 1 || symbolName === 1 || nameV.value.length < 6){
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

//*
//Email validation
//*
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

//*
//Password validation
//*
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

//*
//Password2 validation
//*

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

//*
//Age validation
//*

function ageVal(){
    if (ageV.value < 18){
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

//*
//Phone validation
//*

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

//*
//Adress validation
//*
//numbAdress 0 - spaceAdress 0 - letAdress 0 
//!error(???????)

function adressVal(){
    var numbAdress = regularCheck(adressV, numbersReg)
    var spaceAdress = regularCheck(adressV, spaceReg)
    var letAdress = regularCheck(adressV, passReg)
    if (numbAdress === 0 || spaceAdress === 0 || letAdress === 0 || adressV.value.length < 5){
        adressF.style.display = 'block';
    } else {
        return 0;
    }   
}
function adressErrorOff(){
    adressF.style.display = 'none'
}
adressV.addEventListener('blur', adressVal);
adressV.addEventListener('focus', adressErrorOff);

//*
// City validation
//*

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

//*
//Postal code validation
//*

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

//* 
//Dni validation
//*

function dniVal(){
    var numbDni = regularCheck(dniV, numbersReg)
    if (6 < dniV.value.length < 9 || numbDni === 0){
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

//*
//Form Validation
//

function errorForm (){
    var errors = ''
    if (nameVal() != 0){
        formF.style.display = 'block'
        errors = errors + '-Name '
    }  if (emailVal() != 0){
        formF.style.display = 'block'
        errors = errors + '-Email '
    }  if (passVal() != 0 ){
        formF.style.display = 'block'
        errors = errors + '-Password '
    }  if (pass2Val() != 0){
        formF.style.display = 'block'
        errors = errors + '-Repeat password '
    }  if (ageVal() != 0){
        formF.style.display = 'block'
        errors = errors + '-Age '
    }  if (phoneVal() != 0){
        formF.style.display = 'block'
        errors = errors + '-Phone '
    }  if (adressVal() != 0){
        formF.style.display = 'block'
        errors = errors + '-Adress '
    }  if (cityVal() != 0){
        formF.style.display = 'block'
        errors = errors + '-City '
    }  if (postVal() != 0){
        formF.style.display = 'block'
        errors = errors + '-Postal code '
    }  if (dniVal() != 0){
        formF.style.display = 'block'
        errors = errors + '-Dni '
    }  if (errors === ''){
        alert('Register succesfull')
    }  else {
        alert('You have errors in the form: ' + errors)
    }
}

formV.addEventListener('click', errorForm);