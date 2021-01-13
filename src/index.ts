import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('football.csv');
reader.read();

let manUnitedWinds = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWinds++;
  }
  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWinds++;
  }
}

console.log(`Man United has won ${manUnitedWinds} matches`);
