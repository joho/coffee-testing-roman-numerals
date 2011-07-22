#
# Do roman numerals
#
window.toRoman = (number) ->
  numeral = ""

  if number < 4
    for i in [1..number]
      numeral += "I"
  else if number < 5
    numeral = "IV"
  else if number < 6
    numeral = "V"
  else if number < 7
    numeral = "VI"
  else if number < 8
    numeral = "VII"
  else
    numeral = "VIII"

  numeral
