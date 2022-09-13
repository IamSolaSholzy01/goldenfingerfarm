import styled from "styled-components";
import styles from "../styles/Academy.module.scss";
import useMediaQuery from "../hooks/useMediaQuery";
import { classJoin } from "./index";
import Flex from "../components/containers/flex/Flex";
import { PrimaryButton } from "../components/buttons";
import Grid from "../components/containers/grid/Grid";
import Image from "next/image";
import SecondaryButton from "../components/buttons/SecondaryButton";

const lessons = [
  {
    title: "How to grow vegetables and grains",
    image: "pepper.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum ",
  },
  {
    title: "Extensive lessons on poultry farming",
    image: "birds.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum ",
  },
  {
    title: "Extensive livestock and fishery farming",
    image: "farmer.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum ",
  },
  {
    title: "Sales and marketing of farm produce",
    image: "pepper.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum ",
  },
];
const About: ({
  title,
  className,
}: {
  title: string;
  className: string;
}) => JSX.Element = ({ className }) => {
  const isMobile = useMediaQuery("(max-width: 895px)");

  return (
    <div
      className={classJoin(
        className,
        styles.section,
        isMobile ? styles.smSection : styles.lgSection
      )}
    >
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
      <section
        className={classJoin(
          styles.bgGreen,
          styles.gallerySection,
          isMobile ? styles.smGallerySection : styles.lgGallerySection
        )}
      >
        <Flex
          direction={isMobile ? "column-reverse" : "row"}
          gap={5}
          align="center"
        >
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
      <section
        className={classJoin(
          styles.expectSection,
          isMobile ? styles.smExpectSection : styles.lgExpectSection
        )}
      >
        <h3 className={styles.green}>What to expect</h3>
        {lessons.map(({ title, image, description }, index) => (
          <Flex
            key={index}
            direction={isMobile ? "column" : "row"}
            align={"center"}
            gap={3}
            className={styles.lessons}
          >
            <div className={styles.imageContainer}>
              <Image
                src={"/images/home/" + image}
                alt={title.substring(0, 10)}
                layout={"fill"}
              />
            </div>
            <div className={styles.product}>
              <h5>{title}</h5>
              <p>{description}</p>
            </div>
          </Flex>
        ))}
        <SecondaryButton text={"Start Application"} isLink={true} />
      </section>
      <section className={classJoin(styles.bgGreen)}>
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
