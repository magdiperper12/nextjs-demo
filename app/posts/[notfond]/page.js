import Link from 'next/link';
import React from 'react';

function Errorpage() {
	return (
		<div className='h-screen bg-red-50 text-white flex justify-center items-center text-5xl'>
			<div className='block bg-red-500 px-36 text-white m-10 p-5 rounded-lg cursor-pointer'>
				404 | This page could not be found.
			</div>
		</div>
	);
}

export default Errorpage;
