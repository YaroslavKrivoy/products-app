import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-comment-form',
  templateUrl: './product-comment-form.component.html',
  styleUrls: ['./product-comment-form.component.scss']
})
export class ProductCommentFormComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      author: new FormControl(''),
      text: new FormControl('')
    });
  }

  submit() {

  }
}
