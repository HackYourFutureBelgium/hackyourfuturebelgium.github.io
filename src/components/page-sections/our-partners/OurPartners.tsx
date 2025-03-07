import React from "react"

import { TopContainer, BottomContainer } from "./style"
import { Title, Pane, Image, Button, Section, Wrapper } from "../../ui"
import printSimpleUrl from "../../../assets/partners/print-simple.svg"
// import openKnowledgeUrl from "../../../assets/partners/open-knowledge.svg"
import digitalBelgiumUrl from "../../../assets/partners/digital-belgium.svg"
import arteveldeUrl from "../../../assets/partners/artevelde-hogeschool.svg"
import bruxellesEmploiUrl from "../../../assets/partners/bruxelles-emploi.svg"
import microsoftUrl from "../../../assets/partners/microsoft.svg"
import DUOforaJOBUrl from "../../../assets/partners/duo_logo.png"
import DigitalSkillsAndJobsCoalition from "../../../assets/partners/DSJC-Member-NEGATIVE-200px.png"
import DatacampUrl from "../../../assets/partners/DCD_logo_regular.png"
import UXAntwerpUrl from "../../../assets/partners/UXAntwerp_logo.png"
import OpenRecognitionAllianceUrl from "../../../assets/partners/ORA-logo-2.png"
import BruxellesFormationUrl from "../../../assets/partners/Bruxelles-Formation_logo.png"
import Antwerp from "../../../assets/partners/antwerp-stad.jpg"
import Axxes from "../../../assets/partners/logo.png"
import Epitech from "../../../assets/partners/EPITECH-TECHNOLOGY.png"
import Vbo from "../../../assets/partners/vbo_feb.png"
import Agoria from "../../../assets/partners/agoria.png"
const data = {
  title: "Our partners",
  cta: "Become a partner",
  ctaLink: "mailto:info@hyfbe.be",
  partnerImages: [
    printSimpleUrl,
    // openKnowledgeUrl,
    digitalBelgiumUrl,
    arteveldeUrl,
    bruxellesEmploiUrl,
    microsoftUrl,
    DUOforaJOBUrl,
    DigitalSkillsAndJobsCoalition,
    DatacampUrl,
    UXAntwerpUrl,
    OpenRecognitionAllianceUrl,
    BruxellesFormationUrl,
    Axxes,
    Antwerp,
    Epitech,
    Vbo,
    Agoria,
  ],
}

const OurPartners = () => (
  <Section>
    <Wrapper>
      <TopContainer>
        <Title level={2}>{data.title}</Title>
        <Button
          is="a"
          variant="minimal"
          iconRight="arrow-right"
          href={data.ctaLink}
        >
          {data.cta}
        </Button>
      </TopContainer>
      <BottomContainer>
        {data.partnerImages.map((value, index) => (
          <Pane width="170px" display="inline-block" key={index}>
            <Image
              src={value}
              width="100%"
              // // old grey-out styling for the <Image> elements
              // //   removed so the logos will be colored
              // //   preserved for posterity
              // style={{
              //   filter: "grayscale(1)",
              //   opacity: index === 1 || index === 3 ? "0.3" : 1,
              // }}
            />
          </Pane>
        ))}
      </BottomContainer>
    </Wrapper>
  </Section>
)

export default OurPartners
