function OctopusCard(){
  this.balance = 0;
  this.aavs_amount = 0;

  this.setAAVS = function(_aavs_amount) {
    if (_aavs_amount != 250 && _aavs_amount !=500) return false;
    this.aavs_amount = _aavs_amount;
    return true;
  }

  this.topup = function (_amount){
    if (_amount < 50 || _amount%50 != 0) return false;
    this.balance +=_amount;
    return true;
  }

  this.pay = function(_fee){
    if (_fee < 0 || _fee > 3000 ) return false;
    if (_fee > this.balance) {
      if (this.aavs_amount ==0){
        return false;
      }else{
        this.topup(this.aavs_amount);
       }
      if (_fee > this.balance) return false;
    }
    this.balance -= _fee;
    return true;
  } 

}

var card = new OctopusCard ()
console.log(card)
card.setAAVS(250)
console.log(card)
card.topup(100)
console.log(card)
card.pay(50)
console.log(card)
card.pay(300)
console.log(card)
