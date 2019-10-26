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

  public valtl: string = "";
  public valt: string = "";
  public valtr: string = "";
  public valcl: string = "";
  public valc: string = "";
  public valcr: string = "";
  public valbl: string = "";
  public valb: string = "";
  public valbr: string = "";

  public xscore: number = 0;
  public tiescore: number = 0;
  public oscore: number = 0;
  public scoreflag: number = 0;

  fill(cell: number) {
    if (cell == 1) {
      if (this.turn == 1) {
        if (this.winflag == -1) {
          if (this.valtl == "") {
            this.valtl = "X";
            this.turn = this.turn + 1;
            this.msg = "Player O's turn";
            this.incrementcount();
          }
        }
      } else {
        if (this.winflag == -1) {
          if (this.valtl == "") {
            this.valtl = "O";
            this.turn = this.turn - 1;
            this.msg = "Player X's turn";
            this.incrementcount();
          }
        }
      }
      this.checkwin();
    }
    if (cell == 2) {
      if (this.turn == 1) {
        if (this.winflag == -1) {
          if (this.valt == "") {
            this.valt = "X";
            this.turn = this.turn + 1;
            this.msg = "Player O's turn";
            this.incrementcount();
          }
        }
      } else {
        if (this.winflag == -1) {
          if (this.valt == "") {
            this.valt = "O";
            this.turn = this.turn - 1;
            this.msg = "Player X's turn";
            this.incrementcount();
          }
        }
      }
      this.checkwin();
    }
    if (cell == 3) {
      if (this.turn == 1) {
        if (this.winflag == -1) {
          if (this.valtr == "") {
            this.valtr = "X";
            this.turn = this.turn + 1;
            this.msg = "Player O's turn";
            this.incrementcount();
          }
        }
      } else {
        if (this.winflag == -1) {
          if (this.valtr == "") {
            this.valtr = "O";
            this.turn = this.turn - 1;
            this.msg = "Player X's turn";
            this.incrementcount();
          }
        }
      }
      this.checkwin();
    }
    if (cell == 4) {
      if (this.turn == 1) {
        if (this.winflag == -1) {
          if (this.valcl == "") {
            this.valcl = "X";
            this.turn = this.turn + 1;
            this.msg = "Player O's turn";
            this.incrementcount();
          }
        }
      } else {
        if (this.winflag == -1) {
          if (this.valcl == "") {
            this.valcl = "O";
            this.turn = this.turn - 1;
            this.msg = "Player X's turn";
            this.incrementcount();
          }
        }
      }
      this.checkwin();
    }
    if (cell == 5) {
      if (this.turn == 1) {
        if (this.winflag == -1) {
          if (this.valc == "") {
            this.valc = "X";
            this.turn = this.turn + 1;
            this.msg = "Player O's turn";
            this.incrementcount();
          }
        }
      } else {
        if (this.winflag == -1) {
          if (this.valc == "") {
            this.valc = "O";
            this.turn = this.turn - 1;
            this.msg = "Player X's turn";
            this.incrementcount();
          }
        }
      }
      this.checkwin();
    }
    if (cell == 6) {
      if (this.turn == 1) {
        if (this.winflag == -1) {
          if (this.valcr == "") {
            this.valcr = "X";
            this.turn = this.turn + 1;
            this.msg = "Player O's turn";
            this.incrementcount();
          }
        }
      } else {
        if (this.winflag == -1) {
          if (this.valcr == "") {
            this.valcr = "O";
            this.turn = this.turn - 1;
            this.msg = "Player X's turn";
            this.incrementcount();
          }
        }
      }
      this.checkwin();
    }
    if (cell == 7) {
      if (this.turn == 1) {
        if (this.winflag == -1) {
          if (this.valbl == "") {
            this.valbl = "X";
            this.turn = this.turn + 1;
            this.msg = "Player O's turn";
            this.incrementcount();
          }
        }
      } else {
        if (this.winflag == -1) {
          if (this.valbl == "") {
            this.valbl = "O";
            this.turn = this.turn - 1;
            this.msg = "Player X's turn";
            this.incrementcount();
          }
        }
      }
      this.checkwin();
    }
    if (cell == 8) {
      if (this.turn == 1) {
        if (this.winflag == -1) {
          if (this.valb == "") {
            this.valb = "X";
            this.turn = this.turn + 1;
            this.msg = "Player O's turn";
            this.incrementcount();
          }
        }
      } else {
        if (this.winflag == -1) {
          if (this.valb == "") {
            this.valb = "O";
            this.turn = this.turn - 1;
            this.msg = "Player X's turn";
            this.incrementcount();
          }
        }
      }
      this.checkwin();
    }
    if (cell == 9) {
      if (this.turn == 1) {
        if (this.winflag == -1) {
          if (this.valbr == "") {
            this.valbr = "X";
            this.turn = this.turn + 1;
            this.msg = "Player O's turn";
            this.incrementcount();
          }
        }
      } else {
        if (this.winflag == -1) {
          if (this.valbr == "") {
            this.valbr = "O";
            this.turn = this.turn - 1;
            this.msg = "Player X's turn";
            this.incrementcount();
          }
        }
      }
      this.checkwin();
    }
  }

  incrementcount() {
    if (this.winflag == -1) {
      this.count = this.count + 1;
    }
  }

  checkwin() {
    if (
      (this.valtl == "X" && this.valt == "X" && this.valtr == "X") ||
      (this.valcl == "X" && this.valc == "X" && this.valcr == "X") ||
      (this.valbl == "X" && this.valb == "X" && this.valbr == "X") ||
      (this.valtl == "X" && this.valcl == "X" && this.valbl == "X") ||
      (this.valt == "X" && this.valc == "X" && this.valb == "X") ||
      (this.valtr == "X" && this.valcr == "X" && this.valbr == "X") ||
      (this.valtl == "X" && this.valc == "X" && this.valbr == "X") ||
      (this.valtr == "X" && this.valc == "X" && this.valbl == "X")
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
      (this.valtl == "O" && this.valt == "O" && this.valtr == "O") ||
      (this.valcl == "O" && this.valc == "O" && this.valcr == "O") ||
      (this.valbl == "O" && this.valb == "O" && this.valbr == "O") ||
      (this.valtl == "O" && this.valcl == "O" && this.valbl == "O") ||
      (this.valt == "O" && this.valc == "O" && this.valb == "O") ||
      (this.valtr == "O" && this.valcr == "O" && this.valbr == "O") ||
      (this.valtl == "O" && this.valc == "O" && this.valbr == "O") ||
      (this.valtr == "O" && this.valc == "O" && this.valbl == "O")
    ) {
      this.msg = "Player O wins";
      this.winflag = 2;
      this.scoreflag = this.scoreflag + 1;
      if (this.scoreflag == 1) this.updatescore();
    }
  }

  updatescore() {
    if (this.winflag == 1) {
      this.xscore = this.xscore + 1;
    } else if (this.winflag == 2) this.oscore = this.oscore + 1;
    else if (this.winflag == 0) this.tiescore = this.tiescore + 1;
    else return;
  }

  newgame() {
    this.turn = 1;
    this.msg = "";
    this.count = 0;
    this.valtl = "";
    this.valt = "";
    this.valtr = "";
    this.valcl = "";
    this.valc = "";
    this.valcr = "";
    this.valbl = "";
    this.valb = "";
    this.valbr = "";
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
