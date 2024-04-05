import { Component, inject } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    ReactiveFormsModule, FormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  
  private readonly supabase = inject(SupabaseService);
  private readonly formBuilder = inject(FormBuilder);

  loading = false;

  signInForm = this.formBuilder.group({
    email: '',
  });

  async onSubmit() {
    try {
      this.loading = true
      const email = this.signInForm.value.email as string;

      const result = await this.supabase.signIn(email);

      if (result?.error) throw result?.error;

      alert('Check your email for the login link!');
    } catch (error) {

      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.signInForm.reset()
      this.loading = false
    }
  }

  
}
