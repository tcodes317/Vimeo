function Phase_ii(){
    return(
        <>
            <div className="xll:mx-12 xs:mt-8 md:mt-28 xs:mx-4 md:relative md:mb-24">
                <video id="vidmate" className="relative z-[1] inline md:rounded-4xl  w-full h-full object-center object-cover rounded-2xl md:rounded-4xl" preload="metadata" data-src="https://player.vimeo.com/progressive_redirect/playback/844715170/rendition/360p/file.mp4?loc=external&amp;signature=dc53d02bb919cc3f758c0b75bd454fcdc9a32c17757eac4b5c8131ed32e80674" muted="" loop="" playsinline="" autoplay="" poster="" aria-hidden="false" src="https://player.vimeo.com/progressive_redirect/playback/840627949/rendition/1080p/file.mp4?loc=external&amp;signature=df9cfec6465233ea6f14bd85906ac7412e35a0a00e65cdb6823b45d2b2cf5607"></video>
                <div className="md:absolute hidden md:block top-12 left-8 z-10">
                    <h1 className="md:text-8xl md:font-bold md:w-3/12">Video Simplified</h1>
                    <p className="md:text-2xl md:mt-8 md:w-5/12">Everything you need to make, manage, and share brilliant videos.</p>
                </div>
                <div className="xs:mt-4 md:mt-0 xs:relative md:absolute md:bottom-5 md:z-20 md:grid md:grid-cols-3">
                    <button className="xs:p-3 xs:flex xs:bg-slate-600 md:relative md:left-20 md:w-9/12 xs:items-center xs:justify-between xs:w-full xs:rounded-xl xs:border-2">
                        <span className="xs:font-bold md:text-xl">See plans</span>
                        <i className="fa fa-arrow-right xs:px-4 xs:bg-white xs:py-1 rounded-md"></i>
                    </button>
                    
                    <button className="xs:p-3 xs:flex xs:bg-slate-600 md:ml-10 xs:mt-3 md:relative xs:items-center xs:justify-between xs:w-48 xs:rounded-xl xs:border-2">
                        <span className="xs:font-bold">Join for free</span>
                        <i className="fa fa-arrow-right xs:px-4 xs:bg-white xs:py-1 rounded-md"></i>
                    </button>

                    <div className="xs:mt-8 xs:bg-slate-800 xs:text-white xs:p-4 xs:rounded-xl md:mt-0">
                        <p className="xs:font-bold xs:w-8/12 md:w-full">287 million creatives, entrepreneurs, and businesses trust vimeo</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Phase_ii;