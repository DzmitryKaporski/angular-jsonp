import { Component, OnInit } from '@angular/core';

import { VikiService } from './../viki.service';
import { data } from '../shared/data';

@Component({
  selector: 'app-jsonp',
  templateUrl: './jsonp.component.html',
  styleUrls: ['./jsonp.component.scss']
})
export class JsonpComponent implements OnInit {

  items: data[] = [];

  constructor(private viki: VikiService) { }

  ngOnInit(): void { }

  search(text: string): void {
    this.viki.searchViki(text).subscribe({
      next: respons => { this.items = respons }
    })
  }
}
