import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

enum MatchResults {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manUnitedWinds = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
    manUnitedWinds++;
  }
  if (match[2] === 'Man United' && match[5] === MatchResults.AwayWin) {
    manUnitedWinds++;
  }
}

console.log(`Man United has won ${manUnitedWinds} matches`);
