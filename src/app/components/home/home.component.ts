import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _ROUTER: Router) { }

  ngOnInit(): void {
  }
  gotostore(){
    this._ROUTER.navigate(['/tienda']);
  }
  gotoclients(){
    this._ROUTER.navigate(['/clientes']);
  }
}
