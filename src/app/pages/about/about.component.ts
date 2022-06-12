import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userInterface } from 'src/app/models/userInterface.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public userRegisterForm: FormGroup;
  public submmitted: boolean = false;

  constructor( private formBuilder: FormBuilder) { 

     this.userRegisterForm = this.formBuilder.group({

      Mail: ["",[Validators.required, Validators.email]],
      Usuario:["",[Validators.required, Validators.maxLength(20)]],
      Contraseña: ["",[Validators.required, Validators.maxLength(20)]]



     });




  }

  ngOnInit(): void {

  }
  public onSubmit(): void {
    this.submmitted = true

    if(this.userRegisterForm.valid){

      const user : userInterface = {

        Mail:this.userRegisterForm.get("Mail")?.value,
        Usuario:this.userRegisterForm.get("Usuario")?.value,
        Contraseña:this.userRegisterForm.get("Contraseña")?.value,
       

      }; 
      console.log("USER =>",user);
      this.userRegisterForm.reset();
      this.submmitted = false
      
    }







}

}
