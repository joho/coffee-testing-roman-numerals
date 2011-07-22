(function() {
  window.toRoman = function(number) {
    var i, numeral;
    if (number <= 0) {
      return "";
    } else if (number < 4) {
      numeral = "";
      for (i = 1; 1 <= number ? i <= number : i >= number; 1 <= number ? i++ : i--) {
        numeral += "I";
      }
      return numeral;
    } else if (number < 5) {
      return "IV";
    } else if (number >= 5 && number <= 8) {
      return "V" + toRoman(number - 5);
    } else {
      return "IX";
    }
  };
}).call(this);
