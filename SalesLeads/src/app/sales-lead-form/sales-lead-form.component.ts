import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../Environments/Environment';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-sales-lead-form',
  standalone: true,
  imports: [],
  templateUrl: './sales-lead-form.component.html',
  styleUrl: './sales-lead-form.component.scss'
})
export class SalesLeadFormComponent {
  seleLeadForm: FormGroup;
  responseMessage: string = '';

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.seleLeadForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  onSubmit(): void {

    if (this.seleLeadForm.valid) {
      this.http.post(environment.serverUrl, this.seleLeadForm.value)
        .subscribe(
          response => this.responseMessage = 'lead submitted successfully!',
          error => this.responseMessage = 'Error accoured!'
        )
    }

  }




}
