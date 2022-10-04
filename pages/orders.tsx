import styled from "styled-components";
import styles from "../styles/Orders.module.scss";
import Flex from "../components/containers/flex/Flex";
import useMediaQuery from "../hooks/useMediaQuery";
import { PrimaryButton } from "../components/buttons";
import Image from "next/image";
import { classJoin } from "./index";
import React from "react";
import { Healthy } from "../components/preFooter/PreFooter";

const Orders: ({
  title,
  className,
}: {
  title: string;
  className: string;
}) => JSX.Element = ({ className }) => {
  const isMobile = useMediaQuery("(max-width: 895px)");
  const [featuredProduct, setFeaturedProduct] = React.useState({
    image: "pepper.webp",
    title: "Pepper",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. IpsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum  ",
  });
  return (
    <div className={className}>
      <section
        className={classJoin(
          styles.mainProduct,
          styles.bgGreen,
          isMobile ? styles.smMainProduct : styles.lgMainProduct
        )}
      >
        <h2 className={styles.yellow}>Order Information</h2>
        <Flex direction={isMobile ? "column" : "row"} gap={3}>
          <div className={styles.productContainer}>
            <div className={styles.imageContainer}>
              <Image
                src={"/images/home/" + featuredProduct.image}
                alt={featuredProduct.title}
                layout={"fill"}
              />
            </div>
            <h5>{featuredProduct.title}</h5>
          </div>
          <div>
            <h6>Description</h6>
            <p>{featuredProduct.description}</p>
            <h4 className={styles.yellow}>Price: &#8358;10,000 /pack</h4>
            <Flex
              direction={isMobile ? "column" : "row"}
              align={"center"}
              className={styles.order}
            >
              <Flex className={styles.quantity} align="center">
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
      <Healthy />
    </div>
  );
};

const OrderSection = styled(Orders)``;
export async function getStaticProps() {
  const title = "Orders";
  return { props: { title } };
}

export default OrderSection;
