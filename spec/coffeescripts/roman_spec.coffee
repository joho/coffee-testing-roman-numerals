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
