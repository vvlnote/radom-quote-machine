import React from 'react';

const Button = function ({buttonDisplayName, clickHandler}) {
	return(
	<button id="new-quote" onClick={clickHandler}>{buttonDisplayName}</button>
	);
};

export default Button;