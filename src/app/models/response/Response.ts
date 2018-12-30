import { Error } from './Error';

export class Response{
    success:boolean;
    dataList:any;
    data:any;
    message:string;
    token:string;
    error:Error
}