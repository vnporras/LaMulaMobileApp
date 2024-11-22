import {ProductQuantityDto} from "./ProductQuantityDto";

export interface CheckoutRequestDto {
  idEntity: string;
  username: string;
  rolName: string;
  productQuantityList: ProductQuantityDto[];
}
