import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  showForm: FormGroup;

  options = [
    {
      id: 1,
      name: 'Option 1',
    },
    {
      id: 2,
      name: 'Option 2',
    },
  ];

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  // constructor() {
  //   this.showForm = new FormGroup({
  //     company: new FormControl(''),
  //     firstName: new FormControl(''),
  //     lastName: new FormControl(''),
  //     selectedOption: new FormControl(),
  //     selectedFood: new FormControl(),
  //   });
  // }

  constructor(private formBuilder: FormBuilder) {
    const group = {
      company: [''],
      firstName: [''],
      lastName: [''],
      selectedOption: [''],
      selectedFood: [''],
    };

    this.showForm = this.formBuilder.group(group);
  }

  ngOnInit(): void {}
}

interface Food {
  value: string;
  viewValue: string;
}
