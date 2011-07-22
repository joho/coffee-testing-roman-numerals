#
# Do roman numerals
#
window.toRoman = (number) ->
  if number <= 0
    # do nothing (coffeescript ranges are dumb)
    ""
  else if number < 4
    xTimesI(number)
  else if number >= 4 && number <= 8
    toRoman(5 - number) + "V" + toRoman(number - 5)
  else
    "IX"

window.xTimesI = (number) ->
  numeral = ""
  for i in [1..number]
    numeral += "I"
  numeral

