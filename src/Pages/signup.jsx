import {
  Text,
  Button,
  InputGroup,
  InputRightElement,
  Input,
  Flex,
  Box
} from "@chakra-ui/react";
import React from "react";

import axios from "axios";
import { Navigate } from "react-router-dom";

export function Signup() {
  let [form, setForm] = React.useState({ email: "", password: "" });
  const [signup, setSignup] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  function getData() {
    if (form.email !== "" && form.password !== "") {
      setSignup(true);
      return axios.post(
        "https://indeed-data.vercel.app/signup",
        {
          email: form.email,
          password: form.password
        }
      );
    } else {
      alert("please fill all data");
    }
  }
  if (signup) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Box marginTop="70px" w="100%" display="flex" justifyContent="center">
        <Flex w="40%" direction="column" justifyContent="center">
          <Text m="10px">CREATE ACCOUNT</Text>

          <Text marginLeft="10px" alignSelf="flex-start" mb="8px">
            Email :
          </Text>
          <Input
            name="email"
            type="email"
            onChange={handleChange}
            border="2px solid #000000"
            placeholder="Enter Email"
            m="0px 10px 10px 10px"
          />
          <Text marginLeft="10px" alignSelf="flex-start" mb="8px">
            Password :
          </Text>
          <InputGroup w="full" m="0px 10px 10px 10px">
            <Input
              name="password"
              onChange={handleChange}
              border="2px solid #000000"
              placeholder="Enter Password"
              pr="4.5rem"
              type={show ? "text" : "password"}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button onClick={getData} bg="black" color="#FFF" m="10px" w="full">
            Continue
          </Button>
        </Flex>
      </Box>
    </>
  );
}
