import { Collapse, Fade, HStack, Switch, Text } from "@chakra-ui/react";
import "./App.css";
import SurahMetaGrid from "./components/surahInformation/SurahMetaGrid";
import JuzMetaGrid from "./components/JuzInformation/JuzMetaGrid";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const pin = 1236;
  const pin1 = "1236";
  return (
    <>
      <HStack justifyContent={"center"} marginBottom={4}>
        <Text fontWeight={"bold"}>Juz</Text>
        <Switch
          colorScheme="green"
          isChecked={toggle}
          onChange={() => setToggle(!toggle)}
        />
        <Text fontWeight={"bold"}>Surah</Text>
      </HStack>
      <Collapse in={toggle}>
        <SurahMetaGrid />
      </Collapse>
      <Collapse in={!toggle}>
        <JuzMetaGrid />
      </Collapse>
    </>
  );
}

export default App;
