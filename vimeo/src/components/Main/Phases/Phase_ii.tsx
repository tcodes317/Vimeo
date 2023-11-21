function Phase_ii(){
    return(
        <>
            <div className="xs:mt-4 xs:mx-4">
                <video className="xs:bg-orange-500 relative z-[1] inline md:rounded-4xl  w-full h-full object-center object-cover rounded-2xl md:rounded-4xl" preload="metadata" data-src="https://player.vimeo.com/progressive_redirect/playback/844715170/rendition/360p/file.mp4?loc=external&amp;signature=dc53d02bb919cc3f758c0b75bd454fcdc9a32c17757eac4b5c8131ed32e80674" muted="" loop="" playsinline="" autoplay="" poster="" aria-hidden="false" src="https://player.vimeo.com/progressive_redirect/playback/840627949/rendition/1080p/file.mp4?loc=external&amp;signature=df9cfec6465233ea6f14bd85906ac7412e35a0a00e65cdb6823b45d2b2cf5607"></video>
                <div className="xs:mt-4 xs:relative">
                    <button className="xs:p-3 xs:flex xs:bg-slate-600 xs:items-center xs:justify-between xs:w-72 xs:rounded-xl xs:border-2">
                        <span className="xs:font-bold">See plans</span>
                        <i className="fa fa-arrow-right xs:px-4 xs:bg-white xs:py-1 rounded-md"></i>
                    </button>
                    
                    <button className="xs:p-3 xs:flex xs:bg-slate-600 xs:items-center xs:justify-between xs:w-48 xs:rounded-xl xs:border-2">
                        <span className="xs:font-bold">Join for free</span>
                        <i className="fa fa-arrow-right xs:px-4 xs:bg-white xs:py-1 rounded-md"></i>
                    </button>

                    <div className="xs:mt-8 xs:bg-slate-800 xs:text-white xs:p-4 xs:rounded-xl">
                        <p className="xs:font-bold xs:w-8/12">287 million creatives, entrepreneurs, and businesses trust vimeo</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Phase_ii;