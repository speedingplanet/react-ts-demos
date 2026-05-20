import React from 'react';
import type { Country, GridColumn } from '../../demo-types';

function GridBodyRow({ columns, country }: { columns: GridColumn<Country>[]; country: Country }) {
	return (
		<>
			{columns.map((column) => (
				<div key={column.field}>{country[column.field]}</div>
			))}
		</>
	);
}

export default GridBodyRow;
