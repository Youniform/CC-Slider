import React from 'react';
import Grid from './Grid';
import Tile from './Tile';

class Game extends React.Component {
	constructor(props) {
		super(props);
		Game.instance = this;
	}

	render() {
		return(
			<div className="game">
				<Grid></Grid>
			</div>
			);
	}

	checkVictory()
	{
		for (const tile of Tile.instances) {
			if (tile.state.x !== tile.props.destination.x || tile.state.y !== tile.props.destination.y)
			{
				return true;
			}
		}
		alert("HIRE ME 801-419-8301");
	}
}

export default Game;