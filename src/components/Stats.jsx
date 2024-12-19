const Stats = ({ totalItems, packedItems, packedPercentage }) => {
	return (
		<footer className='stats'>
			<em>
				You have {totalItems} items on your list, and you have packed{' '}
				{packedPercentage}% of your list ({packedItems}/{totalItems} packed).
			</em>
		</footer>
	);
};

export default Stats;
