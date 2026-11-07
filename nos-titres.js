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
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/pleins-phares-pied-au-plancher.mp3": {
  "debut": 0,
  "fin": 179.98,
  "gain": 0.88
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/pleins-phares-pied-au-plancher-2.mp3": {
  "debut": 0,
  "fin": 179.98,
  "gain": 0.92
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/pleins-phares-pied-au-plancher-3.mp3": {
  "debut": 0,
  "fin": 179.98,
  "gain": 0.99
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/pleins-phares-tunnel.mp3": {
  "debut": 0,
  "fin": 179.98,
  "gain": 0.64
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/alamo-303-lac-a-sec.mp3": {
  "debut": 0,
  "fin": 209.98,
  "gain": 0.85
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/alamo-303-lac-a-sec-2.mp3": {
  "debut": 0,
  "fin": 209.98,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b011-satan.mp3": {
  "debut": 0,
  "fin": 15.2,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b012-lapsus.mp3": {
  "debut": 0,
  "fin": 15.2,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b013-poulet.mp3": {
  "debut": 0,
  "fin": 14.57,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b014-sexologue.mp3": {
  "debut": 0,
  "fin": 38.07,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b015-gendre.mp3": {
  "debut": 0,
  "fin": 33.73,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b019-en-or.mp3": {
  "debut": 0,
  "fin": 12.75,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b020-elle-me-la-dit.mp3": {
  "debut": 0,
  "fin": 9.61,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b021-moules.mp3": {
  "debut": 0,
  "fin": 15.72,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b022-la-vie.mp3": {
  "debut": 0,
  "fin": 13.98,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b024-le-pot.mp3": {
  "debut": 0,
  "fin": 60.22,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b026-petit-doigt.mp3": {
  "debut": 0,
  "fin": 12.26,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b027-avale.mp3": {
  "debut": 0,
  "fin": 14.93,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b031-capitaine-crochet.mp3": {
  "debut": 0,
  "fin": 12.03,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b032-sans-queue-ni-tete.mp3": {
  "debut": 0,
  "fin": 14.24,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b033-choses-sales.mp3": {
  "debut": 0,
  "fin": 16.18,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b034-interphone.mp3": {
  "debut": 0,
  "fin": 40.97,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b036-compliment.mp3": {
  "debut": 0,
  "fin": 11.8,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b037-pare-brise.mp3": {
  "debut": 0,
  "fin": 12.51,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b039-mouchoirs.mp3": {
  "debut": 0,
  "fin": 14.06,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b040-nom-de-jeune-fille.mp3": {
  "debut": 0,
  "fin": 17.86,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b042-pet.mp3": {
  "debut": 0,
  "fin": 11.32,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b047-concours-de-cons.mp3": {
  "debut": 0,
  "fin": 9.52,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b051-chuck-norris-duel.mp3": {
  "debut": 0,
  "fin": 24.54,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b052-chuck-norris-adulte.mp3": {
  "debut": 0,
  "fin": 23.9,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b053-chuck-norris-los-santos.mp3": {
  "debut": 0,
  "fin": 24.38,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b054-seins-contagieux.mp3": {
  "debut": 0,
  "fin": 33.58,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b055-voisin-bricoleur.mp3": {
  "debut": 0,
  "fin": 33.98,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b056-triplees.mp3": {
  "debut": 0,
  "fin": 41.63,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b057-penis-vaudou.mp3": {
  "debut": 0,
  "fin": 43.56,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b058-serpent.mp3": {
  "debut": 0,
  "fin": 30.48,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b060-trayeuse.mp3": {
  "debut": 0,
  "fin": 59.83,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b061-amazones.mp3": {
  "debut": 0,
  "fin": 44.39,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b062-robot-secretaire.mp3": {
  "debut": 0,
  "fin": 53.3,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b063-jument.mp3": {
  "debut": 0,
  "fin": 46.5,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b065-perroquet-espion.mp3": {
  "debut": 0,
  "fin": 46.26,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b066-nudiste.mp3": {
  "debut": 0,
  "fin": 24.51,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b067-coude.mp3": {
  "debut": 0,
  "fin": 27.27,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b068-papi-sourd.mp3": {
  "debut": 0,
  "fin": 32.21,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b069-aspirine.mp3": {
  "debut": 0,
  "fin": 19.2,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b070-medecin-legiste.mp3": {
  "debut": 0,
  "fin": 54.61,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b071-tampon-capote.mp3": {
  "debut": 0,
  "fin": 11.79,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b072-la-fete.mp3": {
  "debut": 0,
  "fin": 15.45,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b073-chien-vache.mp3": {
  "debut": 0,
  "fin": 18.13,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b074-alcoolique.mp3": {
  "debut": 0,
  "fin": 16.07,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b075-alcooliques-anonymes.mp3": {
  "debut": 0,
  "fin": 15.21,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b076-supermarche.mp3": {
  "debut": 0,
  "fin": 21,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b077-table-a-repasser.mp3": {
  "debut": 0,
  "fin": 21.09,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b078-la-cinquantaine.mp3": {
  "debut": 0,
  "fin": 15.19,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b079-a-part-ta-mere.mp3": {
  "debut": 0,
  "fin": 8.8,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b080-tee-shirt.mp3": {
  "debut": 0,
  "fin": 11.71,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b081-adoptee.mp3": {
  "debut": 0,
  "fin": 12.74,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b082-les-numeros.mp3": {
  "debut": 0,
  "fin": 8.41,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b083-calendrier.mp3": {
  "debut": 0,
  "fin": 14.79,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b084-test-belle-mere.mp3": {
  "debut": 0,
  "fin": 38.92,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b085-l-addition.mp3": {
  "debut": 0,
  "fin": 20.75,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b086-statue.mp3": {
  "debut": 0,
  "fin": 49.71,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b087-pharmacien.mp3": {
  "debut": 0,
  "fin": 43.89,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b088-la-surprise.mp3": {
  "debut": 0,
  "fin": 20.97,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b089-opportunite.mp3": {
  "debut": 0,
  "fin": 20.93,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b090-mot-de-passe.mp3": {
  "debut": 0,
  "fin": 17.53,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b091-les-potes.mp3": {
  "debut": 0,
  "fin": 17.47,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b092-chameau.mp3": {
  "debut": 0,
  "fin": 10.22,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b093-bar-cimetiere.mp3": {
  "debut": 0,
  "fin": 20.18,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b094-sable-ciment.mp3": {
  "debut": 0,
  "fin": 14.34,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b095-examen.mp3": {
  "debut": 0,
  "fin": 24.77,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b096-mal-de-gorge.mp3": {
  "debut": 0,
  "fin": 40.03,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b097-le-vagin.mp3": {
  "debut": 0,
  "fin": 47.17,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b098-le-change.mp3": {
  "debut": 0,
  "fin": 21.15,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b099-garde-du-chien.mp3": {
  "debut": 0,
  "fin": 23.41,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b100-le-ski.mp3": {
  "debut": 0,
  "fin": 21,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b101-le-chargeur.mp3": {
  "debut": 0,
  "fin": 20.73,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b102-hotel-beau-pere.mp3": {
  "debut": 0,
  "fin": 42.58,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b103-pancarte-du-bar.mp3": {
  "debut": 0,
  "fin": 25.76,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b104-bon-coup.mp3": {
  "debut": 0,
  "fin": 16.21,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b105-mes-dents.mp3": {
  "debut": 0,
  "fin": 35.93,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b106-balle-de-golf.mp3": {
  "debut": 0,
  "fin": 44.77,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b107-cacahuetes.mp3": {
  "debut": 0,
  "fin": 35.73,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b108-jeu-des-draps.mp3": {
  "debut": 0,
  "fin": 35.27,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b109-concours-du-cheval.mp3": {
  "debut": 0,
  "fin": 20.77,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b110-jeu-video.mp3": {
  "debut": 0,
  "fin": 41.6,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b111-tic-tac.mp3": {
  "debut": 0,
  "fin": 13.2,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b112-heureux.mp3": {
  "debut": 0,
  "fin": 13.47,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b113-harmonie.mp3": {
  "debut": 0,
  "fin": 14.76,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b114-premier-avril.mp3": {
  "debut": 0,
  "fin": 21.1,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b115-la-poubelle.mp3": {
  "debut": 0,
  "fin": 16.18,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b116-l-annonce.mp3": {
  "debut": 0,
  "fin": 12.52,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b117-thermometre.mp3": {
  "debut": 0,
  "fin": 15.91,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b118-le-signe.mp3": {
  "debut": 0,
  "fin": 16.91,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b119-la-pluie.mp3": {
  "debut": 0,
  "fin": 13.72,
  "gain": 1
 },
 "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b120-les-mariages.mp3": {
  "debut": 0,
  "fin": 15.57,
  "gain": 1
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
 },
 {
  "id": "duo-blase-1",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-blase-1.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blase-rien-a-faire-a-paleto.mp3",
  "duree": 34.03,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "duo-beton-arme-1",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-beton-arme-1.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/beton-arme-strawberry-ne-dort-pas.mp3",
  "duree": 25.93,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "duo-reine-mere-1",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-reine-mere-1.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/reine-mere-couronne-en-plastique.mp3",
  "duree": 34.72,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "duo-vieux-loup-1",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-vieux-loup-1.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/vieux-loup-sortez-les-cartons.mp3",
  "duree": 29.89,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "duo-tension-1",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-tension-1.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/tension-dernier-metro.mp3",
  "duree": 29.89,
  "voix": "Deejay Di et Samantha"
 },
 {
  "id": "duo-normal-1",
  "son": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/animations/duo-normal-1.mp3",
  "station": "rapfr",
  "avant": "https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/normal-entretien-chez-lifeinvader.mp3",
  "duree": 31.85,
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
["Rouille","","Cypress Flats","",149,6.01,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/rouille-cypress-flats.mp3","punk","Rouille","Cypress Flats","rouille-cypress-flats",0,"punk",1,"sur","création maison"],
["Pleins Phares","","Pied au plancher","",180,6.97,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/pleins-phares-pied-au-plancher.mp3","techno","Pleins Phares","Pied au plancher","pleins-phares-pied-au-plancher",0,"techno",1,"sur","création maison"],
["Pleins Phares","","Pied au plancher (version 2)","",180,7.08,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/pleins-phares-pied-au-plancher-2.mp3","techno","Pleins Phares","Pied au plancher (version 2)","pleins-phares-pied-au-plancher-2",0,"techno",1,"sur","création maison"],
["Pleins Phares","","Pied au plancher (version 3)","",180,7.17,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/pleins-phares-pied-au-plancher-3.mp3","techno","Pleins Phares","Pied au plancher (version 3)","pleins-phares-pied-au-plancher-3",0,"techno",1,"sur","création maison"],
["Pleins Phares","","Tunnel","",180,6.95,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/pleins-phares-tunnel.mp3","techno","Pleins Phares","Tunnel","pleins-phares-tunnel",0,"techno",1,"sur","création maison"],
["Alamo 303","","Lac à sec","",210,8.18,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/alamo-303-lac-a-sec.mp3","techno","Alamo 303","Lac à sec","alamo-303-lac-a-sec",0,"techno",1,"sur","création maison"],
["Alamo 303","","Lac à sec (version 2)","",210,8.49,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/alamo-303-lac-a-sec-2.mp3","techno","Alamo 303","Lac à sec (version 2)","alamo-303-lac-a-sec-2",0,"techno",1,"sur","création maison"],
["Deejay Di et Samantha","Série 1 — validées sur le texte","B011 — Satan","",15,0.35,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b011-satan.mp3","blague","Deejay Di et Samantha","B011 — Satan","blague-b011-satan",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 1 — validées sur le texte","B012 — Le lapsus","",15,0.35,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b012-lapsus.mp3","blague","Deejay Di et Samantha","B012 — Le lapsus","blague-b012-lapsus",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 1 — validées sur le texte","B013 — Le poulet","",15,0.34,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b013-poulet.mp3","blague","Deejay Di et Samantha","B013 — Le poulet","blague-b013-poulet",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 1 — validées sur le texte","B014 — Le sexologue","",40,0.91,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b014-sexologue.mp3","blague","Deejay Di et Samantha","B014 — Le sexologue","blague-b014-sexologue",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 1 — validées sur le texte","B015 — Le gendre","",35,0.81,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b015-gendre.mp3","blague","Deejay Di et Samantha","B015 — Le gendre","blague-b015-gendre",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 1 — validées sur le texte","B019 — En or","",13,0.29,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b019-en-or.mp3","blague","Deejay Di et Samantha","B019 — En or","blague-b019-en-or",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 1 — validées sur le texte","B020 — Elle me l'a dit","",10,0.22,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b020-elle-me-la-dit.mp3","blague","Deejay Di et Samantha","B020 — Elle me l'a dit","blague-b020-elle-me-la-dit",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 1 — validées sur le texte","B021 — Les moules","",16,0.36,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b021-moules.mp3","blague","Deejay Di et Samantha","B021 — Les moules","blague-b021-moules",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 1 — validées sur le texte","B022 — La vie","",14,0.32,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b022-la-vie.mp3","blague","Deejay Di et Samantha","B022 — La vie","blague-b022-la-vie",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 1 — validées sur le texte","B024 — Le pot","",62,1.41,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b024-le-pot.mp3","blague","Deejay Di et Samantha","B024 — Le pot","blague-b024-le-pot",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 1 — validées sur le texte","B026 — Le petit doigt","",12,0.28,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b026-petit-doigt.mp3","blague","Deejay Di et Samantha","B026 — Le petit doigt","blague-b026-petit-doigt",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 1 — validées sur le texte","B027 — Avalé","",15,0.34,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b027-avale.mp3","blague","Deejay Di et Samantha","B027 — Avalé","blague-b027-avale",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 1 — validées sur le texte","B031 — Le capitaine Crochet","",12,0.28,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b031-capitaine-crochet.mp3","blague","Deejay Di et Samantha","B031 — Le capitaine Crochet","blague-b031-capitaine-crochet",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 1 — validées sur le texte","B032 — Sans queue ni tête","",14,0.33,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b032-sans-queue-ni-tete.mp3","blague","Deejay Di et Samantha","B032 — Sans queue ni tête","blague-b032-sans-queue-ni-tete",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 1 — validées sur le texte","B033 — Des choses sales","",16,0.37,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b033-choses-sales.mp3","blague","Deejay Di et Samantha","B033 — Des choses sales","blague-b033-choses-sales",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 1 — validées sur le texte","B034 — L'interphone","",43,0.97,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b034-interphone.mp3","blague","Deejay Di et Samantha","B034 — L'interphone","blague-b034-interphone",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 1 — validées sur le texte","B036 — Le compliment","",12,0.27,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b036-compliment.mp3","blague","Deejay Di et Samantha","B036 — Le compliment","blague-b036-compliment",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 1 — validées sur le texte","B037 — Le pare-brise","",13,0.29,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b037-pare-brise.mp3","blague","Deejay Di et Samantha","B037 — Le pare-brise","blague-b037-pare-brise",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 1 — validées sur le texte","B039 — Les mouchoirs","",14,0.32,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b039-mouchoirs.mp3","blague","Deejay Di et Samantha","B039 — Les mouchoirs","blague-b039-mouchoirs",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 1 — validées sur le texte","B040 — Le nom de jeune fille","",18,0.41,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b040-nom-de-jeune-fille.mp3","blague","Deejay Di et Samantha","B040 — Le nom de jeune fille","blague-b040-nom-de-jeune-fille",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 2 — validées sur le texte","B042 — Pet","",11,0.26,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b042-pet.mp3","blague","Deejay Di et Samantha","B042 — Pet","blague-b042-pet",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 2 — validées sur le texte","B047 — Concours de cons","",10,0.22,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b047-concours-de-cons.mp3","blague","Deejay Di et Samantha","B047 — Concours de cons","blague-b047-concours-de-cons",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 2 — validées sur le texte","B051 — Chuck norris duel","",26,0.6,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b051-chuck-norris-duel.mp3","blague","Deejay Di et Samantha","B051 — Chuck norris duel","blague-b051-chuck-norris-duel",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 2 — validées sur le texte","B052 — Chuck norris adulte","",25,0.58,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b052-chuck-norris-adulte.mp3","blague","Deejay Di et Samantha","B052 — Chuck norris adulte","blague-b052-chuck-norris-adulte",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 2 — validées sur le texte","B053 — Chuck norris los santos","",26,0.59,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b053-chuck-norris-los-santos.mp3","blague","Deejay Di et Samantha","B053 — Chuck norris los santos","blague-b053-chuck-norris-los-santos",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 2 — validées sur le texte","B054 — Seins contagieux","",35,0.8,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b054-seins-contagieux.mp3","blague","Deejay Di et Samantha","B054 — Seins contagieux","blague-b054-seins-contagieux",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 2 — validées sur le texte","B055 — Voisin bricoleur","",36,0.81,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b055-voisin-bricoleur.mp3","blague","Deejay Di et Samantha","B055 — Voisin bricoleur","blague-b055-voisin-bricoleur",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 2 — validées sur le texte","B056 — Triplees","",43,0.99,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b056-triplees.mp3","blague","Deejay Di et Samantha","B056 — Triplees","blague-b056-triplees",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 2 — validées sur le texte","B057 — Penis vaudou","",45,1.03,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b057-penis-vaudou.mp3","blague","Deejay Di et Samantha","B057 — Penis vaudou","blague-b057-penis-vaudou",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 2 — validées sur le texte","B058 — Serpent","",32,0.73,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b058-serpent.mp3","blague","Deejay Di et Samantha","B058 — Serpent","blague-b058-serpent",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 2 — validées sur le texte","B060 — Trayeuse","",61,1.41,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b060-trayeuse.mp3","blague","Deejay Di et Samantha","B060 — Trayeuse","blague-b060-trayeuse",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 2 — validées sur le texte","B061 — Amazones","",46,1.05,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b061-amazones.mp3","blague","Deejay Di et Samantha","B061 — Amazones","blague-b061-amazones",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 2 — validées sur le texte","B062 — Robot secretaire","",55,1.26,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b062-robot-secretaire.mp3","blague","Deejay Di et Samantha","B062 — Robot secretaire","blague-b062-robot-secretaire",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 2 — validées sur le texte","B063 — Jument","",48,1.1,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b063-jument.mp3","blague","Deejay Di et Samantha","B063 — Jument","blague-b063-jument",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 2 — validées sur le texte","B065 — Perroquet espion","",48,1.09,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b065-perroquet-espion.mp3","blague","Deejay Di et Samantha","B065 — Perroquet espion","blague-b065-perroquet-espion",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 3 — à juger","B066 — Nudiste","",26,0.6,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b066-nudiste.mp3","blague","Deejay Di et Samantha","B066 — Nudiste","blague-b066-nudiste",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 3 — à juger","B067 — Coude","",29,0.66,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b067-coude.mp3","blague","Deejay Di et Samantha","B067 — Coude","blague-b067-coude",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 3 — à juger","B068 — Papi sourd","",34,0.77,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b068-papi-sourd.mp3","blague","Deejay Di et Samantha","B068 — Papi sourd","blague-b068-papi-sourd",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 3 — à juger","B069 — Aspirine","",19,0.44,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b069-aspirine.mp3","blague","Deejay Di et Samantha","B069 — Aspirine","blague-b069-aspirine",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 3 — à juger","B070 — Medecin legiste","",56,1.29,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b070-medecin-legiste.mp3","blague","Deejay Di et Samantha","B070 — Medecin legiste","blague-b070-medecin-legiste",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 3 — à juger","B071 — Tampon capote","",12,0.27,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b071-tampon-capote.mp3","blague","Deejay Di et Samantha","B071 — Tampon capote","blague-b071-tampon-capote",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 3 — à juger","B072 — La fete","",15,0.35,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b072-la-fete.mp3","blague","Deejay Di et Samantha","B072 — La fete","blague-b072-la-fete",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 3 — à juger","B073 — Chien vache","",18,0.42,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b073-chien-vache.mp3","blague","Deejay Di et Samantha","B073 — Chien vache","blague-b073-chien-vache",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 3 — à juger","B074 — Alcoolique","",16,0.37,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b074-alcoolique.mp3","blague","Deejay Di et Samantha","B074 — Alcoolique","blague-b074-alcoolique",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 3 — à juger","B075 — Alcooliques anonymes","",15,0.35,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b075-alcooliques-anonymes.mp3","blague","Deejay Di et Samantha","B075 — Alcooliques anonymes","blague-b075-alcooliques-anonymes",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 4 — à juger","B076 — Supermarche","",21,0.48,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b076-supermarche.mp3","blague","Deejay Di et Samantha","B076 — Supermarche","blague-b076-supermarche",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 4 — à juger","B077 — Table a repasser","",23,0.52,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b077-table-a-repasser.mp3","blague","Deejay Di et Samantha","B077 — Table a repasser","blague-b077-table-a-repasser",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 4 — à juger","B078 — La cinquantaine","",15,0.35,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b078-la-cinquantaine.mp3","blague","Deejay Di et Samantha","B078 — La cinquantaine","blague-b078-la-cinquantaine",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 4 — à juger","B079 — A part ta mere","",9,0.2,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b079-a-part-ta-mere.mp3","blague","Deejay Di et Samantha","B079 — A part ta mere","blague-b079-a-part-ta-mere",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 4 — à juger","B080 — Tee shirt","",12,0.27,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b080-tee-shirt.mp3","blague","Deejay Di et Samantha","B080 — Tee shirt","blague-b080-tee-shirt",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 4 — à juger","B081 — Adoptee","",13,0.29,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b081-adoptee.mp3","blague","Deejay Di et Samantha","B081 — Adoptee","blague-b081-adoptee",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 4 — à juger","B082 — Les numeros","",8,0.19,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b082-les-numeros.mp3","blague","Deejay Di et Samantha","B082 — Les numeros","blague-b082-les-numeros",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 4 — à juger","B083 — Calendrier","",15,0.34,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b083-calendrier.mp3","blague","Deejay Di et Samantha","B083 — Calendrier","blague-b083-calendrier",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 4 — à juger","B084 — Test belle mere","",40,0.93,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b084-test-belle-mere.mp3","blague","Deejay Di et Samantha","B084 — Test belle mere","blague-b084-test-belle-mere",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 4 — à juger","B085 — L addition","",22,0.51,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b085-l-addition.mp3","blague","Deejay Di et Samantha","B085 — L addition","blague-b085-l-addition",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 5 — à juger","B086 — Statue","",51,1.17,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b086-statue.mp3","blague","Deejay Di et Samantha","B086 — Statue","blague-b086-statue",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 5 — à juger","B087 — Pharmacien","",45,1.04,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b087-pharmacien.mp3","blague","Deejay Di et Samantha","B087 — Pharmacien","blague-b087-pharmacien",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 5 — à juger","B088 — La surprise","",21,0.48,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b088-la-surprise.mp3","blague","Deejay Di et Samantha","B088 — La surprise","blague-b088-la-surprise",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 5 — à juger","B089 — Opportunite","",22,0.52,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b089-opportunite.mp3","blague","Deejay Di et Samantha","B089 — Opportunite","blague-b089-opportunite",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 5 — à juger","B090 — Mot de passe","",18,0.4,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b090-mot-de-passe.mp3","blague","Deejay Di et Samantha","B090 — Mot de passe","blague-b090-mot-de-passe",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 5 — à juger","B091 — Les potes","",17,0.4,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b091-les-potes.mp3","blague","Deejay Di et Samantha","B091 — Les potes","blague-b091-les-potes",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 5 — à juger","B092 — Chameau","",10,0.24,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b092-chameau.mp3","blague","Deejay Di et Samantha","B092 — Chameau","blague-b092-chameau",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 5 — à juger","B093 — Bar cimetiere","",22,0.5,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b093-bar-cimetiere.mp3","blague","Deejay Di et Samantha","B093 — Bar cimetiere","blague-b093-bar-cimetiere",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 5 — à juger","B094 — Sable ciment","",14,0.33,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b094-sable-ciment.mp3","blague","Deejay Di et Samantha","B094 — Sable ciment","blague-b094-sable-ciment",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 5 — à juger","B095 — Examen","",26,0.6,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b095-examen.mp3","blague","Deejay Di et Samantha","B095 — Examen","blague-b095-examen",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 6 — à juger","B096 — Mal de gorge","",42,0.95,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b096-mal-de-gorge.mp3","blague","Deejay Di et Samantha","B096 — Mal de gorge","blague-b096-mal-de-gorge",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 6 — à juger","B097 — Le vagin","",49,1.12,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b097-le-vagin.mp3","blague","Deejay Di et Samantha","B097 — Le vagin","blague-b097-le-vagin",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 6 — à juger","B098 — Le change","",21,0.49,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b098-le-change.mp3","blague","Deejay Di et Samantha","B098 — Le change","blague-b098-le-change",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 6 — à juger","B099 — Garde du chien","",25,0.57,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b099-garde-du-chien.mp3","blague","Deejay Di et Samantha","B099 — Garde du chien","blague-b099-garde-du-chien",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 6 — à juger","B100 — Le ski","",21,0.48,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b100-le-ski.mp3","blague","Deejay Di et Samantha","B100 — Le ski","blague-b100-le-ski",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 6 — à juger","B101 — Le chargeur","",21,0.48,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b101-le-chargeur.mp3","blague","Deejay Di et Samantha","B101 — Le chargeur","blague-b101-le-chargeur",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 6 — à juger","B102 — Hotel beau pere","",44,1.01,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b102-hotel-beau-pere.mp3","blague","Deejay Di et Samantha","B102 — Hotel beau pere","blague-b102-hotel-beau-pere",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 6 — à juger","B103 — Pancarte du bar","",27,0.63,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b103-pancarte-du-bar.mp3","blague","Deejay Di et Samantha","B103 — Pancarte du bar","blague-b103-pancarte-du-bar",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 6 — à juger","B104 — Bon coup","",16,0.37,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b104-bon-coup.mp3","blague","Deejay Di et Samantha","B104 — Bon coup","blague-b104-bon-coup",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 6 — à juger","B105 — Mes dents","",37,0.86,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b105-mes-dents.mp3","blague","Deejay Di et Samantha","B105 — Mes dents","blague-b105-mes-dents",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 7 — à juger","B106 — Balle de golf","",46,1.06,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b106-balle-de-golf.mp3","blague","Deejay Di et Samantha","B106 — Balle de golf","blague-b106-balle-de-golf",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 7 — à juger","B107 — Cacahuetes","",37,0.85,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b107-cacahuetes.mp3","blague","Deejay Di et Samantha","B107 — Cacahuetes","blague-b107-cacahuetes",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 7 — à juger","B108 — Jeu des draps","",37,0.84,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b108-jeu-des-draps.mp3","blague","Deejay Di et Samantha","B108 — Jeu des draps","blague-b108-jeu-des-draps",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 7 — à juger","B109 — Concours du cheval","",22,0.51,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b109-concours-du-cheval.mp3","blague","Deejay Di et Samantha","B109 — Concours du cheval","blague-b109-concours-du-cheval",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 7 — à juger","B110 — Jeu video","",43,0.99,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b110-jeu-video.mp3","blague","Deejay Di et Samantha","B110 — Jeu video","blague-b110-jeu-video",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 7 — à juger","B111 — Tic tac","",13,0.3,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b111-tic-tac.mp3","blague","Deejay Di et Samantha","B111 — Tic tac","blague-b111-tic-tac",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 7 — à juger","B112 — Heureux","",13,0.31,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b112-heureux.mp3","blague","Deejay Di et Samantha","B112 — Heureux","blague-b112-heureux",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 7 — à juger","B113 — Harmonie","",15,0.34,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b113-harmonie.mp3","blague","Deejay Di et Samantha","B113 — Harmonie","blague-b113-harmonie",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 7 — à juger","B114 — Premier avril","",21,0.48,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b114-premier-avril.mp3","blague","Deejay Di et Samantha","B114 — Premier avril","blague-b114-premier-avril",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 7 — à juger","B115 — La poubelle","",16,0.37,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b115-la-poubelle.mp3","blague","Deejay Di et Samantha","B115 — La poubelle","blague-b115-la-poubelle",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 8 — à juger","B116 — L annonce","",13,0.29,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b116-l-annonce.mp3","blague","Deejay Di et Samantha","B116 — L annonce","blague-b116-l-annonce",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 8 — à juger","B117 — Thermometre","",16,0.37,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b117-thermometre.mp3","blague","Deejay Di et Samantha","B117 — Thermometre","blague-b117-thermometre",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 8 — à juger","B118 — Le signe","",17,0.39,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b118-le-signe.mp3","blague","Deejay Di et Samantha","B118 — Le signe","blague-b118-le-signe",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 8 — à juger","B119 — La pluie","",14,0.32,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b119-la-pluie.mp3","blague","Deejay Di et Samantha","B119 — La pluie","blague-b119-la-pluie",0,"blague",1,"sur","création maison"],
["Deejay Di et Samantha","Série 8 — à juger","B120 — Les mariages","",16,0.36,"mp3","https://pub-5d0afc1c6fbf457b8ced5bd7ac8bf289.r2.dev/nos-titres/blague-b120-les-mariages.mp3","blague","Deejay Di et Samantha","B120 — Les mariages","blague-b120-les-mariages",0,"blague",1,"sur","création maison"]
];
