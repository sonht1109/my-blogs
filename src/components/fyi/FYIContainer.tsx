import { useMediaQuery } from "@/utils/hooks/useMediaQuery";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function FYIContainer(props: Props) {
  const isSmall = useMediaQuery("(max-width: 767px)");
  return (
    <div
      className={`fyi-content-container text-sm`}
      style={{ padding: isSmall ? "16px 8px" : "24px 16px" }}
    >
      {props.children}
    </div>
  );
}
