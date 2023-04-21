import {
  InputGroup,
  InputLeftElement,
  Input,
  Collapse,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  children: ReactNode;
  onsearchText: (searchText: string) => void;
  searchText: string;
  filteredData: any[];
}

const MetaGrid = ({
  children,
  onsearchText,
  searchText,
  filteredData,
}: Props) => {
  console.log(" meta grid");
  return (
    <>
      <InputGroup width={"80vw"} margin={"auto"}>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search Surah..."
          variant={"filled"}
          onKeyUp={(event) =>
            onsearchText((event.target as HTMLInputElement).value)
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
      <SimpleGrid
        width={"93vw"}
        spacing={7}
        marginTop={8}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
      >
        {children}
      </SimpleGrid>
    </>
  );
};

export default MetaGrid;
