import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  @Input () id: number;
  @Input () motAnglais: string;
  @Input () motFrancais: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [],
      password: []
    });
  }

  login() {
    console.log('Username vaut :');
    console.log(this.loginForm.value.username);
    console.log('id vaut : ');
    console.log(this.id);
    console.log('motAnglais vaut : ');
    console.log(this.motAnglais);
    console.log('motFrancais vaut : ');
    console.log(this.motFrancais);
    if (this.loginForm.value.username === this.motFrancais) {
      console.log('Le mot est bon');
    } else {
      console.log("Le mot n'est pas bon");
    }
  }



}
