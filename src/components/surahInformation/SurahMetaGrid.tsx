import {
  Collapse,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from "@chakra-ui/react";
import surahs from "../../data/surahInfo";
import SurahMetaCard from "./SurahMetaCard";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

const SurahMetaGrid = () => {
  const [searchText, setSearchText] = useState("");

  const filteredData = surahs.filter((surah) =>
    surah.name_simple.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log(filteredData);

  return (
    <>
      <InputGroup width={"80vw"} margin={"auto"}>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search Surah..."
          variant={"filled"}
          onKeyUp={(event) =>
            setSearchText((event.target as HTMLInputElement).value)
          }
        />
      </InputGroup>
      <Collapse in={searchText ? true : false} animateOpacity>
        <Heading marginTop={5}>
          {filteredData.length > 0 ? filteredData.length : "No"}{" "}
          {filteredData.length === 1 ? "Surah" : "Surahs"} Found For "
          {searchText}"
        </Heading>
      </Collapse>
      {/* {searchText && (
      )} */}
      <SimpleGrid
        width={"93vw"}
        spacing={7}
        marginTop={8}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
      >
        {filteredData.map((surah) => (
          <SurahMetaCard key={surah.id} surah={surah} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default SurahMetaGrid;
