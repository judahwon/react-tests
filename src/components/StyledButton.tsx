export interface StyledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  id?: string;
  className?: string;
}

function StyledButton(props: StyledButtonProps) {
  return (
    <button
      {...props}
      className={
        [props.className, 'flex justify-center items-center bg-zinc-500 rounded-md w-20 h-8 mb-1 text-white'].join(' ')
      }
    >
      {props.children}
    </button>
  );
}

export default StyledButton;