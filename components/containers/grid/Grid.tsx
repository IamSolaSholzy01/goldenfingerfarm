import styled from "styled-components";
import { ReactNode } from "react";

const Grid: ({
  children,
  className,
  rows,
  columns,
}: {
  children: ReactNode;
  className?: string;
  rows?: number;
  columns?: number;
}) => JSX.Element = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const StyledGrid = styled(Grid)`
  display: grid;
  grid-template-rows: ${({ rows }) =>
    rows ? `repeat(${rows}, minmax(0, 1fr))` : ""};
  grid-template-columns: ${({ columns }) =>
    columns ? `repeat(${columns}, minmax(0, 1fr))` : ""};
`;
export default StyledGrid;
