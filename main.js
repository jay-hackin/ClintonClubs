if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
   		document.querySelector("#style").href = "main_mobile.css"
	}

function dropdown(elem) {
	var front;
	var back;
	if(elem.includes("f")){
		front = document.querySelector("#" + elem);
		back = document.querySelector("#b" + elem.substring(1, 100));
	}
	else {
		front = document.querySelector("#f" + elem.substring(1, 100));
		back = document.querySelector("#" + elem);
	}
  if (front.style.display === "none") {
    front.style.display = "inline-block";
    back.style.display = "none";
  } else {
    front.style.display = "none";
    back.style.display = "inline-block";
  }
}
