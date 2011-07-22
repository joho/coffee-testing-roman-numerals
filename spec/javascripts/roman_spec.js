(function() {
  describe('toRoman()', function() {
    it('should convert 1 to I', function() {
      return expect(toRoman(1)).toEqual("I");
    });
    it('should convert 2 to II', function() {
      return expect(toRoman(2)).toEqual("II");
    });
    it('should convert 3 to III', function() {
      return expect(toRoman(3)).toEqual("III");
    });
    it('should convert 4 to IV', function() {
      return expect(toRoman(4)).toEqual("IV");
    });
    it('should convert 5 to V', function() {
      return expect(toRoman(5)).toEqual("V");
    });
    it('should convert 6 to VI', function() {
      return expect(toRoman(6)).toEqual("VI");
    });
    it('should convert 7 to VII', function() {
      return expect(toRoman(7)).toEqual("VII");
    });
    it('should convert 8 to VIII', function() {
      return expect(toRoman(8)).toEqual("VIII");
    });
    it('should convert 9 to IX', function() {
      return expect(toRoman(9)).toEqual("IX");
    });
    it('should convert 10 to X', function() {
      return expect(toRoman(10)).toEqual("X");
    });
    it('should convert 11 to XI', function() {
      return expect(toRoman(11)).toEqual("XI");
    });
    it('should convert 12 to XII', function() {
      return expect(toRoman(12)).toEqual("XII");
    });
    it('should convert 13 to XIII', function() {
      return expect(toRoman(13)).toEqual("XIII");
    });
    return it('should convert 14 to XIV', function() {
      return expect(toRoman(14)).toEqual("XIV");
    });
  });
}).call(this);
