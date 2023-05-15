import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AddContentModal from "../../../pages/Teacher/AddContentModal";

const AddContents = ({updatedData}) => {
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
        <Heading size="md">Add Content</Heading>
      </CardHeader>

      <CardFooter>
        <Button width={"full"} onClick={openModal}>
          Add
          {isModalOpen && (
            <AddContentModal
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

export default AddContents;
