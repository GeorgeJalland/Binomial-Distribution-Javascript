function factorial(x) {
  let ans = 1;
  for (let i = x; i > 0; i--) {
    ans = ans * i;
  }
  return ans;
}

function nCr(n, r) {
  return (factorial(n) / (factorial(r) * factorial(n - r))).toFixed(0);
}

export default class Binomial {
  constructor(p, n) {
    this.probabilityOfSuccess = p;
    this.numberOfTrials = n;
  }

  exactly(i) {
    let n = this.numberOfTrials;
    let p = this.probabilityOfSuccess;
    return nCr(n, i) * Math.pow(p, i) * Math.pow(1 - p, n - i);
  }

  atMost(i) {
    let ans = 0;
    for (let j = 0; j <= i; j++) {
      ans += this.exactly(j);
    }
    return ans;
  }

  atLeast(i) {
    return 1 - this.atMost(i) + this.exactly(i);
  }
}
