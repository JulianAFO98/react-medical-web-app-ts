import { Title } from "../components/Title"
import { Navbar } from "../components/Navbar"
import { IdCard } from "../assets/icons";
import { AuthForms } from "../components/AuthForm";

const OPTIONS: String[] = ["INGRESAR", "VIDEOLLAMADA"];

export function Home() {


    return (
        <>
            <header>
                <Title />
                <Navbar options={OPTIONS} />
            </header>
            <main>
                <header className="main-header">
                    <IdCard />
                    <h2>Mi HI</h2>
                </header>
                <section className="panel">
                    <div className="top-panel">
                        <h2>Atencion</h2>
                        <p>Si es la primera vez que ingresa debera registrarse </p>
                    </div>
                    <AuthForms />
                    <strong className="text-panel"></strong>
                    <div className="panel-apps"></div>
                </section>
            </main>
            <footer>
                <h2>Contactos: <a href="https://github.com/JulianAFO98">GitHub</a></h2>
            </footer>
        </>
    )

}