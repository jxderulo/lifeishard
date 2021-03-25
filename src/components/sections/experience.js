import React, { useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { motion } from "framer-motion"

import { useOnScreen } from "../../hooks/"
import Context from "../../context/"
import ContentWrapper from "../../styles/contentWrapper"

// Full Width Section
const StyledSection = styled(motion.section)`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 6rem;
`

// Fixed width container for content stuff
const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .section_title {
    margin-bottom: 2rem;
  }
  .experience h3 {
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .experience h4 {
    margin-top: 0rem;
  }
`

// Add more styled components here

const Experience = ({ content }) => {
  const { frontmatter, body } = content[0].node

  // Required for animation
  const ref = useRef()
  const onScreen = useOnScreen(ref)
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <StyledSection
      id="experience"
      ref={ref}
      variants={variants}
      animate={onScreen ? "visible" : "hidden"}
    >
      <StyledContentWrapper>
        <h3 className="section_title">{frontmatter.title}</h3>
        <div className="experience">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

Experience.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        body: PropTypes.string.isRequired,
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Experience
