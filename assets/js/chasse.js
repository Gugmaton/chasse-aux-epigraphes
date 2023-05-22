/**
 * @author ANTOINE LABARRE, ARTADestrokzZ
 */

 const objChasse = {
    // Attributs
    arrIdsPersonnagesAPiger: ['e0001', 'e0008', 'e0015', 'e0019'],
    arrIdsObjetsAPiger: ['e0002', 'e0004', 'e0007', 'e0021'],
    arrIdsLieuxAPiger: ['e0005', 'e0012', 'e0016', 'e0022'],
    // À compléter

    // Méthodes
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