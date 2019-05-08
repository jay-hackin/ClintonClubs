window.onload = function() {
	document.querySelector("#b1").style.display = "none";
	document.querySelector("#b2").style.display = "none";
	document.querySelector("#b3").style.display = "none";
	document.querySelector("#b4").style.display = "none";
	document.querySelector("#b5").style.display = "none";
	document.querySelector("#b6").style.display = "none";
	document.querySelector("#b7").style.display = "none";
};

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
   		document.querySelector("#style").href = "main_mobile.css"
	}

function dropdown1() {
  var x = document.querySelector("#f1");
  var y = document.querySelector("#b1")
  if (x.style.display === "none") {
    x.style.display = "inline-block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "inline-block";
  }
}

function dropdown2() {
  var x = document.querySelector("#f2");
  var y = document.querySelector("#b2")
  if (x.style.display === "none") {
    x.style.display = "inline-block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "inline-block";
  }
}

function dropdown3() {
  var x = document.querySelector("#f3");
  var y = document.querySelector("#b3")
  if (x.style.display === "none") {
    x.style.display = "inline-block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "inline-block";
  }
}

function dropdown4() {
  var x = document.querySelector("#f4");
  var y = document.querySelector("#b4")
  if (x.style.display === "none") {
    x.style.display = "inline-block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "inline-block";
  }
}

function dropdown5() {
  var x = document.querySelector("#f5");
  var y = document.querySelector("#b5")
  if (x.style.display === "none") {
    x.style.display = "inline-block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "inline-block";
  }
}

function dropdown6() {
  var x = document.querySelector("#f6");
  var y = document.querySelector("#b6")
  if (x.style.display === "none") {
    x.style.display = "inline-block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "inline-block";
  }
}

function dropdown7() {
  var x = document.querySelector("#f7");
  var y = document.querySelector("#b7")
  if (x.style.display === "none") {
    x.style.display = "inline-block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "inline-block";
  }
}