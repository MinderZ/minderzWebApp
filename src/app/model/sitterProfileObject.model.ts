import { SitterReferenceObject } from "./sitterReferenceObject.model";

export class SitterProfileObject {

    // constructor() {}

    jobRadius?: string;
    petSizePreference?: string;
    petTypePreference?: string;
    pricePerWalk?: string;
    petsPerWalk?: string;
    walksPerDay?: string;
    petSitting?: string;
    sittingPriceperPet?: string;
    sittingPetsperDay?: string;
    houseSittingPrice?: string;
    dropInVisitsPrice?: string;
    visitsPerDay?: string;
    houseType?: string;
    children?: boolean;
    experience?: string;
    headline?: string;
    bio?: string;
    doneVolunteer?: boolean;
    ownPets?: boolean;
    hadPets?: boolean;

    references?: Array<SitterReferenceObject>

}
