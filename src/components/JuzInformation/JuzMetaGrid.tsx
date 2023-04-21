import { Collapse, Heading, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import juzs from "../../data/juzInfo";
import GridLayoutForSearch from "../GridLayoutForSearch";
import JuzMetaCard from "./JuzMetaCard";

const JuzMetaGrid = () => {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  const filteredData = juzs.filter((juz) =>
    juz.juz_name.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <GridLayoutForSearch
      onSearchText={(searchText) => setSearchText(searchText)}
      filtered={filteredData}
      placeHoder="Search Juz..."
    >
      <Collapse in={searchText ? true : false} animateOpacity>
        <Heading marginTop={5}>
          {filteredData.length > 0 ? filteredData.length : "No"}{" "}
          {filteredData.length === 1 ? "Juz" : "Juzs"} Found For "{searchText}"
        </Heading>
      </Collapse>
      <SimpleGrid
        width={"93vw"}
        spacing={7}
        marginTop={8}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
      >
        {filteredData.map((juz) => (
          <JuzMetaCard key={juz.id} juz={juz} />
        ))}
      </SimpleGrid>
    </GridLayoutForSearch>
  );
};

export default JuzMetaGrid;
