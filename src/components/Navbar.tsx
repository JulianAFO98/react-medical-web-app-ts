
interface NavProps {
    options: String[]
}

export function Navbar({ options }: NavProps) {
    return (
        <ul className="nav-list">
            {

                options.map((option, index) => {
                    //Aqui uso index ya que se que no cambiara la lista, aunque no es lo recomendado
                    return (
                        <li key={index}>
                            <a href="#">{option}</a>
                        </li>
                    )
                })

            }

        </ul>
    )
}