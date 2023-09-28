
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  let left = dodger.style.left;
  left = parseInt(left, 10);

  function moveDodgerRight() {
    let newPosition = dodger.style.left;
    newPosition = parseInt(newPosition);

    if (left < 280 ) {
        dodger.style.left = `${newPosition + 1}px`;
    }
  }

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
        
    }
);


