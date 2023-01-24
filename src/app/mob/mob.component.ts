import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-mob',
  templateUrl: './mob.component.html',
  styleUrls: ['./mob.component.scss'],
 
})
export class MobComponent implements OnInit {
  imgdata: any=[];
image:any=[];
  ngOnInit(): void {

    let c=[]
    for(let i=1;i<32;i++){
     
//  this.image.push('client'+'-'+i)
 this.imgdata.push({img:'assets'+'/'+'images'+'/'+'client'+'-'+i+'.'+'png',id:i})
    }
    console.log(this.imgdata);
    this.imgdata.filter((x:any,y:any)=>{

    })

    for(let i=0;i<10;i++){
      let d :any=[];
      for(let j=3*i+1;j<=3*i+3;j++){
d.push('assets'+'/'+'images'+'/'+'client'+'-'+j+'.'+'png')
      }
this.image.push(d);
      
    }
   
    console.log(this.image);
    

    
  }
 
}
