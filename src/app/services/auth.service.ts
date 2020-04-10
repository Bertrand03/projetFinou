export class AuthService {
  isAuthSrv: boolean;

  signIn() {
    console.log('Connexion réussie');
    this.isAuthSrv = true;
  }

  signOut() {
    console.log('Deconnexion réussie');
    this.isAuthSrv = false;
  }

}
