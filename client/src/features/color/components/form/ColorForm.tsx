import { FormList } from "../../../../shared/components/form/FormList";
import {
    defaultColorRequestDTO,
    type ColorRequestDTO,
} from "../../api/types/color-request";
import { colorInputs } from "./inputs";

type Props = {
    colors: ColorRequestDTO[];
    onChange: (colors: ColorRequestDTO[]) => void;
};

export const ColorForm = ({ colors, onChange }: Props) => (
    <FormList<ColorRequestDTO>
        items={colors}
        onChange={onChange}
        defaultItem={defaultColorRequestDTO}
        inputs={colorInputs}
        addLabel="+ Agregar color"
    />
);
