import styled from "styled-components";
import useMediaQuery from "../hooks/useMediaQuery";
import { classJoin } from "./index";
import styles from "../styles/Academy.module.scss";
import Grid from "../components/containers/grid";
import { PrimaryButton } from "../components/buttons";
import PreFooter from "../components/preFooter/PreFooter";

const Contact: ({
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
        <h2 className={styles.green}>Contact Us</h2>
        <p>Want to make enquiries on any issue? , send us a message.</p>
      </section>
      <section className={styles.bgGreen}>
        <Grid columns={isMobile ? 1 : 2} columnGap={6}>
          <div className={styles.formGroup}>
            <label>First Name</label>
            <input />
          </div>
          <div className={styles.formGroup}>
            <label>Last Name</label>
            <input />
          </div>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input />
          </div>
          <div className={styles.formGroup}>
            <label>Phone number</label>
            <input />
          </div>
          <div className={classJoin(styles.formGroup, styles.gridColumn)}>
            <label>Message</label>
            <textarea></textarea>
          </div>
        </Grid>
        <PrimaryButton text={"Submit"} />
      </section>
      <PreFooter />
    </div>
  );
};

const ContactSection = styled(Contact)``;
export async function getStaticProps() {
  const title = "Contact";
  return { props: { title } };
}

export default ContactSection;
