import {UserDto} from "./UserDto";
import {CompanyDto} from "./CompanyDto";
import {OrderStatusDto} from "./OrderStatusDto";

export interface OrderDto {
  idOrder: string;
  userDto: UserDto;
  companyDto: CompanyDto;
  orderStatusDto: OrderStatusDto;
  orderCode: number;
  totalCost: number;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
}
