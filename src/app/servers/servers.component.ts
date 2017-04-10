import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: Boolean = false;
  serverCreationStatus = 'No server was created!';
  userName = '';
  constructor() {
    
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateUserName(event){
    this.userName = event.target.value;
  }

  clearUserName(){
    this.userName = "";
  }

}
