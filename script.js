let x = 1; 

function change_back() {
	main = document.getElementById("main-title");
	if (x==0) {
		main.style.backgroundImage = "url('assets/cover/solar.jpg')";
	}
	else if (x==1) {
		main.style.backgroundImage = "url('assets/cover/windfarm.jpg')"; 
	}
  else if (x==2) {
		main.style.backgroundImage = "url('assets/cover/ev.jpg')";
	}
  else if (x==3) {
		main.style.backgroundImage = "url('assets/cover/ev2.jpg')"; 
		x=-1;
	}
	x++; 
}

change_back()
let y = setInterval(change_back, 4500);


function fadeOut(element) {
    var op = 1;
    var timer = setInterval(() => {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function fadeIn(element) {
  var op = 0.1;
  element.style.display = 'block';
  var timer = setInterval(() => {
      if (op >= 1) clearInterval(timer);
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
  }, 10);
}