import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Contact} from "./Contact";
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop custom placeholer
 */
@Component({
  selector: 'ch-contact-list',
  templateUrl: 'List.html',
  styleUrls: ['List.css'],
})
export class List {
  
@Input() contacts: Contact[];
@Output('onSelect') selectEmitter=new EventEmitter();
contactSelected(selected: Contact){
  this.selectEmitter.emit(selected);
}
drop(event: CdkDragDrop <string[]>) {
  moveItemInArray(this.contacts, event.previousIndex, event.currentIndex);
  }
}

