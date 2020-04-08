export class ListeMotsService {

  maListeDeMotsATrouver: Array<{ id: number, motFrancais: string, motAnglais: string, motTrouve: string }> = [
    {id: 0, motFrancais: 'Cascade', motAnglais: 'Waterfall', motTrouve: 'non'},
    {id: 1, motFrancais: 'Culture de bananes', motAnglais: 'Banana growing', motTrouve: 'non'},
    {id: 2, motFrancais: 'Canne a sucre', motAnglais: 'Sugar cane', motTrouve: 'non'},
    {id: 3, motFrancais: 'Lezard', motAnglais: 'Lizard', motTrouve: 'non'},
    {id: 4, motFrancais: 'Profiter de l\'occasion', motAnglais: 'Take opportunity for', motTrouve: 'non'},
    {id: 5, motFrancais: 'Palmier', motAnglais: 'Palm tree', motTrouve: 'non'},
    {id: 6, motFrancais: 'Arc en ciel', motAnglais: 'Rainbow', motTrouve: 'non'},
    {id: 7, motFrancais: 'Coucher de soleil', motAnglais: 'Sunset', motTrouve: 'non'},
    {id: 8, motFrancais: 'Sable', motAnglais: 'Sand', motTrouve: 'non'},
    {id: 9, motFrancais: 'Phare', motAnglais: 'Lighthouse', motTrouve: 'non'},
    {id: 10, motFrancais: 'Lever de soleil', motAnglais: 'Sunrise', motTrouve: 'non'},
    {id: 11, motFrancais: 'Decollage', motAnglais: 'To take off', motTrouve: 'non'},
    {id: 12, motFrancais: 'Atterir', motAnglais: 'To land', motTrouve: 'non'},
    {id: 13, motFrancais: 'Maillot de bain', motAnglais: 'Swimsuit', motTrouve: 'non'},
    {id: 14, motFrancais: 'Coup de soleil', motAnglais: 'Sunburn', motTrouve: 'non'},
    {id: 15, motFrancais: 'Meriter', motAnglais: 'To deserve', motTrouve: 'non'},
    {id: 16, motFrancais: 'Eviter', motAnglais: 'To avoid', motTrouve: 'non'},
    {id: 17, motFrancais: 'Bateau (2 mots)', motAnglais: 'Boat, ship', motTrouve: 'non'},
    {id: 18, motFrancais: 'Une cabane', motAnglais: 'A hut', motTrouve: 'non'},
    {id: 19, motFrancais: 'Colibri', motAnglais: 'Humming bird', motTrouve: 'non'},
    {id: 20, motFrancais: 'Ile (2 mots)', motAnglais: 'Island, isle', motTrouve: 'non'},
    {id: 21, motFrancais: 'Plonger', motAnglais: 'To dive', motTrouve: 'non'},
    {id: 22, motFrancais: 'Bouée', motAnglais: 'Buoy', motTrouve: 'non'},
    {id: 23, motFrancais: 'Gonflable', motAnglais: 'Inflatable', motTrouve: 'non'},
    {id: 24, motFrancais: 'Naviguer', motAnglais: 'To navigate', motTrouve: 'non'},
    {id: 25, motFrancais: 'Decouvrir', motAnglais: 'To discover', motTrouve: 'non'},
    {id: 26, motFrancais: 'Des specialites', motAnglais: 'Specialties', motTrouve: 'non'},
    {id: 27, motFrancais: 'Creme solaire', motAnglais: 'Solar cream', motTrouve: 'non'},
    {id: 28, motFrancais: 'Volcan', motAnglais: 'Volcano', motTrouve: 'non'},
    {id: 29, motFrancais: 'Jumelles de vue', motAnglais: 'Binoculars', motTrouve: 'non'},
    {id: 30, motFrancais: 'La côte', motAnglais: 'The coast', motTrouve: 'non'},
    {id: 31, motFrancais: 'Coquillage', motAnglais: 'Sea shell', motTrouve: 'non'},
    {id: 32, motFrancais: 'Manioc', motAnglais: 'Cassava', motTrouve: 'non'},
    {id: 33, motFrancais: 'Etre malade (2 mots)', motAnglais: 'To be ill, to be sick', motTrouve: 'non'},
    {id: 34, motFrancais: 'Chercher (2 mots)', motAnglais: 'To look for, to seek', motTrouve: 'non'},
    {id: 35, motFrancais: 'Glissant', motAnglais: 'Slippery', motTrouve: 'non'},
    {id: 36, motFrancais: 'Clair de lune', motAnglais: 'Moonlight', motTrouve: 'non'},
    {id: 37, motFrancais: 'Un talon', motAnglais: 'A heel', motTrouve: 'non'},
    {id: 38, motFrancais: 'Bronzer', motAnglais: 'To tan', motTrouve: 'non'},
    {id: 39, motFrancais: 'Casque', motAnglais: 'Helmet', motTrouve: 'non'},
    {id: 40, motFrancais: 'Etoile de mer', motAnglais: 'Starfish', motTrouve: 'non'},
    {id: 41, motFrancais: 'Culotte', motAnglais: 'Cheeky', motTrouve: 'non'},
    {id: 42, motFrancais: 'Casquette', motAnglais: 'Cap', motTrouve: 'non'},
    {id: 43, motFrancais: 'En raison de', motAnglais: 'Due to', motTrouve: 'non'},
    {id: 44, motFrancais: 'Randonnee, randonneur, randonner', motAnglais: 'Hiking, hiker, to hike', motTrouve: 'non'},
    {id: 45, motFrancais: 'Se cacher', motAnglais: 'To hide', motTrouve: 'non'},
    {id: 46, motFrancais: 'Trebucher', motAnglais: 'Stumble', motTrouve: 'non'},
    {id: 47, motFrancais: 'Durer', motAnglais: 'To last', motTrouve: 'non'},
    {id: 48, motFrancais: 'Se garer', motAnglais: 'To park', motTrouve: 'non'},
    {id: 49, motFrancais: 'Parking', motAnglais: 'Car park', motTrouve: 'non'},
    {id: 50, motFrancais: 'Fourmi', motAnglais: 'Ant', motTrouve: 'non'},
    {id: 51, motFrancais: 'Boue', motAnglais: 'Mud', motTrouve: 'non'},
    {id: 52, motFrancais: 'Transporter', motAnglais: 'To carry', motTrouve: 'non'},
    {id: 53, motFrancais: 'Se soucier', motAnglais: 'To care', motTrouve: 'non'},
    {id: 54, motFrancais: 'Prendre soin de', motAnglais: 'To take care', motTrouve: 'non'},
    {id: 55, motFrancais: 'Etre prudent', motAnglais: 'To be careful', motTrouve: 'non'},
    {id: 56, motFrancais: 'Au dessus', motAnglais: 'Above', motTrouve: 'non'},
    {id: 57, motFrancais: 'En dessous (2 mots)', motAnglais: 'Below, under', motTrouve: 'non'},
    {id: 58, motFrancais: 'Presque', motAnglais: 'Almost', motTrouve: 'non'},
    {id: 59, motFrancais: 'Deja', motAnglais: 'Already', motTrouve: 'non'},
    {id: 60, motFrancais: 'Autour', motAnglais: 'Around', motTrouve: 'non'},
    {id: 61, motFrancais: 'Etape', motAnglais: 'Step', motTrouve: 'non'},
    {id: 62, motFrancais: 'Telechargement en cours', motAnglais: 'Downloading in progress', motTrouve: 'non'},
    {id: 63, motFrancais: 'En panne', motAnglais: 'Out of order', motTrouve: 'non'},
    {id: 64, motFrancais: 'Une file d\'attente', motAnglais: 'A queue', motTrouve: 'non'},
    {id: 65, motFrancais: 'Faire la queue', motAnglais: 'To queue', motTrouve: 'non'},
    {id: 66, motFrancais: 'Mettre en file d\'attente', motAnglais: 'To put in queue', motTrouve: 'non'},
    {id: 67, motFrancais: 'Sauter', motAnglais: 'Jump', motTrouve: 'non'},
    {id: 68, motFrancais: 'S\'accroupir', motAnglais: 'To crouch', motTrouve: 'non'},
    {id: 69, motFrancais: 'Siege', motAnglais: 'Seat', motTrouve: 'non'},
    {id: 70, motFrancais: 'Coude', motAnglais: 'Elbow', motTrouve: 'non'},
    {id: 71, motFrancais: 'Genou', motAnglais: 'Knee', motTrouve: 'non'},
    {id: 72, motFrancais: 'Soigner', motAnglais: 'To heal', motTrouve: 'non'},
    {id: 73, motFrancais: 'Mouton', motAnglais: 'Sheep', motTrouve: 'non'},
    {id: 74, motFrancais: 'Etre en colere', motAnglais: 'To be angry', motTrouve: 'non'},
    {id: 75, motFrancais: 'Avoir faim', motAnglais: 'To be hungry', motTrouve: 'non'},
    {id: 76, motFrancais: 'Il merite la medaille d\'or', motAnglais: 'He deserves the gold medal', motTrouve: 'non'},
    {id: 77, motFrancais: 'Racine', motAnglais: 'Root', motTrouve: 'non'},
    {id: 78, motFrancais: 'Itineraire', motAnglais: 'Route', motTrouve: 'non'},
    {id: 79, motFrancais: 'Dans le but de', motAnglais: 'In order to', motTrouve: 'non'},
    {id: 80, motFrancais: 'Actuellement', motAnglais: 'Currently', motTrouve: 'non'}
  ];

  switchOnAll() {
    for (let ligne of this.maListeDeMotsATrouver) {
      ligne.motTrouve = 'oui';
    }
  }

  switchOnOne(indexOfArray: number) {
    console.log('appel à switchOnOne / Service');
    console.log('motTrouve vaut : ');
    console.log(this.maListeDeMotsATrouver[indexOfArray].motTrouve);
    this.maListeDeMotsATrouver[indexOfArray].motTrouve = 'oui';
  }
}
