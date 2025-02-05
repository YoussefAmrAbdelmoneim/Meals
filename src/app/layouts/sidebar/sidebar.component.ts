import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isDarkMode: boolean = false;
  constructor(private renderer: Renderer2) {}
  private platformId=inject(PLATFORM_ID)
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = localStorage.getItem('theme') === 'dark';
      if (this.isDarkMode) {
        this.renderer.addClass(document.documentElement, 'dark');
      }
    }
  }
  
  toggleDarkMode() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        this.renderer.addClass(document.documentElement, 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        this.renderer.removeClass(document.documentElement, 'dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }
}
