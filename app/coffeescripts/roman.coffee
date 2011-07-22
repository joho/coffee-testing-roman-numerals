#
# Do roman numerals
#
window.toRoman = (number) ->
  numeral = ""
  
  if number <= 0
    # do nothing (coffeescript ranges are dumb)
  else if number < 4
    for i in [1..number]
      numeral += "I"
  else if number < 5
    numeral = "IV"
  else if number >= 5 && number <= 8
    numeral = "V" + toRoman(number - 5)
  else
    numeral = "IX"

  numeral
