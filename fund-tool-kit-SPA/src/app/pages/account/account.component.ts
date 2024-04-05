import { Component, inject, Input, OnInit } from '@angular/core'
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthSession } from '@supabase/supabase-js'
import { Profile, SupabaseService } from '../../services/supabase.service'

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {

  private readonly supabase = inject(SupabaseService);
  private readonly formBuilder = inject(FormBuilder);

  loading = false
  profile!: Profile;

  @Input() session!: AuthSession;

  updateProfileForm = this.formBuilder.group({
    username: '',
    website: '',
    avatar_url: '',
  });

  async ngOnInit(): Promise<void> {
    await this.getProfile()

    const { username, website, avatar_url } = this.profile
    this.updateProfileForm.patchValue({
      username,
      website,
      avatar_url,
    })
  }

  async getProfile() {
    try {
      this.loading = true
      const { user } = this.session
      // const { data: profile, error, status } = await this.supabase.profile(user)
      const result = await this.supabase.profile(user)

      if (result?.error && result?.status !== 406) {
        throw result?.error
      }

      if (result?.data) {
        this.profile = result?.data
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.loading = false
    }
  }

  async updateProfile(): Promise<void> {
    try {
      this.loading = true
      const { user } = this.session

      const username = this.updateProfileForm.value.username as string
      const website = this.updateProfileForm.value.website as string
      const avatar_url = this.updateProfileForm.value.avatar_url as string

      const result = await this.supabase.updateProfile({
        id: user.id,
        username,
        website,
        avatar_url,
      })
      if (result?.error) throw result?.error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.loading = false
    }
  }

  async signOut() {
    await this.supabase.signOut()
  }
}
