import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges,
  AfterViewChecked, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ReplaySubject} from 'rxjs';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Contact } from './Contact';
import {MyDatePickerModule} from 'mydatepicker';


/**
 *tle Drag&Drop custom placeholer
 */
@Component({
  selector: 'ch-mainview',
  templateUrl: 'MainView.html',
  styleUrls: ['MainView.css'],
})
export class MainView {
selectedDate= new Date();
selectedContact: Contact;
selectedListPickerIndex:string;
 contactName: string;
 contactAddress: string;
 contactLastname: string;
 contactDatefirst: string;
 contactDatelast: string;
 
 devices=new Array;
 contacts: Contact[];
 
 
 

 constructor(){
 this.contacts = [
    new Contact('John', 'Doe', '123 Main Street, Anytown','01.01.2019','01.01.2019'),
    new Contact('Richard','Roe', '456 Fifth Avenue, Otherville','01.01.2019','01.01.2019'),];
  this.selectedListPickerIndex="7 Tage";
   this.devices=["7 Tage","14 Tage","21 Tage","28 Tage","1 Monat","1 Jahr"];
  }


  

  contactSelected(selected) {
    
    this.selectedContact = selected;
    this.contactName = selected.name;
    this.contactLastname= selected.lastname;
    this.contactAddress = selected.address;
    this.contactDatefirst= selected.firstdate;
    this.contactDatelast= selected.lastdate;
  }

  

  editContact(name: string, lastname:string,address: string,datefirst:string,datelast:string) {
    if (this.selectedContact) {
      this.selectedContact.name = this.contactName;
      this.selectedContact.lastname=this.contactLastname;
      this.selectedContact.address = this.contactAddress;
      this.selectedContact.datefirst= this.contactDatefirst;
      this.selectedContact.datelast= this.contactDatelast;

    }
   // this.resetFormFields();
    this.selectedContact = null;
    console.log('Contact successfully saved');
  }
  createContact() {
    const contact = new Contact(this.contactName,this.contactLastname,this.contactAddress,this.contactDatefirst,this.contactDatelast);
    this.contacts.push(contact);
    this.resetFormFields();
  }





 
resetFormFields() {
  this.contactName = '';
  this.contactLastname = '';
  this.contactAddress = '';
  this.contactDatefirst='';
  this.contactDatelast='';
}
  onChange(newValue) {
  
  
  this.selectedListPickerIndex=newValue;
}
 



generateDate(){
  var days = 0;
  var months = 0;
  var years = 0;
  
  const dategenerate: Date = new Date();
  dategenerate.setDate(this.selectedDate.getDate());
  dategenerate.setMonth(this.selectedDate.getMonth());
  dategenerate.setFullYear(this.selectedDate.getFullYear());


  for (var i = 0; i <= this.contacts.length - 1; i++) {
      if (this.contacts[i].name != "") {
          this.contacts[i].datefirst=dategenerate.getDate().toString() + "." + (dategenerate.getMonth() + 1).toString() + "." + dategenerate.getFullYear().toString(); 
          if (this.selectedListPickerIndex == "7 Tage") { days = 7; }
          if (this.selectedListPickerIndex == "14 Tage") { days = 14; }
          if (this.selectedListPickerIndex == "21 Tage") { days = 21; }
          if (this.selectedListPickerIndex == "28 Tage") { days = 28; }
          if (this.selectedListPickerIndex == "1 Monat") { months = 1; }
          if (this.selectedListPickerIndex == "1 Jahr") { years = 1; }
          dategenerate.setDate(dategenerate.getDate() + days);
          dategenerate.setMonth(dategenerate.getMonth() + months);
          dategenerate.setFullYear(dategenerate.getFullYear() + years);
          this.contacts[i].datelast=dategenerate.getDate().toString() + "." + (dategenerate.getMonth() + 1).toString() + "." + dategenerate.getFullYear().toString(); 
         
      }
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license **/
}