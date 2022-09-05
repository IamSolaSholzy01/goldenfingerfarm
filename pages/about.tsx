import styles from '../styles/About.module.css'
import styled from "styled-components";
import useMediaQuery from "../hooks/useMediaQuery";
import {PrimaryButton} from "../components/buttons";
import Image from "next/image";
import aboutBg from "../public/images/aboutbg.webp";
import fruits from "../public/images/fruits.webp";

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
            <section className={styles.explore}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <h2 className={styles.h2}>Welcome to <h1 className={styles.h1}>Golden Finger <span className={styles.green}>Farm</span> & <span className={styles.yellow}>Ranches</span> Ltd.</h1></h2>
                        <PrimaryButton text="Explore Market" onClick={() => {}} />
                    </div>
                    <Image src={fruits} alt="Fruits" width={400} height={409} />
                </div>
                <div>
                    <h2 className={styles.h2}>Our Vision</h2>
                </div>
                <div>
                    <h2 className={styles.h2}>Our Mission</h2>
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
