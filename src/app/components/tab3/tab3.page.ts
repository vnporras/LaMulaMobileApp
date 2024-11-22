import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonText,
  IonGrid, IonRow, IonCol, IonLabel
} from '@ionic/angular/standalone';
import {ProductDto} from "../../models/ProductDto";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonText, IonGrid, IonRow, IonCol, IonLabel],
})
export class Tab3Page {

  productsDto: ProductDto[] = [];
  productQuantityMap = new Map<ProductDto, number>();

  constructor() {}
}
