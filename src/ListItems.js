import React from 'react'
import './ListItems.css'

function ListItems(props) {
	const items = props.items;
	const listItems = items.map(item => {
		return (
			<div onClick={() => props.handleClick(item)} className={item.isDone ? "done" : "list"}
				key={item.key}>

				<p>
					{item.text}
					<span onClick={(e) => props.deleteItem(e, item.key)}>
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