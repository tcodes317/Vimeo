function Header(){
    return(
        <>
            <div className="xl:w-9/12 xl:mx-auto">
            <div className="xl:fixed xl:top-0 xl:left-0">
                <div className="xl:flex">
                    <div className="xl:relative">
                        <div className="xl:flex xl:items-center">
                            <button>
                                <span>Vimeo</span>
                            </button>
                            <nav className="xl:flex xl:items-center">
                                <button>
                                    <span>Video platform</span>
                                    <i className="fa fa-angle-down"></i>
                                </button>
                                <button>
                                    <span>Solution</span>
                                    <i className="fa fa-angle-down"></i>
                                </button>
                                <button>
                                    <span>Customer stories</span>
                                    <i className="fa fa-angle-down"></i>
                                </button>
                                <button>
                                    <span>Resources</span>
                                    <i className="fa fa-angle-down"></i>
                                </button>
                                <button>
                                    <span>Watch</span>
                                    <i className="fa fa-angle-down"></i>
                                </button>
                                <button>
                                    <span>Pricing</span>
                                    <i className="fa fa-angle-down"></i>
                                </button>
                            </nav>
                        </div>
                    </div>
                    <div className="xl:flex">
                        <nav>
                            <a href="" hrefLang="">Contact sales</a>
                            <a href="" hrefLang="">Log In</a>
                        </nav>
                        <button>
                            <span>Join</span>
                            <i className="fa fa-arrow-left"></i>
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Header;