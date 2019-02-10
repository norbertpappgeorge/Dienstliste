
import {Contact} from "./Contact";
import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges,
  AfterViewChecked, OnInit} from '@angular/core';
/**
 * @title Drag&Drop custom placeholer
 */
@Component({
  selector: 'ch-contact-entry',
  templateUrl: 'ContactEntryComponenet.html',
  styleUrls: ['ContactEntryComponenet.css'],
 
})
export class ContactEntryComponent
{
@Input() contact: Contact;
@Output("onSelect") selectEmitter =new EventEmitter();

selectEntry(){
  this.selectEmitter.emit(this.contact);
}
}