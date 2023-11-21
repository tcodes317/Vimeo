function Phases_vii(){
    return(
        <>
            <div className="xs:relative xl:mt-42 border-2 xl:border-transparent">
                <div className="xs:my-8 xs:mt-24 md:mb-24">
                    <h1 className="xs:text-center xs:font-bold xs:text-3xl md:text-5xl md:w-5/12 md:mx-auto xl:text-5xl xl:w-full">The latest from vimeo</h1>
                </div>
                <div className="xs:px-4 space-y-4 mdd:mx-4">
                    <div className="md:grid md:grid-cols-2 md:gap-6 xl:grid-cols-3">
                    <div className="xs:flex xs:flex-col xs:bg-slate-600 xs:rounded-xl"> {/** return flex to grid */}
                        <img src="https://i.vimeocdn.com/custom_asset/c8004cc4e3c6c091f70f2cfc6065a17a" className="xs:w-full xs:rounded-2xl" alt="Michael" />
                        <div className="xs:ml-8">
                            <button className="xs:mt-6 xs:mb-4 xs:bg-slate-700 xs:px-4 xs:py-3 xs:rounded-xl xs:font-bold xs:text-white">Events</button>
                            <h1 className="xs:text-4xl xs:w-8/12 xs:font-bold xs:mb-8">Outside the Frame</h1>
                            <button className="xs:mb-12 xs:bg-black xs:text-white xs:p-4 xs:w-8/12 xs:flex xs:items-center xs:rounded-xl">
                                <span className="xs:font-bold">Watch now</span>
                                <i className="fa fa-arrow-right xs:px-5 xs:bg-slate-600 xs:py-1.5 xs:ml-4 xs:rounded-lg"></i>
                            </button>
                        </div>
                    </div>

                    <div className="xs:flex xs:flex-col xs:bg-slate-600 xs:rounded-xl"> {/** return flex to grid */}
                        <img src="https://i.vimeocdn.com/custom_asset/e081afef906015f6985199061d3a22e6" className="xs:w-full xs:rounded-2xl" alt="Michael" />
                        <div className="xs:ml-8">
                            <button className="xs:mt-12 xs:mb-4 xs:bg-slate-700 xs:px-4 xs:py-3 xs:rounded-xl xs:font-bold xs:text-white">New features</button>
                            <h1 className="xs:text-4xl xs:font-bold xs:mb-8 xs:w-full">AI video editing</h1>
                            <button className="xs:mb-12 xs:bg-black xs:text-white xs:p-4 xs:w-8/12 xs:flex xs:items-center xs:rounded-xl">
                                <span className="xs:font-bold">Learn more</span>
                                <i className="fa fa-arrow-right xs:px-5 xs:bg-slate-600 xs:py-1.5 xs:ml-4 xs:rounded-lg"></i>
                            </button>
                        </div>
                    </div>

                    
                    <div className="xs:flex xs:flex-col xs:bg-slate-600 xs:rounded-xl"> {/** return flex to grid */}
                        <img src="https://i.vimeocdn.com/custom_asset/0eaa2ca81310a61fb49a7dbf1d9729ce" className="xs:w-full xs:rounded-2xl" alt="Michael" />
                        <div className="xs:ml-8">
                            <button className="xs:mt-12 xs:mb-4 xs:bg-slate-700 xs:px-4 xs:py-3 xs:rounded-xl xs:font-bold xs:text-white">Webinars</button>
                            <h1 className="xs:text-4xl xs:w-8/12 xs:font-bold xs:mb-8">Weekly live demo</h1>
                            <button className="xs:mb-12 xs:bg-black xs:text-white xs:p-4 xs:w-8/12 xs:flex xs:items-center xs:rounded-xl">
                                <span className="xs:font-bold">Register</span>
                                <i className="fa fa-arrow-right xs:px-5 xs:bg-slate-600 xs:py-1.5 xs:ml-8 xs:rounded-lg"></i>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}   
export default Phases_vii;