import { FormField } from "../../../../../shared/components/formField/FormField";
import type { Auth } from "../../../types/Auth.t";
import { inputs } from "./inputs";
import "./style/LoginForm.css";

type Props = {
    formData: Auth;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const LoginForm = ({ formData, onChange, onSubmit }: Props) => {
    return (
        <form
            id="login-form"
            className="login-form"
            onSubmit={onSubmit}
        >
            {inputs.map((input) => (
                <FormField<Auth>
                    key={input.name}
                    input={input}
                    formData={formData}
                    onChange={onChange}
                />
            ))}
            <button type="submit">Iniciar sesión</button>
        </form>
    );
};
