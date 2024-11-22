import {Component, OnInit} from '@angular/core';
import {IonContent, IonButton} from '@ionic/angular/standalone';
import {StorageService} from "../../services/storage.service";
import {LoginResponseDto} from "../../models/LoginResponseDto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton],
})
export class Tab1Page implements OnInit {
  loginResponseDto: LoginResponseDto | null = null;

  constructor(
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit() {
    const existsLoginResponseDto = this.storageService.getItem<LoginResponseDto>('loginResponseDto');

    if (existsLoginResponseDto) {
      this.loginResponseDto = existsLoginResponseDto;
    }
  }

  onLogout() {
    this.storageService.removeItem('loginResponseDto');
    this.router.navigate(['/']);
  }
}
