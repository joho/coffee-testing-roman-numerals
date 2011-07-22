(function() {
  window.toRoman = function(number) {
    if (number <= 0) {
      return "";
    } else if (number >= 0 && number <= 3) {
      return xTimesI(number);
    } else if (number >= 4 && number <= 8) {
      return toRoman(5 - number) + "V" + toRoman(number - 5);
    } else if (number >= 9 && number <= 13) {
      return toRoman(10 - number) + "X" + toRoman(number - 10);
    } else if (number >= 14 && number <= 48) {
      return "X" + toRoman(number - 10);
    } else if (number >= 49 && number <= 98) {
      return toRoman(50 - number) + "L" + toRoman(number - 50);
    } else if (number >= 99 && number <= 498) {
      return toRoman(100 - number) + "C" + toRoman(number - 100);
    } else if (number >= 499 && number <= 998) {
      return toRoman(500 - number) + "D" + toRoman(number - 500);
    } else if (number >= 999) {
      return toRoman(1000 - number) + "M" + toRoman(number - 1000);
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
