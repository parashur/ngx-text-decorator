import { NgModule } from '@angular/core';
import { NgxTextDecoratorDirective } from './ngx-text-decoration.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgxTextDecoratorDirective],
  imports: [
    CommonModule
  ],
  exports: [NgxTextDecoratorDirective]
})
export class NgxTextDecorationModule { }
