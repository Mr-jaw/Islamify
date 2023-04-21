import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsSearch } from "react-icons/bs";
interface Props {
  children: ReactNode;
  placeHoder: string;
  filtered: any[];
  onSearchText: (searchText: string) => void;
}
const GridLayoutComponent = ({ placeHoder, children, onSearchText }: Props) => {
  return (
    <>
      <InputGroup width={"80vw"} margin={"auto"}>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder={placeHoder}
          variant={"filled"}
          onKeyUp={(event) =>
            onSearchText((event.target as HTMLInputElement).value)
          }
        />
      </InputGroup>
      {children}
    </>
  );
};

export default GridLayoutComponent;
