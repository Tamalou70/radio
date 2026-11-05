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
["Zéro Retour","Poches vides, cœur plein","Mains propres","",160,5.05,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/zero-retour-mains-propres.mp3","rapfr","Zéro Retour","Mains propres","zero-retour-mains-propres",0,"rapfr",1,"sur","création maison"]
];
