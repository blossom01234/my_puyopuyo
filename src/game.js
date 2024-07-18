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
  Player.initialize();
  Score.initialize();
  mode = "start";
  frame = 0;
}

function loop() {
  switch (mode) {
    case "start":
      // 最初は、もしかしたら空中にあるかもしれないぷよを自由落下させるところからスタート
      mode = "checkFall";
      break;
    case "checkFall":
      // 落ちるかどうか判定する
      if (Stage.checkFall()) {
        mode = "fall";
      } else {
        // 落ちないならば、消せるかどうか判定する
        mode = "checkErase";
      }
      break;
    case "fall":
      if (!Stage.fall()) {
        // 全て落ちきったら、ぷよを消せるかどうか判定する
        mode = "checkErase";
      }
      break;
    case "checkErase":
      // 消せるかどうか判定する
      const eraseInfo = Stage.checkErase(frame);
      if (eraseInfo) {
        mode = "erasing";
        combinationCount++;
        // 得点を計算する
        Score.calculateScore(
          combinationCount,
          eraseInfo.piece,
          eraseInfo.color
        );
        Stage.hideZenkeshi();
      } else {
        if (Stage.puyoCount === 0 && combinationCount > 0) {
          // 全消し処理をする
          Stage.showZenkeshi();
          Score.addScore(3600);
        }
        combinationCount = 0;
        // 消せなかったら、新しいぷよを登場させる
        mode = "newPuyo";
      }
      break;
    case "erasing":
      if (!Stage.erasing(frame)) {
        mode =  "checkFail";
      }
      break;
    case "newPuyo":
      if (!Player.createNewPuyo()) {
        // 新しい操作用ぷよを作成できなかったら、ゲームオーバー
        mode = "gameOver";
      } else {
        mode = "playing";
      }
      break;
    case "playing":
      // プレイヤーが操作する
      const action = Player.playing(frame);
      mode = action; // 'playing' 'moving' 'rotating' 'fix' のどれかが帰って来る
      break;
    case "moving":
      if (!Player.moving(frame)) {
        // 異動が終わったので操作可能にする
        mode = "playing";
      }
      break;
    case "rotating":
      if (!Player.roatating(frame)) {
        // 回転が終わったので操作可能にする
        mode = "playing";
      }
      break;
    case "fix":
      // 現在の位置でぷよを固定する
      Player.fix();
      // 固定したら、まず自由落下を確認する
      mode = "checkFall";
      break;
    case "gameOver":
      // ばたんきゅーの準備をする
      PuyoImage.prepareBatankyu(frame);
      mode = "batankyu";
      break;
    case "batankyu":
      PuyoImage.batankyu(frame);
      Player.batankyu();
      break;
  }
  frame++;
  requestAnimationFrame(loop);
}