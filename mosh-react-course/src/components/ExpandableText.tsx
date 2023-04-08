import { useState } from "react";

interface Props {
  maxLength?: number;
  children: string;
}

const ExpandableText = ({ maxLength = 100, children }: Props) => {
  const [isShowingFullText, setShowTextStatus] = useState(true);
  return (
    <div>
      {isShowingFullText ? children : children.substring(0, maxLength) + "..."}{" "}
      <button
        onClick={() => {
          setShowTextStatus(!isShowingFullText);
        }}
      >
        {isShowingFullText ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;
