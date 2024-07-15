window.addEventListener("load", () => {
  initialize();
  loop();
});

let mode; // 状況
let frame; // フレーム
let combinationCount = 0; // 連鎖数

function initialize() {
  PuyoImage.initialize();
  Stage.initialize();
  // Player.initialize();
  // Score.initialize();
  mode = "start";
  frame = 0;
}

function loop() {
  switch (mode) {
    case "start":
      mode = "checkFall";
      break;
    case "checkFal":
    case "fall":
    case "checkErase":
    case "erasing":
    case "newPuyo":
    case "playing":
    case "moving":
    case "rotating":
    case "gameOver":
    case "batankyu":
  }
  frame++;
  requestAnimationFrame(loop);
}