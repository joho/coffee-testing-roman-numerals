(function() {
  window.toRoman = function(number) {
    var i, numeral;
    numeral = "";
    if (number < 4) {
      for (i = 1; 1 <= number ? i <= number : i >= number; 1 <= number ? i++ : i--) {
        numeral += "I";
      }
    } else if (number < 5) {
      numeral = "IV";
    } else if (number < 6) {
      numeral = "V";
    } else if (number < 7) {
      numeral = "VI";
    } else {
      numeral = "VII";
    }
    return numeral;
  };
}).call(this);
