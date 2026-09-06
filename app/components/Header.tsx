export default function Header() {
    return (
        <header className="flex justify-center fixed w-100/100">
            <div className="flex w-6xl">
                <nav className="w-1/4 flex justify-start left">
                    <a href="#">Gierszew</a>
                </nav>
                <nav className="w-1/4 flex justify-around center">
                    <div className="flex justify-between">
                        <div className="flex flex-col justify-start w-1/10">
                            <p className="text-[12px]">1</p>
                        </div>
                        <div className="w-4/5">
                            Projects
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col justify-start w-1/10">
                            <p className="text-[12px]">2</p>
                        </div>
                        <div className="w-4/5">
                            About
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col justify-start w-1/10">
                            <p className="text-[12px]">3</p>
                        </div>
                        <div className="w-4/5">
                            Contact
                        </div>
                    </div>
                </nav>
                <nav className="w-1/2 flex justify-center right">
                    Search
                </nav>
            </div>
        </header>
    )
}