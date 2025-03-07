import React, { useState } from "react"

import { StyledHeader, MobileNavHeader } from "./style"
import { Pane, Dialog, Button } from "../ui"
import Logo from "../logo/Logo"
import TopNav from "../navigation/top-nav/TopNav"
import { BREAKPOINT } from "../../utils/constants"
import Note from "../ui/note/Note";

const TopBar = ({ page }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <StyledHeader>
      {/* Sticky Note */}
      <Note text="Website Under Construction" />
      <Pane
        width="100%"
        maxWidth={BREAKPOINT.XL}
        margin="auto"
        height="100%"
        alignItems="center"
      >
        <Logo />
        <TopNav
          onBurgerNavClicked={() => setIsMobileNavOpen(true)}
          currentPage={page}
          isMobile={false}
        />
      </Pane>
      <Dialog isVisible={isMobileNavOpen} isFullScreen>
        <MobileNavHeader>
          <Button
            iconLeft="arrow-left"
            onClick={() => setIsMobileNavOpen(false)}
            variant="minimal"
          >
            Back
          </Button>
        </MobileNavHeader>
        {/* <MobileNav> */}
        <TopNav
          isMobile
          onBurgerNavClicked={undefined}
          currentPage={undefined}
        />
        {/* </MobileNav> */}
      </Dialog>
    </StyledHeader>
  )
}

export default TopBar
