import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.scss"]
})
export class GameComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  public turn: number = 1;
  public count: number = 0;
  public winflag: number = -1;

  public msg: string = "";
  public buttonvalue = "🌞";

  public xscore: number = 0;
  public tiescore: number = 0;
  public oscore: number = 0;
  public scoreflag: number = 0;

  public board = ["", "", "", "", "", "", "", "", ""];

  fill(cell: number) {
    if (this.turn == 1 && this.winflag == -1 && this.board[cell] == "") {
      this.board[cell] = "X";
      this.turn = this.turn + 1;
      this.msg = "Player O's turn";
      this.incrementcount();
    } else if (this.winflag == -1 && this.board[cell] == "") {
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
    else return;
  }

  newgame() {
    this.turn = 1;
    this.msg = "";
    this.count = 0;
    this.board[0] = this.board[1] = this.board[2] = this.board[3] = this.board[4] = this.board[5] = this.board[6] = this.board[7] = this.board[8] =
      "";
    this.winflag = -1;
    this.scoreflag = 0;
  }

  toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";

    var tl = document.getElementById("tl");
    var currentClasstl = tl.className;
    tl.className =
      currentClasstl == "tldarkmode" ? "tllightmode" : "tldarkmode";

    var tr = document.getElementById("tr");
    var currentClasstr = tr.className;
    tr.className =
      currentClasstr == "trdarkmode" ? "trlightmode" : "trdarkmode";

    var cl = document.getElementById("cl");
    var currentClasscl = cl.className;
    cl.className =
      currentClasscl == "cldarkmode" ? "cllightmode" : "cldarkmode";

    var c = document.getElementById("c");
    var currentClassc = c.className;
    c.className = currentClassc == "cdarkmode" ? "clightmode" : "cdarkmode";

    var cr = document.getElementById("cr");
    var currentClasscr = cr.className;
    cr.className =
      currentClasscr == "crdarkmode" ? "crlightmode" : "crdarkmode";

    var b = document.getElementById("b");
    var currentClassb = b.className;
    b.className = currentClassb == "bdarkmode" ? "blightmode" : "bdarkmode";

    var br = document.getElementById("br");
    var currentClassbr = br.className;
    br.className =
      currentClassbr == "brdarkmode" ? "brlightmode" : "brdarkmode";

    if (this.buttonvalue == "🌞") {
      this.buttonvalue = "🌛";
    } else {
      this.buttonvalue = "🌞";
    }
  }
}
