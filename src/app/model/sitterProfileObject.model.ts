import { SitterReferenceObject } from "./sitterReferenceObject.model";
import { UploadFiles } from "./upload-files";

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

    serviceMap: Map<string, boolean>;
    petsMap: Map<string, boolean>;
    houseType?: string;
    children?: boolean;
    experience?: string;
    doneVolunteer?: boolean;
    ownPets?: boolean;
    hadPets?: boolean;
    gender:string;
    cellphoneNumber: string;
    coordinates: {
        lat:number;
        lng:number;
    }
    references?: Array<SitterReferenceObject>
    profilePicture: UploadFiles;
    copyOfId: UploadFiles;
    consentForm: UploadFiles;
    location?:string;
    emergencyContactName: string;
    emergencyContactNr: string;

}
