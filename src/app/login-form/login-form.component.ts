import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Input () id: number;
  @Input () motFrancais: string;
  @Input () motAnglais: string;
  @Input () maListeDeMotsATrouver: Array<object>;
  @Input () data: Array<object>;


  loginForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: []
    });
  }
  login() {
    console.log('Reponse User : ');
    console.log(this.loginForm.value.username);
    console.log('Id : ');
    console.log(this.id);
    console.log('motFrancais : ');
    console.log(this.motFrancais);
    console.log('motAnglais : ');
    console.log(this.motAnglais);
    if (this.loginForm.value.username === this.motAnglais) {
      alert('Gagné');
    }
  }
}
