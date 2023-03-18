import { trigger, state, style, transition, animate, AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { AfterViewInit, Component,NgZone, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, QueryList, ViewChild, ViewChildren, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { fadeInDown } from 'ng-animate';
import {  Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TextAnimation } from 'ngx-teximate';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
export interface CardData {
  imageId: string;
  state: "default" | "flipped" | "matched";
  msg:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

  animations: [
    trigger("cardFlip", [
      state(
        "default",
        style({
          transform: "none"
        })
      ),
      state(
        "flipped",
        style({
        
          transform: "rotateY(180deg)"
        })
      ),
      state(
        "matched",
        style({
         
          transform: "scale(0.05)",
          
        })
      ),
      transition("default => flipped", [animate("400ms")]),
      transition("flipped => default", [animate("400ms")]),
      transition("* => matched", [animate("400ms")])
    ])
  ]
})


export class HomeComponent implements OnInit,AfterViewInit,OnChanges {
  @ViewChild('home') home:any;
  @ViewChild('teximate') teximate:any;
  disable:boolean=false;
  @ViewChild('publisher', { static: false })
  publisher: ElementRef<HTMLVideoElement>| any;
  // @ViewChild(' advertiser')  advertiser!:ElementRef;
play:any='autoplay'
  flip: string = 'inactive';
  timeStampObj: any = { start: '', end: ''};
  firstStart:boolean=true;
 form!:FormGroup;
widths:any;
width:any;
 videourl:any;
  // images:any=[{ img: "assets/images/client-1.png" ,id:"1"},  
  // { img: "assets/images/client-2.png",id:"2" },  
  // { img: "assets/images/client-3.png",id:"3" },  
  // { img: "assets/images/client-4.png",id:"4" },  
  // { img: "assets/images/client-5.png" ,id:"4"},  
  // { img: "assets/images/client-6.png",id:"6" },  
  // { img: "assets/images/client-7.png",id:"7" },  
  // { img: "assets/images/client-8.png",id:"8" },  
  // { img: "assets/images/client-9.png",id:"9" },  ];
  public autoPlay: Boolean = true;
  imgdata:any=[]
 image:any=[];
  imageData:CardData[]=[
    {
    imageId: "assets/design.jpg",
    state: "default",
    msg:"A specialization of web design that deals with the controls people use to interact with a website or app."
  },
  {
    imageId: "assets/web.jpg",
    state: "default",
    msg:"The work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience. "
  },
  
  {
    imageId: "assets/app.jpg",
    state: "default",
    msg:'The process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources.'
  },
  {
    imageId: "assets/affiliate.jpg",
    state: "default",
    msg:'A marketing arrangement in which affiliates receive a commission for each visit, signup or sale they generate for a merchant. '
  },
  // {
  //   imageId: "assets/data.jpg",
  //   state: "default"
  // },
  {
    imageId: "assets/maintenance.jpg",
    state: "default",
    msg:' It is the process of changing, modifying, and updating software to keep up with customer needs.'
  },
  // {
  //   imageId: "assets/testing.jpg",
  //   state: "default"
  // },
  // {
  //   imageId: "assets/cms.jpg",
  //   state: "default"
  // },
  {
    imageId: "assets/vas.jpg",
    state: "default",
    msg:'  Those services that are offered by telecom service providers to customers beyond the core services like SMS, voice and data.'
  }
];
  url: any;
  offer: any=[];
  clients:any=[];
year:any;
  @ViewChildren('element')
  itemsView!: QueryList<ElementRef>;
    private player!: AnimationPlayer;
  
    @Input()
  radius!: number;
    @Input() timer = 250;
    @Input() top: number = 80;
    @Input() minScale: number = 0.5;
    @Input()

  
    @Output() select: EventEmitter<number> = new EventEmitter<number>();

    animates = [0, 2, 4, 12, 14];
    cellWidth!: number;
    marginTop:number=-((this.top * this.minScale) - this.top)/2;
  platform: string;
  partner:any=[];
  constructor(@Inject(PLATFORM_ID) private platformId: any, private renderer: Renderer2,private fb:FormBuilder,private builder: AnimationBuilder,private myapi:ApiService,private ng :NgZone,private cdr: ChangeDetectorRef) {
    this.platform = isPlatformBrowser(this.platformId) ? 'Browser' : 'Server';
    console.log(this.platformId);
    console.log(window.navigator.userAgent);
    
    this.videourl='assets/work.mp4'
  let x=['uiux','affiliate','web','app','software','vas'];
  // let y=[];
  // for(let i=1;i<6;i++){
  //   y.push('assets/'+x[i]+'.'+'jpg')
  // }
this.offer=x;
  

    let c=[]
    for(let i=1;i<32;i++){
     
//  this.image.push('client'+'-'+i)
 this.imgdata.push({img:'assets'+'/'+'images'+'/'+'client'+'-'+i+'.'+'png',id:i})
    }

// let clients=[]
for(let i=1;i<=21;i++){
  this.clients.push('assets/icons/c'+i+'.png')
}
// clients=this.clients
console.log(this.clients);


this.form=this.fb.group({
  name:['',Validators.required],
  phone:['',Validators.required],
  know:['How did you know about us',Validators.required],
  message:['',Validators.required],
  email:['',[Validators.required,Validators.email]]

})
localStorage.setItem('width',JSON.stringify(window.screen.availWidth) )
  }
    ngOnChanges(){

    }
     getPlatform() {
      var platform = ["Win32", "Android", "iOS"];
   
      for (var i = 0; i < platform.length; i++) {
   
          if (navigator.platform.indexOf(platform[i]) >- 1) {
   console.log(platform[i]);
   
              // return platform[i];
          }
      }
   }
   
   
  ngOnInit(): void {
    let d=new Date()
    this.year=d.getFullYear()
    console.log(this.year);
    

let i=[];
for(let i=1;i<=5;i++){
this.partner.push( 'assets/icons/g'+i+'.'+'png')
}
console.log(this.partner);

    // var body = document.getElementsByClassName('header');
 

    // trigger this function every time the user scrolls
 

   this.getPlatform();
    
    // this.check()
    // this. advertiser.nativeElement.play()
    for(let i=0;i<10;i++){
      let d :any=[];
      for(let j=3*i+1;j<=3*i+3;j++){
d.push('assets'+'/'+'images'+'/'+'client'+'-'+j+'.'+'png')
      }
this.image.push(d);
      
    }
    console.log("oninit");
   this.width=window.screen.width;
   this.widths=localStorage.getItem('width')
  //  console.log(JSON.parse(this.widths));
   
 
 
    // this.slideConfig
  
    this.ng.run(() => {
      this.cdr.detectChanges();
    });
  }

   myFunction() {
    console.log("button click");
    
    let btn=<HTMLVideoElement>document.getElementById('btn');
    if (this.publisher.nativeElement.paused) {
      this.publisher.nativeElement.play();
      btn!.innerHTML = "Pause";
    } else {
      this.publisher.nativeElement.pause();
      btn!.innerHTML = "Play";
    }
  }
  submit(){
  //   console.log(this.form.value);
  // localStorage.setItem("form",JSON.stringify(this.form.value))
  if(this.form.valid){
    
   this.myapi.Login(this.form.value).subscribe(res=>{
    console.log(res);
    
   })
  }
  this.form.reset();

  }
  ngAfterViewInit(){
    this.ng.run(() => {
      this.cdr.detectChanges();
    });
    // this.publisher.nativeElement.play();
// this.publisher.nativeElement.loop=true;
    console.log('hello afyter');
    
   

//  document.getElementsByTagName('video').item(3)?.play()
  }
 
// playV(){
//   window.location.reload()
//   window.history.forward()
//   this.publisher.nativeElement.play()
// }
  //
//  handleFirstPlay(event:any) {
  
//     if (!this.autoPlay) {
//       this.autoPlay = true;
  
//       const vid = event.target;
  
//       vid.onplay = null;
  
//       // Start whatever you need to do after first playback has started
//     }
//   }
  

  // check(){
  //   if(window.screenY){
  //     // this.myhome.nativeElement.style.position='fixed'
  //     this.renderer.addClass(this.myhome.nativeElement, 'fixed-position');
  //   }
  // }
new(){
  console.log('hello')
}
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 1200,
    center: true,
    dots: false,
    autoHeight: false,
    autoWidth: false,
    responsive: {
      0: {
        items: 3,
       
      },
      600: {
        items: 5,
      
      },
      1000: {
        items: 8,
        
      }
    }
  }
  scroll(el: HTMLElement) {
    // el.scrollIntoView({behavior: "smooth",
    // block: "start",
    // inline: "nearest"});
    el.scrollIntoView()  }
  name =
    'Welcome to Mobpro You are our valuable Customer';

  enterAnimation: TextAnimation = {
    animation: fadeInDown,
    delay: 50,
    type: 'letter',
    

  };
  toggleFlip(flip:any) {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }
  cardClicked(data:any) {
    if (data.state === "default") {
      data.state = "flipped";
    }
     else if(data.state==='matched') {
      data.state = "default";
    }
    else {
      data.state = "default";

    }
  }
  playVideo(e:any) {
   
   if  ( this.timeStampObj.start = new Date().getTime()){
    this.autoPlay=true
    
   }
   else{

   }
   
      // console.log( this.timeStampObj.start);
     
  
  }



  movements:any = [
    { pos: 0, right: [1, 2], left: [15, 14] },
    { pos: 2, right: [3, 4], left: [1, 0] },
    { pos: 4, right: [5, 6, 7, 8, 9, 10, 11, 12], left: [3, 2] },
    { pos: 12, right: [13, 14], left: [11, 10, 9, 8, 7, 6, 5, 4] },
    { pos: 14, right: [15, 0], left: [13, 12] },
  ];
  movementsTwo:any = [
    { pos: 0, right: [1, 2, 3, 4], left: [15, 14, 13, 12] },
    { pos: 2, right: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12], left: [1, 0, 15, 14] },
    { pos: 4, right: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14], left: [3, 2, 1, 0] },
    { pos: 12, right: [13, 14, 15, 0], left: [11, 10, 9, 8, 7, 6, 5, 4, 3, 2] },
    { pos: 14, right: [15, 0, 1, 2], left: [13, 12, 11, 10, 9, 8, 7, 6, 5, 4] },
  ];

  
  indexToFront(index: any) {
    index = +index;
    if (this.animates[index] != 0) {
      const pos = this.animates[+index];
      if (pos) {
        const mov = this.movements.find((x:any) => x.pos == pos);
        const mov2 = this.movementsTwo.find((x:any) => x.pos == pos);
        const direction =
          mov.left[mov.left.length - 1] == 0 ||
          mov2.left[mov2.left.length - 1] == 0
            ? 'left'
            : 'right';
        const steps =
          mov2.left[mov2.left.length - 1] == 0 ||
          mov2.right[mov2.right.length - 1] == 0
            ? 2
            : 1;

        this.animateViews(direction, steps);
      }
    }
    this.select.emit(index)

  }

  animateViews(direction: string, steps: number = 1) {
    this.animates.forEach((x: number, index: number) => {
      const movements = steps == 1 ? this.movements : this.movementsTwo;
      const mov = movements.find((m:any) => m.pos == x);
      const item = this.itemsView.find((_x, i) => i == index);
      const animations = mov[direction].map((m:any) => {
        const angle = (m * 2 * Math.PI) / 16;
        const scale =
          (1 + this.minScale) / 2 + ((1 - this.minScale) / 2) * Math.cos(angle);
        const applystyle = {
          transform:
            'translate(' +
            this.radius * Math.sin(angle) +
            'px,' +
            (Math.floor(this.top * scale) - this.top) +
            'px) scale(' +
            scale +
            ')',
          'z-index': Math.floor(100 * scale),
        };
        return animate(
          this.timer / mov[direction].length + 'ms',
          style(applystyle)
        );
      });

      const myAnimation = this.builder.build(animations);
      this.player = myAnimation.create(item!.nativeElement);
      this.player.onDone(() => {
        this.animates[index] = mov[direction][mov[direction].length - 1];
      });
      this.player.play();
    });
  }

  prev() {
    this.animateViews('right');
  }
  next() {
    this.animateViews('left');
  }

  getDimensions(el: HTMLElement) {
    this.cellWidth = el.offsetWidth;
    this.radius = this.radius || this.cellWidth + 10;
    this.marginTop=-((this.top * this.minScale) - this.top)
    this.animateViews('left');
  }

  
}
