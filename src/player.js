class Config {}
Config.puyoImgWidth = 40; // ぷよぷよ画像の幅
Config.puyoImgHeight = 40; // ぷよぷよ画像の高さ

Config.fontHeight = 33; 

Config.stageCols = 6;
Config.stageRows = 12;

// フィールドサイズ追加
// 高さが全部入るように調整
Config.puyoImgHeight = (window.innerHeight - Config.fontHeight) / Config.stageRows;
Config.puyoImgWidth = Config.puyoImgHeight;

Config.stageBackgroundColor = "#ffffff"; // ステージの背景色
Config.scoreBackgroundColor = "#24c0bb"; // スコアの背景色

Config.freeFallingSpeed = 16; // 自由落下のスピード
Config.erasePuyoCount = 4; // 何個以上揃ったら消えるか
Config.eraseAnimationDuration = 30; // 何フレームでぷよを消すか

Config.puyoColors = 4; // 難色のぷよを使うか
Config.playerFallingSpeed = 0.9; // プレイ中の自由落下スピード
Config.playerDownSpeed = 15;  // プレイ中の下キー押下時の落下スピード
Config.playerGroundFrame = 20; // 何フレーム設置したらぷよを固定するか 
Config.playerMoveFrame = 10; // 左右移動に消費するフレーム数
Config.playerRotateFrame = 10; // 回転に消費するフレーム数

Config.zenkeshiDuration = 150; // 全消し時のアニメーションミリセカンド
Config.gameOverFrame = 3000; // ゲームオーバー演出のサイクルフレーム