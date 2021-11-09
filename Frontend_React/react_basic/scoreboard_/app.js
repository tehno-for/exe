const Header = (p) => {
  return (
  <header>
    <h1>{ p.title }</h1>
    <span className="stats">Player: { p.totalPlayers }</span>

  </header>
  );
}

const Player = (p) => {
  return (
    <div className="player">
      <span className = "player-name">
      { p.name }
      </span>
      <Counter />

    </div>
  );
}


class Counter extends React.Component {

  state = {
        score: 0
      }

  //Two version of the same code
  incrementScore = () => {
    this.setState(previousState => {
    return {
      score: previousState.score + 1
     };
    });
  }

  decrementScore() {
    this.setState(pS => ({
      score: pS.score - 1
    }));
  }

  render () {
      return (
      <div className = "counter">
        <button className = "counter-action decrement" onClick={()=>{this.decrementScore()}}> - </button>
        <span className = "counter-score">{ this.state.score }</span>
        <button className = "counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }

}

class App extends React.Component {
  state = {
    players:
    [
    {
      name: "Guil",
      id:1
    },
    {
      name: "Treasure",
      id:2
    },
    {
      name: "Ashley",
      id:3
    },
    {
      name: "James",
      id:4
    }]
      }
  render (){
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard from ttl"
          totalPlayers={this.state.players.length}

         />
        {/*Players list*/}
        { this.state.players.map(player =>
          <Player
            name={player.name}
            key={player.id.toString()}
          />
        )

        }
      </div>
    );
  }



}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
