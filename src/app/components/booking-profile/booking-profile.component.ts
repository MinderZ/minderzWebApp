import { Component } from '@angular/core';
import { DataRecycleService } from '../../services/data-recycle.service';

@Component({
    selector: 'app-booking-profile',
    templateUrl: './booking-profile.component.html',
    styleUrls: ['./booking-profile.component.css']
})

export class BookingProfileComponent {

    editing = false;

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

    constructor(private dataRecycleService: DataRecycleService) {

        

        
        this.fullname = "Test"
        this.rating = 4.0;
        this.reviews = 10;
        this.jobsComplete = 15;
        this.accountCreated = new Date;
        this.jobs = 15;
        this.cancellations = 2;
        this.aboutMe = "I am a sitter";
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


    
}