(function() {
  window.toRoman = function(number) {
    if (number <= 0) {
      return "";
    } else if (number < 4) {
      return xTimesI(number);
    } else if (number >= 4 && number <= 8) {
      return toRoman(5 - number) + "V" + toRoman(number - 5);
    } else {
      return "IX";
    }
  };
  window.xTimesI = function(number) {
    var i, numeral;
    numeral = "";
    for (i = 1; 1 <= number ? i <= number : i >= number; 1 <= number ? i++ : i--) {
      numeral += "I";
    }
    return numeral;
  };
}).call(this);
