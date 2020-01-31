import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-auth-options',
  templateUrl: './auth-options.component.html',
  styleUrls: ['./auth-options.component.css']
})
export class AuthOptionsComponent implements OnInit {
  @Output() sendInfo: EventEmitter<boolean> = new EventEmitter<boolean>();
  options = [
    {
      name: 'პაროლის აღდგენა',
      address: '../../../assets/sample.pdf'
    }, {
      name: 'მომხმარებლის აღდგენა',
      address: '../../../assets/sample.pdf'
    }
  ];

  public returnOnAuth() {
    this.sendInfo.emit();
  }

  constructor() {
  }

  ngOnInit() {
  }

}
