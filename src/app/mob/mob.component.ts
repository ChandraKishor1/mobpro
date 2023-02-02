import { Component, HostListener, OnInit} from '@angular/core';
import { Scroll } from '@angular/router';



@Component({
  selector: 'app-mob',
  templateUrl: './mob.component.html',
  styleUrls: ['./mob.component.scss'],
 
})
export class MobComponent 
 {
//   // showDiv = true; // set initial visibility
//   lastScrollTop = 0;

//   showDiv = true;
//   lastScroll = 0;

//   @HostListener('window:scroll', ['onWindowScroll($event)'])
//   onWindowScroll(e:any) {
//     if (window.pageYOffset > this.lastScroll) {
//       this.showDiv = false;
//     } else {
//       this.showDiv = true;
//     }
//     this.lastScroll = window.pageYOffset;
//   }
//   imgdata: any=[];
// image:any=[];
//   ngOnInit(): void {
//     console.log(this.sorting());
//     this.onWindowScroll(scrollY)
//     let variableWithLineBreaks = "Line 1\nLine 2\nLine 3";
// console.log(variableWithLineBreaks);
//     this.onWindowScroll = this.onWindowScroll.bind(this);
//     let c=[]
//     for(let i=1;i<32;i++){
     
// //  this.image.push('client'+'-'+i)
//  this.imgdata.push({img:'assets'+'/'+'images'+'/'+'client'+'-'+i+'.'+'png',id:i})
//     }
//     console.log(this.imgdata);
//     this.imgdata.filter((x:any,y:any)=>{

//     })

//     for(let i=0;i<10;i++){
//       let d :any=[];
//       for(let j=3*i+1;j<=3*i+3;j++){
// d.push('assets'+'/'+'images'+'/'+'client'+'-'+j+'.'+'png')
//       }
// this.image.push(d);
      
//     }
   
//     console.log(this.image);
    

    
//   }
//   getArray(n: number) {
//     return new Array(n);
//   }
//   sorting(){
    
//     let arr=[4,5,3,9,21]
//     for(let i=0;i<arr.length;i++){
//       for(let j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//         let temp=arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//         }
//       }
//     }
//     return arr
//   }
}
