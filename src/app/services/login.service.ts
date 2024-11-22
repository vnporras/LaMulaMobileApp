import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequestDto} from "../models/LoginRequestDto";
import {Observable} from "rxjs";
import {LoginResponseDto} from "../models/LoginResponseDto";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(loginRequestDto: LoginRequestDto): Observable<LoginResponseDto> {
    return this.httpClient.post<LoginResponseDto>(`${environment.baseUrl}/login`, loginRequestDto);
  }
}
