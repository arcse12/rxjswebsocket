const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8000 })

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`);
    wss.app.forEach(function each(app) {
        if(app !== ws && app.readyState === WebSocket.OPEN){
            app.send(message);
        }
    });
  })
  ws.send('Hello! Message From Server!!')
})