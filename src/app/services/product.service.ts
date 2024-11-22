import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductDto} from "../models/ProductDto";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getProducts(): Observable<ProductDto[]> {
    return this.httpClient.get<ProductDto[]>(`${environment.baseUrl}/products`);
  }
}
