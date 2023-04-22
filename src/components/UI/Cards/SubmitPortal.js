import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
} from "@chakra-ui/react";

const SubmitPortal = () => {
  return (
    <Card width={"320px"} boxShadow={"md"}>
      <CardHeader>
        <Heading size="md">Your Work</Heading>
      </CardHeader>
      <CardBody>
        <Button width={"full"}>Add or Create</Button>
      </CardBody>
      <CardFooter>
        <Button width={"full"}>Submit</Button>
      </CardFooter>
    </Card>
  );
};

export default SubmitPortal;
