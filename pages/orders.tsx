import styled from "styled-components";
import styles from "../styles/Orders.module.scss";
import Flex from "../components/containers/flex/Flex";
import useMediaQuery from "../hooks/useMediaQuery";
import { PrimaryButton } from "../components/buttons";

const Orders: ({
  title,
  className,
}: {
  title: string;
  className: string;
}) => JSX.Element = ({ className }) => {
  const isMobile = useMediaQuery("(max-width: 895px)");

  return (
    <div className={className}>
      <section className={styles.mainProduct}>
        <h2 className={styles.yellow}>Order Information</h2>
        <Flex direction={isMobile ? "column" : "row"}>
          <div>
            Product Image
            <h5>Product Name</h5>
          </div>
          <div>
            <h5>Description</h5>
            <p>Description Content</p>
            <h4 className={styles.yellow}>Price: &#8358;10,000 /pack</h4>
            <Flex direction={isMobile ? "column" : "row"}>
              <Flex>
                <span>Add quantity</span>
                <div>
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </Flex>
              <PrimaryButton text={"Checkout"} />
            </Flex>
          </div>
        </Flex>
      </section>
    </div>
  );
};

const OrderSection = styled(Orders)``;
export async function getStaticProps() {
  const title = "Orders";
  return { props: { title } };
}

export default OrderSection;
