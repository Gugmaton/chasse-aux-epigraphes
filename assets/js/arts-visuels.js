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
        const refImgPerso = document.querySelector(".img__indice__perso");
        const refImgObjet = document.querySelector(".img__indice__objet");
        const refImgLieu = document.querySelector(".img__indice__lieu");
        document.querySelector(".progression").innerHTML = localStorage.nombre_indice_trouve;
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

        if(localStorage.getItem("personnage_est_trouve") == "true"){
            refImgPerso.classList.remove("cache");
            const intFicheGagnante = localStorage.getItem("id_personnage");
            refImgPerso.src = `../assets/images/personnages/${intFicheGagnante}_chasse.jpg`;
            document.querySelector(".indice__svg").classList.add("cache");
            }
            if(localStorage.getItem("objet_est_trouve") == "true"){
                refImgObjet.classList.remove("cache");
                const intFicheGagnante = localStorage.getItem("id_objet");
                refImgObjet.src = `../assets/images/objets/${intFicheGagnante}_objet.jpg`;
                document.querySelector(".indice__svg").classList.add("cache");
                }
                if(localStorage.getItem("lieu_est_trouve") == "true"){
                    refImgLieu.classList.remove("cache");
                    const intFicheGagnante = localStorage.getItem("id_lieu");
                    refImgLieu.src = `../assets/images/lieux/${intFicheGagnante}_lieu.jpg`;
                    document.querySelector(".indice__svg").classList.add("cache");
                    }

        // LOCAL STORAGE QUI VA SERVIR POUR GOOGLE MAP
        localStorage.setItem(intIdFicheCourante, true);

    },
    verifierIndice: function () {
        const intIdFicheCourante = obtenirValeurUrlParam('id');
        const refBtnRadio = document.querySelector("input[name=formChasse]:checked");

        const refProgression = document.querySelector(".progression");
        let intProgression = localStorage.nombre_indice_trouve;
        console.log(refBtnRadio);
        console.log(typeof intProgression);
        console.log(refProgression);
        const refImgPerso = document.querySelector(".img__indice__perso");
        localStorage.image_personnage
        const refImgObjet = document.querySelector(".img__indice__objet");
        const refImgLieu = document.querySelector(".img__indice__lieu");
        const refSVG = document.querySelector("indice__svg");
        if (localStorage.id_personnage == undefined) {
            document.getElementById("message").innerHTML = "Aucune chasse en cours. Si vous désirez débuter une chasse, visitez la page <a href='../chasse/index.html'>Chasse</a>";
        } else {

            if (refBtnRadio === null) {
                document.getElementById("message").innerHTML = "Choisissez un indice";
                console.log(refBtnRadio);
            } else {
                if (refBtnRadio.value == "perso") {
                    if (intIdFicheCourante == localStorage.id_personnage) {
                        document.getElementById("message").innerHTML = "Bravo! Vous avez trouvé " + objJSONepigraphes[localStorage.id_personnage].CHASSE.REPONSE;
                        localStorage.personnage_est_trouve = true;
                        intProgression++;
                        refImgPerso.classList.remove("cache");
                        refImgPerso.src = `../assets/images/personnages/${intIdFicheCourante}_chasse.jpg`;
                        // localStorage.setItem("image_personnage", `../assets/images/lieux/${intIdFicheCourante}_lieu.jpg`);

                        if (intProgression <= 3) {
                            localStorage.setItem("nombre_indice_trouve", intProgression);
                            console.log(intProgression);
                            refProgression.innerHTML = localStorage.nombre_indice_trouve;
                        }
                        




                    } else {
                        document.getElementById("message").innerHTML = "Désolé. Ce n'est pas le bon indice.";
                    }
                }
                if (refBtnRadio.value == "objet") {
                    if (intIdFicheCourante == localStorage.id_objet) {
                        document.getElementById("message").innerHTML = "Bravo! Vous avez trouvé " + objJSONepigraphes[localStorage.id_objet].CHASSE.REPONSE;
                        localStorage.objet_est_trouve = true;
                        intProgression++;
                        if (intProgression <= 3) {
                            localStorage.setItem("nombre_indice_trouve", intProgression);
                            console.log(intProgression);
                            refProgression.innerHTML = localStorage.nombre_indice_trouve;
                        }
                        refImgObjet.classList.remove("cache");
                        refImgObjet.src = `../assets/images/objets/${intIdFicheCourante}_objet.jpg`;
                        localStorage.setItem("objet_personnage", `../assets/images/lieux/${intIdFicheCourante}_lieu.jpg`);
                        console.log(intIdFicheCourante);
                    } else {
                        document.getElementById("message").innerHTML = "Désolé. Ce n'est pas le bon indice.";
                    }
                }
                if (refBtnRadio.value == "lieu") {
                    if (intIdFicheCourante == localStorage.id_lieu) {
                        localStorage.lieu_est_trouve = true;
                        document.getElementById("message").innerHTML = "Bravo! Vous avez trouvé " + objJSONepigraphes[localStorage.id_lieu].CHASSE.REPONSE;
                        intProgression++;
                        if (intProgression <= 3) {
                            localStorage.setItem("nombre_indice_trouve", intProgression);
                            console.log(intProgression);
                            refProgression.innerHTML = localStorage.nombre_indice_trouve;
                        }
                        refImgLieu.classList.remove("cache");
                        refImgLieu.src = `../assets/images/lieux/${intIdFicheCourante}_lieu.jpg`;
                        localStorage.setItem("lieu_personnage", `../assets/images/lieux/${intIdFicheCourante}_lieu.jpg`);
                    } else {
                        document.getElementById("message").innerHTML = "Désolé. Ce n'est pas le bon indice.";
                    }
                }

                if (refProgression.innerHTML >= 3) {
                    refProgression.innerHTML = 3;
                    document.getElementById("message").innerHTML = "Bravo! Vous avez terminé la chasse, vous pouvez maintenant participer au <a class='lien__concours' href='../concours/index.html'>Concours!</a>";
                }
            }
        }
    },
}

objFicheArtsVisuels.initialiser();
document.querySelector(".btn__soumettre").addEventListener("click", objFicheArtsVisuels.verifierIndice);
window.addEventListener("load", function () {
    objChasse.initialiserChasse();
});