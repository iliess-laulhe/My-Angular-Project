import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  name = 'john';
  firstname = 'Doe';
  age = '25';
  photo = 'https://randomuser.me/api/portraits/lego/2.jpg';
  imageSrc = 'https://randomuser.me/api/portraits/lego/2.jpg';
  quote = '';
  element = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggleAge() {
 this.element = !this.element
  }
  

}
