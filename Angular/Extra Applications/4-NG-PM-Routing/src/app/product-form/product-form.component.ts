import {ProductsService} from '../products.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;
  isEdit = false;
  originalProuct: any;

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private productService: ProductsService) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      price: [0],
      image: [''],
      makeDate: [''],
      description: ['']
    });

    this.route.data.subscribe(data => {
      this.productForm.patchValue(data.product)
      this.originalProuct = data.product;
      this.isEdit = true;
    })

  }

  handleSubmit() {
    if (this.productForm.valid) {
      if (this.isEdit) {
        let product = Object.assign({}, this.originalProuct, this.productForm.value);
        this.productService.submitProductForUpdate(product)
          .subscribe(product => {
            this.router.navigate(['all'])
          })
      } else {
        this.productService.submitProduct(this.productForm.value)
          .subscribe(product => {
            this.router.navigate(['all'])
          })
      }
    }
  }

}
