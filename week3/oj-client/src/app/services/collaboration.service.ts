import { Injectable } from '@angular/core';
import { COLORS } from '../../assets/colors';

declare var io: any;
declare var ace: any;

@Injectable()
export class CollaborationService {

  collaborationSocket: any;
  clientsInfo: Object = {};
  clientNum: number = 0; //counter for cursor color

  constructor() { }

  init(editor: any, sessionId: string): void {
    this.collaborationSocket = io(window.location.origin, { query: 'sessionId=' + sessionId} ) //current url

    this.collaborationSocket.on('change', (delta: string) => { //listening on line 27
      console.log('collaboration: editor changes by' + delta); //delta event
      delta = JSON.parse(delta);
      editor.lastAppliedChange = delta;
      editor.getSession().getDocument().applyDeltas([delta]);
    });

    this.collaborationSocket.on('cursorMove', (cursor) => { //jie shou duan
      console.log('cursor move: ' + cursor);
      let session = editor.getSession();
      cursor = JSON.parse(cursor);
      let x = cursor['row'];
      let y = cursor['column'];
      let changeClientId = cursor['socketId'];//duifang de client id
      console.log(x + ' ' + y + ' ' + changeClientId);

      if (changeClientId in this.clientsInfo) {  // if we have the client's info in local copy
        session.removeMarker(this.clientsInfo[changeClientId]['marker']);
      } else {
        this.clientsInfo[changeClientId] = {};

        let css = document.createElement('style');
        css.type = 'text/css';
        css.innerHTML = '.editor_cursor_' + changeClientId
           + ' { position:absolute; background:' + COLORS[this.clientNum] + ';'
           + ' z-index: 100; width:3px !important; }';
        document.body.appendChild(css);
        this.clientNum++;
      }

      let Range = ace.require('ace/range').Range;
      let newMarker = session.addMarker(new Range(x, y, x, y + 1), 'editor_cursor_' + changeClientId, true); //assign class name
      this.clientsInfo[changeClientId]['marker'] = newMarker;
    })

    // Test
    this.collaborationSocket.on('message', (message) => {
      console.log('received: ' + message);
    })
  }

  change(delta: string): void {
    this.collaborationSocket.emit('change', delta); //send client change json file to server
  }

  cursorMove(cursor: string): void {
    this.collaborationSocket.emit('cursorMove', cursor); //fa song duan
  }

  restoreBuffer(): void {
    this.collaborationSocket.emit('restoreBuffer');
  }
}
