import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.scss"]
})
export class GameComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  public spam: any;

  public turn: number = 1;
  public count: number = 0;

  public winflag: number = -1;
  public msg: string = null;

  public buttonvalue = "🌞";
  public darktheme: boolean = true;

  public xscore: number = 0;
  public tiescore: number = 0;
  public oscore: number = 0;
  public scoreflag: number = 0;

  public board: any = [];

  public numofplayers: number = 2;
  public cellsleft = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  mode(e: any) {
    if (e.target.checked) {
      this.numofplayers = 1;
      this.scoreflag = 0;
      this.xscore = 0;
      this.oscore = 0;
      this.tiescore = 0;
      this.newgame();
    } else {
      this.numofplayers = 2;
      this.scoreflag = 0;
      this.xscore = 0;
      this.oscore = 0;
      this.tiescore = 0;
      this.newgame();
    }
  }

  controller(cell: number) {
    if (this.numofplayers == 2) this.filltwo(cell);
    else this.fillone(cell);
  }

  fillone(cell: number) {
    if (this.turn == 1 && this.winflag == -1 && this.board[cell] == null) {
      this.board[cell] = "X";
      this.turn = this.turn + 1;
      this.msg = "Player O's turn";
      this.incrementcount();
      this.checkwin();
      if (this.winflag == -1) this.filltwocomp(cell);
    }
  }

  filltwocomp(cell: number) {
    for (var i = 0; i < this.cellsleft.length; i++) {
      if (this.cellsleft[i] === cell) {
        this.cellsleft.splice(i, 1);
      }
    }

    var compcell = this.cellsleft[(Math.random() * this.cellsleft.length) | 0];

    for (var i = 0; i < this.cellsleft.length; i++) {
      if (this.cellsleft[i] === compcell) {
        this.cellsleft.splice(i, 1);
      }
    }

    this.spam = compcell;
    this.board[compcell] = "O";
    this.msg = "Player X's turn";
    this.turn = this.turn - 1;
    this.incrementcount();
    this.checkwin();
  }

  filltwo(cell: number) {
    if (this.turn == 1 && this.winflag == -1 && this.board[cell] == null) {
      this.board[cell] = "X";
      this.turn = this.turn + 1;
      this.msg = "Player O's turn";
      this.incrementcount();
    } else if (this.winflag == -1 && this.board[cell] == null) {
      this.board[cell] = "O";
      this.turn = this.turn - 1;
      this.msg = "Player X's turn";
      this.incrementcount();
    }
    this.checkwin();
  }

  incrementcount() {
    if (this.winflag == -1) {
      this.count = this.count + 1;
    }
  }

  checkwin() {
    if (
      (this.board[0] == "X" && this.board[1] == "X" && this.board[2] == "X") ||
      (this.board[3] == "X" && this.board[4] == "X" && this.board[5] == "X") ||
      (this.board[6] == "X" && this.board[7] == "X" && this.board[8] == "X") ||
      (this.board[0] == "X" && this.board[3] == "X" && this.board[6] == "X") ||
      (this.board[1] == "X" && this.board[4] == "X" && this.board[7] == "X") ||
      (this.board[2] == "X" && this.board[5] == "X" && this.board[8] == "X") ||
      (this.board[0] == "X" && this.board[4] == "X" && this.board[8] == "X") ||
      (this.board[2] == "X" && this.board[4] == "X" && this.board[6] == "X")
    ) {
      this.msg = "Player X wins";
      this.winflag = 1;
      this.scoreflag = this.scoreflag + 1;
      if (this.scoreflag == 1) this.updatescore();
    } else if (this.count == 9) {
      this.msg = "It's a Draw";
      this.winflag = 0;
      this.scoreflag = this.scoreflag + 1;
      if (this.scoreflag == 1) this.updatescore();
    } else if (
      (this.board[0] == "O" && this.board[1] == "O" && this.board[2] == "O") ||
      (this.board[3] == "O" && this.board[4] == "O" && this.board[5] == "O") ||
      (this.board[6] == "O" && this.board[7] == "O" && this.board[8] == "O") ||
      (this.board[0] == "O" && this.board[3] == "O" && this.board[6] == "O") ||
      (this.board[1] == "O" && this.board[4] == "O" && this.board[7] == "O") ||
      (this.board[2] == "O" && this.board[5] == "O" && this.board[8] == "O") ||
      (this.board[0] == "O" && this.board[4] == "O" && this.board[8] == "O") ||
      (this.board[2] == "O" && this.board[4] == "O" && this.board[6] == "O")
    ) {
      this.msg = "Player O wins";
      this.winflag = 2;
      this.scoreflag = this.scoreflag + 1;
      if (this.scoreflag == 1) this.updatescore();
    }
  }

  updatescore() {
    if (this.winflag == 1) this.xscore = this.xscore + 1;
    else if (this.winflag == 2) this.oscore = this.oscore + 1;
    else if (this.winflag == 0) this.tiescore = this.tiescore + 1;
  }

  newgame() {
    this.turn = 1;
    this.msg = null;
    this.count = 0;
    this.board = [];
    this.winflag = -1;
    this.scoreflag = 0;
    this.cellsleft = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  }

  toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";

    this.darktheme = !this.darktheme;

    if (this.buttonvalue == "🌞") {
      this.buttonvalue = "🌛";
    } else {
      this.buttonvalue = "🌞";
    }
  }
}
