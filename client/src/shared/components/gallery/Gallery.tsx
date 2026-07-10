import "./style/Gallery.css";

interface GalleryProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    onItemSelect: (item: T) => void;
    className?: string;
}

export const Gallery = <T,>({
    items,
    renderItem,
    onItemSelect,
    className,
}: GalleryProps<T>) => {
    return (
        <section className={`gallery ${className || ""}`}>
            {items.map((item, index) => (
                <div
                    className="gallery-item"
                    key={index}
                    onClick={() => onItemSelect(item)}
                >
                    {renderItem(item, index)}
                </div>
            ))}
        </section>
    );
};
