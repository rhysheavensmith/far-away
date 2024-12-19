import { useRef, forwardRef, useImperativeHandle } from 'react';

const Form = forwardRef(({ onAddItem }, parentRef) => {
	// Create individual refs for each input
	const itemNameRef = useRef();
	const itemQuantityRef = useRef();
	// Combine refs using useImperativeHandle
	useImperativeHandle(parentRef, () => ({
		itemName: () => itemNameRef.current,
		itemQuantity: () => itemQuantityRef.current,
	}));

	const handleAddItem = (event) => {
		event.preventDefault(); // Prevent form submission
		onAddItem();
	};

	return (
		<form className='add-form' onSubmit={(e) => handleAddItem(e)}>
			<h3>What do you need for your trip?</h3>
			<select ref={itemQuantityRef}>
				{Array.from({ length: 10 }, (_, i) => (
					<option key={i} value={i + 1}>
						{i + 1}
					</option>
				))}
			</select>
			{/* <input type='number' placeholder='amount' ref={itemQuantityRef} /> */}
			<input type='text' placeholder='Enter an item' ref={itemNameRef} />
			<button>Add</button>
		</form>
	);
});

Form.displayName = 'Form';

export default Form;
