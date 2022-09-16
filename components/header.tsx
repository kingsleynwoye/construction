import { FC } from 'react';
import Link from 'next/link'

const Header: FC = () => {
    return (
        <header className='bg-black'>
            <div className="container max-w-6xl m-auto">
                <div className="rounded-full flex justify-between">
                    <div className="pl-4">
                        <h1 className="text-white translate-y-2 font-bold text-xl">Sahil</h1>
                    </div>
                    <Link href="https://github.com/sahilnetic/portfolio/fork">
                        <h4 className="text-white -translate-y-2 pt-5 pr-5">
                            <p className="font-medium cursor-pointer">Github</p>
                        </h4>
                    </Link>
                </div>
            </div>
            <hr />
        </header>
    )
}

export default Header;