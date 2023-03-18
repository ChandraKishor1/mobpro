import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WhatWeDoComponent } from '../what-we-do/what-we-do.component';
import { WhoWeAreComponent } from '../who-we-are/who-we-are.component';
import { WhyUsComponent } from '../why-us/why-us.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent  implements OnInit{
  width:any;
  widths:any;
  year:any;
  constructor(private dailog:MatDialog){
let d=new Date()
this.year=d.getFullYear()
  }
  whoWeAre() {
    console.log("hello")
    const dialogRef = this.dailog.open(WhoWeAreComponent , {
      disableClose: false,
      autoFocus: false,
    })

    dialogRef.afterClosed().subscribe(res => {
      console.log("dialog has been closed")
      
    })
  }
  whatWeDo() {
    console.log("hello")
    const dialogRef = this.dailog.open(WhatWeDoComponent , {
      disableClose: false,
      autoFocus: false,
    })

    dialogRef.afterClosed().subscribe(res => {
      console.log("dialog has been closed")
      
    })
  }
  whyUs() {
    console.log("hello")
    const dialogRef = this.dailog.open(WhyUsComponent , {
      disableClose: false,
      autoFocus: false,
    })

    dialogRef.afterClosed().subscribe(res => {
      console.log("dialog has been closed")
      
    })
  }

  ngOnInit(): void {
    // $('#myCarousel').carousel({
    //   interval: 4000
    // })
    this.width=window.screen.availWidth
  }
  scroll(el: HTMLElement) {
    // el.scrollIntoView({behavior: "smooth",
    // block: "start",
    // inline: "nearest"});
    el.scrollIntoView()  }
}
