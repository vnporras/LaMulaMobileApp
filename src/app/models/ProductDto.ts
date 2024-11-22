import {CoffeeTypeDto} from "./CoffeeTypeDto";
import {AttachmentDto} from "./AttachmentDto";
import {CompanyDto} from "./CompanyDto";

export interface ProductDto {
  idProduct: string;
  name: string;
  coffeeTypeDto: CoffeeTypeDto;
  attachmentDto: AttachmentDto;
  companyDto: CompanyDto;
  description: string;
  unitCost: number;
  stock: number;
  packageSize: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
}
