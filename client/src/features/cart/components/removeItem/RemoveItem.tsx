import DeleteIcon from "@mui/icons-material/Delete";
import "./style/RemoveItem.css";

export const RemoveItem = ({ onRemove }: { onRemove: () => void }) => {
    return (
        <DeleteIcon
            className="item-action"
            onClick={onRemove}
        />
    );
};
