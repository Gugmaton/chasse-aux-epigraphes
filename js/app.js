document.getElementById('first-name').addEventListener('blur', validerChampNom);
document.getElementById('last-name').addEventListener('blur', validerChampPrenom);
document.getElementById('adresse').addEventListener('blur', validerAdresse);
document.getElementById('ville').addEventListener('blur', validerVille);
document.getElementById('zip-code').addEventListener('blur', validerCodePostale);
document.getElementById('telephone').addEventListener('blur', validerTelephone);
document.getElementById('email').addEventListener('blur', validerCourriel);
document.getElementById('acceptationReglement').addEventListener('blur', validerCheckbox);


function validerChampNom(objEvenement) {
    const expCode = /[A-Za-z]+/;
    let erreurPrenom = document.getElementById("first-name-required");
    const refCible = objEvenement.currentTarget;
    if (!expCode.test(refCible.value)) {
        erreurPrenom.classList.remove("error");
    }
    if (expCode.test(refCible.value)) {
        erreurPrenom.innerHTML = "";
    }
}
function validerChampPrenom(objEvenement) {
    const expCode = /[A-Za-z]+/;
    let erreurNom = document.getElementById("last-name-required");
    const refCible = objEvenement.currentTarget;
    if (!expCode.test(refCible.value)) {
        erreurNom.classList.remove("error");
    }
    if (expCode.test(refCible.value)) {
        erreurNom.innerHTML = "";
    }
}
function validerAdresse(objEvenement) {
    const ADRESSE_REGEX = /[0-9]{1,4} [A-Za-z]/;
    let erreurEmail = document.getElementById("adresse-required");
    const refCible = objEvenement.currentTarget;
    if (!ADRESSE_REGEX.test(refCible.value)) {
        erreurEmail.classList.remove("error");
    }
    if (ADRESSE_REGEX.test(refCible.value)) {
        erreurEmail.innerHTML = "";
    }
}
function validerVille(objEvenement) {
    const VILLE_REGEX = /[A-Za-z]{4}/;
    let erreurEmail = document.getElementById("ville-required");
    const refCible = objEvenement.currentTarget;
    if (!VILLE_REGEX.test(refCible.value)) {
        erreurEmail.classList.remove("error");
    }
    if (VILLE_REGEX.test(refCible.value)) {
        erreurEmail.innerHTML = "";
    }
}
function validerCodePostale(objEvenement) {
    const postal = /[A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9]/;
    let erreurPostal = document.getElementById("zip-code-required");
    const refCible = objEvenement.currentTarget;
    if (!postal.test(refCible.value)) {
        erreurPostal.classList.remove("error");
    }
    if (postal.test(refCible.value)) {
        erreurPostal.innerHTML = "";
    }
}
function validerTelephone(objEvenement) {
    const TELEPHONE_REGEX = /^(\+\d{1,2}\s)?\(?\d{3}\)?\d{3}\d{4}$/;
    let erreurPostal = document.getElementById("telephone-required");
    const refCible = objEvenement.currentTarget;
    if (!TELEPHONE_REGEX.test(refCible.value)) {
        erreurPostal.classList.remove("error");
    }
    if (TELEPHONE_REGEX.test(refCible.value)) {
        erreurPostal.innerHTML = "";
    }
}
function validerCourriel(objEvenement) {
    const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let erreurEmail = document.getElementById("email-required");
    const refCible = objEvenement.currentTarget;
    if (!EMAIL_REGEX.test(refCible.value)) {
        erreurEmail.classList.remove("error");
    }
    if (EMAIL_REGEX.test(refCible.value)) {
        erreurEmail.innerHTML = "";
    }
}
function validerCheckbox(objEvenement) {
    let erreurEmail = document.getElementById("checkbox-required");
    const refCible = objEvenement.currentTarget;
    if (refCible.checked === false) {
        erreurEmail.classList.remove("error");
    }
    if (refCible.checked === true) {
        erreurEmail.innerHTML = "";
    }
}


function empecherEnvoiForm(objEvenement) {
    objEvenement.preventDefault();
}