describe 'toRoman()', ->
  it 'should convert 1 to I', ->
    expect(toRoman(1)).toEqual("I")
  
  it 'should convert 2 to II', ->
    expect(toRoman(2)).toEqual("II")
  
  it 'should convert 3 to III', ->
    expect(toRoman(3)).toEqual("III")
  
  it 'should convert 4 to IV', ->
    expect(toRoman(4)).toEqual("IV")
  
  it 'should convert 5 to V', ->
    expect(toRoman(5)).toEqual("V")
  
  it 'should convert 6 to VI', ->
    expect(toRoman(6)).toEqual("VI")
  
  it 'should convert 7 to VII', ->
    expect(toRoman(7)).toEqual("VII")
  
  it 'should convert 8 to VIII', ->
    expect(toRoman(8)).toEqual("VIII")
  
  it 'should convert 9 to IX', ->
    expect(toRoman(9)).toEqual("IX")

  it 'should convert 10 to X', ->
    expect(toRoman(10)).toEqual("X")

  it 'should convert 11 to XI', ->
    expect(toRoman(11)).toEqual("XI")

  it 'should convert 12 to XII', ->
    expect(toRoman(12)).toEqual("XII")

  it 'should convert 13 to XIII', ->
    expect(toRoman(13)).toEqual("XIII")

  it 'should convert 14 to XIV', ->
    expect(toRoman(14)).toEqual("XIV")

  it 'should convert 15 to XV', ->
    expect(toRoman(15)).toEqual("XV")

  it 'should convert 16 to XVI', ->
    expect(toRoman(16)).toEqual("XVI")

  it 'should convert 17 to XVII', ->
    expect(toRoman(17)).toEqual("XVII")

  it 'should convert 18 to XVIII', ->
    expect(toRoman(18)).toEqual("XVIII")

  it 'should convert 19 to XIX', ->
    expect(toRoman(19)).toEqual("XIX")

  it 'should convert 20 to XX', ->
    expect(toRoman(20)).toEqual("XX")

  it 'should convert 21 to XXI', ->
    expect(toRoman(21)).toEqual("XXI")

  it 'should convert 25 to XXV', ->
    expect(toRoman(25)).toEqual("XXV")

  it 'should convert 29 to XXIX', ->
    expect(toRoman(29)).toEqual("XXIX")

  it 'should convert 34 to XXIV', ->
    expect(toRoman(34)).toEqual("XXXIV")

  it 'should convert 49 to IL', ->
    expect(toRoman(49)).toEqual("IL")

  it 'should convert 50 to L', ->
    expect(toRoman(50)).toEqual("L")
  
  it 'should convert 58 to LVIII', ->
    expect(toRoman(58)).toEqual("LVIII")
  
  it 'should convert 100 to C', ->
    expect(toRoman(100)).toEqual("C")
  
  it 'should convert 500 to D', ->
    expect(toRoman(500)).toEqual("D")
  
  it 'should convert 1000 to M', ->
    expect(toRoman(1000)).toEqual("M")
