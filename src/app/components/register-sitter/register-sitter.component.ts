import { Component, OnInit } from '@angular/core';
import { RegisterSitterService } from '../../services/register-sitter.service';

@Component({
  selector: 'app-register-sitter',
  templateUrl: './register-sitter.component.html',
  styleUrls: ['./register-sitter.component.css']
})
export class RegisterSitterComponent implements OnInit {

  constructor(protected registerService: RegisterSitterService) { }

  ngOnInit() {
  }

}
