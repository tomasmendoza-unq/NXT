import { useLogin } from "../../hooks/use-login";
import { LoginForm } from "./components/LoginForm";
import "./style/Login.css";

export const Login = () => {
    const { formData, isLoading, handleChange, handleSubmit } = useLogin();

    return (
        <section className="login-container">
            <h1>Bienvenido</h1>
            <LoginForm
                formData={formData}
                isLoading={isLoading}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </section>
    );
};
