import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'register-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {

  fb = inject( FormBuilder );
  authService = inject( AuthService );

  hasError = signal(false);

  registerForm = this.fb.group({
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength( 6 ) ]]
  })

  async onSubmit( ) {
    if( this.registerForm.invalid ){
      this.hasError.set( true );
      return;
    }

    const newUser : User = { 
      email: this.registerForm.value.email!,
      password: this.registerForm.value.password!
    } 
    
    await this.authService.signUp( newUser );
    console.log( 'Usuario creado correctamente.')
  }


}