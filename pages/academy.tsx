import styled from "styled-components";

const About: ({
  title,
  className,
}: {
  title: string;
  className: string;
}) => JSX.Element = ({ className }) => {
  return <div className={className}>Academy Page</div>;
};

const AboutSection = styled(About)``;
export async function getStaticProps() {
  const title = "About";
  return { props: { title } };
}

export default AboutSection;
