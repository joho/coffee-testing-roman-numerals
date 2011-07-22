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
    expect(toRoman(5)).toEqual("V")
