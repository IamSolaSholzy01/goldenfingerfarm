import styled from "styled-components";

const Button: ({
  text,
  onClick,
  className,
  isLink,
}: {
  text: string;
  onClick?: any;
  className?: string;
  isLink?: boolean;
}) => JSX.Element = ({ text, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

const SecondaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary.yellow};
  outline: none;
  border: 0;
  padding: 1.5rem 3.25rem;
  border-radius: 0.625rem;
  cursor: pointer;

  span {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.grayScale.white};
    position: relative;
  }

  span::before {
    content: "";
    text-decoration: none;
    border: solid ${({ theme }) => theme.colors.grayScale.white};
    border-width: 0 3px 3px 0;
    position: absolute;
    right: -20px;
    top: 50%;
    display: ${({ isLink }) => (isLink ? "inline-block" : "none")};
    padding: 3px;
    transition: all 0.3s ease-in-out;
    transform: rotate(-45deg) translateX(5px) translateY(1px);
  }

  span:hover::before {
    transform: rotate(-45deg) translateX(15px) translateY(11px);
  }

  span::after {
    background: ${({ theme }) => theme.colors.grayScale.white};
    content: "";
    display: ${({ isLink }) => (isLink ? "block" : "none")};
    height: 4px;
    right: -22px;
    position: absolute;
    top: 50%;
    width: 11px;
    /* We need to animate the shaft too, to be able to look at a moving arrow */
    transition: all 0.3s ease-in-out;
  }

  span:hover::after {
    transform: translateX(15px);
  }
`;

export default SecondaryButton;
