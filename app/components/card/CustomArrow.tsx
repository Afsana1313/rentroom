import { FC } from "react";

interface ArrowProps {
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const NextArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute right-[-25px] top-[40%] z-20 cursor-pointer 
                 bg-white/80 hover:bg-white shadow-lg rounded-full p-2"
    >
      ➤
    </div>
  );
};

export const PrevArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute left-[-25px] top-[40%] z-20 cursor-pointer 
                 bg-white/80 hover:bg-white shadow-lg rounded-full p-2"
    >
      ◀
    </div>
  );
};
