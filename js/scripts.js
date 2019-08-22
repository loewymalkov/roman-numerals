$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();

    var inputNumber = $("#userNumber").val();

    var iCat = "0";
    var vCat = "0";
    var xCat = "0";
    var lCat = "0";
    var cCat = "0";
    var dCat = "0";
    var mCat = "0";

    function numeralCounter(number){
      mNumber = number
      m = inputNumber / 1000;
      mCat = parseInt(m);
      console.log("m: "+ m);

      dNumber = (m - mCat) * 1000;
      d = dNumber / 500;
      dCat = parseInt(d);
      console.log("d: "+ d);

      cNumber = (d - dCat) * 500;
      c = cNumber / 100;
      cCat = parseInt(c);
      console.log("c: "+ c);

      lNumber = (c - cCat) * 100;
      l = lNumber / 50;
      lCat = parseInt(l);
      console.log("l: "+ l);

      xNumber = (l - lCat) * 50;
      x = xNumber / 10;
      xCat = parseInt(x);
      console.log("x: "+ x);

      vNumber = (x - xCat) * 10;
      v = vNumber / 5;
      vCat = parseInt(v);
      console.log("v: "+ v);

      iNumber = (v - vCat) * 5;
      i = iNumber;
      iCat = parseInt(i);
      console.log("i: "+ i);

      return " M" + mCat + " D" + dCat +" C" + cCat +" L" + lCat +" X" + xCat +" V" + vCat +" I" + iCat;
    };

    $(".display").text(numeralCounter(inputNumber));

  });
});
