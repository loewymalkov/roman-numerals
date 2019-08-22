$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();

    var inputNumber = $("#userNumber").val();
    $(".display").text(numeralCounter(inputNumber));

    var iCat = 0;
    var ivCat = 0
    var vCat = 0;
    var ixCat = 0;
    var xCat = 0;
    var xl = 0;
    var lCat = 0;
    var xcCat = 0;
    var cCat = 0;
    var cdCat = 0;
    var dCat = 0;
    var cmCat = 0;
    var mCat = 0;


    // var iCat = 4;
    // var ivCat = 0
    // var vCat = 2;
    // var ixCat = 0;
    // var xCat = 3;
    // var xl = 0;
    // var lCat = 1;
    // var xcCat = 0;
    // var cCat = 0;
    // var cdCat = 0;
    // var dCat = 0;
    // var cmCat = 0;
    // var mCat = 0;

    // function processor(number) {
    //   numeralCounter(number);
    //
    // }






    function numeralCounter(number){
      myNumber = number

      m = myNumber / 1000;
      mCat = parseInt(m);
      myNumber = number - (mCat * 1000)
      console.log(myNumber);
      console.log("m: "+ mCat);

      d = myNumber / 500;
      dCat = parseInt(d);
      myNumber = myNumber - (dCat * 500)
      console.log(myNumber);
      console.log("d: "+ dCat);

      c = myNumber / 100;
      cCat = parseInt(c);
      myNumber = myNumber - (cCat * 100)
      console.log(myNumber);
      console.log("c: "+ cCat);

      l = myNumber / 50;
      lCat = parseInt(l);
      myNumber = myNumber - (lCat * 50)
      console.log(myNumber);
      console.log("l: "+ lCat);

      x = myNumber / 10;
      xCat = parseInt(x);
      myNumber = myNumber - (xCat * 10)
      console.log(myNumber);
      console.log("x: "+ xCat);

      v = myNumber / 5;
      vCat = parseInt(v);
      myNumber = myNumber - (vCat * 5)
      console.log(myNumber);
      console.log("v: "+ vCat);

      iNumber = (v - vCat) * 5;
      i = myNumber;
      iCat = parseInt(i);
      myNumber = myNumber - (iCat * 1);
      console.log(myNumber);
      console.log("i: "+ iCat);

      return " M" + mCat + " D" + dCat +" C" + cCat +" L" + lCat +" X" + xCat +" V" + vCat +" I" + iCat;
    };

    function catAdjustor() {
      if (iCat > 3){
        viCat = 1;
        iCat = 0;
      }
      if ((ivCat === 1) && (vCat === 1)) {
        ixCat += 1;
        ivCat = 0;
        vCat = 0;
      }
      if (xCat > 3){
        xlCat = 1;
        xCat = 0;
      }
      if ((xlCat === 1) && (lCat === 1)) {
        xcCat += 1;
        xlCat = 0;
        xCat = 0;
      }
      if (cCat > 3){
        cdCat = 1;
        cCat = 0;
      }
      if ((cdCat === 1) && (dCat === 1)) {
        cmCat += 1;
        cdCat = 0;
        dCat = 0;
      }
    }


  });
});
