function OctopusCard () {
  this.balance = 0;
  this.aavs_amount = 0;

  // returns boolean
  // ture: success to set AAVS
  // false: fail to set AAVS
  this.setAAVS = function (_aavs_amount) {
    if (_aavs_amount != 250 || _aavs_amount != 500) return false;
    this.aavs_amount = _aavs_amount;
    return true;
  }

  // returns boolean
  // ture: success to topup
  // false: fail to topup
  this.topup = function (_amount) {
    if (_amount < 0 || _amount % 50 != 0) return false;
    this.balance += _amount;
    return true;
  }

  // returns boolean
  // ture: success to pay
  // false: fail to pay
  this.pay = function (_amount) {
    if (_amount < 0 || _amount > 3000) return false;

    if (_amount > this.balance) {
      if (this.aavs_amount == 0){
        return false;
      } else {
        this.topup(this.aavs_amount);
      }
    }

    if (_amount > this.balance) return false;

    this.balance -= _amount;
    return true;
  }
}

var card = new OctopusCard();
if (card.setAAVS(250)) {
  console.log('success');
} else {
  console.log('fail');
}
// card.topup(500);
// card.pay(500);
