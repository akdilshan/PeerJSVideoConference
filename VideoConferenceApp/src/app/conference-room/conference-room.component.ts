import { Component, OnInit } from '@angular/core';

declare var Peer: any;

@Component({
  selector: 'app-conference-room',
  templateUrl: './conference-room.component.html',
  styleUrls: ['./conference-room.component.css']
})
export class ConferenceRoomComponent implements OnInit {

  peer;
  anotherid;
  mypeerid;

  constructor() { }

  ngOnInit() {
    
    //this.peer = new Peer({key: '<yourkeyhere>'});
    this.peer = new Peer({host: 'localhost', port: 9000, path: '/myapp'});
    // setTimeout(() => {
    // this.mypeerid = this.peer.id;
    // }, 3000);

    this.peer.on('connection', function(conn) {
    conn.on('data', function(data) {
    console.log(data);
    });
   });

    }

  connect() {
  const connectRemote = this.peer.connect(this.anotherid);
  connectRemote.on('open', function() {
    connectRemote.send('Message from that id');
   });
}

}
