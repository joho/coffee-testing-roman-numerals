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
    return it('should convert 6 to VI', function() {
      return expect(toRoman(5)).toEqual("V");
    });
  });
}).call(this);
