import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-identity',
  standalone: true,
  imports: [ReactiveFormsModule, TitleCasePipe],
  templateUrl: './identity.component.html',
  styleUrl: './identity.component.scss'
})
export class IdentityComponent {
  showCard: boolean = true;
  identityForm = new FormGroup({
    name: new FormControl(''),
    ancestry:  new FormControl(''),
    bGround: new FormControl(''),
    cClass: new FormControl(''),
    level: new FormControl(1),
  });

  toggleCardBody() {
    this.showCard = !this.showCard;
  }
}
