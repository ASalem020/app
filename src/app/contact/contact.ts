import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, NgIf],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class CONTACT {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  focusedField: string | null = null;

  onFieldFocus(fieldName: string) {
    this.focusedField = fieldName;
  }

  onFieldBlur(fieldName: string) {
    this.focusedField = null;
  }

  onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', this.formData);
      alert('Thank you for your message! We will get back to you soon.');
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      };
      
      this.isSubmitting = false;
    }, 2000);
  }
}
