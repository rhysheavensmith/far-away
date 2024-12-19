const PackingList = ({ travelItems, setTravelItems }) => {
	// Function to toggle the checked state of an item
	const toggleChecked = (index) => {
		setTravelItems(
			travelItems.map((item, i) =>
				i === index ? { ...item, checked: !item.checked } : item
			)
		);
	};
	const removeItem = (index) => {
		setTravelItems(travelItems.filter((item, i) => i !== index));
	};
	return (
		<div className='list'>
			<ul>
				{travelItems.map((item, index) => (
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
		</div>
	);
};

export default PackingList;
