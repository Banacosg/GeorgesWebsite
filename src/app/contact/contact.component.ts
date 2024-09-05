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
  // By default no one as tried to submit a valid form
  attemptedSubmit = false;
  validSubmission = false;

  /**
   *
   * @param fb The form builder constructor
   */
  public constructor(private fb: FormBuilder) {}

  /**
   * Initializes the contact form when initializing the component
   */
  public ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
      subject: new FormControl(''),
      content: new FormControl(''),
    });
  }

  /**
   * Sets attemptedsubmit to true has one tried submit
   */
  private updateSumbit(): void {
    this.attemptedSubmit = true;
  }

  /**
   * Sends the email information to EmailJs API to be sent to me.
   */
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

  /**
   * When submit is clicked it updates the attempted submit variable and sends
   * the email if the input is valid.
   */
  public subEmail(): void {
    this.updateSumbit();
    if (this.contactForm.valid) {
      this.validSubmission = true;
      this.send();
    }
  }
}
