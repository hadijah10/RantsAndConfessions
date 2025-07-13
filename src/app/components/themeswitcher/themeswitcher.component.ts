import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-themeswitcher',
  imports: [],
  templateUrl: './themeswitcher.component.html',
  styleUrl: './themeswitcher.component.scss'
})
export class ThemeswitcherComponent implements OnInit{
     theme: 'light' | 'dark' = 'light';

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const storedTheme = localStorage.getItem('theme');
    this.theme = storedTheme === 'dark' ? 'dark' : 'light';
    this.applyTheme(this.theme);
  }

  toggletheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
    this.applyTheme(this.theme);
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    const oppositeTheme = theme === 'light' ? 'dark' : 'light';

    // Remove the old theme class from body
    this.renderer.removeClass(document.body, oppositeTheme);

    // Add the new theme class
    this.renderer.addClass(document.body, theme);
  }
}
