const Express = require("express")();
const Http = require("http").Server(Express);
const io = require("socket.io")(Http);

Http.listen(3000, '192.168.1.89', () => {
    console.log("Listening at :3000...");
});

var points = [1,1]
var users = []

io.on("connection", socket => {
  var place = 0
  if (users.length % 2 === 0) {
    place = 0
  } else {
    place = 1
  }


  users.push(socket.id)
  console.log('A USER CONNECTED')
  console.log(users)

  socket.on('click', () => {
    points[place] ++
    console.log(points)
    io.emit('points', {points: points})
  })


});
