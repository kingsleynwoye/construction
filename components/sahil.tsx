import React from 'react'
import Link from 'next/link'

const Sahil = () => {
    return (
        <>
            <section>
                <div className="bg-zinc-900">
                    <div className="py-20 bg-zinc-900">
                        <div className="container max-w-6xl m-auto px-6">
                            <div className="lg:flex justify-between items-center">
                                <div className="lg:w-6/12 lg:p-0 p-7">
                                    <h1 className="sm:text-5xl text-4xl text-white font-medium leading-tight mb-5 capitalize">Hi, I'm Sahil </h1>
                                    <p className="text-xl text-zinc-200">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
                                    <div className="py-5 flex gap-x-4">
                                        <a className="text-white border px-5 py-2 border-white rounded-lg border-t-2 border-l-2">Projects</a>
                                        <a className="text-white border px-5 py-2 border-white rounded-lg border-t-2 border-l-2">Social links</a>
                                    </div>
                                </div>
                                <div className="lg:w-4/12 rounded-full scale-100">
                                    <img className="rounded-full" alt="sahil logo" width="350" height="350" src="https://sahilnetic.xyz/evilcat.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-zinc-900'>
                <div className="container max-w-7xl m-auto md:px-2">
                    <h1 className="sm:mx-8 text-center mx-6 text-white text-2xl sm:text-5xl pb-10 font-light">Recent Projects</h1>
                    <h2 className="sm:mx-8 mx-6 text-white text-lg sm:text-2xl pb-10 font-light"><span className='font-medium text-emerald-400 underline decoration-2 decoration-emerald-500 underline-offset-8' >Projects</span> | <span className='hover:animate-pulse'>Contributions</span></h2>
                    <div className="grid sm:grid-cols-3 px-8 bg-transparent gap-y-8 sm:gap-x-8">
                        <div className="bg-white/30 px-3 py-3 rounded-lg shadow-lg opacity-90">
                            <p className="py-20" />
                            <h3>Appmojo</h3>
                            <p className="text-xs">Visit</p>
                        </div>
                        <div className="bg-white/30 px-3 py-3 rounded-lg shadow-lg opacity-90">
                            <p className="py-20" />
                            <h3>Whatsadd</h3>
                            <p className="text-xs">Visit</p>
                        </div>
                        <div className="bg-white/30 px-3 py-3 rounded-lg shadow-lg opacity-90">
                            <p className="py-20" />
                            <h3>Hello Intent</h3>
                            <p className="text-xs">Visit</p>
                        </div>
                        <div className="bg-white/30 px-3 py-3 rounded-lg shadow-lg opacity-90">
                            <p className="py-20" />
                            <h3>React Zilla</h3>
                            <p className="text-xs">Visit</p>
                        </div>
                        <div className="bg-white/30 px-3 py-3 rounded-lg shadow-lg opacity-90">
                            <p className="py-20" />
                            <h3>Addify</h3>
                            <p className="text-xs">Visit</p>
                        </div>
                        <div className="bg-white/30 px-3 py-3 rounded-lg shadow-lg opacity-90">
                            <p className="py-20" />
                            <h3>Whatshop</h3>
                            <p className="text-xs">Visit</p>
                        </div>
                        <div className="bg-white/30 px-3 py-3 rounded-lg shadow-lg opacity-90">
                            <p className="py-20" />
                            <h3>FindVc</h3>
                            <p className="text-xs">Visit</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-black pb-4">
                <div className="container max-w-7xl m-auto px-6">
                    <div>
                        <h1 className="text-white text-4xl px-3 sm:px-8 py-8">Users</h1>
                    </div>
                    <div className="grid sm:grid-cols-3 px-3 sm:px-8 bg-transparent mb-10 sm:mb-32 gap-y-8 sm:space-x-8">
                        <div className="bg-white/30 backdrop-blur-md px-3 py-3 rounded-lg shadow-lg">
                            <img className="w-full h-48 blur-3xl hover:blur-xl rounded-xl" src="https://picsum.photos/200/300?random=1" alt="image" />
                            <h3>Artist</h3>
                            <p className="text-xs">@steve</p>
                        </div>
                        <div className="bg-white/30 backdrop-blur-md px-3 py-3 rounded-lg shadow-lg">
                            <img className="w-full h-48 blur-3xl hover:blur-xl rounded-xl" src="https://picsum.photos/200/300?random=2" alt="image" />
                            <h3>Cook</h3>
                            <p className="text-xs">@seanpaul</p>
                        </div>
                        <div className="bg-white/30 backdrop-blur-md px-3 py-3 rounded-lg shadow-lg">
                            <img className="w-full h-48 blur-3xl hover:blur-xl rounded-xl" src="https://picsum.photos/200/300?random=1" alt="image" />
                            <h3>Photographer</h3>
                            <p className="text-xs">@sahilnetic</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full z-50 sticky  px-6 bg-zinc-900">

                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                            <div className="max-w-xl mb-6">

                                <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
                                    Lorem Ipsum Is Cool.
                                </h2>
                                <p className="text-white text-base md:text-lg"> Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.
                                </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Link href="/comingsoon">
                                    <a
                                        className="flex object-cover sm:mr-64 mr-32 object-top items-center text-white border border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-black rounded-lg font-black"
                                    >
                                        &nbsp;&nbsp;<img width="25" height="20" alt="google auth logo" src="https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20200429221626%21Google_%22G%22_Logo.svg" />&nbsp;&nbsp; Get Started
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <img alt="logo" width="450" height="450" src="https://images.unsplash.com/photo-1542304074-9c8ce93b52fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                    </div>
                </div>

                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                        <img alt="logo" width="450" height="450" src="https://images.unsplash.com/photo-1515023677547-593d7638cbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                            <div className="max-w-xl mb-6">
                                <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">Step 2 : Awesome Is Lorem Ipsum</h2>
                                <p className="text-white text-base md:text-lg">Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Link href="/comingsoon">
                                    <a className="flex object-cover sm:mr-64 mr-32 object-top items-center text-white border border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-black rounded-lg font-black">
                                        &nbsp;&nbsp;<img alt="logo" width="25" src="https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20200429221626%21Google_%22G%22_Logo.svg" />&nbsp;&nbsp; Get Started
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                            <div className="max-w-xl mb-6">
                                <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">Step 3 : Cool and awesome is lorem ipsum</h2>
                                <p className="text-white text-base md:text-lg">Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Link href="/comingsoon">
                                    <a className="flex object-cover sm:mr-64 mr-32 object-top items-center text-white border border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-black rounded-lg font-black" >
                                        &nbsp;&nbsp;<img alt="logo" width="20" height="20" src="https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20200429221626%21Google_%22G%22_Logo.svg" />&nbsp;&nbsp; Get Started
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <img alt="logo" width="450" height="450" src="https://images.unsplash.com/photo-1546195643-70f48f9c5b87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                    </div>
                </div>

                <div className="sm:px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded-3xl shadow-sm lg:flex-row sm:mx-auto">
                        <div className="relative lg:w-1/2">
                            <img width="50" height="50" src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="mobile app" className="object-cover w-full lg:absolute h-80 lg:h-full" />
                            <svg className="absolute top-0 right-0 hidden h-full text-white lg:inline-block" viewBox="0 0 20 104" fill="currentColor">
                                <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center p-8 bg-black lg:p-16 lg:pl-10 lg:w-1/2">
                            <h5 className="mb-3 text-3xl text-white font-extrabold leading-none sm:text-4xl">Need Some Help!</h5>
                            <p className="mb-8 text-blue-400 font-black">
                            </p>
                            <div className="flex items-left">
                                <Link href="/comingsoon">
                                    <a className="flex hover:border-2 hover:shadow-xl items-center text-white border border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-black rounded-lg font-black" >
                                        <img width="25" alt="gmail logo" src="https://cdn.icon-icons.com/icons2/2170/PNG/512/google_logo_brand_social_icon_133256.png" />&nbsp;&nbsp; Contact Us
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sahil