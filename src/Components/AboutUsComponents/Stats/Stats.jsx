

const Stats = () => {
    return (
            <div className="">
                <div className="mx-auto">
                    <div className="mx-auto">
                        <div className="text-center space-y-4">
                            <h2 className="sm:text-4xl text-3xl font-bold tracking-tight">Our Impact</h2>
                            <p className="text-lg leading-8 max-w-4xl mx-auto ">Discover key insights into Munshi Wholesale&apos;s performance and impact. From years in business to the number of customers served, explore our accomplishments and the scale of our operations.</p>
                        </div>
                        <dl className="mt-12 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col bg-black/5 p-8">
                                <dt className="text-sm font-semibold leading-6">Years in Business</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight">3 +</dd>
                            </div>
                            <div className="flex flex-col bg-black/5 p-8">
                                <dt className="text-sm font-semibold leading-6">Customers Served</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight">10,000 +</dd>
                            </div>
                            <div className="flex flex-col bg-black/5 p-8">
                                <dt className="text-sm font-semibold leading-6">Countries Reached</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight">2</dd>
                            </div>
                            <div className="flex flex-col bg-black/5 p-8">
                                <dt className="text-sm font-semibold leading-6">Products Offered</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight">500 +</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
    );
};

export default Stats;