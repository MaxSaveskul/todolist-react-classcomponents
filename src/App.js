import React from 'react';
import './App.css'
import ListItems from './ListItems.js'



class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			currentItem: {
				text: '',
				key: ''
			},
			isDone: true
		}

		this.handleInput = this.handleInput.bind(this);
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(state => ({
			isDone: !state.isDone
		}));
	}

	handleInput(e) {
		this.setState({
			currentItem: {
				text: e.target.value,
				key: Date.now()
			}
		})
	}

	addItem(e) {
		e.preventDefault();
		const newItem = this.state.currentItem;
		console.log(newItem);
		if (newItem.text !== "") {
			const newItems = [...this.state.items, newItem];
			this.setState({
				items: newItems,
				currentItem: {
					text: '',
					key: '',
				}
			})
		}
	}

	deleteItem(key) {
		const filteredItems = this.state.items.filter(item => item.key !== key);
		this.setState({
			items: filteredItems
		})
	}

	render() {
		console.log(this.state.isDone);
		return (
			<div className="App">
				<header>
					<form id="to-do-form" onSubmit={this.addItem}>
						<input type="text" placeholder="Enter Text"
							value={this.state.currentItem.text}
							onChange={this.handleInput} />
						<button type="submit">Add</button>
					</form>
				</header>
				<ListItems items={this.state.items} deleteItem={this.deleteItem} isDone={this.state.isDone} handleClick={this.handleClick} />
			</div>
		);
	}
}

export default App;
