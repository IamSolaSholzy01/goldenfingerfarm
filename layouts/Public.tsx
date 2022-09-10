import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { primaryColors } from "../theme/colors";
import useMediaQuery from "../hooks/useMediaQuery";
import logoPic from "../public/images/logo.png";
// import {CartIcon} from "../components/icons/CartIcon";
import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";

const links = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Orders", href: "/orders" },
  { label: "Academy", href: "/academy" },
  { label: "Contact us", href: "/contact" },
];

const footerLinks = [
  { label: "Help and Ordering", href: "/help" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Return and Cancellation", href: "/return" },
  { label: "Delivery Schedule", href: "/schedule" },
  { label: "Get a Call", href: "/contact" },
  { label: "Online Enquiry", href: "/enquiry" },
];

let mobileLinks = [...links];
mobileLinks.push({ label: "Login", href: "/login" });
mobileLinks.push({ label: "Sign up", href: "/signup" });

const Burg: ({
  open,
  className,
}: {
  open: boolean;
  className?: string;
}) => JSX.Element = ({ className }) => (
  <div className={className}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
const Burger = styled(Burg)`
  position: relative;
  width: 35px;

  & > div {
    position: absolute;
    height: 2px;
    width: ${({ open }) => (open ? 0 : "35px")};
    background-color: ${({ open, theme }) =>
      !open ? theme.colors.grayScale.darkGrey : theme.colors.grayScale.white};
    transition: transform 0.5s ease;

    &:first-of-type {
      transform: ${({ open }) =>
        open ? "rotate(45deg)" : "translateY(-10px)"};
      width: 35px;
    }

    &:last-of-type {
      transform: ${({ open }) =>
        open ? "rotate(315deg)" : "translateY(10px)"};
      width: 35px;
    }
  }
`;

const MNav: ({
  className,
  open,
}: {
  className?: string;
  open?: boolean;
}) => JSX.Element = ({ className }) => (
  <div className={className}>
    <ul>
      {mobileLinks.map(({ label, href }) => (
        <li key={label}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const MobileNav = styled(MNav)`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  height: 100%;
  width: ${({ open }) => (open ? "100%" : 0)};
  top: 0;
  right: 0;
  background-image: url("/images/bgnav.png");
  background-size: contain;
  background-color: ${({ theme }) => theme.colors.primary.green};
  transition: width 2s ease;
  z-index: 1;

  ul {
    margin-top: calc(8rem + 35px);
    padding: 0 25px;

    li {
      font-size: 2.5rem;
      padding: 15px 0;
      color: #fff;
      width: 100%;
      border-bottom: 1px solid #fff;
    }
  }
`;

const BurgerContainer = styled.div<{ open?: boolean }>`
  z-index: 2;
  margin-top: ${({ open }) => (open ? "4rem" : 0)};
  margin-bottom: ${({ open }) => (open ? "-4rem" : 0)};
`;

const Heading: ({
  isMobile,
  className,
  title,
}: {
  isMobile: boolean;
  className?: string;
  title?: string;
}) => JSX.Element = ({ isMobile, className, title }) => {
  const [burgerOpen, setBurgerOpen] = React.useState(false);
  useEffect(() => {
    setBurgerOpen(false);
  }, [title]);
  const router = useRouter();
  return (
    <div className={className}>
      {isMobile ? (
        <header className={"mobileHeader"}>
          <div className="logoWrapper">
            <Image src={logoPic} alt={"logo"} />
          </div>
          <BurgerContainer
            open={burgerOpen}
            onClick={() => setBurgerOpen(!burgerOpen)}
          >
            <Burger open={burgerOpen} />
          </BurgerContainer>
        </header>
      ) : (
        <header className={"desktopHeader"}>
          <div className="logoWrapper">
            <Image src={logoPic} alt={"logo"} />
          </div>
          <ul>
            {links.map(({ label, href }) => (
              <li
                key={label}
                className={router.pathname == href ? "active" : ""}
              >
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
          {/*<Link href={'/checkout'}><div className={'cartContainer'}><CartIcon/></div></Link>*/}
          <div className={"auth"}>
            <Link href={"/login"}>Login</Link>
            <Link href={"/signup"}>Sign up</Link>
          </div>
        </header>
      )}
      {isMobile && <MobileNav open={burgerOpen} />}
    </div>
  );
};

const Header = styled(Heading)`
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
  }

  header.desktopHeader {
    padding: 1.5625rem 1.875rem;

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

        a::after {
          width: 0;
          content: "";
          position: absolute;
          bottom: -40%;
          height: 3px;
          left: 0;
          transition: all 0.3s ease-in-out;
          background-color: ${({ theme }) => theme.colors.primary.green};
        }

        a:hover::after,
        &.active a::after {
          content: "";
          width: 100%;
        }
      }

      li.active {
        color: ${({ theme }) => theme.colors.primary.green};
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

  .auth {
    display: flex;

    a {
      padding: 10px 40px;
      border-radius: 7.5px;
      margin: 0 7px;
    }

    a:first-of-type {
      border: 1px solid ${({ theme }) => theme.colors.primary.green};
    }

    a:last-of-type {
      background-color: ${({ theme }) => theme.colors.primary.green};
      color: ${({ theme }) => theme.colors.grayScale.white};
    }
  }
`;

const Footing: ({
  isMobile,
  className,
}: {
  isMobile: boolean;
  className?: string;
}) => JSX.Element = ({ className }) => (
  <div className={className}>
    <div>
      <div className={"socialSection"}>
        <div className="logoWrapper">
          <Image src={logoPic} alt={"logo"} />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras
          vel donec maecenas eu.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ipsum{" "}
        </p>
      </div>
      <div className={"supportSection"}>
        <h3>Customer Support</h3>
        <ul>
          {footerLinks.map(({ label, href }, index) => (
            <li key={index}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={"newsletterSection"}>
        <h3>NewsLetter</h3>
        <form>
          <div>
            <label>Enter your email and we'll send you the latest plans</label>
            <input type={"email"} placeholder={"Enter your email"} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    <span>
      Copyright &copy; 2022. <em>Goldenfinger Farm and Ranches Ltd.</em> All
      Right Reserved.
    </span>
  </div>
);

const Footer = styled(Footing)`
  & > div {
    display: flex;
    flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
    align-items: ${({ isMobile }) => (isMobile ? "center" : "flex-start")};
    padding: ${({ isMobile }) => (isMobile ? "20px" : "90px")};
    text-align: ${({ isMobile }) => (isMobile ? "center" : "left")};

    & > div {
      padding: 20px 10px;
      width: ${({ isMobile }) => (isMobile ? "100%" : "calc(100%/3)")};
    }

    .socialSection {
      padding: 0 10px;
      text-align: ${({ isMobile }) => (isMobile ? "center" : "left")};

      p {
        margin: 0 auto;
        max-width: 500px;
      }

      .logoWrapper {
        margin: 0 auto;
        max-width: 500px;
      }
    }

    .supportSection,
    .newsletterSection {
      h3 {
        margin-bottom: 35px;
        font-size: 2rem;
      }

      li,
      label {
        font-size: 1.5rem;
        margin-bottom: 1.375rem;
      }
    }

    .newsletterSection {
      label {
        display: block;
        padding: ${({ isMobile }) => (isMobile ? "0 40px" : "0")};
        margin: 0 auto;
        max-width: 500px;
      }

      input {
        margin: 20px 0;
        padding: 20px 0;
        font-size: 1.25rem;
        width: 100%;
        text-align: center;
        border: 1.5px solid #898686;
        outline: none;
      }

      button {
        font-family: Space, sans-serif;
        padding: 20px 70px;
        display: block;
        margin: auto;
        font-size: 2rem;
        background-color: ${({ theme }) => theme.colors.primary.yellow};
        color: ${({ theme }) => theme.colors.grayScale.white};
        border: 0;
        border-radius: 10px;
        outline: none;
      }
    }
  }

  & > span {
    display: block;
    width: 100%;
    text-align: center;
    margin: 3rem 0;
    font-size: 1.25rem;

    em {
      color: ${({ theme }) => theme.colors.primary.yellow};
    }
  }
`;
const Public: ({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) => JSX.Element = ({ title, children, className }) => {
  const isMobile = useMediaQuery("(max-width: 895px)");
  return (
    <div className={className}>
      <Head>
        <title>{title + " - GoldenFingerFarm"}</title>
        <meta
          name="description"
          content="GoldenFingerFarm and Ranches Limited"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta name="theme-color" content={primaryColors["green"] as string} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={title} isMobile={isMobile} />
      <main>{children}</main>
      <footer>
        <Footer isMobile={isMobile} />
      </footer>
    </div>
  );
};

const PublicLayout = styled(Public)`
  background-color: ${({ theme }) => theme.colors.grayScale.white};
`;
export default PublicLayout;
