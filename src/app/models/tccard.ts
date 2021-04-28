import { SingleResponseModel } from "./singleResponseModel";

export interface TcCard{
    id:number;
    identityId:number;
    identityNo:string;
    serialNo:string;
    nam:string;
    secondName:string;
    surName:string;
    fatherName:string;
    motherName:string;
    birthPlace:string;
    birthDate:Date;
    gender:string;
}