import React from 'react';

export const metadata = {
	title: 'article',
};
async function Page() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts/', {
		cache: 'no-store', //becuas when every time open this page make reload on it and render all data
		// rerender every 1 minute  => next: { revalidate: 60 }
	});
	const data = await response.json();
	return (
		<div className=' bg-yellow-50 px-44 text-white  justify-center items-center text-2xl'>
			{data.map((items) => (
				<div
					className='w-full bg-blue-500 text-white flex  justify-center items-center text-2xl my-20 p-10'
					key={items.is}>
					{items.title} <div>_</div>
				</div>
			))}
		</div>
	);
}

export default Page;
