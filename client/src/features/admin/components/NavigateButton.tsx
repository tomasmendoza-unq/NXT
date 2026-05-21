import { useNavigate } from "react-router-dom";

interface NavigateButtonProps {
  path: string;
  children: React.ReactNode;
  customStyle?: string;
}

export const NavigateButton = ({
  path,
  children,
  customStyle,
}: NavigateButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      className={`p-5 min-w-12.5 ${customStyle}`}
      onClick={() => navigate(path)}
    >
      {children}
    </button>
  );
};
