import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.component.html',
  styleUrls: ['./createcompany.component.css','../../assets/css/style.css']
})
export class CreateCompanyComponent implements OnInit {
  user = {
    companyname:'',
    lastname: '',
  };
  constructor() { }

  ngOnInit() {
  }

}
