import { LoginForm } from "./components/LoginForm";
import "./style/Login.css";

export const Login = () => {
    const formData = {
        email: "",
        password: "",
    };

    return (
        <section className="login-container">
            <h1>Bienvenido</h1>
            <LoginForm
                formData={formData}
                onChange={() => {}}
                onSubmit={() => {}}
            />
        </section>
    );
};
