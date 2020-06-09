import { Directive, Input, ElementRef } from '@angular/core';
export interface DefaultStyles {
  bold: boolean;
  italic: boolean;
  color: string;
  background: string;
  weight?: number;
};
@Directive({
  selector: '[ngxTextDecorator]'
})
export class NgxTextDecoratorDirective {
  private _data: string;
  private _searchKey: string;
  private _defaultStyle: DefaultStyles = {
    bold: false,
    italic: false,
    color: 'inherit',
    background: 'yellow',
  };
  private separatedText = [];
  private separatedSearchedText = [];
  private result = '';
  searchPattern: any;
  matchpattern: any;
  splitFlag = '';
  matchFlag = '';
  spanStart = `<span
  style="
  font-weight:${(this._defaultStyle.bold === true) ? ((this._defaultStyle.weight ? this._defaultStyle.weight : '') || 'bold') : 'inherit'};
  font-style:${(this._defaultStyle.italic === true) ? 'italic' : 'inherit'};
  color:${this._defaultStyle.color ? this._defaultStyle.color : 'inherit'};
  background:${this._defaultStyle.background === 'none' ? '' : this._defaultStyle.background || 'yellow'};
  ">`;
  spanEnd = '</span>';
  @Input() caseSensitive: boolean;

  @Input()
  set customStyle(style: DefaultStyles) {
    console.log({ style });

    this._defaultStyle = style;
    this.spanStart = `<span
  style="
  font-weight:${(this._defaultStyle.bold === true) ? ((this._defaultStyle.weight ? this._defaultStyle.weight : '')) || 'bold' : 'inherit'};
  font-style:${(this._defaultStyle.italic === true) ? 'italic' : 'inherit'};
  color:${this._defaultStyle.color ? this._defaultStyle.color : 'inherit'};
  background:${this._defaultStyle.background === 'none' ? '' : this._defaultStyle.background || 'yellow'};
  ">`;
    this.decorate();
  }
  get customStyle() {
    return this._defaultStyle;
  }

  @Input('data')
  set data(data: string) {
    console.log(data);
    this._data = data;
  }
  get data(): string { return this._data; }

  @Input('searchKey')
  set searchKey(searchKey: string) {
    this._searchKey = searchKey;
    this.decorate();
  }
  get searchKey(): string { return this._searchKey; }
  constructor(private el: ElementRef) {
    this.caseSensitive = false;
  }

  decorate() {
    this.result = '';
    if (!this.caseSensitive) {
      this.splitFlag = 'i';
      this.matchFlag = 'gi';
    } else {
      this.splitFlag = '';
      this.matchFlag = 'g';
    }
    this.searchPattern = new RegExp(this._searchKey, this.splitFlag);
    this.matchpattern = new RegExp(this._searchKey, this.matchFlag);

    if (this._searchKey !== undefined && this._searchKey != null && this._searchKey.length > 0 && this._searchKey[0] !== '.') {

      this.separatedText = this._data.split(this.searchPattern);
      this.separatedSearchedText = this._data.match(this.matchpattern);

      if (this.separatedSearchedText != null && this.separatedSearchedText.length > 0) {
        for (let i = 0; i < this.separatedText.length; i++) {
          if (i <= this.separatedSearchedText.length - 1) {
            this.result += this.separatedText[i] + this.spanStart + this.separatedSearchedText[i] + this.spanEnd;
          } else {
            this.result += this.separatedText[i];
          }
        }
      }
      if (this.result.length > 0) {
        this.el.nativeElement.innerHTML = this.result;
      } else {
        this.el.nativeElement.innerText = this._data;
      }
    } else {
      this.el.nativeElement.innerText = this._data;
    }

  }
}
