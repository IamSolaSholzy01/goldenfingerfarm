import styled from "styled-components";
import styles from "../styles/Academy.module.scss";
import useMediaQuery from "../hooks/useMediaQuery";
import { classJoin } from "./index";

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
    </div>
  );
};

const AboutSection = styled(About)``;
export async function getStaticProps() {
  const title = "Academy";
  return { props: { title } };
}

export default AboutSection;
