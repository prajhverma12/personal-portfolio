import React from "react";
import styled from "styled-components";
import { FaBars, FaLinkedin, FaGithub, FaTwitter, FaFacebook,} from "react-icons/fa";
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
import PrajImg from "../../images/Praj.jpeg";


const SocialMediaIcon = styled.a`
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  border: 2px solid ${({ theme }) => theme.primary};
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

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
          <ProfileImage src={PrajImg} alt="Profile" />
          <div
            style={{
              marginBottom: "10px",
            }}
          >
            <h2
              style={{
                color: "white",
                fontSize: "26px",
                fontWeight: "600",
              }}
            >
              Prajwal Verma
            </h2>
            <p
              style={{
                color: "white",
                fontSize: "16px",
                marginBottom: "5px",
                textAlign: "center",
              }}
            >
              Chicago, IL, US
            </p>
            <p
              style={{
                color: "white",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              <NavLink href="tel:+12177177320">+1 (217) 717-7320</NavLink>
            </p>
          </div>
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
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
          <div
            style={{
              marginBottom: "10px",
            }}
          >
            <h2
              style={{
                color: "white",
                fontSize: "26px",
                fontWeight: "600",
                paddingTop: "20px"
              }}
            >
              Prajwal Verma
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "15px",
                marginBottom: "2px",
              }}
            >
              Chicago, IL, US
            </p>
            <p
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "15px",
              }}
            >
              <MobileLink href="tel:+12177177320">+1 (217) 717-7320</MobileLink>
            </p>
          </div>
          {/* Social Media Icons Mobile */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                marginBottom: "15px",
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
