import { Flex, useDisclosure } from "@chakra-ui/react";
import ModuleNavbar from "../../components/UI/ModuleNavbar";
import DrawerModule from "../../components/UI/DrawerModule";
import ContentCard from "../../components/UI/Cards/ContentCard";
import { useState } from "react";

const Content = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
      <DrawerModule isOpen={isOpen}  onClose={onClose} />
      
      <Flex flexDirection={'column'}>
      {data.map((item, index) => {
        return <ContentCard key={index} heading={item.heading} contentId={item.id}/>;
      })}
    </Flex>
    </>
  );
};

export default Content;