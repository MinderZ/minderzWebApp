import { Component, OnInit ,Input} from '@angular/core';

import { SitterProfileObject } from '../../../model/sitterProfileObject.model';

@Component({
  selector: 'app-sitter-profile-card',
  templateUrl: './sitter-profile-card.component.html',
  styleUrls: ['./sitter-profile-card.component.css']
})
export class SitterProfileCardComponent implements OnInit {
@Input() petSitter={name:"Piet",
surname:"Plaasmuis",
description:"I like dogs",
address:"Planet Earth",
profilePicture:"https://media.giphy.com/media/rWlozpRkj7dU4/source.gif",
jobs:"Pet Boarding",
rating:4.7,
price:150,
reviews:999};

  constructor() { }

  ngOnInit() {
  }

}
