function Phase_vi(){
    return(
        <>
            <div className="xs:relative xs:mt-12 xl:mt-44 xl:mb-24">
                <div>
                    <h1 className="xs:text-center xs:font-bold xs:text-2xl">Moving pictures that move the needle</h1>
                </div>
                <div className="xs:mt-8 xl:mb-8">
                    <h1 className="xs:text-6xl xs:text-center xs:font-bold md:w-8/12 md:mx-auto xl:w-full">Video experience platform</h1>
                </div>

                {/** dropdown  */}

                <div className="xll:grid xll:grid-cols-2">
                <div className="xs:relative xs:mt-12 xs:mx-2 xl:w-8/12 xl:ml-12">
                    <button className="xs:w-full xs:p-5 rounded-2xl xs:bg-slate-500">
                        <div className="xs:font-bold xs:py-3 xs:flex xs:items-center xs:justify-between">
                            <span className="xs:text-xl md:text-2xl">Video marketing</span>
                            <i className="fa fa-plus"></i>
                        </div>
                        <div className="xs:text-left xs:font-bold xs:text-xl">
                            <p>Up the ROI on your video marketing strategy. Create high-performing video that are easy to edit and repurpose for other platforms.</p>
                        </div>
                    </button>
                    <button className="xs:w-full xs:p-5 rounded-2xl xs:bg-slate-500">
                        <div className="xs:font-bold xs:py-3 xs:flex xs:items-center xs:justify-between">
                            <span className="xs:text-xl md:text-2xl">Employee communications</span>
                            <i className="fa fa-plus"></i>
                        </div>
                        <div className="hidden xs:text-left xs:font-bold xs:text-xl">
                            <p>Up the ROI on your video marketing strategy. Create high-performing video that are easy to edit and repurpose for other platforms.</p>
                        </div>
                    </button>
                    
                    <button className="xs:w-full xs:p-5 rounded-2xl xs:bg-slate-500">
                        <div className="xs:font-bold xs:py-3 xs:flex xs:items-center xs:justify-between">
                            <span className="xs:text-xl md:text-2xl">Virtual events</span>
                            <i className="fa fa-plus"></i>
                        </div>
                        <div className="hidden xs:text-left xs:font-bold xs:text-xl">
                            <p>Up the ROI on your video marketing strategy. Create high-performing video that are easy to edit and repurpose for other platforms.</p>
                        </div>
                    </button>
                    
                    <button className="xs:w-full xs:p-5 rounded-2xl xs:bg-slate-500">
                        <div className="xs:font-bold xs:py-3 xs:flex xs:items-center xs:justify-between">
                            <span className="xs:text-xl md:text-2xl">Creative production</span>
                            <i className="fa fa-plus"></i>
                        </div>
                        <div className="hidden xs:text-left xs:font-bold xs:text-xl">
                            <p>Up the ROI on your video marketing strategy. Create high-performing video that are easy to edit and repurpose for other platforms.</p>
                        </div>
                    </button>
                </div>
                <div className="xll:mx-14 xll:relative xll:top-10 xll:shadow-2xl xll:shadow-white xll:rounded-3xl xs:hidden xl:block">
                    <img src="https://i.vimeocdn.com/custom_asset/83f9790fe2c178ec39d0095564a0f706" alt="" className="xll:rounded-3xl"/>
                </div>
                </div>

                
            </div>
        </>
    )
}
export default Phase_vi;