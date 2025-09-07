import React from "react";

type Props = {
  title?: string;
  subtitle?: string;
};

const TitleWithSubtitle = ({ title, subtitle }: Props) => {
  return (
    <div className="space-y-2">
      <p className="text-[var(--brand)] text-sm text-center font-semibold">
        {subtitle}
      </p>
      <h1 className="text-3xl font-bold text-center mb-8">{title}</h1>
    </div>
  );
};

export { TitleWithSubtitle };
