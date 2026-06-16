import "./style/SizeList.css";

interface SizeOptionListProps<T extends { id: number; size: string }> {
    sizes: T[];
    selectedSizeId: number;
    onSelect: (size: T) => void;
}

export const SizeOptionList = <T extends { id: number; size: string }>({
    sizes,
    selectedSizeId,
    onSelect,
}: SizeOptionListProps<T>) => {
    return (
        <div className="size-option-list">
            {sizes.map((size) => (
                <button
                    key={size.id}
                    className={
                        size.id === selectedSizeId
                            ? "size-option size-option-selected"
                            : "size-option"
                    }
                    type="button"
                    onClick={() => onSelect(size)}
                >
                    {size.size}
                </button>
            ))}
        </div>
    );
};
