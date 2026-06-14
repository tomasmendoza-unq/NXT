import { useState } from "react";
import { authInitialForm, type AuthForm } from "../types/Auth.t";
import { loginService } from "../services/login.service";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./use-auth";

export const useLogin = () => {
    const [formData, setFormData] = useState<AuthForm>(authInitialForm);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await loginService(formData);
            login(response);
            navigate("/");
        } finally {
            setIsLoading(false);
        }
    };

    return {
        formData,
        isLoading,
        handleChange,
        handleSubmit,
    };
};
