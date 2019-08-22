$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();

    var inputNumber = $("#userNumber").val();
    $(".display").text("hello");


    var numeralArray = [1000, 500, 100, 50, 10, 5, 1];
    var numeralArrayValues = [];
    var r = inputNumber

    for (i = 0; i < 7; i++) {

      var x = r / numeralArray[i];
      var xCount = parseInt(x);
      if (xCount > 0) {
        numeralArrayValues.push(xCount);
        numeralArrayValues.push(0);
        r = r - (xCount * numeralArray[i]);
      } else {
        numeralArrayValues.push(0);
        numeralArrayValues.push(0);
      };
    };
    numeralArrayValues.pop();
    numeralArrayValues.reverse();
    console.log(numeralArrayValues);


    // for (var i = 0; i < 2; i + 1) {
    //   if (i % 2 === 0) {
    //     if (numeralArrayValues[i] > 3) {
    //       numeralArrayValues[i + 1] += 1;
    //       numeralArrayValues[i] = 0;
    //     };
    //     if ((numeralArrayValues[i + 1] === 1) && (numeralArrayValues[i + 2] === 1)) {
    //       numeralArrayValues[i + 3] += 1;
    //       numeralArrayValues[i + 1] = 0;
    //       numeralArrayValues[i + 2] = 0;
    //     }
    //   } else {
    //
    //   };
    // };

    // console.log(numeralArrayValues);
    var adjustedValues = [];

    for (var i = 0; i < 10; i++) {
      if (i % 2 === 0) {
        var val = numeralArrayValues[i];
        if (val > 3) {
          adjustedValues.push(0);
          adjustedValues.push(1);
        } else {
          adjustedValues.push(val);
          adjustedValues.push(0);
        };
      } else {
      };
    };
    console.log(adjustedValues);

  });
});



    // i
    // iv
    // v
    // ix
    // x
    // xl
    // l
    // xc
    // c
    // cd
    // d
    // cm
    // m


    //
    // function catAdjustor() {
    // if (i > 3) {
    //   i + 1 = 1;
    //   i = 0;
    // }
    // if ((i + 1 === 1) && (i + 2 === 1)) {
    //   i + 3 += 1;
    //   i + 1 = 0;
    //   i + 2 = 0;
    // }
    //   }
    //   if (xCat > 3){
    //     xlCat = 1;
    //     xCat = 0;
    //   }
    //   if ((xlCat === 1) && (lCat === 1)) {
    //     xcCat += 1;
    //     xlCat = 0;
    //     xCat = 0;
    //   }
    //   if (cCat > 3){
    //     cdCat = 1;
    //     cCat = 0;
    //   }
    //   if ((cdCat === 1) && (dCat === 1)) {
    //     cmCat += 1;
    //     cdCat = 0;
    //     dCat = 0;
    //   }
    // }
