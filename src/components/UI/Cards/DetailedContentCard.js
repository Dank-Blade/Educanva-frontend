// import Image from 'next/image';
import {
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { AiOutlineBook } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import ImageCard from "./ImageCard";

export default function DetailedContentCard({ heading, id }) {
  return (
    <Center py={6}>
      <Box
        position={"relative"}
        maxW={"800px"}
        height={"300px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"md"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        cursor={"pointer"}
      >
        <Flex
          align={"center"}
          alignItems={"flex-start"}
          flexDirection={"column"}
          gap={"10px"}
        >
          <Flex>
            <Icon as={AiOutlineBook} color="green.500" boxSize={6} />
            <Stack width={"300px"} px={"2rem"}>
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                Content 1
              </Text>
            </Stack>
          </Flex>
          <Flex
            borderBottom={"1px solid"}
            borderColor={"gray.200"}
            width={"full"}
            paddingBottom={"5px"}
          >
            <Text>John Doe</Text>
            <Icon as={BsDot} color="gray.500" boxSize={7} />
            <Text>Apr 5, 2023</Text>
          </Flex>

          <Flex maxH={'90px'} maxW={'370px'}>
            <ImageCard />
          </Flex>
        </Flex>
      </Box>
    </Center>
  );
}
