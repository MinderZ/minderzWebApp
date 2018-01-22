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
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat nulla eu urna egestas, lobortis tristique metus congue. Suspendisse interdum eros a sapien accumsan, sed consequat nisi varius. Vestibulum posuere libero in imperdiet euismod. Nullam ut arcu ut lorem lobortis tincidunt id non urna. Quisque sed nulla vitae velit mollis ornare. Aliquam non vehicula lorem. Etiam eget risus rhoncus neque rutrum fermentum.",
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
