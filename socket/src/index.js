const { WebSocketServer } = require("ws");
const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", (ws) => {
  console.dir({
    clients: wss.clients.size,
  });
  ws.send(
    JSON.stringify({
      type: "chat-message",
      payload: {
        text: "Welcome to the jungle baby, your gonna die!",
        user: {
          name: "Axl",
        },
      },
    })
  );
});
