import { useState } from "react";
import AssignmentCard from "../../components/UI/Cards/AssignmentCard";
import { Flex, useDisclosure } from "@chakra-ui/react";
import ModuleNavbar from "../../components/UI/ModuleNavbar";
import DrawerModule from "../../components/UI/DrawerModule";
import React from "react";
import AddAssignments from "../../components/UI/Cards/AddAssignments";

const TeacherAssignment = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [data, setData] = useState([
    { heading: "Assignment 1", id: "1" },
    { heading: "Assignment 2", id: "2" },
    { heading: "Assignment 3", id: "3" },
    { heading: "Assignment 4", id: "4" },
    { heading: "Assignment 5", id: "5" },
    { heading: "Assignment 6", id: "6" },
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
          <AddAssignments />
        </Flex>
        <Flex
          flexDirection={"column"}
          width={"relative"}
          minW={"740px"}
          alignContent={""}
        >
          {data.map((item, index) => {
            return (
              <AssignmentCard
                key={index}
                heading={item.heading}
                assignmentId={item.id}
              />
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};

export default TeacherAssignment;
