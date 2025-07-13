import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-themeswitcher',
  imports: [],
  templateUrl: './themeswitcher.component.html',
  styleUrl: './themeswitcher.component.scss'
})
export class ThemeswitcherComponent implements OnInit{
  theme:string =  JSON.parse(localStorage.getItem('theme' )?? 'light')
  constructor(private renderer:Renderer2){
       const localstoragedata = JSON.parse(localStorage.getItem('theme') ?? 'null');
    if(localstoragedata == null){
      localStorage.setItem('theme','light')
    }
  }

toggletheme(){
  if(this.theme == 'light'){
    this.renderer.removeClass(document.body,'dark-theme')
  }
  else{
    this.renderer.addClass(document.body,'dark-theme')
  }
}
  ngOnInit(){
 
  }
}
