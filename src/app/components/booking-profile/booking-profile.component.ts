import { Component } from '@angular/core';
import { DataRecycleService } from '../../services/data-recycle.service';
import { CacheService } from '../../services/cache.service';
import { Client } from '../../model/client';

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
    }

    cancelEdit() {
        this.client = this.uneditedProfile;
    }



}