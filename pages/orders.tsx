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
      <section>
        <h5 className={styles.yellow}>See other related kinds of products</h5>
        <div>
          <Flex direction={isMobile ? "column" : "row"}>
            <div>Image</div>
            <Flex direction={isMobile ? "column-reverse" : "row"}>
              <div>
                <h5>Product Name</h5>
                <div>Rating</div>
                <div>&#8358;25000</div>
                <PrimaryButton text={"Add to cart"} />
              </div>
              <div>
                <h6>Description</h6>
                <p>Description</p>
              </div>
            </Flex>
          </Flex>
        </div>
      </section>
      <section>
        <h3>
          Shop other <span className={styles.green}>Products</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras
          vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ipsum
        </p>
        <div>Component to display products</div>
      </section>
      <section>
        <h2>
          Eat <span className={styles.green}>healthy,</span> live{" "}
          <span className={styles.yellow}>healthy</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras
          vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ipsum{" "}
        </p>
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
