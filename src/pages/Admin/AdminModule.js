import React, { useContext } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Input,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  HStack,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiFillEdit,
  AiFillDelete,
} from "react-icons/ai";
import AuthContext from "../../context/AuthContext";

const AdminModule = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const toast = useToast();

  const [teacherData, setTeacherData] = React.useState({});

  let { registerUser } = useContext(AuthContext);

  const searchHandler = (e) => {
    if (e.target.value === "") {
      setTeacher(dummy);
      return;
    } else {
      const filtered = dummy.filter((teacher) => {
        return (
          teacher.first_name
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          teacher.last_name
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          teacher.email.toLowerCase().includes(e.target.value.toLowerCase())
        );
      });
      setTeacher(filtered);
    }
  };

  const dummy = [
    {
      first_name: "John",
      last_name: "Doe",
      email: "john@gmail.com",
    },
    {
      first_name: "Jane",
      last_name: "Doe",
      email: "jane@gmail.com",
    },
  ];

  const [teacher, setTeacher] = React.useState(dummy);

  const submitHandler = (e) => {
    e.preventDefault();
    if (teacherData.password !== teacherData.confirm_password) {
      toast({
        title: "Invalid Password.",
        description: "Passwords do not match.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    registerUser({
      first_name: teacherData.first_name,
      last_name: teacherData.last_name,
      email: teacherData.email,
      password: teacherData.password,
      user_type: "Teacher",
    })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          onClose();
          setTeacherData({});
        }
      })
      .catch((err) => {
        toast({
          title: "Server error.",
          description: "Something went wrong. Please try again later.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <Flex direction={"column"}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent as={"form"} onSubmit={submitHandler}>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} as={Flex} direction={"column"} gap={3}>
            <HStack>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input
                  placeholder="First name"
                  onChange={(e) =>
                    setTeacherData((prev) => ({
                      ...prev,
                      first_name: e.target.value,
                    }))
                  }
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input
                  placeholder="Last name"
                  onChange={(e) =>
                    setTeacherData((prev) => ({
                      ...prev,
                      last_name: e.target.value,
                    }))
                  }
                />
              </FormControl>
            </HStack>
            <HStack>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Email"
                  type={"email"}
                  onChange={(e) =>
                    setTeacherData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
              </FormControl>
            </HStack>
            <HStack>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Password"
                    type={!showPassword ? "password" : "text"}
                    onChange={(e) =>
                      setTeacherData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                  />
                  <InputRightElement
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {!showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Confirm Password"
                    type={!showConfirmPassword ? "password" : "text"}
                    onChange={(e) =>
                      setTeacherData((prev) => ({
                        ...prev,
                        confirm_password: e.target.value,
                      }))
                    }
                  />
                  <InputRightElement
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    {!showConfirmPassword ? (
                      <AiFillEyeInvisible />
                    ) : (
                      <AiFillEye />
                    )}
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} type={"submit"}>
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex justifyContent={"space-between"}>
        <Flex width={"60%"}>
          <Input
            type={"text"}
            placeholder={"Search"}
            onChange={(e) => searchHandler(e)}
          />
        </Flex>
        <Button
          bg={"#38A169"}
          color={"white"}
          transition={"all 0.2s ease-in-out"}
          onClick={onOpen}
          _hover={{
            bg: "#2F855A",
            transform: "scale(1.02)",
            transition: "all 0.2s ease-in-out",
          }}
        >
          Add Teacher
        </Button>
      </Flex>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {teacher.map((teacher) => (
              <Tr>
                <Td>{teacher.first_name}</Td>
                <Td>{teacher.last_name}</Td>
                <Td>{teacher.email}</Td>
                <Td>
                  <Flex gap={2}>
                    <Button bg={"#2B6CB0"} onClick={onOpen}>
                      <AiFillEdit color={"white"} />
                    </Button>
                    <Button bg={"#E53E3E"}>
                      <AiFillDelete color={"white"} />
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default AdminModule;
