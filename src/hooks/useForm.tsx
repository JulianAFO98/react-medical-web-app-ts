import { registerUser } from "../logic/fetch";
import { userStore } from "../store/userStore";
import { FormProps } from "../types";

export const useForm = () => {

    const { changeErrorState } = userStore.getState();
    const updateRegForm = async ({ form }: FormProps) => {
        const formData = new FormData(form);
        const result = await registerUser(formData);
        if (!result) {
            return;
        }
        if (result.status === "error") {
            return changeErrorState(result.message);
        }
        changeErrorState(null);
        form.reset();
    }

    return { updateRegForm };
}