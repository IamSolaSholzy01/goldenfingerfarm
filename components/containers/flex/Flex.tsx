import styled from "styled-components";
import { ReactNode } from "react";

const Flex: ({
  children,
  className,
  direction,
  align,
  gap,
  justify,
}: {
  children: ReactNode;
  className?: string;
  direction?: "row" | "column" | "rew-reverse" | "column-reverse";
  align?: "center" | "right" | "left" | "flex-start" | "flex-end";
  justify?: "center" | "right" | "left" | "flex-start" | "flex-end";
  gap?: number;
}) => JSX.Element = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const StyledGrid = styled(Flex)`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  gap: ${({ gap }) => (gap ? `${gap}rem` : "")};
  column-gap: ${({ columnGap }) => (columnGap ? `${columnGap}rem` : "")};
  align-items: ${({ align }) => (align ? `${align}` : "flex-start")};
  justify-content: ${({ justify }) => (justify ? `${justify}` : "flex-start")};
`;
export default StyledGrid;
