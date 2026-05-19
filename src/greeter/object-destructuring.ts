/* eslint-disable @typescript-eslint/no-unused-vars */

// Object literal
// let something = { prop: value }
let person = {
	firstName: 'John',
	lastName: 'Paxton',
	city: 'Nutley',
	state: 'NJ',
};

let { lastName, state } = person;

// @ts-expect-error('Demo code')
let { firstName: fName, state: stateOrProvince } = person;

// Equivalent to
// let lastName = person.lastName;
// let state = person.state;

console.log(lastName, state);
