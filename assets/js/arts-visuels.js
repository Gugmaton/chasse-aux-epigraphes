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
    intIdFicheCourante: obtenirValeurUrlParam('id'),
    refPrenom: document.getElementById("prenom"),
    refNom: document.getElementById("nom"),
    refPremierP: document.querySelector("section p"),
    refImageTitre: document.getElementById("titre_image"),
    refImageCredit: document.getElementById("credit_image"),
    refNoteBiographique: document.querySelector("#notes_biographiques p"),
    refArrondissement: document.getElementById("arrondissement"),
    refQuartier: document.getElementById("quartier"),
    refAdresse: document.getElementById("adresse"),
    refTranscription: document.getElementById("transcript"),
    refAudioDescription: document.getElementById("audio_preambule"),
    refAudioTranscription: document.getElementById("audio_transcription"),
    refAudioUrl: document.getElementById("audio_url"),
    refAudioCredit: document.getElementById("audio_credit"),

    initialiser: function () {
        this.refPrenom.innerHTML = objJSONepigraphes[this.intIdFicheCourante].PRENOM + " ";
        this.refNom.innerHTML = objJSONepigraphes[this.intIdFicheCourante].NOM;
        this.refPremierP.innerHTML = objJSONepigraphes[this.intIdFicheCourante].DOMAINE;
        this.refImageTitre.innerHTML = objJSONepigraphes[this.intIdFicheCourante].IMAGE.TITRE;
        this.refImageCredit.innerHTML = objJSONepigraphes[this.intIdFicheCourante].IMAGE.CREDIT;
        this.refNoteBiographique.innerHTML = objJSONepigraphes[this.intIdFicheCourante].BIOGRAPHIE;
        this.refArrondissement.innerHTML = objJSONepigraphes[this.intIdFicheCourante].ARRONDISSEMENT;
        this.refQuartier.innerHTML = objJSONepigraphes[this.intIdFicheCourante].QUARTIER;
        this.refAdresse.innerHTML = objJSONepigraphes[this.intIdFicheCourante].ADRESSE;
        this.refTranscription.innerHTML = objJSONepigraphes[this.intIdFicheCourante].PLAQUE_TRANSCRIPTION;
        this.refAudioDescription.innerHTML = objJSONepigraphes[this.intIdFicheCourante].AUDIO.DESCRIPTION;
        this.refAudioTranscription.innerHTML = objJSONepigraphes[this.intIdFicheCourante].AUDIO.TRANSCRIPTION;
        this.refAudioUrl.src = objJSONepigraphes[this.intIdFicheCourante].AUDIO.URL;
        this.refAudioUrl.load();
        this.refAudioCredit.innerHTML = objJSONepigraphes[this.intIdFicheCourante].AUDIO.CREDIT;
        // Prénom et nom dynamiques
        const intIdFicheCourante = obtenirValeurUrlParam('id');
        const objEpigrapheCourante = objJSONepigraphes[intIdFicheCourante];

        document.getElementById('prenom').innerHTML = `${objEpigrapheCourante.PRENOM} `;
        document.getElementById('nom').innerHTML = objEpigrapheCourante.NOM;
        document.getElementById('url_image').src = `../images/${intIdFicheCourante}_${objEpigrapheCourante.SUFFIXE_IMAGES}.jpg`;

        // À compléter
        localStorage.setItem(intIdFicheCourante, true);
    },
    verifierIndice: function () {
        console.log("début");
        console.log(document.getElementById("personnage").checked);
        console.log(document.getElementById("personnage").id);
        console.log(localStorage.id_personnage);
        if (localStorage.id_personnage == undefined) {
            document.getElementById("message").innerHTML = "Aucune chasse en cours. Si vous désirez débuter une chasse, visitez la page <a href='../chasse/index.html'>Chasse</a> "
        } else {
            if (document.getElementById("personnage").checked) {
                if (this.intIdFicheCourante == localStorage.id_personnage) {
                    localStorage.personnage_est_trouve = true;
                    document.getElementById("message").innerHTML = "Bravo! Vous avez trouvé " + objJSONepigraphes[this.intIdFicheCourante].CHASSE.INDICE;
                } else {
                    document.getElementById("message").innerHTML = "Désolé. Ce n'est pas le bon élément.";
                }
            } else if (document.getElementById("lieu").checked) {
                if (this.intIdFicheCourante == localStorage.id_lieu) {
                    localStorage.lieu_est_trouve = true;
                    document.getElementById("message").innerHTML = "Bravo! Vous avez trouvé " + objJSONepigraphes[this.intIdFicheCourante].CHASSE.INDICE;
                } else {
                    document.getElementById("message").innerHTML = "Désolé. Ce n'est pas le bon élément.";
                }
            } else if (document.getElementById("objet").checked) {
                if (this.intIdFicheCourante == localStorage.id_objet) {
                    localStorage.objet_est_trouve = true;
                    document.getElementById("message").innerHTML = "Bravo! Vous avez trouvé " + objJSONepigraphes[this.intIdFicheCourante].CHASSE.INDICE;
                } else {
                    document.getElementById("message").innerHTML = "Désolé. Ce n'est pas le bon élément.";
                }
            }
        }
    }
}

objFicheArtsVisuels.initialiser();
document.getElementById("btnSoumettre").addEventListener("click", function () {
    objFicheArtsVisuels.verifierIndice();
});