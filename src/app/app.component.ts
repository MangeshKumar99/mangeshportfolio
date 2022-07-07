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
  projectsArray = [
    { _id: '1', path: '../assets/images/insta.png', desc: 'A full stack instagram clone built using MEAN stack. Email verification using nodemailer, hosted images on cloudinary, CRUD on posts, like/dislike, follow/unfollow, comment and many more. Use email as sssunny098@gmail.com and password as sunny for testing', live: 'https://instagramclone-build-03.netlify.app/',backend:'https://github.com/MangeshKumar99/build_03_instaclone_backend.git',frontend:'https://github.com/MangeshKumar99/build_03_instaclone_frontend.git' },
    { _id: '2', path: '../assets/images/netflix.png', desc: 'A netflix ui clone built using angular. Used TMDB API for fetching movies',live:'https://netflixclonengbuild02.netlify.app/',backend:'',frontend:'https://github.com/MangeshKumar99/build_02_netflixclone.git' },
    { _id: '3', path: '../assets/images/tictactoe.png', desc: 'A simple tictactoe web app built using angular',live:'https://tictactoengbuild01.netlify.app/',backend:'',frontend:'https://github.com/MangeshKumar99/build_01_tictactoe.git' },

  ]
}
