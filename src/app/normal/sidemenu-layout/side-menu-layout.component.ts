import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu-layout',
  templateUrl: './side-menu-layout.component.html',
  styleUrls: ['./side-menu-layout.component.scss']
})
export class SideMenuLayoutComponent implements OnInit {
  isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
