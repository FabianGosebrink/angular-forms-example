import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RestrictAgeValidator } from './restrict-age.validator';
import { Room } from './room';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  title = 'forms-cross-field-validation';
  myForm: FormGroup;

  rooms: Room[] = [
    { text: 'room 1', value: 'room-1' },
    { text: 'room 2', value: 'room-2' },
    { text: 'room 3', value: 'room-3' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private roomOver18Validator: RestrictAgeValidator
  ) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        age: ['', [Validators.required, NoNegativeNumbers]],
        room: [null, Validators.required],
      },
      {
        validators: [this.roomOver18Validator.restrictAgeValidator(18)],
        updateOn: 'change',
      }
    );
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}

export function NoNegativeNumbers(control: AbstractControl) {
  return control.value < 0 ? { negativeNumber: true } : null;
}
