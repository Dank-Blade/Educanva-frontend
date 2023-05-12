import React, { useEffect, useState } from "react";
import {
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
  HStack,
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
import useInput from "../hooks/useInput";
import jwtDecode from "jwt-decode";

const AddModuleModal = ({ isOpen, onClose, onEdit }) => {
  const moduleCodeInput = useInput((value) => value.trim() !== "");

  const [modules, setModules] = useState([]);
  const [allModules, setAllModules] = useState([]);

  const userData = jwtDecode(JSON.parse(localStorage.getItem("tokens")).access);

  const formIsValid = moduleCodeInput.isValid;

  // useEffect(() => {
  //   fetch(`http://127.0.0.1:8000/accounts/api/users/modules/${userData.id}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       authorization: `Bearer ${
  //         JSON.parse(localStorage.getItem("tokens")).access
  //       }`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setModules(data.modules);
  //     })
  //     .catch((error) => console.error(error));

  //   fetch("http://127.0.0.1:8000/module/api/modules/", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       authorization: `Bearer ${
  //         JSON.parse(localStorage.getItem("tokens")).access
  //       }`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAllModules(data);
  //     })
  //     .catch((error) => console.error(error));
  // }, [allModules, userData.id]);

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();

  //   const matchingModule = allModules.find(
  //     (module) => module.module_code === moduleCodeInput.value
  //   );

  //   if (matchingModule) {
  //     if (modules.some((module) => module.id === matchingModule.id)) {
  //       console.log("Module already exists");
  //       setModules((prevModules) => [...prevModules]);
  //     } else {
  //       setModules((prevModules) => [...prevModules, matchingModule]);
  //       console.log(matchingModule);
  //     }
  //   }

  //   console.log(modules);

  //   if (formIsValid) {
  //     formData.append("module_code", moduleCodeInput.value);
  //   }

  //   // fetch(`http://127.0.0.1:8000/accounts/api/users/modules/${userData.id}/`, {
  //   //   method: "PATCH",
  //   //   body: formData,
  //   //   headers: {
  //   //     authorization: `Bearer ${
  //   //       JSON.parse(localStorage.getItem("tokens")).access
  //   //     }`,
  //   //   },
  //   // })
  //   //   .then((response) => response.json())
  //   //   .catch((error) => console.error(error));
  // };

  const submitHandler = (e) => {
    e.preventDefault();

    let updatedModules = [];

    const matchingModule = allModules.find(
      (module) => module.module_code === moduleCodeInput.value
    );

    if (matchingModule) {
      if (modules.some((module) => module.id === matchingModule.id)) {
        console.log("Module already exists");
        setModules((prevModules) => [...prevModules]);
      } else {
        updatedModules = [...modules, matchingModule];
      }
    } else {
      console.log("Module does not exist");
    }


    fetch(`http://127.0.0.1:8000/accounts/api/users/modules/${userData.id}/`, {
      method: "PATCH",
      body: JSON.stringify({
        'modules': updatedModules,
      }),
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${
          JSON.parse(localStorage.getItem("tokens")).access
        }`,
      },
    })
      .then((response) => onEdit(updatedModules))
      .catch((error) => console.error(error));

    fetchAllModules();
  };

  const fetchModules = () => {
    fetch(`http://127.0.0.1:8000/accounts/api/users/modules/${userData.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${
          JSON.parse(localStorage.getItem("tokens")).access
        }`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setModules(data.modules);
      })
      .catch((error) => console.error(error));
  };

  const fetchAllModules = () => {
    fetch("http://127.0.0.1:8000/module/api/modules/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${
          JSON.parse(localStorage.getItem("tokens")).access
        }`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAllModules(data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchModules();
    fetchAllModules();
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent as={"form"} onSubmit={submitHandler}>
        <ModalHeader>Add Module</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6} as={Flex} direction={"column"} gap={3}>
          <FormControl>
            <FormLabel>Module Code</FormLabel>
            <Input
              placeholder="Module Code"
              onChange={moduleCodeInput.valueChangeHandler}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} type={"submit"}>
            Add
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddModuleModal;
