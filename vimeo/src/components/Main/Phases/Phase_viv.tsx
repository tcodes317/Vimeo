function Phase_viv(){
    return(
        <>
            <div className="xs:relative xs:mt-24">
                <div className="xs:">
                    <h1 className="xs:mx-4 xs:text-center xs:font-bold xs:text-3xl xs:mb-12">How clever people like you put Vimeo to work</h1>
                    <div className="xs:relative"> {/** slider  */}
                        <div className="xs:inline-flex xs:w-full">
                            <div className="xs:w-full xs:border-2 xs:h-48 bg-black"></div>
                            <div className="xs:w-full xs:border-2 xs:h-48 bg-orange-500"></div>
                            <div className="xs:w-full xs:border-2 xs:h-48 bg-orange-900"></div>
                        </div>
                        <div className="xs:absolute xs:right-0 xs:space-x-4 xs:mt-4">
                            <button className="xs:p-3 xs:px-4 xs:rounded-full xs:bg-black xs:text-white">
                                <i className="fa fa-arrow-left"></i>
                            </button>
                            
                            <button className="xs:p-3 xs:px-4 xs:rounded-full xs:bg-black xs:text-white">
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