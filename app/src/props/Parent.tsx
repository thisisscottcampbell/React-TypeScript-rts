import React from 'react';
import { Child } from './Child';

const Parent = () => {
	<Child color="red" onClick={() => console.log('clicked')} />;
};

export default Parent;
