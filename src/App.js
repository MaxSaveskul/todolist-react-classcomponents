import React from 'react';
import './App.css'
import ListItems from './ListItems.js'



class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			inputText: ""
		}

		this.handleInput = this.handleInput.bind(this);
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(item) {
		const newItems = this.state.items.map(el => {
			if (item.key === el.key) {
				el.isDone = !el.isDone
			}
			return el;
		});
		this.setState({
			items: [...newItems]
		});
	}

	handleInput(e) {
		this.setState({
			inputText: e.target.value
		});
	}

	addItem(e) {
		e.preventDefault();
		if (this.state.inputText !== "") {
			const newItems = [
				...this.state.items,
				{
					text: this.state.inputText,
					key: Date.now(),
					isDone: false
				}
			];
			this.setState({
				items: newItems,
				inputText: ""
			});
		}
	}

	deleteItem(e, key) {
		e.stopPropagation();
		const filteredItems = this.state.items.filter(item => item.key !== key);
		this.setState({
			items: filteredItems
		});
	}

	render() {
		return (
			<div className="App">
				<header>
					<form id="to-do-form" onSubmit={this.addItem}>
						<input type="text" placeholder="Enter Text"
							value={this.state.inputText}
							onChange={this.handleInput} />
						<button type="submit">Add</button>
					</form>
				</header>
				<ListItems items={this.state.items} deleteItem={this.deleteItem} handleClick={this.handleClick} />
			</div>
		);
	}
}

export default App;
