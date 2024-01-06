import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type: "warning" | "info";
}

const theme: Record<Props["type"], { bgColor: string; borderColor: string }> = {
  warning: {
    borderColor: "#ff8000",
    bgColor: "hsla(52deg, 100%, 50%, 0.25)",
  },
  info: {
    borderColor: "#5f79fa",
    bgColor: "hsl(210deg, 55%, 92%)",
  },
};

export default function InternalFYI(props: Props) {
  const typeTheme = theme[props.type];

  return (
    <div
      style={{
        borderLeft: `2px solid ${typeTheme.borderColor}`,
        background: typeTheme.bgColor,
      }}
    >
      {props.children}
    </div>
  );
}
