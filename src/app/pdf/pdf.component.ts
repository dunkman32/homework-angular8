import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pdf',
  template: `
    <div class="container-fluid bg">
      <div class="row">
        <div class="col-xs-12">
          <pdf-viewer [src]="pdfSrc"
                      [render-text]="true"
                      style="display: block; width: 90vw; margin-left: 5vw"
          ></pdf-viewer>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../registration-v2/registration-v2.component.css']
})
export class PdfComponent {
  pdfSrc = '../../assets/sample.pdf';
}
