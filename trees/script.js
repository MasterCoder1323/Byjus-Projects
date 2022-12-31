var album = ["https://images.unsplash.com/photo-1531379115628-32ab7454986c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ","https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ","https://images.unsplash.com/photo-1462143338528-eca9936a4d09?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ","https://images.unsplash.com/photo-1421790500381-fc9b5996f343?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ","https://images.unsplash.com/photo-1485067801970-70573e3f77d0?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"];
var reasons = ["Trees are homes for animals", "Trees provide shade", "trees provide fruit", "trees  help stop soil erosion","1 tree provide oxygen for 4 people"];
var i = 0;
function nextSlide(){
    document.getElementById("text").innerHTML = reasons[i];
    document.getElementById("album").src = album[i];
    i++
    if(i == 5){
        i=0;
    }
}
function playSong(){
    document.getElementById("song").play();
}