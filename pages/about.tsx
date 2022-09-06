import styles from '../styles/About.module.css'
import styled from "styled-components";
import useMediaQuery from "../hooks/useMediaQuery";
import {PrimaryButton} from "../components/buttons";
import Image from "next/image";
import aboutBg from "../public/images/aboutbg.webp";
import fruits from "../public/images/fruits.webp";
import farmer from "../public/images/home/farmer.webp";

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
                <div className={styles.row1}>
                    <div className={styles.col}>
                        <span className={styles.h2}>Welcome to <p className={styles.h1}>Golden Finger <span className={styles.green}>Farm</span> & <span className={styles.yellow}>Ranches</span> Ltd.</p></span>
                        <PrimaryButton text="Explore Market" onClick={() => {}} />
                    </div>
                    <Image src={fruits} alt="Fruits" width={400} height={409} />
                </div>
                <div style={{textAlign: "center"}}>
                    <h2 className={styles.h2}>Our Vision</h2>
                    <p style={{margin: "40px 0"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum  
                    </p>
                </div>
                <div style={{textAlign: "center"}}>
                    <h2 className={styles.h2}>Our Mission</h2>
                    <p style={{margin: "40px 0"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum  
                    </p>
                </div>
            </section>
            <section className={styles.faqs}>
                <div className={styles.row2}>
                    <div className={styles.col2} style={{width: "412px"}}>
                        <h1 className={classJoin(styles.h1, styles.white)}>FAQs</h1>
                        <Image src={farmer} alt="Farmer" width={412} height={391} />
                    </div>
                    <div className={styles.col2} style={{width: "calc(100% - 412px)", alignItems: "center"}}>
                        <div className={styles.card}></div>
                    </div>
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
