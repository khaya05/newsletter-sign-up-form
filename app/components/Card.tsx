'use client';

interface Props {
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-full md:h-auto m-0 bg-white md:shadow-xl md:rounded-[2.25rem]">
      {children}
    </div>
  );
};

export default Card;
