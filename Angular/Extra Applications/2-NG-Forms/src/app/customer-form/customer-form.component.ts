import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { Customer } from '../customer';
import { myCustomRangeValidator, myCustomEmailMatchValidator } from '../custom-validators';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {


  customerForm: FormGroup;
  customerModel: Customer;

  errorMessage: string = ''

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.customerForm = new FormGroup({
    //   firstName: new FormControl(''),
    //   lastName: new FormControl(''),
    //   email: new FormControl('')
    // });
    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', [Validators.required, Validators.email]],
      }, { validator: myCustomEmailMatchValidator }),
      phone: [''],
      notification: [''],
      range: ['', myCustomRangeValidator(10, 20)]
    })


    this.customerForm.get('firstName')
      .valueChanges
      .debounceTime(2000)
      .subscribe((e) => {
        if (e === "Nag") {
          this.errorMessage = "Nag , u r already with us";
        } else {
          this.errorMessage = "";
        }
      });

    this.customerForm.get('firstName')
      .statusChanges
      .subscribe(e => {
        console.log(e);
      })

  }

  setNotification(noti) {
    let phoneControl = this.customerForm.get('phone');
    if (noti === 'phone') {
      phoneControl.setValidators([Validators.required])
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }

  loadCustomer() {
    this.customerModel = new Customer('Nag', 'N');
    // this.customerForm.setValue(this.customerModel);
    this.customerForm.patchValue(this.customerModel);
  }

}
