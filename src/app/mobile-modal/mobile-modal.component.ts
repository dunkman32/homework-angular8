import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-mobile-modal',
  templateUrl: './mobile-modal.component.html',
  styleUrls: ['./mobile-modal.component.css']
})
export class MobileModalComponent implements OnInit {
  code = '';
  @Input() Input: string;
  submited = false;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit = (mobile) => this.submited = true;

}
