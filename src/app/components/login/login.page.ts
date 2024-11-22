import { Component, OnInit } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  AlertController,
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonList, IonText
} from '@ionic/angular/standalone';
import {LoginRequestDto} from "../../models/LoginRequestDto";
import {LoginService} from "../../services/login.service";
import {LoginResponseDto} from "../../models/LoginResponseDto";
import {Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    ReactiveFormsModule,
    IonList,
    IonInput,
    IonItem,
    IonButton,
    IonText,
    NgOptimizedImage
  ]
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private loginService: LoginService,
    private alertCtrl: AlertController,
    private router: Router,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this._initForm();
  }

  ionViewWillLeave() {
    this.loginForm.reset();
  }

  private _initForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('vanessa.porras@gmail.com', {
        updateOn: 'change',
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('123456', {
        updateOn: 'change',
        validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]
      })
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      const loginRequestDto: LoginRequestDto = {
        username: username,
        password: password
      };

      this.loginService.login(loginRequestDto).subscribe({
        next: (response: LoginResponseDto) => {
          this.router.navigate(['/app/tabs/tab1']);
          this.storageService.setItem('loginResponseDto', response);
        },
        error: (err) => {
          console.error('Login failed:', err);
          this.loginErrorAlert(err.error.message);
        }
      });
    } else {
      console.warn('Form is invalid');
    }
  }

  onSignup() {
    console.log('Navigating to signup');
    // Add your signup navigation logic here
  }

  async loginErrorAlert(message: string) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: message,
      buttons: ['Close'],
    });

    await alert.present();
  }
}
