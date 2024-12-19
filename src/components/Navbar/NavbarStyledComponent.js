import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
// import _default from "../../themes/default";

export const Nav = styled.div`

  @media screen and (min-width: 769px) {
  background-color: ${({ theme }) => theme.card_light};
    width: 300px; 
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }
    
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: start;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;
export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;

`;

export const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;
export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;
export const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  list-style: none;
  padding: 0;
  width: 100%;
  height: 100%; /* Ensures vertical centering works */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: fixed;
  top: 40px;
  left: 0;
  bottom: 0;
  right: 0;
  width: 80%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light};

  /* Sliding & Fading Effect */
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};

  /* Smooth Transitions */
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;
