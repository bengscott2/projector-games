const Express = require("express")();
const Http = require("http").Server(Express);
const io = require("socket.io")(Http);

Http.listen(3000, '192.168.1.89', () => {
    console.log("Listening at :3000...");
});

var clicks = [1,1]
var users = []

io.on("connection", socket => {
  var place = users.length
  console.log(place)
  users.push(socket.id)
  console.log('A USER CONNECTED')
  console.log(users)

  socket.on('click', () => {
    clicks[place] ++
    console.log(clicks)
  })
});
