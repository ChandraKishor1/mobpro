import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent {
constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dailogref: MatDialogRef<WhyUsComponent>){

}
}
