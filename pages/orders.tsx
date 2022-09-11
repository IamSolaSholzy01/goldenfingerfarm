import styled from "styled-components";
// import useMediaQuery from "../hooks/useMediaQuery";

const Orders: ({
  title,
  className,
}: {
  title: string;
  className: string;
}) => JSX.Element = ({ className }) => {
  // const isMobile = useMediaQuery("(max-width: 895px)");

  return <div className={className}></div>;
};

const OrderSection = styled(Orders)``;
export async function getStaticProps() {
  const title = "Orders";
  return { props: { title } };
}

export default OrderSection;
