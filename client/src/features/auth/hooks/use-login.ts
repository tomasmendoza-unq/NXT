import { useState } from "react";
import { authInitialForm, type AuthForm } from "../types/Auth.t";
import { loginService } from "../services/login.service";
import { useNavigate } from "react-router-dom";
import setToken from "../../../core/api/service/token/set-token";

export const useLogin = () => {
    const [formData, setFormData] = useState<AuthForm>(authInitialForm);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

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
            setToken(response);
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
