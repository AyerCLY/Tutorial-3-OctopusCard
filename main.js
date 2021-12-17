function OctopusCard (){
  this.balance = 0;
  this.AAVSamount = 0;

  this.setAAVS = function (_AAVSamount) {
    if (_AAVSamount < 250 || _AAVSamount%50 != 0 ) return false;
    this.AAVSamount = _AAVSamount;
    this.balance += _AAVSamount;
  } 

  this.topUp = function (_topup) {
    if (_topup < 50 || _topup%50 != 0) return false;
    this.balance += _topup;
  }

  this.pay = function (_fee) {
    if (_fee < 0 || _fee > this.balance) return false;
    this.balance -= _fee;
    if (this.balance == 0 ) return (this.balance += this.AAVSamount);
  }

}

var card = new OctopusCard();
console.log (card);
card.setAAVS(500);
console.log (card);
card.topUp(500);
console.log (card);
card.pay(2.5);
console.log (card);
card.pay(747.5);
console.log (card);
card.pay(225);
console.log (card)
card.pay(25);
console.log (card)
card.pay(500);
console.log (card)
