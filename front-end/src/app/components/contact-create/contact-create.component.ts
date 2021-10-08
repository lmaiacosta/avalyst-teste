import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss']
})
export class ContactCreateComponent implements OnInit {

  form: FormGroup;
  sending = false;

  constructor(
    private router: Router,
    private contactService: ContactService
  ) {

    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.minLength(15)]),
    });

  }

  ngOnInit(): void {

  }

  onSubmit(): void {

    this.form.markAllAsTouched();

    if (this.form.valid) {

      const contact = this.form.value as Contact;

      this.contactService.create(contact).subscribe(response => {

        if (response.ok) {
          this.router.navigateByUrl('/contatos');
        }

      });

    }

  }

  get name(): FormControl { return this.form.get('name') as FormControl; }
  get email(): FormControl { return this.form.get('email') as FormControl; }
  get phone(): FormControl { return this.form.get('phone') as FormControl; }

}
