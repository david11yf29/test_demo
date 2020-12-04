import { combineReducers } from 'redux';
import success from './successReducer';
import guessedWords from './guessedWordsReducer';

export default combineReducers({
  success: success,
  guessedWords: guessedWords
});