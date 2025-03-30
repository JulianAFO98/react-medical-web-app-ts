import { Title } from "../components/Title"
import { Navbar } from "../components/Navbar"
import { IdCard } from "../assets/icons";

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
                    <div className="top-panel"></div>
                    <div className="mid-panel">
                        <div className="mid-panel one"></div>
                        <div className="mid-panel two"></div>
                    </div>
                    <strong className="text-panel"></strong>
                    <div className="panel-apps"></div>
                </section>
            </main>
            <footer>
                Contactos:
            </footer>
        </>
    )

}