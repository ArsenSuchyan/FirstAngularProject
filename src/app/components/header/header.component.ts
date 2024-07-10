import { Component } from '@angular/core';
import {
  RouterOutlet,
  Router,
  RouterModule,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
