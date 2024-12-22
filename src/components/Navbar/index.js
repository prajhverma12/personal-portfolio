import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { FaBars, FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";
import {
  Nav,
  NavLink,
  NavbarContainer,
  NavItems,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./NavbarStyledComponent";
import { Bio } from "../../data/constants";
import PrajImg from "../../images/PrajImage.jpg";


const SocialMediaIcon = styled.a`
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Nav>
      <NavbarContainer>

        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <img
            src={PrajImg}
            alt="Profile"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "10px",
            }}
          />
          <h2
            style={{
              color: "white",
              marginBottom: "5px",
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            Prajwal Verma
          </h2>

          {/* Social Media Icons Web */}
          <div
              style={{
                display: "flex",
                gap: "16px",
                marginBottom: "10px",
              }}
            >
              <SocialMediaIcon href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size="2rem" />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.github} target="_blank" rel="noopener noreferrer">
                <FaGithub size="2rem" />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter size="2rem" />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook size="2rem" />
              </SocialMediaIcon>
            </div>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Portfolio</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <img
            src={PrajImg}
            alt="Profile"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "10px",
            }}
          />
          <h2
            style={{
              color: "white",
              marginBottom: "5px",
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            Prajwal Verma
          </h2>

          {/* Social Media Icons Mobile */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                marginBottom: "10px",
              }}
            >
              <SocialMediaIcon href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size="2rem" />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.github} target="_blank" rel="noopener noreferrer">
                <FaGithub size="2rem" />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter size="2rem" />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook size="2rem" />
              </SocialMediaIcon>
            </div>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
