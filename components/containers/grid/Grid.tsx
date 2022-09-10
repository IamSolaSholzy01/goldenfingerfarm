import styled from "styled-components";
import { ReactNode } from "react";

const Grid: ({
  children,
  className,
  rows,
  columns,
  rowGap,
  columnGap,
  align,
}: {
  children: ReactNode;
  className?: string;
  rows?: number;
  columns?: number;
  columnGap?: number;
  rowGap?: number;
  align?: "center" | "right" | "left" | "flex-start" | "flex-end";
}) => JSX.Element = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const StyledGrid = styled(Grid)`
  display: grid;
  grid-template-rows: ${({ rows }) =>
    rows ? `repeat(${rows}, minmax(0, 1fr))` : ""};
  grid-template-columns: ${({ columns }) =>
    columns ? `repeat(${columns}, minmax(0, 1fr))` : ""};
  row-gap: ${({ rowGap }) => (rowGap ? `${rowGap}rem` : "")};
  column-gap: ${({ columnGap }) => (columnGap ? `${columnGap}rem` : "")};
  align-items: ${({ align }) => (align ? `${align}` : "flex-start")};
`;
export default StyledGrid;
