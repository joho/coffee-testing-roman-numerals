(function() {
  window.toRoman = function(number) {
    if (number <= 0) {
      return "";
    } else if (number >= 0 && number <= 3) {
      return xTimesI(number);
    } else if (number >= 4 && number <= 8) {
      return wrapNumeral("V", 5, number);
    } else if (number >= 9 && number <= 48) {
      return wrapNumeral("X", 10, number);
    } else if (number >= 49 && number <= 98) {
      return wrapNumeral("L", 50, number);
    } else if (number >= 99 && number <= 498) {
      return wrapNumeral("C", 100, number);
    } else if (number >= 499 && number <= 998) {
      return wrapNumeral("D", 500, number);
    } else if (number >= 999) {
      return wrapNumeral("M", 1000, number);
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
  window.wrapNumeral = function(numeral, valueOfNumeral, number) {
    return toRoman(valueOfNumeral - number) + numeral + toRoman(number - valueOfNumeral);
  };
}).call(this);
