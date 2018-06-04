import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-courses-form',
  templateUrl: './new-courses-form.component.html',
  styleUrls: ['./new-courses-form.component.css']
})
export class NewCoursesFormComponent {

  form = new FormGroup({
    topics: new FormArray([])
  });

  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = ''; // setting input to blank after enter
  }

  get topics() {
    return this.form.get('topics')  as FormArray;
  }

}
