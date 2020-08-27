import React from 'react';
import Game from './Game' ;


class Tile extends React.Component {
	constructor(props) {
		super(props);
		Tile.instances.push(this);
		this.props = props;
		this.destination = props.destination;
		this.state = {
			x: 0,
			y: 0
		}

	}

	render(){
		const width = `${Tile.size}px`;
		const height = `${Tile.size}px`;
		const top = `${this.state.y * Tile.size}px`;
		const left = `${this.state.x * Tile.size}px`;
		const backgroundImage = `url('img/${this.props.destination.x}_${this.props.destination.y}.png')`;
		return(
			<div className='tile'
				style={{ width, height, top, left, backgroundImage }}
				onClick={() => this.slide()  }
			>
			<p style={{color:"yellow"}}>{this.props.destination.x}</p>
			<p style={{color:"aqua"}}>{this.props.destination.y}</p> 
			</div>
			);
	}

	slide() {
		console.log(this.emptyNeighbor);
		switch (this.emptyNeighbor) {
			case 'top':
				this.setState({ y: this.state.y - 1 });
				break;
			case "left": 
				this.setState({ x: this.state.x -1 });
				break;
			case 'bottom': 
				this.setState({ y: this.state.y + 1 });
				break;
			case "right": 
				this.setState({ x: this.state.x + 1 });
				break;
			default:
				break;
		}

	}

	componentDidUpdate()
	{
		Game.instance.checkVictory();
	}
	get neighbors()
	{
		let top = Tile.get(this.state.x, this.state.y -1);
		let left = Tile.get(this.state.x - 1, this.state.y);
		let bottom = Tile.get(this.state.x, this.state.y+1);
		let right = Tile.get(this.state.x+1, this.state.y);

		if (this.state.y === 0 ) top = undefined;
		if (this.state.x === 0 ) left = undefined;
		if (this.state.y === 3 ) bottom = undefined;
		if (this.state.x === 3 ) right = undefined;
		return { top, left, bottom, right};

	}
	get emptyNeighbor()
	{
		if (this.neighbors.top === null) return 'top';
		if (this.neighbors.left === null) return 'left';
		if (this.neighbors.bottom === null) return 'bottom';
		if (this.neighbors.right === null) return 'right';
		return null;
	}
}


Tile.get = (x,y) => {
	for (const tile of Tile.instances) {
		if (tile.state.x === x && tile.state.y === y) {
			return tile; 
		}
	}
	return null;
};

Tile.instances = [];
Tile.size = 100;

export default Tile;



