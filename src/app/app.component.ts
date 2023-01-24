import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mobpro';
  images:any=[0,1,2,3,4].map((x:any)=>'https://picsum.photos/200/200?random='+x)
  images2:any=[5,6,7,8,9].map((x:any)=>'https://picsum.photos/200/200?random='+x)

  message!:string;
}
