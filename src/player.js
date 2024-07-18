class Player {
  static initialize() {
    this.keyStasus = {
      right: false,
      left: false,
      up: false,
      down: false,
    }
    // ブラウザのキーボードの入力を取得するイベントリスナを登録する
    document.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case 37: //左
        this.keyStatus.left = true;
        e.preventDefault();
        return false;
        
      }
    });
  }
}