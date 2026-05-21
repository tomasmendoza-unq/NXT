import { useState } from "react";
import { FormInput } from "../../components/FormInput";

interface FormData {
  product: string;
  price: string;
  size: string;
  color: string;
  image: string;
  quantity: string;
}

interface FormErrors {
  product?: string;
  price?: string;
  size?: string;
  color?: string;
  image?: string;
  quantity?: string;
}

export const ProductForm = () => {
  const [formData, setFormData] = useState<FormData>({
    product: "",
    price: "",
    size: "",
    color: "",
    image: "",
    quantity: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  //TODO: Enviar esta validacion a un archivo separado para reutilizarla en editProduct
  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "product":
        if (!value.trim()) return "El producto es requerido";
        if (value.length < 3) return "Mínimo 3 caracteres";
        if (!/^[a-zA-Z\s-]+$/.test(value))
          return "Solo letras, espacios y guiones";
        break;
      case "price":
        if (!value.trim()) return "El precio es requerido";
        if (!/^\d+(\.\d{1,2})?$/.test(value))
          return "Formato inválido (ej: 99.99)";
        if (parseFloat(value) <= 0) return "Debe ser mayor a 0";
        break;
      case "size":
        if (!value.trim()) return "El tamaño es requerido";
        if (!/^[a-zA-Z0-9\s-]+$/.test(value)) return "Formato inválido";
        break;
      case "color":
        if (!value.trim()) return "El color es requerido";
        if (!/^[a-zA-Z\s-]+$/.test(value))
          return "Solo letras, espacios y guiones";
        break;
      /*case "image":
        if (!value.trim()) return "La imagen es requerida";
        if (!/^(https?:\/\/|\/)[^\s]+\.(jpg|jpeg|png|gif|webp)$/i.test(value))
          return "URL de imagen inválida";
        break;*/
      case "quantity":
        if (!value.trim()) return "La cantidad es requerida";
        if (!/^\d+$/.test(value)) return "Solo números";
        if (parseInt(value) <= 0) return "Debe ser mayor a 0";
        break;
    }
    return undefined;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    let isValid = true;

    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (isValid) {
      console.log("Formulario válido:", formData);
    }
  };

  return (
    <form
      className="rounded grid grid-cols-2 gap-4 w-full max-w-2xl bg-[#4a5156] border border-[#808a92] p-5"
      onSubmit={handleSubmit}
    >
      <FormInput
        name="product"
        placeholder="Product"
        value={formData.product}
        error={errors.product}
        onChange={handleChange}
      />

      <FormInput
        name="price"
        placeholder="Price"
        value={formData.price}
        error={errors.price}
        onChange={handleChange}
      />

      <FormInput
        name="size"
        placeholder="Size"
        value={formData.size}
        error={errors.size}
        onChange={handleChange}
      />

      <FormInput
        name="color"
        placeholder="Color"
        value={formData.color}
        error={errors.color}
        onChange={handleChange}
      />

      <FormInput
        name="image"
        placeholder="Image"
        value={formData.image}
        error={errors.image}
        onChange={handleChange}
      />

      <FormInput
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        error={errors.quantity}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="rounded border text-[#000000] bg-[#bdc7ce] hover:bg-[#808a92] transition-colors px-4 py-2 col-span-2 mx-auto"
      >
        Add Product
      </button>
    </form>
  );
};
