import { FormField } from "../../../../../shared/components/formField/FormField";
import type { AuthForm } from "../../../types/Auth.t";
import { inputs } from "./inputs";
import "./style/LoginForm.css";

type Props = {
    formData: AuthForm;
    isLoading: boolean;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const LoginForm = ({
    formData,
    isLoading,
    onChange,
    onSubmit,
}: Props) => {
    return (
        <form
            id="login-form"
            className="login-form"
            onSubmit={onSubmit}
        >
            {inputs.map((input) => (
                <FormField<AuthForm>
                    key={input.name}
                    input={input}
                    formData={formData}
                    onChange={onChange}
                />
            ))}
            <button
                className="login-button"
                type="submit"
                disabled={isLoading}
            >
                {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
            </button>
        </form>
    );
};
