(function() {
  window.toRoman = function(number) {
    var numeral, numeralAndValue, numeralsAndValues, _i, _len;
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
    } else {
      numeralsAndValues = [["L", 50], ["C", 100], ["D", 500], ["M", 1000]];
      numeral = "";
      for (_i = 0, _len = numeralsAndValues.length; _i < _len; _i++) {
        numeralAndValue = numeralsAndValues[_i];
        if (number >= (numeralAndValue[1] - 1)) {
          numeral = wrapNumeral(numeralAndValue[0], numeralAndValue[1], number);
        }
      }
      return numeral;
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
