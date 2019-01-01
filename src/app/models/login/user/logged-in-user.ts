import { Designation } from './designation';
import { Role } from './role';

export class LoggedInUser {
    firstName:string;
	lastName:string;
	fullName:string;
	userId:number;
	designation:Designation;
	role:Role;
	createdBy:string;
	createdTime:any;
	updatedBy:string;
	updatedTime:any;
}