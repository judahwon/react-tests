export interface StyledButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  id?: string;
  className?: string;
}

function StyledButton(props: StyledButtonProps) {
  const { className, children } = props;

  return (
    <button
      {...props}
      className={
        [className, 'flex justify-center items-center bg-zinc-500 rounded-md w-20 h-8 my-1 text-white'].join(' ')
      }
    >
      {children}
    </button>
  );
}

export default StyledButton;