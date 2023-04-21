import { Button, Card, HStack, Heading, Switch, Text } from "@chakra-ui/react";
import "./App.css";
import SurahMetaGrid from "./components/surahInformation/SurahMetaGrid";
import JuzMetaGrid from "./components/JuzInformation/JuzMetaGrid";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
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

      {toggle ? <SurahMetaGrid /> : <JuzMetaGrid />}
    </>
  );
}

export default App;
