import Logo from './Logo'
import Nav from './Nav'

const Head = () =>{
    return (
        <header className="bg-white sticky h-14 top-0 flex-wrap z-[200] mx-auto flex w-full items-center justify-between mt-0 mb-0 ">
            <Logo/>
            <Nav />
        </header>
    )
}

export default Head