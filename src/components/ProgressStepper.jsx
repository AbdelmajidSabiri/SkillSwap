export default function ProgressStepper({ currentStep, totalSteps = 4 }) {
  return (
    <div className="flex items-center gap-2 w-full">
      {Array.from({ length: totalSteps }, (_, i) => {
        const step = i + 1
        const isActive = step <= currentStep
        const isCurrent = step === currentStep
        return (
          <div key={step} className="flex items-center flex-1 gap-2">
            <div
              className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                isActive ? 'bg-peach' : 'bg-peach/20'
              } ${isCurrent ? 'shadow-sm shadow-peach/40' : ''}`}
            />
          </div>
        )
      })}
    </div>
  )
}

export function CircleStepper({ currentStep, totalSteps = 4, labels }) {
  return (
    <div className="flex items-center justify-between w-full px-1">
      {Array.from({ length: totalSteps }, (_, i) => {
        const step = i + 1
        const isActive = step <= currentStep
        const isCurrent = step === currentStep
        return (
          <div key={step} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  isCurrent
                    ? 'bg-peach text-white scale-110 shadow-md shadow-peach/30'
                    : isActive
                      ? 'bg-peach text-white'
                      : 'bg-gray-200 text-gray-400'
                }`}
              >
                {step}
              </div>
              {labels?.[i] && (
                <span className="text-[9px] text-text-muted mt-1 text-center max-w-[60px]">
                  {labels[i]}
                </span>
              )}
            </div>
            {step < totalSteps && (
              <div
                className={`flex-1 h-0.5 mx-1 transition-all duration-300 ${
                  step < currentStep ? 'bg-peach' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
