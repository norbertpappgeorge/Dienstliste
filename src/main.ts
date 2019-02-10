import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';

import {MainView} from './app/MainView';
import { ContactEntryComponent } from './app/ContactEntryComponenet';
import { List } from './app/List';
import {MyDatePickerModule} from 'mydatepicker';
import { AngularFireModule } from 'angularfire2';
import {firebaseConfig} from './app/firebaseConfig'
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  entryComponents: [MainView],
  declarations: [MainView,List,ContactEntryComponent],
  bootstrap: [MainView],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */