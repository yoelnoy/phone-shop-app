import { STRINGS } from "../constants";
import { PhoneSpecs } from "../types/phoneSpecs";

interface PhoneSpecificationsProps {
  specs: PhoneSpecs;
}

const PhoneSpecifications = ({ specs }: PhoneSpecificationsProps) => {
  const rows = [
    {
      label: STRINGS.specsLabels.brand.toUpperCase(),
      value: specs.brand,
    },
    {
      label: STRINGS.specsLabels.name.toUpperCase(),
      value: specs.name,
    },
    {
      label: STRINGS.specsLabels.description.toUpperCase(),
      value: specs.description,
    },
    {
      label: STRINGS.specsLabels.screen.toUpperCase(),
      value: specs.screen,
    },
    {
      label: STRINGS.specsLabels.resolution.toUpperCase(),
      value: specs.resolution,
    },
    {
      label: STRINGS.specsLabels.processor.toUpperCase(),
      value: specs.processor,
    },
    {
      label: STRINGS.specsLabels.selfieCamera.toUpperCase(),
      value: specs.selfieCamera,
    },
    {
      label: STRINGS.specsLabels.battery.toUpperCase(),
      value: specs.battery,
    },
    { label: STRINGS.specsLabels.os.toUpperCase(), value: specs.os },
    {
      label: STRINGS.specsLabels.screenRefreshRate.toUpperCase(),
      value: specs.screenRefreshRate,
    },
  ];

  return (
    <div className="mt-12 mx-auto font-light">
      <p className="text-lg mb-6">
        {" "}
        {STRINGS.pages.productDetails.specifications.toUpperCase()}
      </p>
      <div className="divide-y border-t border-b">
        {rows.map(({ label, value }) => (
          <div key={label} className="flex py-3 text-xs">
            <div className="w-1/3 ">{label}</div>
            <div className="w-2/3">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhoneSpecifications;
