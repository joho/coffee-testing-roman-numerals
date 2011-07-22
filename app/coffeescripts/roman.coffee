#
# Do roman numerals
#
window.toRoman = (number) ->
  if number <= 0
    # do nothing (coffeescript ranges are dumb)
    # and will go negative instead of not doing anything
    # so guard against negative roman numerals
    ""
  else if number >= 0 && number <= 3
    xTimesI(number)
  else if number >= 4 && number <= 8
    wrapNumeral("V", 5, number)
  else if number >= 9 && number <= 48
    wrapNumeral("X", 10, number)
  else if number >= 49 and number <= 98
    wrapNumeral("L", 50, number)
  else
    numeralsAndValues = [
      ["C", 100],
      ["D", 500],
      ["M", 1000]]
    numeral = ""
    for numeralAndValue in numeralsAndValues
      if number >= (numeralAndValue[1] - 1)
        numeral = wrapNumeral(numeralAndValue[0], numeralAndValue[1], number)
    numeral

window.xTimesI = (number) ->
  numeral = ""
  for i in [1..number]
    numeral += "I"
  numeral

window.wrapNumeral = (numeral, valueOfNumeral, number) ->
  toRoman(valueOfNumeral - number) + numeral + toRoman(number - valueOfNumeral)

