const team = {
  
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 22
          },
          {
            firstName: 'David',
            lastName: 'Smith',
            age: 24
          },
          {
            firstName: 'Alex',
            lastName: 'Sparks',
            age: 26
          }
    ],

    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
          },
          {
            opponent: 'Raiders',
            teamPoints: 25,
            opponentPoints: 47
          },
          {
            opponent: 'Pirates',
            teamPoints: 23,
            opponentPoints: 23
          }
    ],


    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer(firstName, lastName, age) {
        let player = {
        firstName,
        lastName,
        age
        };
        this.players.push(player)
    },

    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent,
            teamPoints,
            opponentPoints
        };
        this.games.push(game)
    },

};

team.addPlayer('Stephanie', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)

console.log(team._players)

team.addGame('Team 1', 12, 23)
team.addGame('Team 2', 32, 43)
team.addGame('Team 3', 22, 23)

console.log(team._games)