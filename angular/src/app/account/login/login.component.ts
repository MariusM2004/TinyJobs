import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const splash = document.querySelector('.splash');

    document.addEventListener('DOMContentLoaded', (e) => {
      setTimeout(() => {
        splash?.classList.add('display-none');
      }, 2000);
    })
  }

}
