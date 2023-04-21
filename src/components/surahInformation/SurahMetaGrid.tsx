import SurahMetaCard from "./SurahMetaCard";
import MetaGrid from "../MetaGrid";
import surahs from "../../data/surahInfo";
import { useState } from "react";

const SurahMetaGrid = () => {
  const [searchText, setSearchText] = useState("");

  const filteredData = surahs.filter((surah) =>
    surah.name_simple.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log("surah meta grid");

  return (
    <MetaGrid
      onsearchText={(searchText) => setSearchText(searchText)}
      filteredData={filteredData}
      searchText={searchText}
    >
      {filteredData.map((surah) => (
        <SurahMetaCard key={surah.id} surah={surah} />
      ))}
    </MetaGrid>
  );
};

export default SurahMetaGrid;
