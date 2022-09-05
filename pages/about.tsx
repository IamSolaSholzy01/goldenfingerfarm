import styles from '../styles/About.module.css'
import styled from "styled-components";
import useMediaQuery from "../hooks/useMediaQuery";
import {PrimaryButton} from "../components/buttons";
import Image from "next/image";
import aboutBg from "../public/images/aboutbg.webp";

const classJoin = (...classes: string[]) => {
    return classes.join(" ")
}

const About: ({title, className}: { title: string, className: string }) => JSX.Element = ({className}) => {
    const isMobile = useMediaQuery('(max-width: 895px)')
    return (
        <div className={className}>
            <section className={classJoin(styles.bgSection, (isMobile ? styles.smBgSection : styles.lgBgSection))}>
                <Image
                    src={aboutBg}
                    alt="About Section Background"
                    layout="fill"
                    style={{filter: "brightness(4)"}}
                />
                <div className={styles.herotext}>
                    <h1 className={styles.h1}>About <span className={styles.green}>Us</span></h1>
                    <span>carousel</span>
                </div>
            </section>
        </div>
    )
}

const AboutSection = styled(About)`
  
`

export async function getStaticProps() {
    const title = 'About'
    return {props: {title}}
}

export default AboutSection
