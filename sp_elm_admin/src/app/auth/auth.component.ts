import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AnglibModule } from '../anglib/anglib.module';
import { GeneralService } from '../services/general/general.service';
import { ButtonComponent, button } from '../anglib/button/button.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, AnglibModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  // encapsulation: ViewEncapsulation.None
})

export class AuthComponent {
  signInForm!: FormGroup;

  constructor(
    public general: GeneralService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]))
    })
  }

  // Reusable button
  signinButtonConfig: button = {
    mode: 'basic',
    label: 'Reusable testing',
    customCSS: {
      'width': '100%',
      'disabled': 'true'
    }
  }
}
