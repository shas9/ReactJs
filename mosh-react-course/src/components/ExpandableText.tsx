import { useState } from "react";

interface Props {
  maxLength?: number;
  children: string;
}

const ExpandableText = ({ maxLength = 100, children }: Props) => {
  const [isExpanded, setExpandedStatus] = useState(true);

  if (children.length <= maxLength) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxLength) + "...";
  return (
    <div>
      <p>{text}</p>
      <button
        onClick={() => {
          setExpandedStatus(!isExpanded);
        }}
      >
        {isExpanded ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;
