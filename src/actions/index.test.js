import { correctGuess } from './index';

describe('correctGuess', () => {
  test('returns an actions with type "CORRECT_GUESS"', () => {
    const action = correctGuess();
    expect(action).toEqual({});
  })
});