import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  constructor() { }

  registerForm:any;     //form Name

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "firstName":new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "lastName": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "emailId":new FormControl(null,[Validators.required, Validators.email]), 
      "mobileNumber":new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')])
    })
  }

  // submit function 
  submitData(){
    console.log(this.registerForm.value);

    if(this.registerForm.valid){
      alert(`Thank You ${this.registerForm.value.firstName}`);
      this.registerForm.reset();    //reset form values
    }
  }
  get firstname(){return this.registerForm.get('firstName');}         //firstName
  get lastname(){return this.registerForm.get('lastName');}           //lastName
  get emailid(){return this.registerForm.get('emailId');}             // emailId
  get mobilenumber(){return this.registerForm.get('mobileNumber');}   // MobileNumber

}
