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
    toRoman(5 - number) + "V" + toRoman(number - 5)
  else if number >= 9 && number <= 13
    toRoman(10 - number) + "X" + toRoman(number - 10)
  else if number >= 14 && number <= 48
    "X" + toRoman(number - 10)
  else if number >= 49 and number <= 98
    toRoman(50 - number) + "L" + toRoman(number - 50)
  else if number >= 99 && number <= 498
    toRoman(100 - number) + "C" + toRoman(number - 100)
  else if number >= 499 && number <= 998
    toRoman(500 - number) + "D" + toRoman(number - 500)
  else if number >= 999
    toRoman(1000 - number) + "M" + toRoman(number - 1000)

window.xTimesI = (number) ->
  numeral = ""
  for i in [1..number]
    numeral += "I"
  numeral

