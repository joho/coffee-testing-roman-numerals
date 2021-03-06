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
    it('should convert 14 to XIV', function() {
      return expect(toRoman(14)).toEqual("XIV");
    });
    it('should convert 15 to XV', function() {
      return expect(toRoman(15)).toEqual("XV");
    });
    it('should convert 16 to XVI', function() {
      return expect(toRoman(16)).toEqual("XVI");
    });
    it('should convert 17 to XVII', function() {
      return expect(toRoman(17)).toEqual("XVII");
    });
    it('should convert 18 to XVIII', function() {
      return expect(toRoman(18)).toEqual("XVIII");
    });
    it('should convert 19 to XIX', function() {
      return expect(toRoman(19)).toEqual("XIX");
    });
    it('should convert 20 to XX', function() {
      return expect(toRoman(20)).toEqual("XX");
    });
    it('should convert 21 to XXI', function() {
      return expect(toRoman(21)).toEqual("XXI");
    });
    it('should convert 25 to XXV', function() {
      return expect(toRoman(25)).toEqual("XXV");
    });
    it('should convert 29 to XXIX', function() {
      return expect(toRoman(29)).toEqual("XXIX");
    });
    it('should convert 34 to XXIV', function() {
      return expect(toRoman(34)).toEqual("XXXIV");
    });
    it('should convert 49 to IL', function() {
      return expect(toRoman(49)).toEqual("IL");
    });
    it('should convert 50 to L', function() {
      return expect(toRoman(50)).toEqual("L");
    });
    it('should convert 58 to LVIII', function() {
      return expect(toRoman(58)).toEqual("LVIII");
    });
    it('should convert 100 to C', function() {
      return expect(toRoman(100)).toEqual("C");
    });
    it('should convert 500 to D', function() {
      return expect(toRoman(500)).toEqual("D");
    });
    return it('should convert 1000 to M', function() {
      return expect(toRoman(1000)).toEqual("M");
    });
  });
}).call(this);
