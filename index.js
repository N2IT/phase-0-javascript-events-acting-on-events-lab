
// const dodger = document.getElementById("dodger");

// function moveDodgerLeft() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
  
//     if (left > 0) {
//       dodger.style.left = `${left - 1}px`;
//     }
//   }

//   function moveDodgerRight() {
//     let left = dodger.style.left;
//     left = parseInt(left, 10);
//     let newPosition = dodger.style.left;
//     newPosition = parseInt(newPosition);

//     if (left < 360 ) {
//         dodger.style.left = `${newPosition + 1}px`;
//     }
//   }

// document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") {
//       moveDodgerLeft();
//     } else if (e.key === "ArrowRight") {
//         moveDodgerRight();
//     }
        
//     }
// );


// document.addEventListener("keydown",function(event){
//   if(event.key === "ArrowLeft") {
//       const leftNumbers = dodger.style.left.replace("px","");
//       const left = parseInt(leftNumbers,10);
//       dodger.style.left = `${left - 1}px`;
//   }
// });

const doger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers,10);

  if(left>0) {
    dodger.style.left = `${left - 20}px`;
  }
}

document.addEventListener("keydown", function (e){
  if(e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if(e.key === "ArrowRight") {
      moveDodgerRight();
    } else if(e.key === "ArrowUp") {
      moveDodgerUp();
    } else if(e.key === "ArrowDown") {
      moveDodgerDown();
    }
  });

function moveDodgerRight() {
  let left = dodger.style.left
  left = parseInt(left, 10)
  let newPosition = dodger.style.left
  newPosition = parseInt(newPosition)

  if (left < 360) {
    dodger.style.left = `${left + 20}px`
  }
}

function moveDodgerDown() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers,10);

  if(bottom>0) {
    dodger.style.bottom = `${bottom - 20}px`;
  }
}

function moveDodgerUp() {
  let bottom = dodger.style.bottom
  bottom = parseInt(bottom, 10)
  let newPosition = dodger.style.bottom
  newPosition = parseInt(newPosition)

  if (bottom < 380) {
    dodger.style.bottom = `${bottom + 20}px`
  }
}