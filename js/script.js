//let playList = ["Hot girl bummer", "Do Re Mi", "Roxxane"];

let song = {
  music: "Hot girl bummer",
  artist: "Black bear",
  length: "2:48",
}
let song2 = {
  music: "Do Re Mi",
  artist: "Black bear",
  length: "2:58",
}
let song3 = {
  music: "Roxxane",
  artist: "Arizonna",
  length: "3:00",
}
$('#song').click(function () {
  $("#song").append("<p> music : " + info["music"] + "</p>");
  $("#song").append("<p> artist : " + info["artist"] + "</p>");
  $("#song").append("<p> length : " + info["length"] + "</p>");

  playlist.forEach(function (music) {
    $('.playList').append(text);
  })
});