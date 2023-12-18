import React, { useEffect, useRef } from "react";

const CommentSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");

    const config = {
      src: "https://utteranc.es/client.js",
      repo: "sonht1109/my-blogs",
      "issue-term": "pathname",
      crossOrigin: "anonymous",
      theme: "github-light",
      defer: "true",
    };

    Object.entries(config).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });

    ref.current?.append(script);
  }, []);

  return <div ref={ref} />;
};

export default CommentSection;
