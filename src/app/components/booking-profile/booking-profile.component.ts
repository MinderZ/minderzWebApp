import { Component } from '@angular/core';
import { DataRecycleService } from '../../services/data-recycle.service';
import { CacheService } from '../../services/cache.service';
import { Client } from '../../model/client';
import { forEach } from '@angular/router/src/utils/collection';
import { FilterService } from '../../services/filter.service';

@Component({
    selector: 'app-booking-profile',
    templateUrl: './booking-profile.component.html',
    styleUrls: ['./booking-profile.component.css']
})

export class BookingProfileComponent {

    client: Client;
    uneditedProfile: Client;


    sitterID: string;
    userID: string;
    editable = false;
    editing = false;

    profilePic: any;
    fullname: string;
    rating: number;
    reviews: number;
    accountCreated: Date;
    jobsComplete: number;
    jobs: number;
    cancellations: number;
    aboutMe: string;
    languages = new Array();
    skills = new Array();

    newSkill: string;
    newLanguage: string;

    addingLanguage = false;
    addingSkill = false;

    //Dog walking
    dogWalking = false;
    petsPerWalk = 0;
    pricePerWalk = 0;
    walksPerDay = 0;

    //Pet Sitting
    petSitting = false;
    petsPerDay = 0;
    pricePerPet = 0;

    //House Sitting
    houseSitting = false;
    pricePerDay = 0;

    //Drop In
    dropIn = false;
    pricePerVisit = 0;
    visitsPerDay = 0;


    constructor(
        private dataRecycleService: DataRecycleService,
        private cacheService: CacheService, ) {

        if (this.cacheService.myProfile) {
            this.client = this.cacheService.currentSitter;
            this.uneditedProfile = this.client;
            this.editable = true;
        } else {
            this.client = this.cacheService.selectedSitter;
            this.editable = false;
        }

        // this.profilePic = this.client.profilePicture;
        // this.fullname = this.client.firstName + " " + this.client.lastName;
        this.rating = 4; //Unlinked
        this.reviews = 10; //Unlinked
        this.jobsComplete = 15; //Unlinked
        this.accountCreated = new Date; //Unlinked
        this.jobs = 15; //Unlinked
        this.cancellations = 2; //Unlinked
        // this.aboutMe = this.client.serviceProvider.aboutMe;
        this.languages.push('English');
        this.skills.push('Walking');

        this.filterServices();

    }

    edit() {
        this.editing = !this.editing;
    }

    addLanguage() {
        this.addingLanguage = !this.addingLanguage;
    }

    addSkill() {
        this.addingSkill = !this.addingSkill;
    }

    pushLanguage() {
        if (this.newLanguage !== undefined) {
            this.languages.push(this.newLanguage);
            this.addLanguage();
            this.newLanguage = '';
        } else {
            this.addLanguage();
            this.newLanguage = '';
        }
    }

    pushSkill() {
        if (this.newSkill !== undefined) {
            this.languages.push(this.newSkill)
            this.addSkill();
            this.newSkill = '';
        } else {
            this.addSkill();
            this.newSkill = '';
        }

    }

    editCommit() {
        this.dataRecycleService.registerUser(this.client);
        this.editing = false;
    }

    cancelEdit() {
        this.client = this.uneditedProfile;
        this.editing = false;
    }

    filterServices() {
        console.log('Filter');
        // for (let i = 0; i < this.client.serviceProvider.serviceMap.length; i++) {
        //     console.log('Test: ' + this.client.serviceProvider.serviceMap['DogWalking']);
        if (this.client.serviceProvider.serviceMap['Dog Walking']) {
            this.dogWalking = true;
            this.pricePerWalk = this.client.serviceProvider.dogWalking.pricePerWalk;
            this.petsPerWalk = this.client.serviceProvider.dogWalking.petsPerWalk;
            this.walksPerDay = this.client.serviceProvider.dogWalking.walksPerDay;
        } else if (this.client.serviceProvider.serviceMap['Pet Sitting']) {
            this.petSitting = true;
            this.petsPerDay = this.client.serviceProvider.petSitting.petsPerDay;
            this.pricePerPet = this.client.serviceProvider.petSitting.pricePerPet;
        } else if (this.client.serviceProvider.serviceMap['House Sitting']) {
            this.houseSitting = true;
            this.pricePerDay = this.client.serviceProvider.houseSitting.pricePerDay;
        } else if (this.client.serviceProvider.serviceMap['Drop in Visits']) {
            this.dropIn = true;
            this.visitsPerDay = this.client.serviceProvider.dropInVist.visitsPerDay;;
            this.pricePerVisit = this.client.serviceProvider.dropInVist.pricePerVisit;
        } else {
            return;
        }
        // }

    }


}