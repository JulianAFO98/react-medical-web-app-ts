
interface NavProps {
    options: String[]
}

export function Navbar({ options }: NavProps) {
    return (
        <ul className="nav-list">
            {

                options.map(option => {
                    return (
                        <li>
                            <a href="#">{option}</a>
                        </li>
                    )
                })

            }

        </ul>
    )
}