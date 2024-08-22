import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  availability: string =
    'I am available as of now to work. Please contact me through the web form or email with the address below!';
  contactForm!: FormGroup;
  attemptedSubmit = false;
  validSubmission = false;

  public constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
      subject: new FormControl(''),
      content: new FormControl(''),
    });
  }

  private updateSumbit(): void {
    this.attemptedSubmit = true;
  }
  private async send() {
    emailjs.init('rdZzRaLwGwHQvuonN');
    let response = await emailjs.send('service_favimhy', 'template_cnn9aff', {
      from_name: this.contactForm.value.name,
      to_name: 'George Banacos',
      from_email: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      content: this.contactForm.value.content,
    });
    alert('Message has been sent.');
    this.contactForm.reset();
  }

  public subEmail(): void {
    this.updateSumbit();
    if (this.contactForm.valid) {
      this.validSubmission = true;
      this.send();
    }
  }
}
