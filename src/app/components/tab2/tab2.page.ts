import {Component, OnInit} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonListHeader,
  IonLabel,
  IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton
} from '@ionic/angular/standalone';
import {ProductService} from "../../services/product.service";
import {ProductDto} from "../../models/ProductDto";
import {CurrencyPipe} from "@angular/common";
import {StorageService} from "../../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonListHeader, IonLabel, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, CurrencyPipe, IonButton]
})
export class Tab2Page implements OnInit {

  productsDto: ProductDto[] | null = null;

  constructor(
    private productService: ProductService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (response: ProductDto[]) => {
        console.log(response);
        this.productsDto = response;
      },
      error: (error) => {
        console.log('Getting all products failed:', error);
      }
    });
  }

  onAddProduct(productDto: ProductDto) {
    let produdctsStorage =
      this.storageService.getItem<ProductDto[]>('productsStorage');

    console.log('produdctsStorage');
    console.log(produdctsStorage);

    if (produdctsStorage) {
      console.log('Entró al if');
      let currentQuantity = produdctsStorage.get(productDto) ?? 0;
      let newProductQuantity = currentQuantity + 1;
      productQuantityMap.set(productDto, newProductQuantity);
      this.storageService.setItem('productQuantity', Object.fromEntries(productQuantityMap));
    } else {
      console.log('Entró al else');
      let productQuantityMap = new Map<ProductDto, number>();
      productQuantityMap.set(productDto, 1)
      this.storageService.setItem('productQuantity', Object.fromEntries(productQuantityMap));
    }

    this.router.navigate(['/app/tabs/tab3']);
  }
}
