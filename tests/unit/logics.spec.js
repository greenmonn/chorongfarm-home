import logics from '../../src/data/logics';

describe('formatPhoneNumber', () => {
  it('returns phoneNumber string with "-"', () => {
    const phoneNumber = '01012345678';
    const formattedPhoneNumber = '010-1234-5678';

    expect(logics.formatPhoneNumber(phoneNumber)).toMatch(formattedPhoneNumber);
    expect(logics.formatPhoneNumber(phoneNumber)).toMatch(formattedPhoneNumber);
  });
});

describe('unformatPhoneNumber', () => {
  it('returns numbers without "-"', () => {
    const phoneNumber = '01012345678';
    const formattedPhoneNumber = '010-1234-5678';

    expect(logics.unformatPhoneNumber(formattedPhoneNumber)).toMatch(phoneNumber);
  });
});
