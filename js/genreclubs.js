//to make overlay appear fullscreen
function loadContent(type) {
  if (type == 1) {
    document.getElementById("thriller").style.height = "100%";
    document.body.style.overflow = "hidden";
  } else if (type == 2) {
    document.getElementById("romance").style.height = "100%";
    document.body.style.overflow = "hidden";
  } else if (type == 3) {
    document.getElementById("fantasy").style.height = "100%";
    document.body.style.overflow = "hidden";
  } else if (type == 4) {
    document.getElementById("poetry").style.height = "100%";
    document.body.style.overflow = "hidden";
  } else if (type == 5) {
    document.getElementById("non-fiction").style.height = "100%";
    document.body.style.overflow = "hidden";
  }
}

//to close the respective overlays
function closeContent(type) {
  if (type == 1) {
    document.getElementById("thriller").style.height = "0%";
    document.body.style.overflow = "visible";
  } else if (type == 2) {
    document.getElementById("romance").style.height = "0%";
    document.body.style.overflow = "visible";
  } else if (type == 3) {
    document.getElementById("fantasy").style.height = "0%";
    document.body.style.overflow = "visible";
  } else if (type == 4) {
    document.getElementById("poetry").style.height = "0%";
    document.body.style.overflow = "visible";
  } else if (type == 5) {
    document.getElementById("non-fiction").style.height = "0%";
    document.body.style.overflow = "visible";
  }
}
