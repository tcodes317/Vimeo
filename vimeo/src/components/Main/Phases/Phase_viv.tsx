function Phase_viv(){
    return(
        <>
            <div className="xs:relative xs:mt-24 xl:pb-24">
                <div className="xl:border-2 xl:border-transparent">
                    <h1 className="xs:mx-4 xl:mt-24 xs:text-center xs:font-bold xs:text-3xl xs:mb-12 md:text-5xl xl:text-8xl lgg:text-6xl mdd:text-4xl">How clever people like you put Vimeo to work</h1>
                    <div className="xs:relative xl:w-11/12 xl:mx-auto"> {/** slider  */}
                        <div className="xs:inline-flex xs:w-full">
                            <div id="uuu" className="xs:w-full xs:border-2 xs:h-48 xl:h-96"></div>
                        </div>
                        <div className="xs:absolute xs:right-0 xs:space-x-4 xs:mt-4">
                            <button className="xs:p-3 xs:px-4 xs:rounded-full xs:bg-black xs:text-white border-2 border-white">
                                <i className="fa fa-arrow-left"></i>
                            </button>
                            
                            <button className="xs:p-3 xs:px-4 xs:rounded-full xs:bg-black xs:text-white border-2 border-white">
                                <i className="fa fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Phase_viv;