import React from 'react'
import Footer from './footer';
import Header from './header'

interface LayoutProps {
    children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
    return (
        <>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </>
    )
}

export default Layout;