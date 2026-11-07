// Écrit pour Base Clean : NOS titres, et rien d'autre (05/11/2026).
// Rempli par outils/ajouter_nos_titres.mjs. Mêmes colonnes que l'ancien catalogue :
// artiste, album, titre, licence, durée (s), taille (Mo), format, chemin (musique/…), famille, artiste de rangement, titre propre,
// clé de tri, année de mort (0), style ("neon"…), note (1 = passe à la radio), verdict des droits ("sur").
window.POCHETTES = {
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-jfais-plus-ca-cest-mort.mp3": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/pochettes/zero-retour-jfais-plus-ca-cest-mort.jpg",
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-tout-laisse-la-bas.mp3": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/pochettes/zero-retour-tout-laisse-la-bas.jpg",
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-lettre-a-ma-fille.mp3": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/pochettes/zero-retour-lettre-a-ma-fille.jpg",
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-lumiere.mp3": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/pochettes/zero-retour-lumiere.jpg",
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-sirenes.mp3": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/pochettes/zero-retour-sirenes.jpg",
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-dos-au-miroir.mp3": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/pochettes/zero-retour-dos-au-miroir.jpg",
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-elle-a-tenu.mp3": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/pochettes/zero-retour-elle-a-tenu.jpg",
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-devant-la-porte.mp3": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/pochettes/zero-retour-devant-la-porte.jpg",
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-petit-frere.mp3": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/pochettes/zero-retour-petit-frere.jpg",
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-mains-propres.mp3": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/pochettes/zero-retour-mains-propres.jpg"
};
window.MESURES = {
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/allside-russe.mp3": {
  "debut": 0.77,
  "fin": 206.81,
  "gain": 0.71
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/techallside.mp3": {
  "debut": 0.71,
  "fin": 119.16,
  "gain": 0.77
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-jfais-plus-ca-cest-mort.mp3": {
  "debut": 0,
  "fin": 138.32,
  "gain": 0.87
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-tout-laisse-la-bas.mp3": {
  "debut": 0,
  "fin": 155,
  "gain": 0.88
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-lettre-a-ma-fille.mp3": {
  "debut": 0,
  "fin": 160.48,
  "gain": 0.9
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-lumiere.mp3": {
  "debut": 0,
  "fin": 170,
  "gain": 0.89
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-sirenes.mp3": {
  "debut": 0,
  "fin": 160,
  "gain": 0.92
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-dos-au-miroir.mp3": {
  "debut": 0,
  "fin": 173.64,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-elle-a-tenu.mp3": {
  "debut": 0,
  "fin": 180,
  "gain": 0.89
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-devant-la-porte.mp3": {
  "debut": 0,
  "fin": 185,
  "gain": 0.98
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-petit-frere.mp3": {
  "debut": 0,
  "fin": 160,
  "gain": 0.94
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-mains-propres.mp3": {
  "debut": 0,
  "fin": 160,
  "gain": 0.95
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-jte-ldis-cash.mp3": {
  "debut": 0,
  "fin": 175,
  "gain": 0.85
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-vitre-blindee.mp3": {
  "debut": 0,
  "fin": 163.36,
  "gain": 0.91
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-parloir.mp3": {
  "debut": 0,
  "fin": 159.32,
  "gain": 0.75
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-filles-du-batiment.mp3": {
  "debut": 0,
  "fin": 165,
  "gain": 0.76
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-rembobine.mp3": {
  "debut": 0,
  "fin": 168.2,
  "gain": 0.95
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-sisi.mp3": {
  "debut": 0,
  "fin": 165,
  "gain": 0.89
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-elle-compte.mp3": {
  "debut": 0,
  "fin": 174.64,
  "gain": 0.83
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-au-dos-des-tickets.mp3": {
  "debut": 0,
  "fin": 175,
  "gain": 0.88
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-pompe-4.mp3": {
  "debut": 0,
  "fin": 170,
  "gain": 0.82
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-demission.mp3": {
  "debut": 0,
  "fin": 175,
  "gain": 0.93
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/chrome-dimanche-lent.mp3": {
  "debut": 0,
  "fin": 145.31,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blase-rien-a-faire-a-paleto.mp3": {
  "debut": 0,
  "fin": 159.94,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/beton-arme-strawberry-ne-dort-pas.mp3": {
  "debut": 0,
  "fin": 167.38,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/reine-mere-couronne-en-plastique.mp3": {
  "debut": 0,
  "fin": 167.06,
  "gain": 0.97
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/vieux-loup-sortez-les-cartons.mp3": {
  "debut": 0,
  "fin": 107.95,
  "gain": 0.78
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/tension-dernier-metro.mp3": {
  "debut": 0,
  "fin": 138.7,
  "gain": 0.95
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/normal-entretien-chez-lifeinvader.mp3": {
  "debut": 0,
  "fin": 123.79,
  "gain": 0.85
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/velours-roller-a-vespucci.mp3": {
  "debut": 0,
  "fin": 199.99,
  "gain": 0.92
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/le-grand-slap-la-laverie.mp3": {
  "debut": 0,
  "fin": 181.87,
  "gain": 0.9
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/costard-funk-vendredi-dix-huit-heures.mp3": {
  "debut": 0,
  "fin": 149.95,
  "gain": 0.9
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/capucine-la-grande-roue.mp3": {
  "debut": 0,
  "fin": 175.9,
  "gain": 0.81
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/rouille-cypress-flats.mp3": {
  "debut": 0,
  "fin": 148.9,
  "gain": 0.76
 }
};
window.ANIMATIONS = [
 {
  "id": "duo-deejay-di-samantha-1",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-deejay-di-samantha-1.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-mains-propres.mp3",
  "duree": 43.71,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "duo-deejay-di-samantha-2",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-deejay-di-samantha-2.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-sirenes.mp3",
  "duree": 43.89,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "duo-deejay-di-samantha-3",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-deejay-di-samantha-3.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-petit-frere.mp3",
  "duree": 34.38,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "duo-deejay-di-samantha-4",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-deejay-di-samantha-4.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-lumiere.mp3",
  "duree": 36.29,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "duo-deejay-di-samantha-5",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-deejay-di-samantha-5.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-jfais-plus-ca-cest-mort.mp3",
  "duree": 33.71,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "duo-deejay-di-samantha-6",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-deejay-di-samantha-6.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-tout-laisse-la-bas.mp3",
  "duree": 33.01,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "duo-deejay-di-samantha-7",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-deejay-di-samantha-7.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-lettre-a-ma-fille.mp3",
  "duree": 21.51,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "duo-deejay-di-samantha-8",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-deejay-di-samantha-8.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-dos-au-miroir.mp3",
  "duree": 28.62,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "duo-deejay-di-samantha-9",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-deejay-di-samantha-9.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-elle-a-tenu.mp3",
  "duree": 25.63,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "duo-deejay-di-samantha-10",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-deejay-di-samantha-10.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-devant-la-porte.mp3",
  "duree": 30.24,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "intermede-meteo",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-meteo.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 25,
  "voix": "Deejay Di et Samantha",
  "nom": "La météo de Samantha"
 },
 {
  "id": "intermede-messages",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-messages.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 20.97,
  "voix": "Deejay Di et Samantha",
  "nom": "Les messages des auditeurs"
 },
 {
  "id": "intermede-defi",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-defi.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 19.51,
  "voix": "Deejay Di et Samantha",
  "nom": "Le défi « Vinyle Rap cinq fois »"
 },
 {
  "id": "intermede-horoscope",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-horoscope.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 23.36,
  "voix": "Deejay Di et Samantha",
  "nom": "L'horoscope de Samantha"
 },
 {
  "id": "intermede-quiz",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-quiz.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 18.42,
  "voix": "Deejay Di et Samantha",
  "nom": "Le quiz du vrai prénom"
 },
 {
  "id": "intermede-jingle",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-jingle.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 18.6,
  "voix": "Deejay Di et Samantha",
  "nom": "Le jingle raté"
 },
 {
  "id": "intermede-croissants",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-croissants.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 27.86,
  "voix": "Deejay Di et Samantha",
  "nom": "Les croissants, la suite"
 },
 {
  "id": "intermede-applaudissements",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-applaudissements.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 28.54,
  "voix": "Deejay Di et Samantha",
  "nom": "Le bouton des applaudissements"
 },
 {
  "id": "intermede-pub",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-pub.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 28.64,
  "voix": "Deejay Di et Samantha",
  "nom": "La pub du « Son en spray »"
 },
 {
  "id": "intermede-dedicaces",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-dedicaces.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 25.59,
  "voix": "Deejay Di et Samantha",
  "nom": "Les dédicaces"
 },
 {
  "id": "intermede-conseils",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-conseils.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 27.12,
  "voix": "Deejay Di et Samantha",
  "nom": "La minute des conseils de Deejay Di"
 },
 {
  "id": "intermede-chanter",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-chanter.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 31.9,
  "voix": "Deejay Di et Samantha",
  "nom": "Samantha veut chanter"
 },
 {
  "id": "intermede-flash-info",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-flash-info.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 20.94,
  "voix": "Deejay Di et Samantha",
  "nom": "Le flash info du quartier"
 },
 {
  "id": "intermede-argot",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-argot.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 28.14,
  "voix": "Deejay Di et Samantha",
  "nom": "La leçon d'argot"
 },
 {
  "id": "intermede-beatbox",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-beatbox.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 19.79,
  "voix": "Deejay Di et Samantha",
  "nom": "Le défi beatbox"
 },
 {
  "id": "intermede-repondeur",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-repondeur.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 19.6,
  "voix": "Deejay Di et Samantha",
  "nom": "Le répondeur"
 },
 {
  "id": "intermede-retard",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-retard.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 20.15,
  "voix": "Deejay Di et Samantha",
  "nom": "L'excuse du retard"
 },
 {
  "id": "intermede-premiere-soiree",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-premiere-soiree.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 21.78,
  "voix": "Deejay Di et Samantha",
  "nom": "La première soirée de DJ"
 },
 {
  "id": "intermede-micro",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-micro.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 20.7,
  "voix": "Deejay Di et Samantha",
  "nom": "Le test du micro"
 },
 {
  "id": "intermede-zen",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-zen.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 25.49,
  "voix": "Deejay Di et Samantha",
  "nom": "La minute zen"
 },
 {
  "id": "intermede-recette",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-recette.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 17.91,
  "voix": "Deejay Di et Samantha",
  "nom": "La recette du sandwich du DJ"
 },
 {
  "id": "intermede-seule",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-seule.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 22.13,
  "voix": "Deejay Di et Samantha",
  "nom": "Samantha seule aux commandes"
 },
 {
  "id": "intermede-blind-test",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-blind-test.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 19.18,
  "voix": "Deejay Di et Samantha",
  "nom": "Le blind test"
 },
 {
  "id": "intermede-boite-a-idees",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/intermede-boite-a-idees.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 25.48,
  "voix": "Deejay Di et Samantha",
  "nom": "La boîte à idées"
 },
 {
  "id": "id-vinyle-rap-rue",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/id-vinyle-rap-rue.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 3.31,
  "voix": "Deejay Di",
  "nom": "« Vinyle Rap. Le son de la rue, sans filtre »"
 },
 {
  "id": "id-vinyle-rap-raison",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/id-vinyle-rap-raison.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 3.64,
  "voix": "Samantha",
  "nom": "« Tu écoutes Vinyle Rap… et t'as bien raison ! »"
 },
 {
  "id": "id-vinyle-rap-ensemble",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/id-vinyle-rap-ensemble.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 3.86,
  "voix": "Deejay Di et Samantha",
  "nom": "« Ici, c'est que du rap… Vinyle Rap ! »"
 },
 {
  "id": "id-vinyle-rap-excuses",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/id-vinyle-rap-excuses.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 3.37,
  "voix": "Samantha",
  "nom": "« Monte le son, baisse les excuses »"
 },
 {
  "id": "id-vinyle-rap-blabla",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/id-vinyle-rap-blabla.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 5.13,
  "voix": "Deejay Di",
  "nom": "« Pas de pub, pas de blabla… bon, un petit peu »"
 },
 {
  "id": "id-vinyle-rap-chut",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/id-vinyle-rap-chut.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 3.6,
  "voix": "Samantha",
  "nom": "« Chut… t'es sur Vinyle Rap, le quartier écoute »"
 },
 {
  "id": "duo-cash-cash-1",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-cash-cash-1.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-jte-ldis-cash.mp3",
  "duree": 29.3,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "duo-cash-cash-2",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-cash-cash-2.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-vitre-blindee.mp3",
  "duree": 23.56,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "duo-cash-cash-3",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-cash-cash-3.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-parloir.mp3",
  "duree": 22.8,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "duo-cash-cash-4",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-cash-cash-4.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-filles-du-batiment.mp3",
  "duree": 23.58,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "duo-cash-cash-5",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-cash-cash-5.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-rembobine.mp3",
  "duree": 21.52,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "duo-cash-cash-6",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-cash-cash-6.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-sisi.mp3",
  "duree": 27.67,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "duo-cash-cash-7",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-cash-cash-7.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-elle-compte.mp3",
  "duree": 19.17,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "duo-cash-cash-8",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-cash-cash-8.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-au-dos-des-tickets.mp3",
  "duree": 34.02,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "duo-cash-cash-9",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-cash-cash-9.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-pompe-4.mp3",
  "duree": 23.52,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "duo-cash-cash-10",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-cash-cash-10.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-demission.mp3",
  "duree": 34.32,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "refrain-zero-retour-tout-laisse-la-bas",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/refrain-zero-retour-tout-laisse-la-bas.mp3",
  "station": "rapfr",
  "avant": null,
  "apres": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-tout-laisse-la-bas.mp3",
  "duree": 17.5,
  "voix": "Deejay Di et Samantha",
  "nom": "Refrain chanté de « Tout laissé là-bas »"
 },
 {
  "id": "refrain-zero-retour-jfais-plus-ca-cest-mort",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/refrain-zero-retour-jfais-plus-ca-cest-mort.mp3",
  "station": "rapfr",
  "avant": null,
  "apres": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-jfais-plus-ca-cest-mort.mp3",
  "duree": 12.77,
  "voix": "Deejay Di et Samantha",
  "nom": "Refrain chanté de « J'fais plus ça, c'est mort »"
 },
 {
  "id": "refrain-zero-retour-lumiere",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/refrain-zero-retour-lumiere.mp3",
  "station": "rapfr",
  "avant": null,
  "apres": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-lumiere.mp3",
  "duree": 16.47,
  "voix": "Deejay Di et Samantha",
  "nom": "Refrain chanté de « Lumière »"
 },
 {
  "id": "refrain-zero-retour-petit-frere",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/refrain-zero-retour-petit-frere.mp3",
  "station": "rapfr",
  "avant": null,
  "apres": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-petit-frere.mp3",
  "duree": 12.53,
  "voix": "Deejay Di et Samantha",
  "nom": "Refrain chanté de « Petit frère »"
 },
 {
  "id": "refrain-zero-retour-sirenes",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/refrain-zero-retour-sirenes.mp3",
  "station": "rapfr",
  "avant": null,
  "apres": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-sirenes.mp3",
  "duree": 15.42,
  "voix": "Deejay Di et Samantha",
  "nom": "Refrain chanté de « Sirènes »"
 },
 {
  "id": "refrain-zero-retour-mains-propres",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/refrain-zero-retour-mains-propres.mp3",
  "station": "rapfr",
  "avant": null,
  "apres": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-mains-propres.mp3",
  "duree": 14.67,
  "voix": "Deejay Di et Samantha",
  "nom": "Refrain chanté de « Mains propres »"
 },
 {
  "id": "refrain-cash-cash-sisi",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/refrain-cash-cash-sisi.mp3",
  "station": "rapfr",
  "avant": null,
  "apres": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-sisi.mp3",
  "duree": 17.92,
  "voix": "Deejay Di et Samantha",
  "nom": "Refrain chanté de « Sisi »"
 },
 {
  "id": "refrain-cash-cash-jte-ldis-cash",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/refrain-cash-cash-jte-ldis-cash.mp3",
  "station": "rapfr",
  "avant": null,
  "apres": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-jte-ldis-cash.mp3",
  "duree": 11.71,
  "voix": "Deejay Di et Samantha",
  "nom": "Refrain chanté de « J'te l'dis cash »"
 },
 {
  "id": "refrain-cash-cash-rembobine",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/refrain-cash-cash-rembobine.mp3",
  "station": "rapfr",
  "avant": null,
  "apres": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-rembobine.mp3",
  "duree": 15.69,
  "voix": "Deejay Di et Samantha",
  "nom": "Refrain chanté de « Rembobine »"
 },
 {
  "id": "duo-chrome-1",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-chrome-1.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/chrome-dimanche-lent.mp3",
  "duree": 31.55,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "promo-dedicaces",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/promo-dedicaces.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 31.53,
  "voix": "Deejay Di et Samantha",
  "nom": "La ligne des dédicaces"
 },
 {
  "id": "promo-studio",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/promo-studio.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 22.05,
  "voix": "Deejay Di et Samantha",
  "nom": "Le studio ouvert aux artistes"
 },
 {
  "id": "promo-pub",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/promo-pub.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 24.51,
  "voix": "Deejay Di et Samantha",
  "nom": "Ta pub sur Vinyle Rap"
 },
 {
  "id": "promo-ligne-de-nuit",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/promo-ligne-de-nuit.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 18.61,
  "voix": "Deejay Di et Samantha",
  "nom": "La ligne de nuit"
 },
 {
  "id": "promo-defi-refrain",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/promo-defi-refrain.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 22.28,
  "voix": "Deejay Di et Samantha",
  "nom": "Le défi du refrain"
 },
 {
  "id": "promo-petites-annonces",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/promo-petites-annonces.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 22.54,
  "voix": "Deejay Di et Samantha",
  "nom": "Les petites annonces"
 },
 {
  "id": "promo-casting",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/promo-casting.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 21.31,
  "voix": "Deejay Di et Samantha",
  "nom": "Le casting du troisième animateur"
 },
 {
  "id": "promo-salut-auditeurs",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/promo-salut-auditeurs.mp3",
  "station": "rapfr",
  "avant": null,
  "duree": 13.08,
  "voix": "Deejay Di et Samantha",
  "nom": "Le salut des auditeurs"
 }
];
window.CATALOGUE = [
["ALLSIDE","","Ночь не спит","",225,3.1,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/allside-russe.mp3","russe","ALLSIDE","Ночь не спит","allside-russe",0,"russe",1,"sur","création maison"],
["ALLSIDE","","Полный газ","",137,1.85,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/techallside.mp3","russe","ALLSIDE","Полный газ","techallside",0,"russe",1,"sur","création maison"],
["Zéro Retour","Poches vides, cœur plein","J'fais plus ça, c'est mort","",139,4.46,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-jfais-plus-ca-cest-mort.mp3","rapfr","Zéro Retour","J'fais plus ça, c'est mort","zero-retour-jfais-plus-ca-cest-mort",0,"rapfr",1,"sur","création maison"],
["Zéro Retour","Poches vides, cœur plein","Tout laissé là-bas","",155,4.94,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-tout-laisse-la-bas.mp3","rapfr","Zéro Retour","Tout laissé là-bas","zero-retour-tout-laisse-la-bas",0,"rapfr",1,"sur","création maison"],
["Zéro Retour","Poches vides, cœur plein","Lettre à ma fille","",160,5.13,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-lettre-a-ma-fille.mp3","rapfr","Zéro Retour","Lettre à ma fille","zero-retour-lettre-a-ma-fille",0,"rapfr",1,"sur","création maison"],
["Zéro Retour","Poches vides, cœur plein","Lumière","",170,5.5,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-lumiere.mp3","rapfr","Zéro Retour","Lumière","zero-retour-lumiere",0,"rapfr",1,"sur","création maison"],
["Zéro Retour","Poches vides, cœur plein","Sirènes","",160,5.13,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-sirenes.mp3","rapfr","Zéro Retour","Sirènes","zero-retour-sirenes",0,"rapfr",1,"sur","création maison"],
["Zéro Retour","Poches vides, cœur plein","Dos au miroir","",174,5.5,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-dos-au-miroir.mp3","rapfr","Zéro Retour","Dos au miroir","zero-retour-dos-au-miroir",0,"rapfr",1,"sur","création maison"],
["Zéro Retour","Poches vides, cœur plein","Elle a tenu","",180,5.7,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-elle-a-tenu.mp3","rapfr","Zéro Retour","Elle a tenu","zero-retour-elle-a-tenu",0,"rapfr",1,"sur","création maison"],
["Zéro Retour","Poches vides, cœur plein","Devant la porte","",185,5.9,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-devant-la-porte.mp3","rapfr","Zéro Retour","Devant la porte","zero-retour-devant-la-porte",0,"rapfr",1,"sur","création maison"],
["Zéro Retour","Poches vides, cœur plein","Petit frère","",160,5.07,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-petit-frere.mp3","rapfr","Zéro Retour","Petit frère","zero-retour-petit-frere",0,"rapfr",1,"sur","création maison"],
["Zéro Retour","Poches vides, cœur plein","Mains propres","",160,5.05,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-mains-propres.mp3","rapfr","Zéro Retour","Mains propres","zero-retour-mains-propres",0,"rapfr",1,"sur","création maison"],
["Cash Cash","Au dos des tickets","J'te l'dis cash","",175,5.36,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-jte-ldis-cash.mp3","rapfr","Cash Cash","J'te l'dis cash","cash-cash-jte-ldis-cash",0,"rapfr",1,"sur","création maison"],
["Cash Cash","Au dos des tickets","Vitre blindée","",163,5.01,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-vitre-blindee.mp3","rapfr","Cash Cash","Vitre blindée","cash-cash-vitre-blindee",0,"rapfr",1,"sur","création maison"],
["Cash Cash","Au dos des tickets","Parloir","",159,4.88,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-parloir.mp3","rapfr","Cash Cash","Parloir","cash-cash-parloir",0,"rapfr",1,"sur","création maison"],
["Cash Cash","Au dos des tickets","Les filles du bâtiment","",165,5.06,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-filles-du-batiment.mp3","rapfr","Cash Cash","Les filles du bâtiment","cash-cash-filles-du-batiment",0,"rapfr",1,"sur","création maison"],
["Cash Cash","Au dos des tickets","Rembobine","",169,5.19,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-rembobine.mp3","rapfr","Cash Cash","Rembobine","cash-cash-rembobine",0,"rapfr",1,"sur","création maison"],
["Cash Cash","Au dos des tickets","Sisi","",165,5.06,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-sisi.mp3","rapfr","Cash Cash","Sisi","cash-cash-sisi",0,"rapfr",1,"sur","création maison"],
["Cash Cash","Au dos des tickets","Elle compte","",175,5.35,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-elle-compte.mp3","rapfr","Cash Cash","Elle compte","cash-cash-elle-compte",0,"rapfr",1,"sur","création maison"],
["Cash Cash","Au dos des tickets","Au dos des tickets","",175,5.36,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-au-dos-des-tickets.mp3","rapfr","Cash Cash","Au dos des tickets","cash-cash-au-dos-des-tickets",0,"rapfr",1,"sur","création maison"],
["Cash Cash","Au dos des tickets","Pompe 4","",170,5.21,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-pompe-4.mp3","rapfr","Cash Cash","Pompe 4","cash-cash-pompe-4",0,"rapfr",1,"sur","création maison"],
["Cash Cash","Au dos des tickets","Démission","",175,5.36,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/cash-cash-demission.mp3","rapfr","Cash Cash","Démission","cash-cash-demission",0,"rapfr",1,"sur","création maison"],
["Chrome","","Dimanche lent","",146,5.67,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/chrome-dimanche-lent.mp3","rapfr","Chrome","Dimanche lent","chrome-dimanche-lent",0,"rapfr",1,"sur","création maison"],
["Blasé","","Rien à faire à Paleto","",160,6.35,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blase-rien-a-faire-a-paleto.mp3","rapfr","Blasé","Rien à faire à Paleto","blase-rien-a-faire-a-paleto",0,"rapfr",1,"sur","création maison"],
["Béton Armé","","Strawberry ne dort pas","",167,6.64,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/beton-arme-strawberry-ne-dort-pas.mp3","rapfr","Béton Armé","Strawberry ne dort pas","beton-arme-strawberry-ne-dort-pas",0,"rapfr",1,"sur","création maison"],
["Reine Mère","","Couronne en plastique","",168,6.69,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/reine-mere-couronne-en-plastique.mp3","rapfr","Reine Mère","Couronne en plastique","reine-mere-couronne-en-plastique",0,"rapfr",1,"sur","création maison"],
["Vieux Loup","","Sortez les cartons","",108,4.42,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/vieux-loup-sortez-les-cartons.mp3","rapfr","Vieux Loup","Sortez les cartons","vieux-loup-sortez-les-cartons",0,"rapfr",1,"sur","création maison"],
["Tension","","Dernier métro","",139,5.43,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/tension-dernier-metro.mp3","rapfr","Tension","Dernier métro","tension-dernier-metro",0,"rapfr",1,"sur","création maison"],
["Normal","","Entretien chez Lifeinvader","",125,4.77,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/normal-entretien-chez-lifeinvader.mp3","rapfr","Normal","Entretien chez Lifeinvader","normal-entretien-chez-lifeinvader",0,"rapfr",1,"sur","création maison"],
["Velours","","Roller à Vespucci","",200,7.64,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/velours-roller-a-vespucci.mp3","funkdisco","Velours","Roller à Vespucci","velours-roller-a-vespucci",0,"funkdisco",1,"sur","création maison"],
["Le Grand Slap","","La laverie","",182,6.95,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/le-grand-slap-la-laverie.mp3","funkdisco","Le Grand Slap","La laverie","le-grand-slap-la-laverie",0,"funkdisco",1,"sur","création maison"],
["Costard Funk","","Vendredi dix-huit heures","",150,5.84,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/costard-funk-vendredi-dix-huit-heures.mp3","funkdisco","Costard Funk","Vendredi dix-huit heures","costard-funk-vendredi-dix-huit-heures",0,"funkdisco",1,"sur","création maison"],
["Capucine","","La grande roue","",176,6.81,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/capucine-la-grande-roue.mp3","variete","Capucine","La grande roue","capucine-la-grande-roue",0,"variete",1,"sur","création maison"],
["Rouille","","Cypress Flats","",149,6.01,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/rouille-cypress-flats.mp3","punk","Rouille","Cypress Flats","rouille-cypress-flats",0,"punk",1,"sur","création maison"]
];
