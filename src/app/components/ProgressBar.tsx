const ProgressBar = ({ currentStep }: { currentStep: number }) => {
    const steps = ["Personal", "Contact", "Documents", "Review"];
    return (
      <div className="flex justify-between mb-6">
        {steps.map((label, index) => (
          <div
            key={label}
            className={`flex-1 text-center text-sm ${
              currentStep === index + 1
                ? "font-bold text-blue-600"
                : "text-gray-500"
            }`}
          >
            {label}
          </div>
        ))}
      </div>
    );
  };

  export default ProgressBar;