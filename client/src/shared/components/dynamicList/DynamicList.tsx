import type { ReactNode } from "react";
import "./style/DynamicList.css";

type Props<T> = {
    items: T[];
    onChange: (items: T[]) => void;
    defaultItem: T;
    renderItem: (
        item: T,
        index: number,
        onChange: (
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        ) => void,
    ) => ReactNode;
    addLabel?: string;
};

export const DynamicList = <T extends object>({
    items,
    onChange,
    defaultItem,
    renderItem,
    addLabel = "+ Agregar",
}: Props<T>) => {
    const handleChange = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        onChange(
            items.map((item, i) =>
                i === index ? { ...item, [name]: value } : item,
            ),
        );
    };

    const handleAdd = () => onChange([...items, { ...defaultItem }]);
    const handleRemove = (index: number) =>
        onChange(items.filter((_, i) => i !== index));

    return (
        <section className="dynamic-list">
            {items.map((item, index) => (
                <div key={index}>
                    {renderItem(item, index, (e) => handleChange(index, e))}
                    <button
                        type="button"
                        onClick={() => handleRemove(index)}
                    >
                        Eliminar
                    </button>
                </div>
            ))}
            <button
                type="button"
                onClick={handleAdd}
            >
                {addLabel}
            </button>
        </section>
    );
};
