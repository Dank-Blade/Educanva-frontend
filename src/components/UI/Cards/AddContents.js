import { Button, Card, CardBody, CardFooter, CardHeader, Heading } from "@chakra-ui/react";
import React from "react";

const AddContents = () => {
  return (
    <Card width={"320px"} boxShadow={"md"}>
      <CardHeader>
        <Heading size="md">Add Content</Heading>
      </CardHeader>
      
      <CardFooter>
        <Button width={"full"}>Add</Button>
      </CardFooter>
    </Card>
  );
};

export default AddContents;
