export interface ResponseErrorDto {
  message: string;
  statusCode: number;
  timestamp: Date;
  errors: []
}
