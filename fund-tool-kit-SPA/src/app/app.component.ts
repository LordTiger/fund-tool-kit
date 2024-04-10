import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SupabaseService } from './services/supabase.service';
import { AccountComponent } from './pages/account/account.component';
import { AuthComponent } from './pages/auth/auth.component';
import { CommonModule } from '@angular/common';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopNavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  // private readonly supabase = inject(SupabaseService);

  // session = this.supabase.session;

  ngOnInit() {
    // this.supabase.authChanges((_, session) => (this.session = session!));
  }

}
