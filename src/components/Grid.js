import Tile from './Tile';
import React from 'react';

class Grid extends React.Component {
	constructor(props) {
		super(props);
		Grid.instance = this;

		this.cells = [
			{ x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: 2, y: 0 },
			{ x: 3, y: 0 },

			{ x: 0, y: 1 },
			{ x: 1, y: 1 },
			{ x: 2, y: 1 },
			{ x: 3, y: 1 },

			{ x: 0, y: 2 },
			{ x: 1, y: 2 },
			{ x: 2, y: 2 },
			{ x: 3, y: 2 },

			{ x: 0, y: 3 },
			{ x: 1, y: 3 },
			{ x: 2, y: 3 },
			{ x: 3, y: 3 }
		];
		this.state = {	}
	}

	render() {
		const tiles = [];
		for (let [index,cell] of this.cells.entries()) {
			if (index === this.cells.length - 1) break;
			tiles.push(<Tile key={index} display={index} destination={cell} />);
		}


		return(
			<div>
				<div className="grid">
					{tiles}
				</div>
			</div>
			);
	}

	componentDidMount()
	{

		let cells = this.cells.slice();
		for (let tile of Tile.instances) {
				const cellIndex = Math.floor(Math.random() * cells.length);
				tile.setState(cells.splice(cellIndex, 1)[0]);
			}
	}
}

export default Grid;