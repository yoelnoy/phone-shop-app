import { STRINGS } from "../constants";

const LoadingIndicator = () => {
  return (
    <div
      data-testid="loading-indicator"
      className="w-full h-full flex flex-col justify-center items-center "
    >
      <img
        src="/assets/logo.svg"
        alt={STRINGS.altText.logo}
        className="size-max h-8"
      />
      <p className="font-light text-sm">{STRINGS.pages.productList.loading}</p>
    </div>
  );
};

export default LoadingIndicator;
