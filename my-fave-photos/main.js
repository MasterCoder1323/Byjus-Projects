//Music
var songAlbum = [
    "https://mastercoder1323.github.io/Byjus-Projects/assets/music/Imagine%20Dragons%20-%20Bones%20(Official%20Lyric%20Video).mp3"
    ,"https://mastercoder1323.github.io/Byjus-Projects/assets/music/Imagine%20Dragons%20-%20Believer%20(Official%20Music%20Video).mp3"
];
var albumCovers = [
    "https://www.theedgesusu.co.uk/wp-content/uploads/2022/03/ImagineDragons-Bones-300x157@2x.jpg ",
    "https://i.scdn.co/image/ab67616d00001e022f2623c93d48a736c6f23cef"
]
var player = new album(songAlbum,photos,"player","cover");
function reverseM(){
    player.previouse();
}
function skipM(){
    player.next();
}
//Span & Div click
function spanC(){
    console.log("This is a Span");
}
function divC(){
    console.log("This is a div");
}