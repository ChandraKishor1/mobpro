import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dailogref: MatDialogRef<WhoWeAreComponent>) {

  }
}
