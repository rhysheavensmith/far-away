import { useState } from 'react';

const PackingList = ({ travelItems, setTravelItems }) => {
	// state for sorting the list
	const [sort, setSort] = useState('all');
	// Function to toggle the checked state of an item
	const toggleChecked = (index) => {
		setTravelItems(
			travelItems.map((item, i) =>
				i === index ? { ...item, checked: !item.checked } : item
			)
		);
	};
	// Function to remove an item from the list
	const removeItem = (index) => {
		setTravelItems(travelItems.filter((_, i) => i !== index));
	};

	const clearList = () => {
		setTravelItems([]);
	};

	// Filter the items based on the sort state
	let sortedItems;

	if (sort === 'all') {
		sortedItems = travelItems;
	} else if (sort === 'packed') {
		sortedItems = travelItems.filter((item) => item.checked);
	} else if (sort === 'unpacked') {
		sortedItems = travelItems.filter((item) => !item.checked);
	}

	return (
		<div className='list'>
			<ul>
				{sortedItems.map((item, index) => (
					<li key={index}>
						<input
							type='checkbox'
							checked={item.checked}
							onChange={() => toggleChecked(index)}
						/>
						<div className={`item-div ${item.checked ? 'checked' : ''}`}>
							<p>{item.quantity}</p>
							<p>{item.name}</p>
						</div>

						<span>
							<button onClick={() => removeItem(index)}>
								<span>❌</span>
							</button>
						</span>
					</li>
				))}
			</ul>
			<div className='actions' onChange={(e) => setSort(e.target.value)}>
				<select value={sort}>
					<option value='all'>All</option>
					<option value='packed'>Packed</option>
					<option value='unpacked'>Not Packed</option>
				</select>
				<button onClick={clearList}>Clear List</button>
			</div>
		</div>
	);
};

export default PackingList;
