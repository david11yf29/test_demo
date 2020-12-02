export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedletterSet = new Set(guessedWord.split(''));
  return [...secretLetterSet].filter(letter => guessedletterSet.has(letter)).length;
}