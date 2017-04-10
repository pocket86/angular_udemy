import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  showText = false;
  log = [];
  constructor() {
    
  }

  ngOnInit() {
  }

  toggleText(){
    this.showText = !this.showText;
    this.log.push(this.log.length + 1);
  }

}
