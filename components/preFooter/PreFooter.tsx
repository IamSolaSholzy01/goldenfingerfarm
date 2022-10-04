import styled from "styled-components";
import { classJoin } from "../../pages";
import Flex from "../containers/flex/Flex";
import useMediaQuery from "../../hooks/useMediaQuery";
import SecondaryButton from "../buttons/SecondaryButton";
import styles from "./Prefooter.module.scss";
import Image from "next/image";

export const Healthy = () => {
  return (
    <section>
      <h2 className={styles.healthyHeading}>
        Eat <span className={styles.green}>healthy,</span> live{" "}
        <span className={styles.yellow}>healthy</span>
      </h2>
      <p className={styles.healthySpan}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras vel
        donec maecenas eu.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Ipsum{" "}
      </p>
    </section>
  );
};
const PreFooter: ({ className }: { className: string }) => JSX.Element = ({
  className,
}) => {
  const isMobile = useMediaQuery("(max-width: 895px)");

  return (
    <div className={classJoin(className)}>
      <Flex
        direction={isMobile ? "column-reverse" : "row"}
        align={"center"}
        gap={8}
      >
        <div>
          <h3>Join our Academy</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras
            vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ipsum Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ipsum cras vel donec maecenas eu.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Ipsum
          </p>
          <SecondaryButton text={"Start Application"} isLink={true} />
        </div>
        <div className={styles.imageContainer}>
          <Image src={"/images/" + "join.png"} alt={"join"} layout={"fill"} />
        </div>
      </Flex>
      <Healthy />
    </div>
  );
};

const FooterPre = styled(PreFooter)`
  padding: 4rem 4rem 0 4rem;
`;

export default FooterPre;
