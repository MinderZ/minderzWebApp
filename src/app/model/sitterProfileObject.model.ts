import { SitterReferenceObject } from "./sitterReferenceObject.model";
import { UploadFiles } from "./upload-files";
import { Questions } from "./question.model";

export class SitterProfileObject {

    aboutMe:string;
    jobRadius?: number;
    age:number;
    id: string;
    dogWalking: {
        pricePerWalk: number;
        petsPerWalk:number;
        walksPerDay: number;
    }

    petSitting: {
        pricePerPet: number;
        petsPerDay: number;

    }

    houseSitting: {
        pricePerDay: number;
    }

    dropInVist:{
        pricePerVisit: number;
        visitsPerDay: number;
    }

    serviceMap: any;
    petsMap: any;
    houseType?: string;
    children?: boolean;
    experience?: string;
    doneVolunteer?: boolean;
    ownPets?: boolean;
    hadPets?: boolean;
    gender:string;
    cellphoneNumber: string;
    references?: Array<SitterReferenceObject>
    location?:string;
    emergencyContactName: string;
    emergencyContactNr: string;
    SitterQuestionair?: Array<Questions>;

}
