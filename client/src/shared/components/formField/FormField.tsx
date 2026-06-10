import "./style/FormField.css";

export type InputConfig = {
    name: string;
    label: string;
    type: string;
    autoComplete?: string;
};

type Props<T extends object> = {
    input: InputConfig;
    formData: T;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
};

export const FormField = <T extends object>({
    input,
    formData,
    onChange,
}: Props<T>) => {
    const value = (formData as Record<string, unknown>)[input.name];

    if (input.type === "checkbox") {
        return (
            <div className="checkbox-field">
                <input
                    id={input.name}
                    name={input.name}
                    type="checkbox"
                    checked={Boolean(value)}
                    onChange={onChange}
                />
                <label htmlFor={input.name}>{input.label}</label>
            </div>
        );
    }

    if (input.type === "textarea") {
        return (
            <>
                <label htmlFor={input.name}>{input.label}</label>
                <textarea
                    id={input.name}
                    name={input.name}
                    value={value as string}
                    onChange={onChange}
                />
            </>
        );
    }

    return (
        <>
            <label htmlFor={input.name}>{input.label}</label>
            <input
                id={input.name}
                name={input.name}
                required
                type={input.type}
                value={value as string}
                autoComplete={input.autoComplete}
                onChange={onChange}
            />
        </>
    );
};
