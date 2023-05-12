/**
 * @fileoverview Filtrer selon un critère
 */

/* Variables globales */
const fiches = document.querySelectorAll('.fiche');
const arrBtnFiltres = document.querySelectorAll('.filtres__bouton');

/* Écouteurs d'événement */
arrBtnFiltres.forEach(function (btnFiltre) {
    btnFiltre.addEventListener('click', filtrer);
});

/* Fonctions */
function filtrer() {
    let filtreSecteur = this.dataset.secteur;
    let filtreType = this.dataset.type;
    // console.log(filtre);
    fiches.forEach(function (fiche) {
        fiche.classList.remove('selection');
        //console.log(fiche.dataset.secteur);
        console.log(filtreSecteur);
        if (fiche.dataset.secteur == filtreSecteur) {
            fiche.classList.add('selection');
        }
        if (fiche.dataset.type == filtreType) {
            fiche.classList.add('selection')
        }
    });
}
