import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'lib-ngx-text-decoration',
  template: `
    <p>
      ngx-text-decoration works!
    </p>
  `,
  styles: [],
})
export class NgxTextDecorationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
