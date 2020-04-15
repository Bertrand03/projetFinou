import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable()
export class AuthService {

  users = [
    {id: 0, pseudo: 'pseudo0', motDePasse: 'mdp0'},
    {id: 1, pseudo: 'pseudo1', motDePasse: 'mdp1'},
    {id: 2, pseudo: 'pseudo2', motDePasse: 'mdp2'},
    {id: 3, pseudo: 'delphine', motDePasse: 'delphine'}
  ];

  isAuthSrv: boolean;
  dernierID: number;

  constructor(private  httpClient: HttpClient) {
  }

  signIn() {
    console.log('Connexion réussie');
    this.isAuthSrv = true;
  }

  signOut() {
    console.log('Deconnexion réussie');
    this.isAuthSrv = false;
  }

  saveLoginToServer(pseudoUserCree: string, motDePasseUserCree: string) {
    this.dernierID = this.users.length;
    this.users.push({id: this.dernierID, pseudo: pseudoUserCree, motDePasse: motDePasseUserCree});
    this.httpClient
      .put('https://http-client-demo-5f545.firebaseio.com/auth.json', this.users)
      .subscribe(
        () => {
          console.log('Ajout utilisateur');
          console.log(this.dernierID + ' ' + pseudoUserCree + ' ' + motDePasseUserCree);
        },
        (error) => {
          console.log('Erreur de creation login User : ' + error);
        }
      );
  }


}
