import { useState, useRef } from 'react';

import Form from './components/Form';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

const App = () => {
	// add state and ref for travel items
	const [travelItems, setTravelItems] = useState([]);
	// combined refs using useImperativeHandle
	const formRefs = useRef();
	// function to add items to the list
	const addItem = () => {
		// ensure both fileds are filled
		if (
			formRefs.current.itemName().value &&
			formRefs.current.itemQuantity().value
		) {
			// add the item to the list
			setTravelItems([
				...travelItems,
				{
					name: formRefs.current.itemName().value,
					quantity: formRefs.current.itemQuantity().value,
					checked: false,
				},
			]);
			// clear the input fields
			formRefs.current.itemName().value = '';
			formRefs.current.itemQuantity().value = '';
		}
	};

	// Calculate stats for the footer
	const totalItems = travelItems.length;
	const packedItems = travelItems.filter((item) => item.checked).length;
	const packedPercentage =
		totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;

	return (
		<div className='app'>
			<Logo />
			<Form onAddItem={addItem} ref={formRefs} />
			<PackingList travelItems={travelItems} setTravelItems={setTravelItems} />
			<Stats
				totalItems={totalItems}
				packedItems={packedItems}
				packedPercentage={packedPercentage}
			/>
		</div>
	);
};

export default App;
