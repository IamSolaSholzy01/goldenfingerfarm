import styled from "styled-components";
import styles from "../styles/Academy.module.scss";
import useMediaQuery from "../hooks/useMediaQuery";
import { classJoin } from "./index";
import Flex from "../components/containers/flex/Flex";
import { PrimaryButton } from "../components/buttons";
import Grid from "../components/containers/grid/Grid";

const lessons = [];
const About: ({
  title,
  className,
}: {
  title: string;
  className: string;
}) => JSX.Element = ({ className }) => {
  const isMobile = useMediaQuery("(max-width: 895px)");

  return (
    <div className={className}>
      <section
        className={classJoin(
          styles.loudSection,
          isMobile ? styles.smLoudSection : styles.lgLoudSection
        )}
      >
        <h2 className={styles.green}>
          Golden Fingers Farm and Ranches{" "}
          <span className={styles.yellow}>Academy.</span>
        </h2>
      </section>
      <section>
        <Flex direction={isMobile ? "column-reverse" : "row"}>
          <div>
            <h3>Creating wealth through farming</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
              cras vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ipsum{" "}
            </p>
            <PrimaryButton text={"Apply Now"} />
          </div>
          <Grid columns={4} rows={4}>
            All the images
          </Grid>
        </Flex>
      </section>
      <section>
        <h3>What to expect</h3>
        {lessons.map(({ title, image, description }, index) => (
          <Flex
            key={index}
            direction={isMobile ? "column" : "row"}
            align={"center"}
          >
            <div>Image Container</div>
            <div>
              <h5>{title}</h5>
              <p>{description}</p>
            </div>
          </Flex>
        ))}
      </section>
      <section>
        <h3>Product Gallery</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras vel
        donec maecenas eu.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Ipsum
        <div>
          <h5>Pictures</h5>
          <div>Pictures component</div>
        </div>
        <div>
          <h5>Videos</h5>
          <div>Videos component</div>
        </div>
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

const AboutSection = styled(About)``;
export async function getStaticProps() {
  const title = "Academy";
  return { props: { title } };
}

export default AboutSection;
