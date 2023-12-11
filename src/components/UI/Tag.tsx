export const Tag = ({ text, color }: any) => {
  return (
    <div
      className={`border text-${color}-500 border-${color}-500  rounded-md p-1 `}
    >
      {text}
    </div>
  );
};
