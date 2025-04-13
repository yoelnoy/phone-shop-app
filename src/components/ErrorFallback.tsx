import { FallbackProps } from "react-error-boundary";
import { STRINGS } from "../constants";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center text-gray-600 h-screen">
      <img
        src="/assets/logo.svg"
        alt={STRINGS.altText.logo}
        className="size-max h-8 -mt-20"
      />

      <p className="text-lg font-semibold mb-2">{STRINGS.error.title}</p>
      <p className="text-sm text-red-500 mb-4">{error.message}</p>

      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 border border-black hover:bg-black hover:text-white transition cursor-pointer"
      >
        {STRINGS.buttons.tryAgain}
      </button>
    </div>
  );
};

export default ErrorFallback;
