import { Collapse, Heading, SimpleGrid } from "@chakra-ui/react";
import surahs from "../../data/surahInfo";
import SurahMetaCard from "./SurahMetaCard";
import { useState } from "react";
import GridLayoutForSearch from "../GridLayoutForSearch";

const SurahMetaGrid = () => {
  const [searchText, setSearchText] = useState("");

  const filteredData = surahs.filter((surah) =>
    surah.name_simple.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <GridLayoutForSearch
      onSearchText={(searchText) => setSearchText(searchText)}
      filtered={filteredData}
      placeHoder="Search Surah..."
    >
      <Collapse in={searchText ? true : false} animateOpacity>
        <Heading marginTop={5}>
          {filteredData.length > 0 ? filteredData.length : "No"}{" "}
          {filteredData.length === 1 ? "Surah" : "Surahs"} Found For "
          {searchText}"
        </Heading>
      </Collapse>
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
    </GridLayoutForSearch>
  );
};

export default SurahMetaGrid;
