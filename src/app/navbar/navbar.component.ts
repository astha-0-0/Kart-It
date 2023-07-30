import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isMainPage: boolean = false;

  constructor(private router: Router) { }
  ngOnInit(): void { 
    this.isMainPage = this.router.url === '/mainpage';
  }

  goback():void{
    if (this.router.url === '/mainpage') {
      this.router.navigateByUrl('/login'); // Navigate to login page if currently on mainpage
    } else {
      this.router.navigate(['/mainpage']); // Go back to the previous page if not on mainpage (assuming the login page is the previous page)
    }
  }
   
  imgCollection: Array<object> = [
      {
        image: 'assets/image/1.png',
        thumbImage: 'assets/image/1.png',
        alt: 'Image 1'
      }, {
        image: 'assets/image/2.png',
        thumbImage: 'assets/image/2.png',
        
        alt: 'Image 2'
      }, {
        image: 'assets/image/3.png',
        thumbImage: 'assets/image/3.png',
        
        alt: 'Image 3'
      }, {
        image: 'assets/image/4.png',
        thumbImage: 'assets/image/4.png',
       
        alt: 'Image 4'
      },{
        image: 'assets/image/5.png',
        thumbImage: 'assets/image/5.png',
        alt: 'Image 5'
      },{
        image: 'assets/image/6.png',
        thumbImage: 'assets/image/6.png',
        alt: 'Image 6'
      },{
        image: 'assets/image/7.png',
        thumbImage: 'assets/image/7.png',
        alt: 'Image 7'
      },{
        image: 'assets/image/8.png',
        thumbImage: 'assets/image/8.png',
        alt: 'Image 8'
      },{
        image: 'assets/image/9.png',
        thumbImage: 'assets/image/9.png',
        alt: 'Image 9'
      },
      {
        image: 'assets/image/10.png',
        thumbImage: 'assets/image/10.png',
        alt: 'Image 10'
      }
  ];

}
