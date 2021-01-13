import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', { encoding: 'utf-8' })
  .split('\n')
  .map((row: string): string[] => row.split(','));

enum MatchResults {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manUnitedWinds = 0;
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
    manUnitedWinds++;
  }
  if (match[2] === 'Man United' && match[5] === MatchResults.AwayWin) {
    manUnitedWinds++;
  }
}

console.log(`Man United has won ${manUnitedWinds} matches`);
