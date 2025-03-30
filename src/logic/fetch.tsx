
interface RegisterResponse {
    message: string;
}

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
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        //Agregar mas logica aqui para tratar los errores segun respuesta de la api(500 por ejemplo)
        console.error(error);
        return;
    }

}