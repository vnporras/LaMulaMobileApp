import {LoginDto} from "./LoginDto";

export interface UserDto {
  idUser: string;
  loginDto: LoginDto;
  name: string;
  email: string;
  address: string;
  phone: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
}
