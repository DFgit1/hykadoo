import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  showModal!: boolean;
  showModal2!: boolean;
  showBg!: boolean;
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  selectedImage:any;
  uploadImage = 'no image selected...';

  constructor(private service:UserService, private formbuilder: FormBuilder, private router:Router) { }
  show() {
    this.showModal = true;// Show-Hide Modal Check
    this.showBg = true;

  }

  showSignup(){
    this.showModal2 = true;
    this.showBg = true;
  }

  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
    this.showModal2 = false;
    this.showBg = false;
  }
  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.registerForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      image: ['']
    });
  }
    selectFile(event: any): void {
      this.selectedImage = event.target.files[0];
      let uploadImage = this.selectedImage.name;
        if(uploadImage.length >16){
          this.uploadImage = uploadImage.slice(0,16)+"..."+uploadImage.slice(-4);
        }else{
          this.uploadImage = uploadImage
        }  
    }

    login(){
      let formData = this.loginForm.value;
      this.service.login(formData).subscribe((result) => {
        localStorage.setItem('currentUser', JSON.stringify(result)); //Storing the data of the currently logged in user on the browser
        this.router.navigateByUrl('/tabs/tab1');
      }, (err) => {
        alert('Incorrect email/password');
        console.log(err);
      });
    }

    register(){
      let formValues = this.registerForm.value;
  
      let fd = new FormData();
      fd.append('image', this.selectedImage);
  
      for(let key in formValues){
        fd.append(key, formValues[key]);
      }
  
      this.service.register(fd).subscribe((result) => {
        this.router.navigateByUrl('/tabs/tab1');
      }, (err) => {
        alert('Sign up failed!');
        console.log(err);
      });
    }

    clearImage(){
      this.selectedImage= '';
      this.uploadImage = 'no image selected...'
    }
}









