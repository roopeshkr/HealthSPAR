import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css'],
})
export class EditDoctorComponent implements OnInit {
  educationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.educationForm = this.fb.group({
      institutes: this.fb.array([]),
    });
  }

  ngOnInit() {}

  // Getter method for institutes form control
  get instituteControls() {
    return (this.educationForm.get('institutes') as FormArray).controls;
  }

  addInstitute() {
    const institute = this.fb.group({
      institution: ['', Validators.required],
      subject: ['', Validators.required],
      startDate: ['', Validators.required],
      completeDate: ['', Validators.required],
      degree: ['', Validators.required],
      grade: ['', Validators.required],
    });

    (this.educationForm.get('institutes') as FormArray).push(institute);
  }

  removeInstitute(index: number) {
    (this.educationForm.get('institutes') as FormArray).removeAt(index);
  }

  onSubmit() {
    // Handle form submission here
  }
}
