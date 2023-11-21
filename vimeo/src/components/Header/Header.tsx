function Header(){
    return(
        <>
            <div className="xs:fixed xs:z-20 xs:top-0 xs:p-2 bg-transparent xs:w-full">
                <div className="xs:flex xs:items-center xs:justify-between">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="98" height="52" viewBox="0 0 98 52" fill="none"><rect width="98" height="52" rx="12" fill="#17D5FF"></rect><g clip-path="url(#clip0_7375_9076)"><path d="M27.2305 22.0144C27.1551 23.6479 26.0092 25.8843 23.7915 28.7236C21.4996 31.6886 19.5599 33.1711 17.9737 33.1711C16.9911 33.1711 16.1591 32.2684 15.4801 30.462C15.0259 28.8066 14.5729 27.1512 14.1198 25.4958C13.6158 23.6906 13.0747 22.7868 12.4954 22.7868C12.3691 22.7868 11.9276 23.0508 11.1721 23.5776L10.3784 22.5609C11.2104 21.8335 12.0319 21.106 12.8395 20.3775C13.9495 19.423 14.7826 18.9215 15.3376 18.8708C16.6493 18.7451 17.4569 19.6386 17.7605 21.5487C18.0884 23.6099 18.3143 24.8929 18.4418 25.3944C18.8207 27.1051 19.2366 27.9593 19.6908 27.9593C20.0442 27.9593 20.5738 27.4048 21.2806 26.2947C21.9862 25.1846 22.3651 24.3408 22.4161 23.7609C22.5169 22.8029 22.138 22.3234 21.2806 22.3234C20.8762 22.3234 20.4602 22.4156 20.0327 22.5989C20.8611 19.8979 22.4451 18.5861 24.781 18.661C26.5132 18.7117 27.3301 19.8299 27.2305 22.0156V22.0144Z" fill="#0A0E12"></path><path d="M37.6366 27.3046C36.9298 28.6337 35.9589 29.8384 34.7214 30.9174C33.0297 32.3722 31.3391 33.1007 29.6486 33.1007C28.8653 33.1007 28.2651 32.8494 27.8492 32.348C27.4332 31.8465 27.2374 31.194 27.2629 30.3906C27.2872 29.5629 27.5456 28.2833 28.038 26.5518C28.5305 24.8203 28.7773 23.8912 28.7773 23.7655C28.7773 23.1142 28.549 22.7868 28.096 22.7868C27.9442 22.7868 27.5155 23.0508 26.8087 23.5776L25.9385 22.5609C26.7461 21.8335 27.5537 21.106 28.3613 20.3775C29.447 19.423 30.2546 18.9215 30.7853 18.8708C31.6172 18.7959 32.229 19.0391 32.6207 19.6028C33.0111 20.1665 33.156 20.8974 33.0563 21.7977C32.7273 23.324 32.3739 25.263 31.995 27.6135C31.9695 28.6902 32.3611 29.2274 33.1687 29.2274C33.5221 29.2274 34.1525 28.8562 35.062 28.1127C35.8187 27.4936 36.4374 26.9115 36.9171 26.3662L37.6366 27.3069V27.3046ZM34.3425 13.9104C34.317 14.5352 34.0018 15.1358 33.3958 15.7099C32.7145 16.3589 31.9069 16.684 30.973 16.684C29.5351 16.684 28.8398 16.0603 28.8908 14.8107C28.9152 14.1617 29.2998 13.5357 30.0449 12.9363C30.7899 12.338 31.6161 12.0371 32.5257 12.0371C33.0552 12.0371 33.4966 12.2446 33.8512 12.6562C34.2046 13.0688 34.368 13.4873 34.3436 13.9104H34.3425Z" fill="#0A0E12"></path><path d="M61.28 27.3045C60.5732 28.6337 59.6022 29.8383 58.3647 30.9174C56.673 32.3722 54.9825 33.1007 53.2919 33.1007C51.6014 33.1007 50.8552 32.1981 50.9062 30.3905C50.9305 29.587 51.0893 28.6222 51.3789 27.4924C51.6686 26.3627 51.8273 25.4843 51.8528 24.8572C51.8783 23.9038 51.5875 23.4266 50.9792 23.4266C50.321 23.4266 49.5366 24.2059 48.6247 25.7621C47.6618 27.3945 47.1428 28.9761 47.0674 30.507C47.0165 31.5883 47.1231 32.4171 47.3861 32.9935C45.6249 33.0442 44.3909 32.7549 43.6875 32.1278C43.0572 31.5756 42.7687 30.6591 42.8185 29.3784C42.8428 28.5749 42.9668 27.7714 43.1904 26.9679C43.4129 26.1644 43.5369 25.4486 43.5624 24.8203C43.6134 23.8911 43.2716 23.4266 42.5393 23.4266C41.9066 23.4266 41.2241 24.1436 40.4918 25.5742C39.7596 27.0048 39.354 28.5 39.2787 30.0562C39.2277 31.4626 39.3181 32.4413 39.5498 32.9935C37.8176 33.0442 36.587 32.6811 35.8594 31.9041C35.2557 31.254 34.9799 30.2649 35.0309 28.938C35.0553 28.2879 35.17 27.3795 35.3785 26.2152C35.5871 25.0508 35.703 24.1436 35.7273 23.4923C35.7771 23.0415 35.6636 22.8168 35.3866 22.8168C35.2349 22.8168 34.8061 23.0715 34.0993 23.5787L33.1909 22.562C33.3172 22.4629 34.1109 21.7343 35.5767 20.3786C36.6369 19.3999 37.3553 18.8984 37.7342 18.8731C38.39 18.8224 38.9207 19.0921 39.3239 19.6823C39.7283 20.2726 39.9299 20.9573 39.9299 21.7354C39.9299 21.9868 39.9044 22.2254 39.8546 22.4513C40.2335 21.8749 40.6749 21.3712 41.1801 20.9446C42.3411 19.9406 43.6412 19.3745 45.0791 19.25C46.3154 19.1498 47.1984 19.4379 47.7302 20.1158C48.1578 20.668 48.3594 21.4599 48.335 22.4894C48.5123 22.3395 48.7012 22.1758 48.904 21.9994C49.4833 21.3216 50.0511 20.7821 50.6072 20.3798C51.5412 19.7019 52.5133 19.325 53.5225 19.2489C54.7345 19.1486 55.6047 19.4356 56.1342 20.1123C56.5873 20.6622 56.79 21.4507 56.7402 22.4755C56.7147 23.1764 56.5444 24.1955 56.2292 25.535C55.9129 26.8734 55.7553 27.6423 55.7553 27.8417C55.7298 28.3674 55.7808 28.7305 55.9071 28.93C56.0334 29.1305 56.3358 29.2297 56.8155 29.2297C57.1689 29.2297 57.7993 28.8585 58.7088 28.1149C59.4655 27.4959 60.0842 26.9137 60.5639 26.3685L61.2834 27.3091L61.28 27.3045Z" fill="#0A0E12"></path><path d="M75.4762 27.2665C74.7439 28.4712 73.306 29.6736 71.1601 30.8771C68.4847 32.4068 65.771 33.1711 63.0203 33.1711C60.9752 33.1711 59.5106 32.4933 58.6277 31.1376C57.9973 30.2084 57.6938 29.1041 57.7193 27.8233C57.7436 25.7898 58.6532 23.8578 60.4457 22.0237C62.4143 20.0155 64.7363 19.0115 67.4117 19.0115C69.8855 19.0115 71.1972 20.0144 71.349 22.0179C71.4498 23.2952 70.743 24.6105 69.2297 25.9628C67.6133 27.4406 65.581 28.3801 63.1338 28.7802C63.5869 29.4061 64.2694 29.7197 65.1778 29.7197C66.9946 29.7197 68.976 29.2609 71.1219 28.3409C72.6606 27.6954 73.8726 27.0233 74.7567 26.3282L75.4762 27.2677V27.2665ZM66.8822 23.3333C66.9065 22.66 66.6296 22.3211 66.0503 22.3211C65.2936 22.3211 64.5254 22.8399 63.7445 23.8762C62.9635 24.9126 62.5591 25.9063 62.5348 26.855C62.5209 26.855 62.5209 27.0175 62.5348 27.3426C63.77 26.893 64.8406 26.2071 65.7478 25.2826C66.4778 24.4837 66.8567 23.8336 66.8822 23.3333Z" fill="#0A0E12"></path><path d="M85.7537 24.7419C85.6518 27.0486 84.7943 29.043 83.1791 30.7226C81.5639 32.4022 79.557 33.2425 77.1597 33.2425C75.1656 33.2425 73.6512 32.6027 72.6165 31.3243C71.8598 30.3721 71.4427 29.1813 71.3674 27.753C71.2399 25.5961 72.0221 23.6157 73.7149 21.8104C75.5317 19.8046 77.8155 18.8016 80.5663 18.8016C82.3321 18.8016 83.6693 19.3919 84.5788 20.5689C85.4374 21.6479 85.8279 23.0393 85.7526 24.7431L85.7537 24.7419ZM81.4758 24.6001C81.5013 23.9211 81.4063 23.2975 81.192 22.7326C80.9776 22.1678 80.6671 21.883 80.265 21.883C78.9777 21.883 77.9175 22.5758 77.0856 23.9592C76.3776 25.0924 75.9987 26.2993 75.9489 27.5812C75.9234 28.2106 76.0369 28.764 76.2895 29.2424C76.5665 29.7957 76.9581 30.0724 77.4633 30.0724C78.5988 30.0724 79.571 29.4061 80.3786 28.0723C81.0599 26.9645 81.4249 25.8082 81.4758 24.6013V24.6001Z" fill="#0A0E12"></path></g><defs><clipPath id="clip0_7375_9076"><rect width="75.3846" height="21.2043" fill="white" transform="translate(10.3784 12.0371)"></rect></clipPath></defs></svg>
                    </div>
                    <div>
                        <nav>
                            <a href="" hrefLang="" className="xs:font-bold">Log in</a>
                            <button className="xs:mx-2 xs:p-2 xs:bg-slate-800 xs:px-3 rounded-lg xs:text-white">
                                <span>Join</span>
                            </button>
                            <button>
                                <i className="fa fa-bars"></i>
                            </button>
                        </nav>
                    </div>
                </div>

                {/** warning */}

                <div className="xs:hidden"> {/** dropdown bar */}
                    <div className="xs:relative">
                        <div className="xs:space-y-2">
                            <div className="xs:overflow-y-scroll xs:p-3 xs:bg-slate-600 rounded-xl xs:relative xs:top-2">
                        <button className="xs:w-full xs:flex xs:items-center xs:justify-between xs:p-4">
                            <span className="xs:font-bold">Video platform</span>
                            <i className="fa fa-angle-right"></i>
                        </button>
                        <button className="xs:w-full xs:flex xs:items-center xs:justify-between xs:p-4">
                            <span className="xs:font-bold">Solutions</span>
                            <i className="fa fa-angle-right"></i>
                        </button>
                        <button className="xs:w-full xs:flex xs:items-center xs:justify-between xs:p-4">
                            <span className="xs:font-bold">Customer stories</span>
                        </button>
                        <button className="xs:w-full xs:flex xs:items-center xs:justify-between xs:p-4">
                            <span className="xs:font-bold">Resources</span>
                            <i className="fa fa-angle-right"></i>
                        </button>
                        <button className="xs:w-full xs:flex xs:items-center xs:justify-between xs:p-4">
                            <span className="xs:font-bold">Watch</span>
                            <i className="fa fa-angle-right"></i>
                        </button>
                        <button className="xs:w-full xs:flex xs:items-center xs:justify-between xs:p-4">
                            <span className="xs:font-bold">Pricing</span>
                        </button>
                            </div>
                            <div className="xs:overflow-y-scroll xs:p-3 xs:bg-slate-600 rounded-xl xs:relative xs:top-2">
                            <button className="xs:w-full xs:flex xs:items-center xs:justify-between xs:p-4">
                                <span className="xs:font-bold">Get started</span>
                                <i className="fa fa-arrow-right xs:p-2 xs:bg-white xs:px-3 xs:rounded-lg"></i>
                            </button>
                            </div>
                        </div>
                    </div>
                    {/** first */}
                    <div className="xs:absolute xs:hidden xs:top-0 xs:left-0 xs:bg-black xs:w-full xs:text-white xs:h-screen">
                    <div className="xs:px-4 xs:pt-4">
                        <div className="xs:flex xs:justify-between xs:items-center xs:w-full">
                            <i className="fa fa-arrow-left"></i>
                            <i className="fa fa-times"></i>
                        </div>
                        <div className="xs:relative xs:top-10 xs:overflow-y-scroll xs:h-96">
                            <h1 className="xs:text-center xs:font-bold xs:text-2xl">Video platform</h1>
                            <div className="xs:p-4 xs:bg-slate-700 xs:mt-8 rounded-xl">
                                <h1 className="xs:font-bold ">Make videos</h1>
                                <nav className="xs:mt-4 xs:mb-2 xs:space-y-4">
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Screen recording</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Creation and editing</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Interactive video</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Virtual events</span>
                                    </button>
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Webinars</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Live streaming</span>
                                    </button>
                                </nav>
                            </div>
                            <div className="xs:p-4 xs:bg-slate-700 xs:mt-2 rounded-xl">
                                <h1 className="xs:font-bold ">Share videos</h1>
                                <nav className="xs:mt-4 xs:mb-2 xs:space-y-4">
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Ad-free player</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Analytics</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">OTT</span>
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/** second */}
                    <div className="xs:absolute xs:hidden xs:top-0 xs:left-0 xs:bg-black xs:w-full xs:text-white xs:h-screen">
                    <div className="xs:px-4 xs:pt-4">
                        <div className="xs:flex xs:justify-between xs:items-center xs:w-full">
                            <i className="fa fa-arrow-left"></i>
                            <i className="fa fa-times"></i>
                        </div>
                        <div className="xs:relative xs:top-10 xs:overflow-y-scroll xs:h-96">
                            <h1 className="xs:text-center xs:font-bold xs:text-2xl">Solutions</h1>
                            <div className="xs:p-4 xs:bg-slate-700 xs:mt-8 rounded-xl">
                                <h1 className="xs:font-bold ">Vimeo for</h1>
                                <nav className="xs:mt-4 xs:mb-2 xs:space-y-4">
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Screen recording</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Creation and editing</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Interactive video</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Virtual events</span>
                                    </button>
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Webinars</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Live streaming</span>
                                    </button>
                                </nav>
                            </div>
                            <div className="xs:p-4 xs:bg-slate-700 xs:mt-2 rounded-xl">
                                <h1 className="xs:font-bold ">Use cases</h1>
                                <nav className="xs:mt-4 xs:mb-2 xs:space-y-4">
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Ad-free player</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Analytics</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">OTT</span>
                                    </button>
                                </nav>
                            </div>                            
                            <div className="xs:p-4 xs:bg-slate-700 xs:mt-2 rounded-xl">
                                <h1 className="xs:font-bold ">Use cases</h1>
                                <nav className="xs:mt-4 xs:mb-2 xs:space-y-4">
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Ad-free player</span>
                                    </button>                                   
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Analytics</span>
                                    </button>                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">OTT</span>
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/** third */}
                    <div className="xs:absolute xs:hidden xs:top-0 xs:left-0 xs:bg-black xs:w-full xs:text-white xs:h-screen">
                    <div className="xs:px-4 xs:pt-4">
                        <div className="xs:flex xs:justify-between xs:items-center xs:w-full">
                            <i className="fa fa-arrow-left"></i>
                            <i className="fa fa-times"></i>
                        </div>
                        <div className="xs:relative xs:top-10 xs:overflow-y-scroll xs:h-96">
                            <h1 className="xs:text-center xs:font-bold xs:text-2xl">Resources</h1>
                            <div className="xs:p-4 xs:bg-slate-700 xs:mt-8 rounded-xl">
                                <h1 className="xs:font-bold ">Vimeo for</h1>
                                <nav className="xs:mt-4 xs:mb-2 xs:space-y-4">
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Screen recording</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Creation and editing</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Interactive video</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Virtual events</span>
                                    </button>
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Webinars</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Live streaming</span>
                                    </button>
                                </nav>
                            </div>
                            <div className="xs:p-4 xs:bg-slate-700 xs:mt-2 rounded-xl">
                                <h1 className="xs:font-bold ">Use cases</h1>
                                <nav className="xs:mt-4 xs:mb-2 xs:space-y-4">
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Ad-free player</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Analytics</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">OTT</span>
                                    </button>
                                </nav>
                            </div>                            
                            <div className="xs:p-4 xs:bg-slate-700 xs:mt-2 rounded-xl">
                                <h1 className="xs:font-bold ">Use cases</h1>
                                <nav className="xs:mt-4 xs:mb-2 xs:space-y-4">
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Ad-free player</span>
                                    </button>                                   
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Analytics</span>
                                    </button>                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">OTT</span>
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/** fourth */}
                    <div className="xs:absolute xs:hidden xs:top-0 xs:left-0 xs:bg-black xs:w-full xs:text-white xs:h-screen">
                    <div className="xs:px-4 xs:pt-4">
                        <div className="xs:flex xs:justify-between xs:items-center xs:w-full">
                            <i className="fa fa-arrow-left"></i>
                            <i className="fa fa-times"></i>
                        </div>
                        <div className="xs:relative xs:top-10 xs:overflow-y-scroll xs:h-96">
                            <h1 className="xs:text-center xs:font-bold xs:text-2xl">Watch</h1>
                            <div className="xs:p-4 xs:bg-slate-700 xs:mt-8 rounded-xl">
                                <h1 className="xs:font-bold ">Vimeo for</h1>
                                <nav className="xs:mt-4 xs:mb-2 xs:space-y-4">
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Screen recording</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Creation and editing</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Interactive video</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Virtual events</span>
                                    </button>
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Webinars</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Live streaming</span>
                                    </button>
                                </nav>
                            </div>
                            <div className="xs:p-4 xs:bg-slate-700 xs:mt-2 rounded-xl">
                                <h1 className="xs:font-bold ">Use cases</h1>
                                <nav className="xs:mt-4 xs:mb-2 xs:space-y-4">
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Ad-free player</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Analytics</span>
                                    </button>
                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">OTT</span>
                                    </button>
                                </nav>
                            </div>                            
                            <div className="xs:p-4 xs:bg-slate-700 xs:mt-2 rounded-xl">
                                <h1 className="xs:font-bold ">Use cases</h1>
                                <nav className="xs:mt-4 xs:mb-2 xs:space-y-4">
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Ad-free player</span>
                                    </button>                                   
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">Analytics</span>
                                    </button>                                    
                                    <button className="xs:flex xs:items-center">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1783 16.1644C14.5205 16.1644 16.4192 14.2989 16.4192 11.9977C16.4192 9.6965 14.5205 7.83102 12.1783 7.83102C9.83619 7.83102 7.9375 9.6965 7.9375 11.9977C7.9375 14.2989 9.83619 16.1644 12.1783 16.1644Z" fill="currentColor"></path></svg>
                                        <span className="xs:ml-3">OTT</span>
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/** warning ends */}
                
            </div>
        </>
    )
}
export default Header;