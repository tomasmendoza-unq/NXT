export interface FacturationForm {
    firstName: string;
    lastName: string;
    address: string;
    province: string;
    city: string;
    postalCode: string;
    phone: string;
    email: string;
    registerUser: boolean;
    notes: string;
}

export const initialFacturationForm: FacturationForm = {
    firstName: "",
    lastName: "",
    address: "",
    province: "",
    city: "",
    postalCode: "",
    phone: "",
    email: "",
    registerUser: false,
    notes: "",
};
