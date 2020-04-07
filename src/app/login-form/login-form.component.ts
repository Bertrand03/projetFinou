import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  score = 0;
  scoreGlobal = 0;
  motValide: 'non';

  @Input() id: number;
  @Input() motFrancais: string;
  @Input() motAnglais: string;
  @Input() maListeDeMotsATrouver: Array<object>;
  @Input() motTrouve: string;
  @Input() data: Array<object>;


  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: []
    });
  }

  login() {
    console.log('Score vaut : ');
    console.log(this.score);
    console.log('Reponse User : ');
    console.log(this.loginForm.value.username);
    console.log('Mot trouve vaut : ');
    console.log(this.motTrouve);
    if (this.loginForm.value.username === this.motAnglais) {
      this.motTrouve = 'oui';
      console.log('Mot trouve vaut : ');
      console.log(this.motTrouve);
    }
  }
}
