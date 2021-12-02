import operate from './operate';

describe('test operate.js', () => {
  test('returns 6 when 3 + 3 is added', () => {
    expect(operate('3', '3', '+')).toBe('6');
  });

  test('returns 4 when 7 is subtracted from 3', () => {
    expect(operate('7', '3', '-')).toBe('4');
  });

  test('returns 2 when 10 is divided by 5', () => {
    expect(operate('10', '5', '÷')).toBe('2');
  });

  test("correctly returns Can't divide by 0 when 50 is divided by 0", () => {
    expect(operate('50', '0', '÷')).toBe("Can't divide by 0.");
  });

  test('returns 8 when 4 is multiplied by 2', () => {
    expect(operate('4', '2', 'x')).toBe('8');
  });

  test('returns correct remainder ', () => {
    expect(operate('10', '6', '%')).toBe('4');
  });
});