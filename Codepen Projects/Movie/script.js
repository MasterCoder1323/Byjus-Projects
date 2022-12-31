function openVorP(){
    document.getElementById("trailerB").innerHTML.text = "Back To Image";
    if (document.getElementById("trailerB").innerHTML == "Watch Trailer") {
      document.getElementById("trailerB").innerHTML = "Back To Image";
      document.getElementById("photo").style.height = "0px";
      document.getElementById("video").style.height = "480px";
    } else {
      document.getElementById("trailerB").innerHTML = "Watch Trailer";
      document.getElementById("photo").style.height = "auto";
      document.getElementById("video").style.height = "0px";
    }
  }
  