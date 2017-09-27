import { encode, decode } from '../htmlEntities';

describe('utils/htmlEntities', () => {
  describe('encode', () => {
    it('should return correctly encode string', () => {
      const input = '¥¦§¨©ª«¬®¯°';
      const expected = '&yen;&brvbar;&sect;&uml;&copy;&ordf;&laquo;&not;&reg;&macr;&deg;';

      expect(encode(input)).toEqual(expected);
    });
  });

  describe('decode', () => {
    it('should return correctly decoded string', () => {
      const input = '&yen;&brvbar;&sect;&uml;&copy;&ordf;&laquo;&not;&reg;&macr;&deg;';
      const expected = '¥¦§¨©ª«¬®¯°';

      expect(decode(input)).toEqual(expected);
    });
  });
});
