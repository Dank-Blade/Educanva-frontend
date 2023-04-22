import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const AddAssignments = () => {
  return (
    <Card width={"320px"} boxShadow={"md"}>
      <CardHeader>
        <Heading size="md">Add Assignment</Heading>
      </CardHeader>

      <CardFooter>
        <Button width={"full"}>Add</Button>
      </CardFooter>
    </Card>
  );
};

export default AddAssignments;
