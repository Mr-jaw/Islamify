import { Card, Stack, HStack, Heading, Text } from "@chakra-ui/react";

export interface SurahInfo {
  id: number;
  revelation_place: string;
  revelation_order: number;
  bismillah_pre: boolean;
  name_complex: string;
  name_arabic: string;
  verses_count: number;
  pages: number[];
  translated_name: {
    name: string;
  };
}

interface Props {
  surah: SurahInfo;
}
const SurahMetaCard = ({ surah }: Props) => {
  return (
    <Card className="surah-card" padding={2} paddingX={5}>
      <Stack
        style={{ borderBottom: ".1em solid #95d5b2" }}
        className="surah-heading"
        paddingBottom={4}
      >
        <HStack color={"#B7E4C7"} gap={1} marginX={"auto"}>
          <Heading
            style={{ transform: "translateY(.1em)" }}
            className="arabic"
            size={"xl"}
            fontWeight={350}
          >
            {surah.name_arabic}
          </Heading>
          <Heading whiteSpace={"nowrap"} size={"md"} fontWeight={400}>
            ({surah.name_complex})
          </Heading>
        </HStack>
        <Heading
          marginTop={2}
          size={"md"}
          fontWeight={400}
          textAlign={"center"}
          as={"h3"}
        >
          {surah.translated_name.name}
        </Heading>
      </Stack>
      <Stack gap={2} paddingY={2} marginTop={2}>
        <HStack justifyContent={"space-between"}>
          <Text className="stat-key">Surah Number</Text>
          <Text className="stat-value">{surah.id}</Text>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text className="stat-key">Verse Count</Text>
          <Text className="stat-value">{surah.verses_count}</Text>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text className="stat-key">Page Count</Text>
          <Text className="stat-value">
            {surah.pages[1] - surah.pages[0] === 0
              ? 1
              : surah.pages[1] - surah.pages[0]}{" "}
            ({surah.pages[0]} - {surah.pages[1]})
          </Text>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text className="stat-key">Revelation Order</Text>
          <Text className="stat-value">{surah.revelation_order}</Text>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text className="stat-key">Revelation Place</Text>
          <Text className="stat-value">
            {surah.revelation_place === "makkah" ? "Makkah" : "Madinah"}
          </Text>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text className="stat-key">Pre Bismillah</Text>
          <Text className="stat-value">
            {surah.bismillah_pre ? "Yes" : "No"}
          </Text>
        </HStack>
      </Stack>
    </Card>
  );
};

export default SurahMetaCard;
