const Steps = () => {
	return (
		<div className='w-4/5 mx-auto py-6 flex flex-col md:flex-col lg:flex-col items-center justify-center'>
			<div>
				<h3 className='text-shade9 text-xl text-center'>Why Choose Us?</h3>
				<h2 className='text-3xl text-center font-bold'>
					How it works on <span className='text-shade9'>Whole Insurance</span>
				</h2>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-6 text-center gap-4'>
				<div className='col-span-1 md:col-span-1 lg:col-span-1 px-4 py-6 shadow-lg'>
					<h4 className='font-bold text-xl text-shade9'> # 1</h4>
					<p className='font-bold text-xl'> Transparent Pricing</p>
					<p className=' my-4'>
						You can trust us to provide clear and honest information about our term
						insurance policies, including premiums, coverage limits, and benefits.
					</p>
				</div>
				<div className='px-4 py-6 shadow-lg'>
					<h4 className='font-bold text-xl text-shade9'># 2</h4>
					<p className='font-bold text-xl'> Easy Application Process</p>
					<p className=' my-4'>
						Applying for term insurance with us is quick and hassle-free.
					</p>
				</div>
				<div className='col-span-1 md:col-span-1 lg:col-span-1 px-4 py-6 shadow-lg'>
					<h4 className='font-bold text-xl text-shade9'># 3</h4>
					<p className='font-bold text-xl'> Cash Value Accumulation</p>
					<p className=' my-4'>
						Part of your premium payments goes toward building cash value, which grows
						on a tax-deferred basis. You can access this cash value through policy loans
						or withdrawals.
					</p>
				</div>
				<div className='px-4 py-6 shadow-lg'>
					<h4 className='font-bold text-xl text-shade9'># 4</h4>
					<p className='font-bold text-xl'> Guaranteed Premiums</p>
					<p className=' my-4'>
						With whole life insurance, your premiums remain fixed for the life of the
						policy. This provides predictability and stability.
					</p>
				</div>
			</div>
			<div className='mx-auto my-10'>
				<button className='bg-shade10 text-white px-8 py-3 rounded-md hover:bg-shade8'>
					<a href='/services'>GET STARTED</a>
				</button>
			</div>
		</div>
	);
};

export default Steps;
