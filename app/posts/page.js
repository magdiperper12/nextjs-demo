import Link from 'next/link';
import React from 'react';

function Postpage() {
	return (
		<div className='h-screen bg-red-500 text-white flex justify-center items-center text-5xl'>
			this is post page
			<Link
				href='/posts/articl'
				className='block bg-yellow-500 text-white m-10 p-5 rounded-lg cursor-pointer'>
				article-page
			</Link>
		</div>
	);
}

export default Postpage;
