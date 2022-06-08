import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'myportfolio';
  namedesc = 'Hi guys, I am Mangesh';
  designationdesc = 'I am currently working as a Frontend Web Developer';
  aboutmedesc =
    'Self motivated and experienced Front-End Web Developer with a demonstrated history of working in information technology and services industry. Skilled in MEAN Stack. Strong engineering professional with a Bachelor of Engineering focused in EEE from CMR Institute Of Technology';
  skillsArray = [
    { _id: '1', path: '../assets/logos/angular_icon.png' },
    { _id: '2', path: '../assets/logos/angular_material_logo.png' },
    { _id: '3', path: '../assets/logos/js_logo.png' },
    { _id: '4', path: '../assets/logos/html_icon.png' },
    { _id: '5', path: '../assets/logos/css3_logo.png' },
    { _id: '6', path: '../assets/logos/node js_icon.png' },
    { _id: '7', path: '../assets/logos/express-js-icon.png' },
    { _id: '8', path: '../assets/logos/mongodb_icon.png' },
  ];
}
