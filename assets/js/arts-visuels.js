// Fonctions utilitaires

/**
 * Obtenir la valeur d'un des paramètres (QueryParam) dans l'URL
 * @param {string} strParam - Nom du paramètre à rechercher dans l'URL
 * @returns {string} - Valeur correspondant au paramètre. 
 *                     Retourne null lorsqu'aucune valeur n'est trouvée.
 */
function obtenirValeurUrlParam(strParam) {
    return new URLSearchParams(window.location.search).get(strParam);
}

// Déclaration d'objet(s)
const objFicheArtsVisuels = {
    /**
     * Cette méthode permet d'intégrer les contenus dynamiques provenant du JSON
     */
    
    initialiser: function () {
       
        // Prénom et nom dynamiques
        const intIdFicheCourante = obtenirValeurUrlParam('id');
        const objEpigrapheCourante = objJSONepigraphes[intIdFicheCourante];
        const refPrenom = document.getElementById("prenom");
        const refNom = document.getElementById("nom");
        const refDomaine = document.getElementById("domaine");
        // IMAGE
        const refTitreImage = document.getElementById("titre_image");
        const refCreditPhoto = document.getElementById("credit_image");
        // NOTES BIO
        const refNotesBio = document.getElementById("p__biographie");
        // LOCALISATION
        const refArrondissement = document.getElementById("arrondissement");
        const refQuartier = document.getElementById("quartier");
        const refAdresse = document.getElementById("adresse");
        // PLAQUE COMMÉMORATIVE
        const refDescPlaque = document.getElementById("transcript");
        // CAPSULE SONORE
        const refSonore = document.getElementById("audio_url");
        const refPreambuleSonore = document.getElementById("audio_preambule");
        const refTranscriptionSonore = document.getElementById("audio_transcription");
        const refCreditAudio = document.getElementById("audio_credit");


         // ÉCRIRE LE CONTENU DU JSON DANS LES ÉLÉMENTS HTML CIBLÉS.
        refPrenom.innerHTML = objJSONepigraphes[intIdFicheCourante].PRENOM;
        refNom.innerHTML = objJSONepigraphes[intIdFicheCourante].NOM;
        refDomaine.innerHTML = objJSONepigraphes[intIdFicheCourante].DOMAINE;
        // IMAGE
        refTitreImage.innerHTML = objJSONepigraphes[intIdFicheCourante].IMAGE.TITRE;
        refCreditPhoto.innerHTML = objJSONepigraphes[intIdFicheCourante].IMAGE.CREDIT;
        // NOTES BIO
        refNotesBio.innerHTML = objJSONepigraphes[intIdFicheCourante].BIOGRAPHIE;
        // LOCALISATION
        refArrondissement.innerHTML = objJSONepigraphes[intIdFicheCourante].ARRONDISSEMENT;
        refQuartier.innerHTML = objJSONepigraphes[intIdFicheCourante].QUARTIER;
        refAdresse.innerHTML = objJSONepigraphes[intIdFicheCourante].ADRESSE;
        // PLAQUE COMMÉMORATIVE
        refDescPlaque.innerHTML = objJSONepigraphes[intIdFicheCourante].PLAQUE_TRANSCRIPTION;
        // CAPSULE SONORE
        refSonore.src = objJSONepigraphes[intIdFicheCourante].AUDIO.URL;
        refSonore.load();
        refPreambuleSonore.innerHTML = objJSONepigraphes[intIdFicheCourante].AUDIO.DESCRIPTION;
        refTranscriptionSonore.innerHTML = objJSONepigraphes[intIdFicheCourante].AUDIO.TRANSCRIPTION;
        refCreditAudio.innerHTML = objJSONepigraphes[intIdFicheCourante].AUDIO.CREDIT;
        // LIEN DES IMAGES
        document.getElementById("url_image").src = `../assets/images/personnages/${intIdFicheCourante}_chasse.jpg`; 
        document.getElementById("carteZoom").src = `../assets/images/zoomGoogleMaps/${intIdFicheCourante}-zoom-google-maps.png`;
        document.getElementById("url_plaque").src = `../assets/images/epigraphes/${intIdFicheCourante}_plaque.jpg`; 
        
    

        // LOCAL STORAGE QUI VA SERVIR POUR GOOGLE MAP
        localStorage.setItem(intIdFicheCourante, true);
        
    },
    // verifierIndice: function (){
    //     const intIdFicheCourante = obtenirValeurUrlParam('id');
    //     const refBtnRadio = document.querySelector("input[name=formChasse]:checked");
    //     if (localStorage.id_personnage == undefined){
    //         document.getElementById("message").innerHTML = "Aucune chasse en cours. Si vous désirez débuter une chasse, visitez la page <a href='../chasse/index.html'>Chasse</a>";
    //     }else{

    //         if (refBtnRadio === null){
    //             document.getElementById("message").innerHTML = "Choisissez un indice";
    //             console.log(refBtnRadio);
    //         }else{
                
    //             if (refBtnRadio.value == "personnage"){
    //                 if (intIdFicheCourante == localStorage.id_personnage){
    //                     document.getElementById("message").innerHTML = "Bravo! Vous avez trouvé " + objJSONepigraphes[localStorage.id_personnage].CHASSE.REPONSE;
    //                     localStorage.personne_est_trouve = true;
    //                 }else{
    //                     document.getElementById("message").innerHTML = "Désolé. Ce n’est pas le bon indice.";
    //                 }
    //             }
    //             if (refBtnRadio.value == "objet"){
    //                 if (intIdFicheCourante == localStorage.id_objet){
    //                     document.getElementById("message").innerHTML = "Bravo! Vous avez trouvé " + objJSONepigraphes[localStorage.id_objet].CHASSE.REPONSE;
    //                     localStorage.objet_est_trouve = true;
    //                 }else{
    //                     document.getElementById("message").innerHTML = "Désolé. Ce n’est pas le bon indice.";
    //                 }
    //             }
    //             if (refBtnRadio.value == "lieu"){
    //                 if (intIdFicheCourante == localStorage.id_lieu){
    //                     localStorage.lieu_est_trouve = true;
    //                     document.getElementById("message").innerHTML = "Bravo! Vous avez trouvé " + objJSONepigraphes[localStorage.id_lieu].CHASSE.REPONSE;
    //                 }else{
    //                     document.getElementById("message").innerHTML = "Désolé. Ce n’est pas le bon indice.";
    //                 }
    //             }
    //         }
    //     }
    // },
}

objFicheArtsVisuels.initialiser();
// document.getElementById("btnSoumettre").addEventListener("click", function (){objFicheArtsVisuels.verifierIndice()});