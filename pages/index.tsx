import styles from "../styles/Home.module.scss";
import styled from "styled-components";
import useMediaQuery from "../hooks/useMediaQuery";
import { PrimaryButton } from "../components/buttons";
// import solarImage from "../public/images/home/solar.png";
// import birdsImg from "../public/images/home/birds.jpeg";
// import vegetablesImage from "../public/images/home/vegetables.jpeg";
// import farmerImage from "../public/images/home/farmer.jpeg";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Grid from "../components/containers/grid/Grid";
import SecondaryButton from "../components/buttons/SecondaryButton";

const specialties = [
  {
    image: "vegetables.webp",
    title: "Vegetables and Grains",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum ",
    slug: "",
  },
  {
    image: "farmer.webp",
    title: "Livestock and fisheries",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum ",
    slug: "",
  },
  {
    image: "birds.webp",
    title: "Poultry farming",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum ",
    slug: "",
  },
  {
    image: "solar.webp",
    title: "Green house",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum ",
    slug: "",
  },
];
const productCategories = [
  { title: "Green Pepper", image: "greenpepper.webp" },
  { title: "Pepper", image: "pepper.webp" },
  { title: "Poultry & Livestock", image: "birds.webp" },
  { title: "Fish & Aquatics", image: "farmer.webp" },
  { title: "Tomato", image: "tomato.webp" },
  { title: "Cucumbers", image: "cucumber.webp" },
];

const classJoin = (...classes: string[]) => {
  return classes.join(" ");
};

const Home: ({
  title,
  className,
}: {
  title: string;
  className: string;
}) => JSX.Element = ({ className }) => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 895px)");
  return (
    <div className={className}>
      <section
        className={classJoin(
          styles.bgSection,
          isMobile ? styles.smBgSection : styles.lgBgSection
        )}
      >
        <h1>
          Know your <span>farmer,</span>
        </h1>
        <h1>
          Know your <span>food.</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras
          vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ipsum
        </p>
        <PrimaryButton text={"Explore Market"} />
      </section>
      <section
        className={classJoin(
          styles.specialtiesSection,
          isMobile ? styles.smSpecialtiesSection : styles.lgSpecialtiesSection
        )}
      >
        <h2>What we do</h2>
        <p>
          We specialise in the organic production of various kinds of food crops
          including grains, vegetables; poultry & birds - layers and boilers as
          well as livestock including cows and bulls.
        </p>
        <div>
          {specialties.map(({ title, description, image, slug }, index) => (
            <div key={index}>
              <div className={styles.imageContainer}>
                <Image
                  src={"/images/home/" + image}
                  alt={title}
                  layout={"fill"}
                />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <PrimaryButton
                text={"Read More"}
                onClick={() => router.push(`/products/${slug}`)}
              />
            </div>
          ))}
        </div>
        <p>
          <Link href="">
            High end agriculture for all (View all our activities)
          </Link>
        </p>
      </section>
      <section
        className={classJoin(
          styles.shopSection,
          isMobile ? styles.smShopSection : styles.lgShopSection
        )}
      >
        <div>
          <h3>
            We provide <span className={styles.yellow}>fresh</span>{" "}
            <span className={styles.green}>food</span> for your family
          </h3>
          <PrimaryButton text={"View Shop"} />
        </div>
      </section>
      <section
        className={classJoin(
          styles.productsSection,
          isMobile ? styles.smProductsSection : styles.lgProductsSection
        )}
      >
        <h3>
          Our <span className={styles.green}>Products</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras
          vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ipsum
        </p>
        <Grid columns={isMobile ? 1 : 3} columnGap={2.3} rowGap={8}>
          {productCategories.map(({ title, image }, index) => (
            <div key={index}>
              <div className={styles.imageContainer}>
                <Image
                  src={"/images/home/" + image}
                  alt={title}
                  layout={"fill"}
                />
              </div>
              <h5>{title}</h5>
            </div>
          ))}
        </Grid>
        <SecondaryButton text={"Shop our Products"} isLink={true} />
        <div>
          <h3>
            Eat <span className={styles.green}>healthy</span> live{" "}
            <span className={styles.yellow}>healthy</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras
            vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ipsum{" "}
          </p>
        </div>
        <Grid align={"center"} columns={isMobile ? 1 : 2} columnGap={5}>
          <div className={styles.imageContainer}>
            <Image
              src={"/images/home/" + "happyfarmer.webp"}
              alt={"health"}
              layout={"fill"}
            />
          </div>
          <div>
            <h3>Fresh and organic food made our health history</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
              cras vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ipsum{" "}
            </p>
            <PrimaryButton text={"Learn more"} />
          </div>
        </Grid>
      </section>
      <section className={styles.whySection}>
        <h4>Why you should choose us</h4>
        <Grid columns={isMobile ? 1 : 4} align={"center"}>
          <div>
            <span>25+</span>
            <span>Years of experience</span>
          </div>
          <div>
            <span>98+</span>
            <span>Expert member</span>
          </div>
          <div>
            <span>49+</span>
            <span>Win awards</span>
          </div>
          <div>
            <span>85+</span>
            <span>Worldwide branches</span>
          </div>
        </Grid>
      </section>
      <section></section>
      <section></section>
    </div>
  );
};

const HomeSection = styled(Home)`
  section:first-of-type {
    h1 {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.grayScale.white};
    }

    h1:first-of-type {
      span {
        color: ${({ theme }) => theme.colors.primary.green};
      }
    }

    h1:last-of-type {
      span {
        color: ${({ theme }) => theme.colors.primary.yellow};
      }
    }

    p {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.grayScale.white};
    }
  }
`;

export async function getStaticProps() {
  const title = "Home";
  return { props: { title } };
}

export default HomeSection;
