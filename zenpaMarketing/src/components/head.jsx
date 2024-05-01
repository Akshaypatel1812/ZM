import Logo from './Logo'
import Nav from './Nav'

const Head = () =>{
    return (
        <header className="bg-white sticky h-16 top-0 flex-wrap z-[200] mx-auto flex w-full items-center justify-between ">
            <Logo />
            <Nav />
        </header>
    )
}

export default Head