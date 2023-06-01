import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent {
    allowNewServer: boolean = false;
    serverCreationStatus: string = "No server was created";
    serverName: string = "Testserver";

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    onCreateServer() {
        this.serverCreationStatus = "Server was created! Name is " + this.serverName;
    }

    onUpdateServerName(event: Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}