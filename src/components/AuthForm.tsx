import { registerUser } from "../logic/fetch";
import { useNavigate } from "react-router-dom";

export const AuthForms = () => {
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const result = await registerUser(formData);
        if (result) {
            //Cambiar logica para llevar al home
            alert("Se ha registrado exitosamente");
            navigate("/");
        }
    }

    return (
        <div className="mid-panel">
            <div className="form-container">
                <h2>Registro</h2>
                <form onSubmit={handleRegister}>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input name="firstname" type="text" />
                    </div>
                    <div className="form-group">
                        <label>Apellido</label>
                        <input name="lastname" type="text" />
                    </div>
                    <div className="form-group">
                        <label>Correo electrónico</label>
                        <input name="email" type="email" />
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input name="password" type="password" />
                    </div>
                    <button className="register-button">Registrarse</button>
                </form>
            </div>
            <div className="form-container">
                <h2>Iniciar Sesión</h2>
                <form>
                    <div className="form-group">
                        <label>Correo electrónico</label>
                        <input type="email" />
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input type="password" />
                    </div>
                    <button className="login-button">Ingresar</button>
                </form>
            </div>
        </div>
    );
};