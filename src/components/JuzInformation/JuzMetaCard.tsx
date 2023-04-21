import { Card, Stack, HStack, Heading, Text, VStack } from "@chakra-ui/react";

interface JuzInfo {
  juz_arabic: string;
  id: number;
  juz_number: number;
  juz_name: string;
  starts: string;
  ends: string;
  verses_count: number;
  verse_mapping: {
    [index: string]: string | undefined;
  };
}

interface Props {
  juz: JuzInfo;
}

const JuzMetaCard = ({ juz }: Props) => {
  return (
    <Card className="surah-card" padding={2} paddingX={5}>
      <Stack
        style={{ borderBottom: ".15em solid #95d5b2" }}
        className="surah-heading"
        paddingBottom={4}
      >
        <VStack gap={1} marginX={"auto"}>
          <Heading
            style={{ transform: "translateY(.1em)" }}
            className="arabic"
            size={"xl"}
            fontWeight={350}
            color={"#B7E4C7"}
          >
            {juz.juz_arabic}
          </Heading>
          <Heading whiteSpace={"nowrap"} size={"md"} fontWeight={400}>
            {juz.juz_name}
          </Heading>
        </VStack>
      </Stack>
      <Stack gap={2} paddingY={2} marginTop={2}>
        <HStack justifyContent={"space-between"}>
          <Text className="stat-key">juz Number</Text>
          <Text className="stat-value">{juz.juz_number}</Text>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text className="stat-key">Srarting at</Text>
          <Text className="stat-value" textAlign={"right"}>
            {juz.starts}
          </Text>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text className="stat-key">Ending at</Text>
          <Text className="stat-value" textAlign={"right"}>
            {juz.ends}
          </Text>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text className="stat-key">Surah Count</Text>
          <Text className="stat-value">
            {Object.keys(juz.verse_mapping).length}
          </Text>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text className="stat-key">Verse Count</Text>
          <Text className="stat-value">{juz.verses_count}</Text>
        </HStack>
      </Stack>
    </Card>
  );
};

export default JuzMetaCard;
