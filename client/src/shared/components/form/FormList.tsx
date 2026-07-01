import { FormField } from "../formField/FormField";
import type { InputConfig } from "../../types/InputForm.t";

type Props<T extends object> = {
    items: T[];
    onChange: (items: T[]) => void;
    defaultItem: T;
    inputs: InputConfig[];
    addLabel?: string;
    idPrefix?: string;
    selectedIndex?: number;
    onSelectedIndexChange?: (index: number) => void;
};

export const FormList = <T extends object>({
    items,
    onChange,
    defaultItem,
    inputs,
    addLabel = "+ Agregar",
    idPrefix = "form-list",
    selectedIndex,
    onSelectedIndexChange,
}: Props<T>) => {
    const visibleItems =
        selectedIndex === undefined
            ? items.map((item, index) => ({ item, index }))
            : items[selectedIndex]
              ? [{ item: items[selectedIndex], index: selectedIndex }]
              : [];

    const handleChange = (
        index: number,
        input: InputConfig,
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, type, value } = e.target;
        const nextValue =
            type === "checkbox"
                ? (e.target as HTMLInputElement).checked
                : input.type === "number"
                  ? Number(value)
                  : value;

        onChange(
            items.map((item, i) =>
                i === index ? { ...item, [name]: nextValue } : item,
            ),
        );
    };

    const handleAdd = () => {
        onChange([...items, structuredClone(defaultItem)]);
        onSelectedIndexChange?.(items.length);
    };

    const handleRemove = (index: number) => {
        const nextItems = items.filter((_, i) => i !== index);
        onChange(nextItems);

        if (selectedIndex === undefined) return;

        const nextSelectedIndex =
            index < selectedIndex
                ? selectedIndex - 1
                : Math.min(selectedIndex, nextItems.length - 1);

        onSelectedIndexChange?.(Math.max(nextSelectedIndex, 0));
    };

    return (
        <section className="form-list">
            {visibleItems.map(({ item, index }) => (
                <div
                    key={index}
                    className="form-list-item"
                >
                    {inputs.map((input) => (
                        <FormField<T>
                            key={input.name}
                            input={input}
                            formData={item}
                            fieldId={`${idPrefix}-${index}-${input.name}`}
                            onChange={(e) => handleChange(index, input, e)}
                        />
                    ))}

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
