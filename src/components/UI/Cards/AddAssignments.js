import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AddAssignmentModal from "../../../pages/Teacher/AddAssignmentModal";

const AddAssignments = ({ updatedData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const submitHandler = (newData) => {
    setIsModalOpen(false);
    updatedData(newData);
  };
  
  return (
    <Card width={"320px"} boxShadow={"md"}>
      <CardHeader>
        <Heading size="md">Add Assignment</Heading>
      </CardHeader>

      <CardFooter>
        <Button width={"full"} onClick={openModal}>
          Add
          {isModalOpen && (
            <AddAssignmentModal
              isOpen={isModalOpen}
              onClose={() => {
                setIsModalOpen(false);
              }}
              onSubmit={submitHandler}
            />
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AddAssignments;
