import { Flex, useDisclosure } from "@chakra-ui/react";
import ModuleNavbar from "../../components/UI/ModuleNavbar";
import DrawerModule from "../../components/UI/DrawerModule";
import ContentCard from "../../components/UI/Cards/ContentCard";
import { useState } from "react";
import AddContents from "../../components/UI/Cards/AddContents";

const TeacherContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [data, setData] = useState([
    { heading: "Content 1", id: "1" },
    { heading: "Content 2", id: "2" },
    { heading: "Content 3", id: "3" },
    { heading: "Content 4", id: "4" },
    { heading: "Content 5", id: "5" },
    { heading: "Content 6", id: "6" },
  ]);

  return (
    <>
      <ModuleNavbar onOpen={onOpen} />
      <DrawerModule isOpen={isOpen} onClose={onClose} />

      <Flex
        gap={"32px"}
        align={"flex-start"}
        alignItems={"flex-start"}
        justifyContent={"center"}
      >
        <Flex pt={"20px"}>
          <AddContents />
        </Flex>
        <Flex
          flexDirection={"column"}
          width={"relative"}
          minW={"740px"}
          alignContent={""}
        >
          {data.map((item, index) => {
            return (
              <ContentCard
                key={index}
                heading={item.heading}
                contentId={item.id}
              />
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};

export default TeacherContent;
