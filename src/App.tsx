import styled, { createGlobalStyle } from "styled-components";
import DetailsSection from "./components/DetailsSection";
import Explainer from "./components/Explainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HelpButton from "./components/HelpButton";
import HyperLinkedText from "./components/HyperLinkedText";
import Inventory from "./components/Inventory";
import NumAttrSection from "./components/NumAttrSection";
import SelectorSection from "./components/SelectorSection";
import { useGameContext } from "./context/gameContext";
import { useHeroContext } from "./context/heroContext";
import { bioforms } from "./data/bioforms";
import types from "./data/heroTypes";
import { RoundedTop } from "./styles/defaults";

const Global = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.palette.common.background};
    color: ${(props) => props.theme.palette.common.text};
    font-size: 1.4rem;
    }

  a {
    color: ${(props) => props.theme.palette.common.foreground};
  }
  
  * {
    border-color: ${(props) => props.theme.palette.common.foreground};
  }
`;

const Wrapper = styled(RoundedTop)`
  max-width: 88vw;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  min-height: 96vh;
  border-width: 5px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 640px) {
    margin-top: 0;
    max-width: 100vw;
    border: none;
  }
`;

const Main = styled.div`
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HTitleText = styled.h2`
  color: ${(props) => props.theme.palette.common.text};
`;

const HDescr = styled.p`
  color: ${(props) => props.theme.palette.common.text};
  font-size: 1.8rem;
  margin: 2rem 0;
`;

const Spacer = styled.div`
  position: relative;
  height: 0px;
  width: 100%;
  border-style: dashed;
  border-width: 1px 0 0 0;
  margin: 4rem 0;
`;

const HSpacer = styled(Spacer)`
  margin-top: 0;
`;

function App() {
  const {
    hero,
    final,
    setStat,
    setEffort,
    setBioform,
    setType,
    setAbility,
    setTypeLoot
  } = useHeroContext();
  const { settings } = useGameContext();
  return (
    <>
      <Wrapper>
        <Global />
        <Header />
        <Main>
          <HSpacer />
          <HTitleText>Details</HTitleText>
          <HDescr>
            <HyperLinkedText
              text={
                "Who are you? Where do you come from? Most important, what shall we call you?"
              }
            />
          </HDescr>
          <DetailsSection />
          <Spacer />

          <HelpButton keyVal={"Bioform"}>
            <HTitleText>Bioform</HTitleText>
          </HelpButton>
          <HDescr>
            <HyperLinkedText
              text={
                "What are you? What cultural traditions do you follow, and which ones have you chosen not to adopt?"
              }
            />
          </HDescr>
          <SelectorSection
            value={hero.bioform}
            stringify={(val) => (!val ? "" : val.name)}
            setter={(val) => setBioform(bioforms.find((bf) => bf.name === val))}
            options={bioforms}
            notSetMsg="Pick a Bioform!"
          />
          <Spacer />
          <HelpButton keyVal={"Type"}>
            <HTitleText>Type</HTitleText>
          </HelpButton>
          <HDescr>
            <HyperLinkedText
              text={
                "How were you trained? Did you master the sword? Are you wandering in search for arcane secrets or is glory the reward you seek? Your TYPE defines the LOOT and ABILITIES you start with."
              }
            />
          </HDescr>
          <SelectorSection
            value={hero.type}
            stringify={(val) => (!val ? "" : val.name)}
            setter={(val) => setType(types.find((t) => t.name === val))}
            options={types}
            notSetMsg="Pick a Type!"
          />
          <Spacer />
          <HelpButton keyVal={"STATS"}>
            <HTitleText>Stats</HTitleText>
          </HelpButton>
          <HDescr>
            <HyperLinkedText
              text={
                "What is your expertise? Are you an intelligent wizard or a legendary barbarian? You'll add the value of these STATS to the result of a D20 roll."
              }
            />
          </HDescr>
          <NumAttrSection
            attrObj={hero.stats}
            final={final.final.stats}
            bioform={final.bioform.stats}
            loot={final.loot.stats}
            setter={setStat}
            max={settings.maxStats}
          />
          <Spacer />
          <HelpButton keyVal={"EFFORT"}>
            <HTitleText>Effort</HTitleText>
          </HelpButton>
          <HDescr>
            <HyperLinkedText
              text={
                "Are you willing to put in the sweat? How good are you at making progress, EFFORT will determine the succes rate of your actions!"
              }
            />
          </HDescr>
          <NumAttrSection
            attrObj={hero.effort}
            final={final.final.effort}
            bioform={final.bioform.effort}
            loot={final.loot.effort}
            setter={setEffort}
            max={settings.maxEffort}
          />
          <Spacer />
          <HelpButton keyVal={"ABILITIES"}>
            <HTitleText>Abilities</HTitleText>
          </HelpButton>
          <HDescr>
            <HyperLinkedText
              text={
                "Your TYPE allows you to choose one ABILITY that defines your HERO!"
              }
            />
          </HDescr>
          <SelectorSection
            value={hero.ability}
            stringify={(val) => (!val ? "" : val.name)}
            setter={(val) =>
              setAbility(
                hero.type?.startingAbilities.find((t) => t.name === val)
              )
            }
            options={hero.type?.startingAbilities || []}
            notSetMsg={
              hero.type
                ? "Select an option to see more info!"
                : "Select a TYPE first!"
            }
          />
          <Spacer />

          <HelpButton keyVal={"LOOT"}>
            <HTitleText>Loot</HTitleText>
          </HelpButton>
          <HDescr>
            <HyperLinkedText
              text={
                "HEROES are nothing without their LOOT, they are the core of the game and represent your growth as a HERO while you take down mighty foes and save empires from certain doom! Your TYPE provides 1 piece of LOOT, and you are free to choose 4 LOOT from the starting list!"
              }
            />
          </HDescr>
          <SelectorSection
            value={hero.typeLoot}
            stringify={(val) => (!val ? "" : val.name)}
            setter={(val) =>
              setTypeLoot(hero.type?.startingLoot.find((t) => t.name === val))
            }
            options={hero.type ? hero.type.startingLoot : []}
            notSetMsg={
              hero.type
                ? "Select an option to see more info!"
                : "Select a TYPE first!"
            }
          />
          <Spacer />

          <HelpButton keyVal={"INVENTORY"}>
            <HTitleText>INVENTORY</HTitleText>
          </HelpButton>
          <HDescr>
            <HyperLinkedText
              text={
                "Pick 4 LOOT to flesh out your hero and prepare for the perils you will face!"
              }
            />
          </HDescr>
          <Inventory />
        </Main>
      </Wrapper>
      <Explainer />
      <Footer />
    </>
  );
}

export default App;
