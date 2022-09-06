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

const specialties = [
  {
    image: "vegetables.jpeg",
    title: "Vegetables and Grains",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum ",
    slug: "",
  },
  {
    image: "farmer.jpeg",
    title: "Livestock and fisheries",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum ",
    slug: "",
  },
  {
    image: "birds.jpeg",
    title: "Poultry farming",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum ",
    slug: "",
  },
  {
    image: "solar.png",
    title: "Green house",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum ",
    slug: "",
  },
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
