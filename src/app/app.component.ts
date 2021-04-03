import { Component } from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  message = 'hello';
  myWebSocket: WebSocketSubject<any> = webSocket('ws://localhost:8000');

  constructor() {
    this.myWebSocket.subscribe(
      msg => console.log('message received: ' + msg),
      // Called whenever there is a message from the server
      err => console.log(err),
      // Called if WebSocket API signals some kind of error
      () => console.log('complete')
      // Called when connection is closed (for whatever reason)
   );
  }

  sendMessageToServer() {
    this.myWebSocket.next({message: 'some message'});
  }
  sendMessageToServer2($event: any) {
    this.myWebSocket.next(this.message);
  }
  sendMessageToServer3() {
    this.myWebSocket.next({message: 'allen message'});
  }
}