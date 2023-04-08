import { useState } from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";

const Like = () => {
  const [shouldLike, setShouldLike] = useState(false);

  return (
    <div
      onClick={() => {
        setShouldLike(!shouldLike);
      }}
    >
      {!shouldLike && <FcLikePlaceholder size={40} />}
      {shouldLike && <FcLike size={40} />}
    </div>
  );
};

export default Like;
