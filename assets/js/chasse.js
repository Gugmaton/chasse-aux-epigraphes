<<<<<<< HEAD
// Déclaration de l'objet
const objChasse = {
=======
/**
 * @author ANTOINE LABARRE, ARTADestrokzZ
 */

 const objChasse = {
>>>>>>> main
    // Attributs
    arrIdsPersonnagesAPiger: ['e0001', 'e0008', 'e0015', 'e0019'],
    arrIdsObjetsAPiger: ['e0002', 'e0004', 'e0007', 'e0021'],
    arrIdsLieuxAPiger: ['e0005', 'e0012', 'e0016', 'e0022'],
    // À compléter

    // Méthodes
<<<<<<< HEAD
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
        console.log("allo");
        document.querySelector('.progression').innerHTML= localStorage.nombre_indice_trouve;

        
        if (localStorage.id_personnage != undefined) {
            document.querySelector(".progression").classList.remove("cache");
            document.querySelector(".surCombien").classList.add("cache");
            document.querySelector(".redirection__site").classList.remove("cache");
            document.querySelector(".suggestion1").classList.remove("cache");
            document.getElementById('indice__perso').innerHTML = objJSONepigraphes[localStorage.id_personnage].CHASSE.INDICE;
            document.getElementById("indice__objet").innerHTML = objJSONepigraphes[localStorage.id_objet].CHASSE.INDICE;
            document.getElementById("indice__lieu").innerHTML = objJSONepigraphes[localStorage.id_lieu].CHASSE.INDICE;
        }
    }

    // À compléter

}


// Déclaration des écouteurs d'événements
// À compléter
document.querySelector(".piger_chasse").addEventListener("click", objChasse.demarrerChasse);
window.addEventListener('load', objChasse.initialiserChasse)
=======
    initialiser: function() {
        
    },

    demarrerChasse: function() {
        let intHasardPersonnage = Math.floor(Math.random() * this.arrIdsPersonnagesAPiger.length);
        let intHasardObjet = Math.floor(Math.random() * this.arrIdsObjetsAPiger.length);
        let intHasardLieu = Math.floor(Math.random() * this.arrIdsLieuxAPiger.length);
        console.log("Personnage: " + intHasardPersonnage);
        console.log("objet: " + intHasardObjet);
        console.log("Lieu: " + intHasardLieu);

        localStorage.id_personnage = this.arrIdsPersonnagesAPiger[intHasardPersonnage];
        localStorage.id_objet = this.arrIdsObjetsAPiger[intHasardObjet];
        localStorage.id_lieu = this.arrIdsLieuxAPiger[intHasardLieu];
        localStorage.personnage_est_trouve = false;
        localStorage.objet_est_trouve = false;
        localStorage.lieu_est_trouve = false;
        let refIndicePersonnage = document.getElementById("indice1");
        refIndicePersonnage.innerHTML = objJSONepigraphes[localStorage.id_personnage].CHASSE.INDICE;
        let refIndiceObjet = document.getElementById("indice2");
        refIndiceObjet.innerHTML = objJSONepigraphes[localStorage.id_objet].CHASSE.INDICE;
        let refIndiceLieu = document.getElementById("indice3");
        refIndiceLieu.innerHTML = objJSONepigraphes[localStorage.id_lieu].CHASSE.INDICE;
    },
};
document.getElementById("piger_chasse").addEventListener("click", function (){
    objChasse.demarrerChasse()
});
objChasse.initialiser();
>>>>>>> main
