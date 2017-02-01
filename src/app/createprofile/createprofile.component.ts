import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.component.html',
  styleUrls: ['./createprofile.component.css','../../assets/css/style.css']
})
export class CreateProfileComponent implements OnInit {

  user = {
    firstname:'',
    lastname: '',
  };
  constructor() { }

  ngOnInit() {
  }

}
