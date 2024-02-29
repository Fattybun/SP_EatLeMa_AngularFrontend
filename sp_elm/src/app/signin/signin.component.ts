import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { interval, take } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GeneralService } from '../services/general/general.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  animations: [
    trigger('swapInfoContainers', [
      state('info_ori', style({ transform: 'translateX(0)' })),
      state('info_des', style({ transform: 'translateX(-200%)' })),
      transition('info_ori => info_des', animate('1.5s ease-in-out', keyframes([
        style({ transform: 'translateX(0)', flex: 1, opacity: 1, offset: 0 }),
        style({ transform: 'translateX(-100%)', flex: 1.5, opacity: 0.5, offset: 0.5 }),
        style({ transform: 'translateX(-200%)', flex: 1, opacity: 1, offset: 1 }),
      ]))),
      transition('info_des => info_ori', animate('1.5s ease-in-out', keyframes([
        style({ transform: 'translateX(-200%)', flex: 1, opacity: 1, offset: 0 }),
        style({ transform: 'translateX(-100%)', flex: 1.5, opacity: 0.5, offset: 0.5 }),
        style({ transform: 'translateX(0)', flex: 1, opacity: 1, offset: 1 }),
      ])))
    ]),
    trigger('swapFormContainers', [
      state('form_ori', style({ transform: 'translateX(0)', opacity: 1 })),
      state('form_des', style({ transform: 'translateX(50%)', opacity: 1 })),
      transition('form_ori => form_des', animate('1.5s ease-in-out', keyframes([
        style({ transform: 'translateX(0)', flex: 2, opacity: 1, offset: 0 }),
        style({ transform: 'translateX(25%)', flex: 2.5, opacity: 0.5, offset: 0.5 }),
        style({ transform: 'translateX(50%)', flex: 2, opacity: 1, offset: 1 }),
      ]))),
      transition('form_des => form_ori', animate('1.5s ease-in-out', keyframes([
        style({ transform: 'translateX(50%)', flex: 2, opacity: 1, offset: 0 }),
        style({ transform: 'translateX(25%)', flex: 2.5, opacity: 0.5, offset: 0.5 }),
        style({ transform: 'translateX(0)', flex: 2, opacity: 1, offset: 1 }),
      ])))
    ])
  ]
})
export class SigninComponent {

  viewMode = 0;
  infoState = 'info_ori';
  formState = 'form_ori';
  signInForm!: FormGroup;
  signUpForm!: FormGroup;

  constructor(
    public general: GeneralService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      uid: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]))
    })

    this.signUpForm = this.formBuilder.group({
      uid: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
      ]))
    })
  }

  swapContainers() {
    this.infoState = this.infoState === 'info_ori' ? 'info_des' : 'info_ori';
    this.formState = this.formState === 'form_ori' ? 'form_des' : 'form_ori';

    interval(500).pipe(take(1)).subscribe(() => {
      this.viewMode = this.viewMode === 0 ? 1 : 0;
    })
  }

  userSignup() {
    console.log('clicked!')
    const bodyRequest = {
      uid: this.signUpForm.value.uid,
      password: this.signUpForm.value.password,
      confirmPassword: this.signUpForm.value.confirmPassword
    }

    this.authService.userSignUp(bodyRequest)
  }
  
}
