import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-link',
  templateUrl: './fav-link.component.html',
  styleUrls: ['./fav-link.component.css']
})
export class FavLinkComponent implements OnInit {
  favLinks = ['https://techcrunch.com/','https://www.wired.com/'];
  constructor() { }

  ngOnInit() {
  }

}
