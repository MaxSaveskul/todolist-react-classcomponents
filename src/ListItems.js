import React from 'react'
import './ListItems.css'

function ListItems(props) {
	console.log(props.isDone);
	const items = props.items;
	const listItems = items.map(item => {
		return (
			<div onClick={() => props.handleClick()} className={props.isDone ? "list" : "done"}
				key={item.key}>

				<p>{item.text}
					<span onClick={() => props.deleteItem(item.key)}>
						X
					</span></p>

			</div >
		)
	})


	return (
		<div>{listItems}</div>
	)

}

export default ListItems;