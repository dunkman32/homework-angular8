import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-email-modal',
  templateUrl: './email-modal.component.html',
  styleUrls: ['./email-modal.component.css']
})
export class EmailModalComponent implements OnInit {

  code = '';
  @Input() Input: string;
  submited = false;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit = (mobile) => this.submited = true;

}
