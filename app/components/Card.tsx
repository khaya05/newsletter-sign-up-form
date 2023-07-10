'use client';

interface Props {
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="bg-white lg:rounded-[2.25rem] p-6">
      {children}
    </div>
  );
};

export default Card;
