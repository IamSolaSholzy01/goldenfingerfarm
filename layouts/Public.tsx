import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {NextComponentType} from "next";
import styled from "styled-components";
import {primaryColors} from "../theme/colors";
import useMediaQuery from "../hooks/useMediaQuery";
import logoPic from "../public/images/logo.png"
import {CartIcon} from "../components/icons/CartIcon";
import React from "react";

const links = [
    {label: "Home", href: "/"},
    {label: "About us", href: "/about"},
    {label: "Orders", href: "/orders"},
    {label: "Academy", href: "/academy"},
    {label: "Contact us", href: "/contact"},
]
const Burg: ({open, className}: { open: boolean, className?: string }) => JSX.Element = ({className}) => <div
    className={className}>
    <div></div>
    <div></div>
    <div></div>
</div>
const Burger = styled(Burg)`
  position: relative;
  width: 35px;
    & > div {
      position: absolute;
      height: 2px;
      width: ${({open}) => open ? 0 : '35px'};
      background-color: black;
      transition: transform 0.5s ease;
      
      &:first-of-type {
        transform: ${({open}) => open ? 'rotate(45deg)' : 'translateY(-10px)'};
        width: 35px;
      }
      &:last-of-type {
        transform: ${({open}) => open ? 'rotate(315deg)' : 'translateY(10px)'};
        width: 35px;
      }
    }
    
`

const MNav: ({className, open}: {className?: string, open?: boolean}) => JSX.Element = ({className}) => <div className={className}>
    <ul>{
        links.map(({label, href}) => <li key={label}>
            <Link href={href}>{label}</Link>
        </li>)
    }</ul>
</div>

const MobileNav = styled(MNav)`
    display: ${({open}) => open ? 'block' : 'none'};
    position: fixed;
    height: 100%;
    width: ${({open}) => open ? '100%' : 0};
    top: 0;
    right: 0;
    background-image: url('/images/bgnav.png');
    background-size: contain;
    background-color: ${({theme}) => theme.colors.primary.green};
    transition: width 2s ease;
  
    ul {
      margin-top: calc(12rem + 35px);
      padding: 0 25px;
      li {
        font-size: 2.5rem;
        padding: 15px 0;
        color: #fff;
        width: 100%;
        border-bottom: 1px solid #fff;
      }
    }
`

const BurgerContainer = styled.div<{open?: boolean}>`
    z-index: 500;
    margin-top: ${({open}) => open ? '6rem' : 0};
    margin-bottom: ${({open}) => open ? '-6rem' : 0}

`

const Heading: ({isMobile, className}: { isMobile: boolean, className?: string }) => JSX.Element = ({
                                                                                                        isMobile,
                                                                                                        className
                                                                                                    }) => {
    const [burgerOpen, setBurgerOpen] = React.useState(false);
    return (
        <div className={className}>
            {isMobile ? <header className={'mobileHeader'}>
                <div className="logoWrapper"><Image src={logoPic} alt={'logo'}/></div>
                <BurgerContainer open={burgerOpen} onClick={()=>setBurgerOpen(!burgerOpen)}><Burger open={burgerOpen} /></BurgerContainer>
            </header> : <header className={'desktopHeader'}>
                <div className="logoWrapper"><Image src={logoPic} alt={'logo'}/></div>
                <ul>{
                    links.map(({label, href}) => <li key={label}>
                        <Link href={href}>{label}</Link>
                    </li>)
                }</ul>
                <Link href={'/checkout'}><div className={'cartContainer'}><CartIcon/></div></Link>
            </header>}
            {isMobile && <MobileNav open={burgerOpen} />} />}
        </div>
    )
}

const Header = styled(Heading)`
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
  }

  header.desktopHeader {
    padding: 1.5625rem 6.875rem;

    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      column-gap: 2rem;

      li {
        color: #020202;
        transition: all 0.3s ease-in-out;
        position: relative;

        &:hover, &:active {
          color: ${({theme}) => theme.colors.primary.green};
        }

        a::after {
          width: 0;
          content: '';
          position: absolute;
          bottom: -40%;
          height: 3px;
          left: 0;
          transition: all 0.3s ease-in-out;
          background-color: ${({theme}) => theme.colors.primary.green};
        }

        a:hover::after, &.active a::after {
          content: "";
          width: 100%;
        }
      }
    }

    .cartContainer {
      cursor: pointer;
    }
  }

  header.mobileHeader {
      padding: 1.5625rem 2.875rem;
  }

  .logoWrapper {
    max-width: 12rem;
    max-height: 5rem;
  }

  @media (min-width: 1000px) {
    & .logoWrapper {
      max-width: 16rem;
      max-height: 5rem;
    }
  }
`

const Public: ({
                   title,
                   children,
                   className
               }: { title: string, children: NextComponentType, className?: string }) => JSX.Element = ({
                                                                                                            title,
                                                                                                            children,
                                                                                                            className
                                                                                                        }) => {
    const isMobile = useMediaQuery('(max-width: 820px)')
    return <div className={className}>
        <Head>
            <title>{title + ' - GoldenFingerFarm'}</title>
            <meta name="description" content="GoldenFingerFarm and Ranches Limited"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
            <meta name="theme-color" content={primaryColors['green'] as string}/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Header isMobile={isMobile}/>
        <main>
            {children}
        </main>
        <footer>
            My Footer
        </footer>
    </div>
}

const PublicLayout = styled(Public)`
  background-color: ${({theme}) => theme.colors.grayScale.white};
`
export default PublicLayout