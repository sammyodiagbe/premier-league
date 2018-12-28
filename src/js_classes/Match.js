class Match {
  constructor(home, away) {
    this.home = home;
    this.away = away;
    this.played = false;
    this.matchScore = { home: 0, away: 0 };
    this.matchTime = 0;
  }

  playMatch() {
    const { matchScore } = this;
    const probability = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
    const scoringProbability = [1, 0, 1, 0, 1, 0, 0, 0, 1, 0];
    const teamToPlay =
      probability[Math.floor(Math.random() * probability.length)];
    if (teamToPlay === 1) {
      const scoreGoal =
        scoringProbability[
          Math.floor(Math.random() * scoringProbability.length)
        ];
      if (scoreGoal === 1) {
        matchScore.home += 1;
      }
    } else {
      const scoreGoal =
        scoringProbability[
          Math.floor(Math.random() * scoringProbability.length)
        ];
      if (scoreGoal === 1) {
        matchScore.away += 1;
      }
    }
  }
}

export default Match;
