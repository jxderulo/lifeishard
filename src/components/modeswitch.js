import React, { useState, useContext } from "react"
import styled from "styled-components"
import Context from "../context"

import Switch from "react-switch"
import { FiSun, FiMoon } from "react-icons/fi"

const StyledSwitch = styled(Switch)`
  && {
    onHandleColor: ${({ theme }) => theme.colors.primary},
    offHandleColor: ${({ theme }) => theme.colors.primary},
  }
`

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const ModeSwitch = () => {
  const { darkMode } = useContext(Context).state
  const { state, setState } = useContext(Context)

  const handleChange = darkMode => {
    setState({ ...state, darkMode: !darkMode })
  }

  return (
    <SwitchWrapper>
      <StyledSwitch
        onChange={handleChange}
        checked={!darkMode}
        onColor="#626262"
        offColor="#212121"
        checkedIcon={
          <IconWrapper>
            <FiSun color="yellow" />
          </IconWrapper>
        }
        uncheckedIcon={
          <IconWrapper>
            <FiMoon color="white" />
          </IconWrapper>
        }
      />
    </SwitchWrapper>
  )
}

export default ModeSwitch
