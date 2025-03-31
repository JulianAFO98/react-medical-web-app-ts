import { RegisterResponse } from "../types";

export async function registerUser(data: FormData): Promise<RegisterResponse | void> {



    const formDataObj: Record<string, string> = {};
    data.forEach((value, key) => {
        formDataObj[key] = value.toString();
    });

    try {
        const response = await fetch("http://localhost:8080/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataObj)
        })
        const result: RegisterResponse = await response.json();
        return result;
    } catch (error) {
        //Agregar mas logica aqui para tratar los errores segun respuesta de la api(500 por ejemplo)
        console.error("Error de red o servidor:", error);
        return;
    }

}