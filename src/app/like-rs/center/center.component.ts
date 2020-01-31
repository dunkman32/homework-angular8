import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  personalInformation = [
    {
      name: 'პირადი მონაცემები',
      icon: false,
      infos: [{
        id: 'ელ. ფოსტა',
        value: 'dunkman032@gmail.com',
        action: true
      }, {
        id: 'ტელეფონი',
        value: '557 93 22 32',
        action: true
      }, {
        id: 'მისამართი',
        value: 'საქართველო თბილისი',
        action: false
      }, {
        id: 'კოდური სიტყვა',
        value: '',
        action: true
      }
      ]
    }, {
      name: 'ორნაბიჯიანი SMS ავტორიზაცია',
      icon: true,
      text: 'რომელმან შექმნა სამყარო ძალითა მით ძლიერითა,\n' +
        'ზეგარდმო არსნი სულითა ყვნა ზეცით მონაბერითა,\n' +
        'ჩვენ, კაცთა, მოგვცა ქვეყანა, გვაქვს უთვალავი ფერითა,\n' +
        'მისგან არს ყოვლი ხელმწიფე სახითა მის მიერითა.',
      infos: [{
        id: 'სერვისი',
        value: 'dunkman032@gmail.com',
        action: false,
        switch: true
      }]
    }, {
      name: 'პაროლის შეცვლა',
      icon: true,
      text: 'ჰე, ღმერთო ერთო, შენ შეჰქმენ სახე ყოვლისა ტანისა,\n' +
        'შენ დამიფარე, ძლევა მეც დათრგუნვად მე სატანისა,\n' +
        'მომეც მიჯნურთა სურვილი, სიკვდიდმდე გასატანისა,\n' +
        'ცოდვათა შესუბუქება, მუნ თანა წასატანისა.',
      infos: [{
        id: 'პაროლი',
        value: '*****',
        action: true,
        switch: false
      }]
    }
  ];
  switch = false;

  constructor() {
  }

  ngOnInit() {
  }

}
