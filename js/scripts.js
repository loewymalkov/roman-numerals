$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    $(".display").text("");

    var inputNumber = $("#userNumber").val();
    var output = ""

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


    for (var i = 0; i < 10; i++) {
      if (i % 2 === 0) {
        if (numeralArrayValues[i] > 3) {
          numeralArrayValues[i + 1] += 1;
          numeralArrayValues[i] = 0;
        };
        if ((numeralArrayValues[i + 1] === 1) && (numeralArrayValues[i + 2] === 1)) {
          numeralArrayValues[i + 3] += 1;
          numeralArrayValues[i + 1] = 0;
          numeralArrayValues[i + 2] = 0;
        }
      };
    };

    numeralArrayValues.reverse();

    var romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

    var index = 0
    romanNumerals.forEach(function(numeral) {
      var val = numeralArrayValues[index];
      if (val > 0) {
        if (val >= 1) {
          output += numeral;
        }
        if (val >= 2) {
          output += numeral;
        }
        if (val >= 3) {
          output += numeral;
        }
      };
      index += 1;
    });
    $(".display").text(output);
  });
});
