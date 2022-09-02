import { IconSvg } from "./IconSvg";

export const CartIcon: ({iconHeight, iconWidth}: {iconHeight?: string, iconWidth?: string}) => JSX.Element = ({ iconHeight, iconWidth }) => (
    <IconSvg
        iconHeight={iconHeight}
        iconWidth={iconWidth}
        width="47"
        height="46"
        viewBox="0 0 47 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>Cart</title>
        <path d="M8.25 8.25H45.75L41.0625 28.5625H12.9375M41.0625 34.8125H14.5L6.6875 2H2" stroke="#121212" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M37.9375 44.1875C39.6634 44.1875 41.0625 42.7884 41.0625 41.0625C41.0625 39.3366 39.6634 37.9375 37.9375 37.9375C36.2116 37.9375 34.8125 39.3366 34.8125 41.0625C34.8125 42.7884 36.2116 44.1875 37.9375 44.1875Z" stroke="#121212" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.625 44.1875C19.3509 44.1875 20.75 42.7884 20.75 41.0625C20.75 39.3366 19.3509 37.9375 17.625 37.9375C15.8991 37.9375 14.5 39.3366 14.5 41.0625C14.5 42.7884 15.8991 44.1875 17.625 44.1875Z" stroke="#121212" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </IconSvg>
);
