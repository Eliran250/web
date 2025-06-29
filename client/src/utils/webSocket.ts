const ws = new WebSocket('ws://localhost:5050');

ws.addEventListener('close', () => console.log('We were done'))
ws.addEventListener('error', () => console.log('error'));
ws.addEventListener('open', () => {
    console.log('I was connected')
    ws.send('hello world')
    ws.close();
});


