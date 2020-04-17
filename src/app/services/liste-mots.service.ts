import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

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
    {id: 11, motFrancais: 'Decoller', motAnglais: 'To take off', motTrouve: 'non'},
    {id: 12, motFrancais: 'Atterir', motAnglais: 'To land', motTrouve: 'non'},
    {id: 13, motFrancais: 'Maillot de bain', motAnglais: 'Swimsuit', motTrouve: 'non'},
    {id: 14, motFrancais: 'Coup de soleil', motAnglais: 'Sunburn', motTrouve: 'non'},
    {id: 15, motFrancais: 'Meriter', motAnglais: 'To deserve', motTrouve: 'non'},
    {id: 16, motFrancais: 'Eviter', motAnglais: 'To avoid', motTrouve: 'non'},
    {id: 17, motFrancais: 'Bateau (2 mots)', motAnglais: 'Boat, ship', motTrouve: 'non'},
    {id: 18, motFrancais: 'Une cabane', motAnglais: 'Hut', motTrouve: 'non'},
    {id: 19, motFrancais: 'Colibri', motAnglais: 'Humming bird', motTrouve: 'non'},
    {id: 20, motFrancais: 'Ile (2 mots)', motAnglais: 'Island, isle', motTrouve: 'non'},
    {id: 21, motFrancais: 'Plonger', motAnglais: 'To dive', motTrouve: 'non'},
    {id: 22, motFrancais: 'Bouée', motAnglais: 'Buoy', motTrouve: 'non'},
    {id: 23, motFrancais: 'Gonflable', motAnglais: 'Inflatable', motTrouve: 'non'},
    {id: 24, motFrancais: 'Naviguer', motAnglais: 'To navigate', motTrouve: 'non'},
    {id: 25, motFrancais: 'Decouvrir', motAnglais: 'To discover', motTrouve: 'non'},
    {id: 26, motFrancais: 'Specialites', motAnglais: 'Specialties', motTrouve: 'non'},
    {id: 27, motFrancais: 'Creme solaire', motAnglais: 'Solar cream', motTrouve: 'non'},
    {id: 28, motFrancais: 'Volcan', motAnglais: 'Volcano', motTrouve: 'non'},
    {id: 29, motFrancais: 'Jumelles de vue', motAnglais: 'Binoculars', motTrouve: 'non'},
    {id: 30, motFrancais: 'Côte', motAnglais: 'Coast', motTrouve: 'non'},
    {id: 31, motFrancais: 'Coquillage', motAnglais: 'Sea shell', motTrouve: 'non'},
    {id: 32, motFrancais: 'Manioc', motAnglais: 'Cassava', motTrouve: 'non'},
    {id: 33, motFrancais: 'Etre malade (2 mots)', motAnglais: 'To be ill, to be sick', motTrouve: 'non'},
    {id: 34, motFrancais: 'Chercher (2 mots)', motAnglais: 'To look for, to seek', motTrouve: 'non'},
    {id: 35, motFrancais: 'Glissant', motAnglais: 'Slippery', motTrouve: 'non'},
    {id: 36, motFrancais: 'Clair de lune', motAnglais: 'Moonlight', motTrouve: 'non'},
    {id: 37, motFrancais: 'Talon', motAnglais: 'Heel', motTrouve: 'non'},
    {id: 38, motFrancais: 'Bronzer', motAnglais: 'To tan', motTrouve: 'non'},
    {id: 39, motFrancais: 'Casque', motAnglais: 'Helmet', motTrouve: 'non'},
    {id: 40, motFrancais: 'Etoile de mer', motAnglais: 'Starfish', motTrouve: 'non'},
    {id: 41, motFrancais: 'Culotte', motAnglais: 'Cheeky', motTrouve: 'non'},
    {id: 42, motFrancais: 'Casquette', motAnglais: 'Cap', motTrouve: 'non'},
    {id: 43, motFrancais: 'En raison de', motAnglais: 'Due to', motTrouve: 'non'},
    {id: 44, motFrancais: 'Randonnee, randonneur, randonner', motAnglais: 'Hiking, hiker, to hike', motTrouve: 'non'},
    {id: 45, motFrancais: 'Se cacher', motAnglais: 'To hide', motTrouve: 'non'},
    {id: 46, motFrancais: 'Trebucher', motAnglais: 'To stumble', motTrouve: 'non'},
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
    {id: 67, motFrancais: 'Sauter', motAnglais: 'To jump', motTrouve: 'non'},
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

  maListeDeMotsATrouverBis = [
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
    {id: 11, motFrancais: 'Decoller', motAnglais: 'To take off', motTrouve: 'non'},
    {id: 12, motFrancais: 'Atterir', motAnglais: 'To land', motTrouve: 'non'},
    {id: 13, motFrancais: 'Maillot de bain', motAnglais: 'Swimsuit', motTrouve: 'non'},
    {id: 14, motFrancais: 'Coup de soleil', motAnglais: 'Sunburn', motTrouve: 'non'},
    {id: 15, motFrancais: 'Meriter', motAnglais: 'To deserve', motTrouve: 'non'},
    {id: 16, motFrancais: 'Eviter', motAnglais: 'To avoid', motTrouve: 'non'},
    {id: 17, motFrancais: 'Bateau', motAnglais: 'Boat, ship', motTrouve: 'non'},
    {id: 18, motFrancais: 'Cabane', motAnglais: 'Hut', motTrouve: 'non'},
    {id: 19, motFrancais: 'Colibri', motAnglais: 'Humming bird', motTrouve: 'non'},
    {id: 20, motFrancais: 'Ile', motAnglais: 'Island, isle', motTrouve: 'non'},
    {id: 21, motFrancais: 'Plonger', motAnglais: 'To dive', motTrouve: 'non'},
    {id: 22, motFrancais: 'Bouee', motAnglais: 'Buoy', motTrouve: 'non'},
    {id: 23, motFrancais: 'Gonflable', motAnglais: 'Inflatable', motTrouve: 'non'},
    {id: 24, motFrancais: 'Naviguer', motAnglais: 'To navigate', motTrouve: 'non'},
    {id: 25, motFrancais: 'Decouvrir', motAnglais: 'To discover', motTrouve: 'non'},
    {id: 26, motFrancais: 'Specialites', motAnglais: 'Specialties', motTrouve: 'non'},
    {id: 27, motFrancais: 'Creme solaire', motAnglais: 'Solar cream', motTrouve: 'non'},
    {id: 28, motFrancais: 'Volcan', motAnglais: 'Volcano', motTrouve: 'non'},
    {id: 29, motFrancais: 'Jumelles de vue', motAnglais: 'Binoculars', motTrouve: 'non'},
    {id: 30, motFrancais: 'Cote', motAnglais: 'Coast', motTrouve: 'non'},
    {id: 31, motFrancais: 'Coquillage', motAnglais: 'Sea shell', motTrouve: 'non'},
    {id: 32, motFrancais: 'Manioc', motAnglais: 'Cassava', motTrouve: 'non'},
    {id: 33, motFrancais: 'Etre malade', motAnglais: 'To be ill, to be sick', motTrouve: 'non'},
    {id: 34, motFrancais: 'Chercher', motAnglais: 'To look for, to seek', motTrouve: 'non'},
    {id: 35, motFrancais: 'Glissant', motAnglais: 'Slippery', motTrouve: 'non'},
    {id: 36, motFrancais: 'Clair de lune', motAnglais: 'Moonlight', motTrouve: 'non'},
    {id: 37, motFrancais: 'Talon', motAnglais: 'Heel', motTrouve: 'non'},
    {id: 38, motFrancais: 'Bronzer', motAnglais: 'To tan', motTrouve: 'non'},
    {id: 39, motFrancais: 'Casque', motAnglais: 'Helmet', motTrouve: 'non'},
    {id: 40, motFrancais: 'Etoile de mer', motAnglais: 'Starfish', motTrouve: 'non'},
    {id: 41, motFrancais: 'Culotte', motAnglais: 'Cheeky', motTrouve: 'non'},
    {id: 42, motFrancais: 'Casquette', motAnglais: 'Cap', motTrouve: 'non'},
    {id: 43, motFrancais: 'En raison de', motAnglais: 'Due to', motTrouve: 'non'},
    {id: 44, motFrancais: 'Randonnee, randonneur, randonner', motAnglais: 'Hiking, hiker, to hike', motTrouve: 'non'},
    {id: 45, motFrancais: 'Se cacher', motAnglais: 'To hide', motTrouve: 'non'},
    {id: 46, motFrancais: 'Trebucher', motAnglais: 'To stumble', motTrouve: 'non'},
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
    {id: 57, motFrancais: 'En dessous', motAnglais: 'Below, under', motTrouve: 'non'},
    {id: 58, motFrancais: 'Presque', motAnglais: 'Almost', motTrouve: 'non'},
    {id: 59, motFrancais: 'Deja', motAnglais: 'Already', motTrouve: 'non'},
    {id: 60, motFrancais: 'Autour', motAnglais: 'Around', motTrouve: 'non'},
    {id: 61, motFrancais: 'Etape', motAnglais: 'Step', motTrouve: 'non'},
    {id: 62, motFrancais: 'Telechargement en cours', motAnglais: 'Downloading in progress', motTrouve: 'non'},
    {id: 63, motFrancais: 'En panne', motAnglais: 'Out of order', motTrouve: 'non'},
    {id: 64, motFrancais: 'File d\'attente', motAnglais: 'A queue', motTrouve: 'non'},
    {id: 65, motFrancais: 'Faire la queue', motAnglais: 'To queue', motTrouve: 'non'},
    {id: 66, motFrancais: 'Mettre en file d\'attente', motAnglais: 'To put in queue', motTrouve: 'non'},
    {id: 67, motFrancais: 'Sauter', motAnglais: 'To jump', motTrouve: 'non'},
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

  quizzDiversService = [
    {id: 0, motAnglais: 'To crouch', motFrancais: 'S\'accroupir', motTrouve: 'non'},
    {id: 1, motAnglais: 'Because of', motFrancais: 'A cause de', motTrouve: 'non'},
    {id: 2, motAnglais: 'Short cut', motFrancais: 'Raccourci', motTrouve: 'non'},
    {id: 3, motAnglais: 'Take a shower', motFrancais: 'Prendre une douche', motTrouve: 'non'},
    {id: 4, motAnglais: 'Thanks to', motFrancais: 'Grace a', motTrouve: 'non'},
    {id: 5, motAnglais: 'To fix', motFrancais: 'Reparer', motTrouve: 'non'},
    {id: 6, motAnglais: 'To forget', motFrancais: 'Oublier', motTrouve: 'non'},
    {id: 7, motAnglais: 'To avoid', motFrancais: 'Eviter', motTrouve: 'non'},
    {id: 8, motAnglais: 'Seat', motFrancais: 'Siege', motTrouve: 'non'},
    {id: 9, motAnglais: 'Helmet', motFrancais: 'Casque', motTrouve: 'non'},
    {id: 10, motAnglais: 'Daily meeting', motFrancais: 'Reunion quotidienne', motTrouve: 'non'},
    {id: 11, motAnglais: 'Weekly newspaper', motFrancais: 'Journal hebdomadaire', motTrouve: 'non'},
    {id: 12, motAnglais: 'Almost', motFrancais: 'Presque', motTrouve: 'non'},
    {id: 13, motAnglais: 'Behind', motFrancais: 'Derriere', motTrouve: 'non'},
    {id: 14, motAnglais: 'Above', motFrancais: 'Au dessus', motTrouve: 'non'},
    {id: 15, motAnglais: 'To hide', motFrancais: 'Cacher', motTrouve: 'non'},
    {id: 16, motAnglais: 'Read the article below', motFrancais: 'Lire l\article en dessous', motTrouve: 'non'},
    {id: 17, motAnglais: 'To provide', motFrancais: 'Fournir', motTrouve: 'non'},
    {id: 18, motAnglais: 'To get', motFrancais: 'Obtenir', motTrouve: 'non'},
    {id: 19, motAnglais: 'Garden', motFrancais: 'Jardin', motTrouve: 'non'}
  ];

  quizzTemporelService = [
    {id: 0, motAnglais: 'Monday', motFrancais: 'Lundi', motTrouve: 'non'},
    {id: 1, motAnglais: 'Tuesday', motFrancais: 'Mardi', motTrouve: 'non'},
    {id: 2, motAnglais: 'Wednesday', motFrancais: 'Mercredi', motTrouve: 'non'},
    {id: 3, motAnglais: 'Thursday', motFrancais: 'Jeudi', motTrouve: 'non'},
    {id: 4, motAnglais: 'Friday', motFrancais: 'Vendredi', motTrouve: 'non'},
    {id: 5, motAnglais: 'Saturday', motFrancais: 'Samedi', motTrouve: 'non'},
    {id: 6, motAnglais: 'Sunday', motFrancais: 'Dimanche', motTrouve: 'non'},
    {id: 7, motAnglais: 'January', motFrancais: 'Janvier', motTrouve: 'non'},
    {id: 8, motAnglais: 'February', motFrancais: 'Fevrier', motTrouve: 'non'},
    {id: 9, motAnglais: 'March', motFrancais: 'Mars', motTrouve: 'non'},
    {id: 10, motAnglais: 'April', motFrancais: 'Avril', motTrouve: 'non'},
    {id: 11, motAnglais: 'May', motFrancais: 'Mai', motTrouve: 'non'},
    {id: 12, motAnglais: 'June', motFrancais: 'Juin', motTrouve: 'non'},
    {id: 13, motAnglais: 'July', motFrancais: 'Juillet', motTrouve: 'non'},
    {id: 14, motAnglais: 'August', motFrancais: 'Aout', motTrouve: 'non'},
    {id: 15, motAnglais: 'September', motFrancais: 'Septembre', motTrouve: 'non'},
    {id: 16, motAnglais: 'October', motFrancais: 'Octobre', motTrouve: 'non'},
    {id: 17, motAnglais: 'November', motFrancais: 'Novembre', motTrouve: 'non'},
    {id: 18, motAnglais: 'December', motFrancais: 'Decembre', motTrouve: 'non'}
  ];
  quizzAnimauxService = [
    {id: 0, motFrancais: 'Cochon', motAnglais: 'Pig', motTrouve: 'non'},
    {id: 1, motFrancais: 'Loup', motAnglais: 'Wolf', motTrouve: 'non'},
    {id: 2, motFrancais: 'Escargot', motAnglais: 'Snail', motTrouve: 'non'},
    {id: 3, motFrancais: 'Oiseau', motAnglais: 'Bird', motTrouve: 'non'},
    {id: 4, motFrancais: 'Renard', motAnglais: 'Fox', motTrouve: 'non'},
    {id: 5, motFrancais: 'Canard', motAnglais: 'Duck', motTrouve: 'non'},
    {id: 6, motFrancais: 'Mouton', motAnglais: 'Sheep', motTrouve: 'non'},
    {id: 7, motFrancais: 'Mouche', motAnglais: 'Fly', motTrouve: 'non'},
    {id: 8, motFrancais: 'Singe', motAnglais: 'Monkey', motTrouve: 'non'},
    {id: 9, motFrancais: 'Abeille', motAnglais: 'Bee', motTrouve: 'non'}
  ];

  quizzCorpsHumainService = [
    {id: 0, motFrancais: 'Main', motAnglais: 'Hand', motTrouve: 'non'},
    {id: 1, motFrancais: 'Doigt', motAnglais: 'Finger', motTrouve: 'non'},
    {id: 2, motFrancais: 'Tete', motAnglais: 'Head', motTrouve: 'non'},
    {id: 3, motFrancais: 'Bras', motAnglais: 'Arm', motTrouve: 'non'},
    {id: 4, motFrancais: 'Jambe', motAnglais: 'Leg', motTrouve: 'non'},
    {id: 5, motFrancais: 'Coude', motAnglais: 'Elbow', motTrouve: 'non'},
    {id: 6, motFrancais: 'Oreille', motAnglais: 'Ear', motTrouve: 'non'},
    {id: 7, motFrancais: 'Jambe', motAnglais: 'Leg', motTrouve: 'non'},
    {id: 8, motFrancais: 'Cou', motAnglais: 'Neck', motTrouve: 'non'},
    {id: 9, motFrancais: 'Orteil', motAnglais: 'Toe', motTrouve: 'non'}
  ];

  quizzAAfficherService: Array<{id: number, motFrancais: string, motAnglais: string, motTrouve: string}>;

  motsNonTrouves = [];

  scoreGlobal = 12;
  scoreFinal = 0;
  penalite = 0;
  premierCoup = 0;
  choixDuQuizz = 0;

  constructor(private httpClient: HttpClient) {
  }


  switchOnAll() {
    for (let ligne of this.maListeDeMotsATrouver) {
      ligne.motTrouve = 'oui';
    }
  }

  switchOnOne(indexOfArray: number) {
    if (this.choixDuQuizz === 0) {
      this.quizzTemporelService[indexOfArray].motTrouve = 'oui';
      // this.quizzAAfficherService = this.quizzTemporelService;
    }
    if (this.choixDuQuizz === 1) {
      this.quizzAnimauxService[indexOfArray].motTrouve = 'oui';
      // this.quizzAAfficherService = this.quizzAnimauxService;

    }
    if (this.choixDuQuizz === 2) {
      this.quizzCorpsHumainService[indexOfArray].motTrouve = 'oui';
      this.quizzAAfficherService = this.quizzCorpsHumainService;

    }
    if (this.choixDuQuizz === 3) {
      this.quizzDiversService[indexOfArray].motTrouve = 'oui';
      this.quizzAAfficherService = this.quizzDiversService;
    }

    if (this.choixDuQuizz === 4) {
      this.maListeDeMotsATrouver[indexOfArray].motTrouve = 'oui';
      this.quizzAAfficherService = this.maListeDeMotsATrouver;
    }
  }

  switchOnOneBis(indexOfArrayBis: number) {
    console.log('appel à switchOnOneBis / Service');
    this.maListeDeMotsATrouverBis[indexOfArrayBis].motTrouve = 'oui';
    console.log('motTrouve dans switchOnOneBis vaut : ');
    console.log(this.maListeDeMotsATrouverBis[indexOfArrayBis].motTrouve);
  }

  saveWordsToServer() {
    this.httpClient
      .put('https://http-client-demo-5f545.firebaseio.com/liste-mots.json', this.maListeDeMotsATrouver)
      .subscribe(
        () => {
          console.log('Enregistrement terminé');
        },
        (error) => {
          console.log('Erreur de sauvegarde : ' + error);
        }
      );
  }

  getScoreGlobal() {
    this.scoreFinal = 0;
    // console.log('passe dans getScoreGlobal(service). RAZ scoreFinal vaut : ');
    // console.log(this.scoreFinal);
    for (let i = 0; i < this.maListeDeMotsATrouver.length; i++) {
      if (this.maListeDeMotsATrouver[i].motTrouve === 'oui') {
        this.scoreFinal++;
      }
    }
    // console.log('scoreFinal après boucle for vaut : ');
    // console.log(this.scoreFinal);
    return this.scoreFinal;
  }

  getPenalitesTotal() {
    this.penalite++;
    console.log('penalités Globales valent : ' + this.penalite);
    return this.penalite;
  }

  getPremierCoup() {
    this.premierCoup++;
    return this.premierCoup;
  }

  ajouteMotsNonTrouves(motAnglais) {
    this.motsNonTrouves.push(motAnglais);
    console.log('tab motsNonTrouves : ' + this.motsNonTrouves);
  }

  getNumeroDuQuizz(indiceChoix) {
    console.log('indiceChoix Quizz-zero vaut : ' + indiceChoix);
    this.choixDuQuizz = indiceChoix;
    if (this.choixDuQuizz === 0) {
      this.quizzAAfficherService = this.quizzTemporelService;
    }
    if (this.choixDuQuizz === 1) {
      this.quizzAAfficherService = this.quizzAnimauxService;
    }
    if (this.choixDuQuizz === 2) {
      this.quizzAAfficherService = this.quizzCorpsHumainService;
    }
    if (this.choixDuQuizz === 3) {
      this.quizzAAfficherService = this.quizzDiversService;
    }
    if (this.choixDuQuizz === 4) {
      this.quizzAAfficherService = this.maListeDeMotsATrouver;
    }
    return indiceChoix;
  }

}
