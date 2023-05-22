// Déclaration de l'objet
const objChasse = {
    // Attributs
    arrIdsPersonnagesAPiger: ['e0001', 'e0008', 'e0015', 'e0019'],
    arrIdsObjetsAPiger: ['e0002', 'e0004', 'e0007', 'e0021'],
    arrIdsLieuxAPiger: ['e0005', 'e0012', 'e0016', 'e0022'],
    // À compléter

    // Méthodes
    demarrerChasse: function () {
        // À compléter
        let hasardPersonnages = Math.floor(Math.random() * objChasse.arrIdsPersonnagesAPiger.length);
        let hasardObjets = Math.floor(Math.random() * objChasse.arrIdsObjetsAPiger.length);
        let hasardLieux = Math.floor(Math.random() * objChasse.arrIdsLieuxAPiger.length);

        console.log("perso " + hasardPersonnages + " obj " + hasardObjets + " lieu " + hasardLieux);
        localStorage.id_personnage = objChasse.arrIdsPersonnagesAPiger[hasardPersonnages];
        localStorage.id_objet = objChasse.arrIdsObjetsAPiger[hasardObjets];
        localStorage.id_lieu = objChasse.arrIdsLieuxAPiger[hasardLieux];
        localStorage.personnage_est_trouve = false;
        localStorage.objet_est_trouve = false;
        localStorage.lieu_est_trouve = false;

        localStorage.setItem("nombre_indice_trouve", 0);
        document.querySelector(".progression").innerHTML = localStorage.nombre_indice_trouve;

        console.log("perso " + localStorage.id_personnage + " obj " + localStorage.id_objet + " lieu " + localStorage.id_lieu);
        document.getElementById('indice__perso').innerHTML = objJSONepigraphes[localStorage.id_personnage].CHASSE.INDICE;
        document.getElementById("indice__objet").innerHTML = objJSONepigraphes[localStorage.id_objet].CHASSE.INDICE;
        document.getElementById("indice__lieu").innerHTML = objJSONepigraphes[localStorage.id_lieu].CHASSE.INDICE;

        document.querySelector(".redirection__site").classList.remove("cache");
        document.querySelector(".suggestion1").classList.remove("cache");
        document.querySelector(".progression").classList.remove("cache");
        document.querySelector(".surCombien").classList.add("cache");
    },
    initialiserChasse: function () {
        const refImgPerso = document.querySelector(".img__indice__perso");
        const refImgObjet = document.querySelector(".img__indice__objet");
        const refImgLieu = document.querySelector(".img__indice__lieu");
        document.querySelector('.progression').innerHTML= localStorage.nombre_indice_trouve;
        //document.getElementById("textarea").innerHTML = "jadwwfawygd";
        console.log(document.getElementById("textarea"));
        
        if (localStorage.id_personnage != undefined) {
            document.querySelector(".progression").classList.remove("cache");
            document.querySelector(".surCombien").classList.add("cache");
            document.querySelector(".redirection__site").classList.remove("cache");
            document.querySelector(".suggestion1").classList.remove("cache");
            document.getElementById('indice__perso').innerHTML = objJSONepigraphes[localStorage.id_personnage].CHASSE.INDICE;
            document.getElementById("indice__objet").innerHTML = objJSONepigraphes[localStorage.id_objet].CHASSE.INDICE;
            document.getElementById("indice__lieu").innerHTML = objJSONepigraphes[localStorage.id_lieu].CHASSE.INDICE;
        }
        if(localStorage.getItem("personnage_est_trouve") == "true"){
            refImgPerso.classList.remove("cache");
            const intFicheGagnante = localStorage.getItem("id_personnage");
            refImgPerso.src = `../assets/images/personnages/${intFicheGagnante}_chasse.jpg`;
            }
            if(localStorage.getItem("objet_est_trouve") == "true"){
                refImgObjet.classList.remove("cache");
                const intFicheGagnante = localStorage.getItem("id_objet");
                refImgObjet.src = `../assets/images/objets/${intFicheGagnante}_objet.jpg`;
                }
                if(localStorage.getItem("lieu_est_trouve") == "true"){
                    refImgLieu.classList.remove("cache");
                    const intFicheGagnante = localStorage.getItem("id_lieu");
                    refImgLieu.src = `../assets/images/lieux/${intFicheGagnante}_lieu.jpg`;
                    }
    }

    // À compléter

}


// Déclaration des écouteurs d'événements
// À compléter
document.querySelector(".piger_chasse").addEventListener("click", objChasse.demarrerChasse);
window.addEventListener('load', objChasse.initialiserChasse)
