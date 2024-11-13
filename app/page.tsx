export default async function Home() {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
	const data = await response.json();

	return (
		<div className='h-screen bg-slate-200 px-36 text-blue-700 flex flex-col gap-4 justify-center items-center text-2xl'>
			{data.map((items) => (
				<div
					key={items.id}
					className='w-full bg-blue-500 text-white flex  justify-center items-center text-2xl mt-20 p-10'>
					{items.title}
				</div>
			))}
		</div>
	);
}
