import styles from '../styles/Home.module.css'
import styled from "styled-components";
import useMediaQuery from "../hooks/useMediaQuery";
import {PrimaryButton} from "../components/buttons";

const Home: ({title, className}: { title: string, className: string }) => JSX.Element = ({className}) => {
    const isMobile = useMediaQuery('(max-width: 895px)')
    return (
        <div className={className}>
            <section className={styles.bgSection + ' ' + (isMobile ? styles.smBgSection : styles.lgBgSection)}>
                <h1>Know your <span>farmer,</span></h1>
                <h1>Know your <span>food.</span></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras vel donec maecenas eu.Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
                </p>
                <PrimaryButton text={'Explore Market'} />
            </section>
        </div>
    )
}

const HomeSection = styled(Home)`
  section:first-of-type {
    h1 {
      font-weight: 600;
      color: ${({theme}) => theme.colors.grayScale.white};
    }

    h1:first-of-type {
      span {
        color: ${({theme}) => theme.colors.primary.green};
      }
    }

    h1:last-of-type {
      span {
        color: ${({theme}) => theme.colors.primary.yellow};
      }
    }
    
    p {
      font-size: 1.5rem;
      color: ${({theme}) => theme.colors.grayScale.white};
    }
  }
`

export async function getStaticProps() {
    const title = 'Home'
    return {props: {title}}
}

export default HomeSection
