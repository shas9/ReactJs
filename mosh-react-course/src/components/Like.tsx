import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Like = () => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
  };

  if (status) return <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />;
  else return <AiOutlineHeart color="#ff6b81" size={20} onClick={toggle} />;
};

export default Like;
