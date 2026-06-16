import type { Stager as StagerType } from "../../types/Stager.t";
import "./style/Stager.css";

type Props = {
    steps: StagerType[];
    currentStep: number;
    setCurrentStep?: (step: number) => void;
};

export const Stager = ({ steps, currentStep, setCurrentStep }: Props) => {
    return (
        <nav className="stager">
            {steps.map((step, i) => (
                <>
                    <div
                        key={step.index}
                        className="stager-step"
                    >
                        <button
                            type="button"
                            className={`stager-number ${currentStep === step.index ? "active" : ""}`}
                            onClick={() => setCurrentStep?.(step.index)}
                        >
                            {step.index}
                        </button>
                        <span className="stager-label">{step.title}</span>
                    </div>
                    {i < steps.length - 1 && (
                        <div className="stager-connector" />
                    )}
                </>
            ))}
        </nav>
    );
};
