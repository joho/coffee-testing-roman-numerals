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
  else if number >= 99 && number <= 498
    wrapNumeral("C", 100, number)
  else if number >= 499 && number <= 998
    wrapNumeral("D", 500, number)
  else if number >= 999
    wrapNumeral("M", 1000, number)

window.xTimesI = (number) ->
  numeral = ""
  for i in [1..number]
    numeral += "I"
  numeral

window.wrapNumeral = (numeral, valueOfNumeral, number) ->
  toRoman(valueOfNumeral - number) + numeral + toRoman(number - valueOfNumeral)

