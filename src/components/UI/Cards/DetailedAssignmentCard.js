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
import { TiClipboard } from "react-icons/ti";
import { BsDot } from "react-icons/bs";
import ImageCard from "./ImageCard";
import SubmitPortal from "./SubmitPortal";

export default function DetailedAssignmentCard({ heading, id }) {
  return (
    <Center py={6}>
      <Flex
        gap={"20px"}
        width={"full"}
        alignItems={"flex-start"}
        justifyContent={"center"}
      >
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
              <Icon as={TiClipboard} color="green.500" boxSize={6} />
              <Stack width={"300px"} px={"2rem"}>
                <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  Assignment 1
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

            <Flex maxH={"90px"} maxW={"370px"}>
              <ImageCard />
            </Flex>
          </Flex>
        </Box>
        <SubmitPortal />
      </Flex>
    </Center>
  );
}
