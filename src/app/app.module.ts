import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxTextDecorationModule } from 'projects/ngx-text-decoration/src/public-api';
import { SafePipe } from './safe-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service';

@NgModule(
  {
    declarations: [
      AppComponent,
      SafePipe
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      NgxTextDecorationModule,
      FormsModule,
      ReactiveFormsModule
    ],
    providers: [AppService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent]
  })
export class AppModule { }
