import { Component, Input, NgZone, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from './app.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'p-lib';
  searchKeyValue = new BehaviorSubject('');
  form: FormGroup;
  actualText = '“You have a grand gift for silence, Watson. It makes you quite invaluable as a companion.”';
  customStyle = {
    bold: true,
    italic: true,
    color: '#e83e8c',
    background: 'none',
    weight: 900
  };
  document = [
    {
      title: 'data',
      description: 'Holds content to be displayed.'
    },
    {
      title: 'searchText',
      description: 'Holds search key.'
    },
    {
      title: 'customStyle',
      description: 'Holds customStyle Propties.'
    },
    {
      title: 'caseSensitive',
      description: 'Holds caseSensitive value.'
    }
  ];
  searchKey;
  constructor(
    private fb: FormBuilder,
    public service: AppService, public elRef: ElementRef) { }
  ngOnInit() {
    this.form = this.fb.group({
      colorStyle: this.fb.group({bold: true,
      italic: true,
      color: '#e83e8c',
      background: 'none',
      weight: 900,
      }),
      searchKey: 'Watson'
    });
    this.form.valueChanges.subscribe(val => {
      console.log(val);
      this.customStyle = val.colorStyle;
    });
    this.searchKeyValue.next('Watson');
  }

  executeCode() {
    const data = (document.getElementById('code') as HTMLInputElement).value;
    console.log('res', this.customStyle);
  }

  // searchKey(e) {
  //   console.log('searchKey', e.target.value);
  //   if (e.target.value) {
  //     this.searchKeyValue.next(e.target.value);
  //   }
  // }
}
