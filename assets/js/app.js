document.getElementById('first-name').addEventListener('blur', validerChampPrenom);
document.getElementById('last-name').addEventListener('blur', validerChampNom);
document.getElementById('adresse').addEventListener('blur', validerAdresse);
document.getElementById('ville').addEventListener('blur', validerVille);
document.getElementById('zip-code').addEventListener('blur', validerCodePostale);
document.getElementById('telephone').addEventListener('blur', validerTelephone);
document.getElementById('email').addEventListener('blur', validerCourriel);
document.getElementById('acceptationReglement').addEventListener('blur', validerCheckbox);

/*AVERTISSEMENT ICONE*/
const strIconeAvertissement = `<span>
    <span class="screen-reader-only">Avertissement</span>
    <span class="icone icone--erreur" aria-hidden="true"></span>
</span>`;

/**
  * Valide le champ prénom à partir de l'attribut HTML pattern appliqué sur le <input>
  * @param {FocusEvent} objEvenement 
  */
function validerChampPrenom(objEvenement) {
    const RefCible = objEvenement.currentTarget;
    console.log(RefCible);
    const strMotif = RefCible.pattern;
    const regex = new RegExp(`^${strMotif}$`);
    const blnValide = regex.test(RefCible.value);
    if (RefCible.value === "") {
        RefCible.closest('.field').querySelector('.messageErreur').innerHTML = strIconeAvertissement + objJSONMessagesErreur[RefCible.id].motif;
    }
    else if (blnValide === false) {
        RefCible.closest('.field').querySelector('.messageErreur').innerHTML = strIconeAvertissement + objJSONMessagesErreur[RefCible.id].mauvais;
    }
    else {
        RefCible.closest('.field').querySelector('.messageErreur').innerHTML = "";
    }


}
function validerChampNom(objEvenement) {
    const RefCible = objEvenement.currentTarget;
    console.log(RefCible);
    const strMotif = RefCible.pattern;
    const regex = new RegExp(`^${strMotif}$`);
    const blnValide = regex.test(RefCible.value);
    if (RefCible.value === "") {
        RefCible.closest('.field').querySelector('.messageErreur').innerHTML = strIconeAvertissement + objJSONMessagesErreur[RefCible.id].motif;
    }
    else if (blnValide === false) {
        RefCible.closest('.field').querySelector('.messageErreur').innerHTML = strIconeAvertissement + objJSONMessagesErreur[RefCible.id].mauvais;
    }
    else {
        RefCible.closest('.field').querySelector('.messageErreur').innerHTML = "";
    }
}
function validerAdresse(objEvenement) {
    const RefCible = objEvenement.currentTarget;
    console.log(RefCible);
    const strMotif = RefCible.pattern;
    const regex = new RegExp(`^${strMotif}$`);
    const blnValide = regex.test(RefCible.value);
    if (RefCible.value === "") {
        RefCible.closest('.field').querySelector('.messageErreur').innerHTML = strIconeAvertissement + objJSONMessagesErreur[RefCible.id].motif;
    }
    else if (blnValide === false) {
        RefCible.closest('.field').querySelector('.messageErreur').innerHTML = strIconeAvertissement + objJSONMessagesErreur[RefCible.id].mauvais;
    }
    else {
        RefCible.closest('.field').querySelector('.messageErreur').innerHTML = "";
    }
}
function validerVille(objEvenement) {
    const RefCible = objEvenement.currentTarget;
    console.log(RefCible);
    const strMotif = RefCible.pattern;
    const regex = new RegExp(`^${strMotif}$`);
    const blnValide = regex.test(RefCible.value);
    if (RefCible.value === "") {
        RefCible.closest('.field').querySelector('.messageErreur').innerHTML = strIconeAvertissement + objJSONMessagesErreur[RefCible.id].motif;
    }
    else if (blnValide === false) {
        RefCible.closest('.field').querySelector('.messageErreur').innerHTML = strIconeAvertissement + objJSONMessagesErreur[RefCible.id].mauvais;
    }
    else {
        RefCible.closest('.field').querySelector('.messageErreur').innerHTML = "";
    }
}
function validerCodePostale(objEvenement) {
    const RefCible = objEvenement.currentTarget;
    console.log(RefCible);
    const strMotif = RefCible.pattern;
    const regex = new RegExp(`^${strMotif}$`);
    const blnValide = regex.test(RefCible.value);
    if (RefCible.value === "") {
        RefCible.closest('.field').querySelector('.messageErreur').innerHTML = strIconeAvertissement + objJSONMessagesErreur[RefCible.id].motif;
    }
    else if (blnValide === false) {
        RefCible.closest('.field').querySelector('.messageErreur').innerHTML = strIconeAvertissement + objJSONMessagesErreur[RefCible.id].mauvais;
    }
    else {
        RefCible.closest('.field').querySelector('.messageErreur').innerHTML = "";
    }
}
function validerTelephone(objEvenement) {
    const RefCible = objEvenement.currentTarget;
    console.log(RefCible);
    const strMotif = RefCible.pattern;
    const regex = new RegExp(`^${strMotif}$`);
    const blnValide = regex.test(RefCible.value);
    if (RefCible.value === "") {
        RefCible.closest('.field').querySelector('.messageErreur').innerHTML = strIconeAvertissement + objJSONMessagesErreur[RefCible.id].motif;
    }
    else if (blnValide === false) {
        RefCible.closest('.field').querySelector('.messageErreur').innerHTML = strIconeAvertissement + objJSONMessagesErreur[RefCible.id].mauvais;
    }
    else {
        RefCible.closest('.field').querySelector('.messageErreur').innerHTML = "";
    }
}
function validerCourriel(objEvenement) {
    const RefCible = objEvenement.currentTarget;
    console.log(RefCible);
    const strMotif = RefCible.pattern;
    const regex = new RegExp(`^${strMotif}$`);
    const blnValide = regex.test(RefCible.value);
    if (RefCible.value === "") {
        RefCible.closest('.field').querySelector('.messageErreur').innerHTML = strIconeAvertissement + objJSONMessagesErreur[RefCible.id].motif;
    }
    else if (blnValide === false) {
        RefCible.closest('.field').querySelector('.messageErreur').innerHTML = strIconeAvertissement + objJSONMessagesErreur[RefCible.id].mauvais;
    }
    else {
        RefCible.closest('.field').querySelector('.messageErreur').innerHTML = "";
    }
}
function validerCheckbox(objEvenement) {
    const RefCible = objEvenement.currentTarget;
    const strMotif = RefCible.pattern;
    if (RefCible.checked === false) {
        RefCible.closest('.field').querySelector('.messageErreur').innerHTML = strIconeAvertissement + "Veuillez accepter le règlement";
    }
}


function empecherEnvoiForm(objEvenement) {
    objEvenement.preventDefault();
}