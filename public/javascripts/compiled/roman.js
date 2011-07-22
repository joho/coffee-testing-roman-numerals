(function() {
  window.toRoman = function(number) {
    var i, numeral;
    numeral = "";
    if (number <= 0) {} else if (number < 4) {
      for (i = 1; 1 <= number ? i <= number : i >= number; 1 <= number ? i++ : i--) {
        numeral += "I";
      }
    } else if (number < 5) {
      numeral = "IV";
    } else if (number >= 5) {
      numeral = "V" + toRoman(number - 5);
    }
    return numeral;
  };
}).call(this);
