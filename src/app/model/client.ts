import { UploadFiles } from "./upload-files";
import { SitterProfileObject } from "./sitterProfileObject.model";

export class Client {
    fullName?: string;
    location?: string;
    profilePicture: string;
    age: number;
    gender: string;
    cellphoneNumber: string;
    id: string;
    copyOfId: string;
    consentForm: string;
    emergencyContactName: string;
    emergencyContactNr: string;
    coordinates: {
        lat: number;
        lng: number;
    }
    isServiceProvider: boolean;
    serviceProvider?: SitterProfileObject;
}
