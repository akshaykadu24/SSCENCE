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
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

export function Login() {
  let [form, setForm] = React.useState({ email: "", password: "" });

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const { isAuth, toggleAuth } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  let url = "https://indeed-data.vercel.app/signup";

  function getData() {
    return axios
      .get(url)
      .then((res) => {
        let count = 0;
        let count1 = 0;
        res.data.forEach((el) => {
          if (el.email == form.email && el.password == form.password) {
            toggleAuth(form.email);
          } else {
            count++;
          }
          count1++;
        });
        if (count === count1) {
          alert("Wrong Credential");
        }
      })
      .catch((err) => console.log(err));
  }
  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Box marginTop="70px" w="100%" display="flex" justifyContent="center">
        <Flex w="40%" direction="column" justifyContent="center">
          <Text m="10px">LOGIN HERE</Text>

          <Text marginLeft="10px" alignSelf="flex-start" mb="8px">
            Email :
          </Text>
          <Input
            name="email"
            onChange={handleChange}
            border="2px solid #000000"
            placeholder="Enter Email"
            m="0px 10px 10px 10px"
          />
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
      <Box w="100%" display="flex" justifyContent="center">
        <Flex w="40%" direction="column" justifyContent="center">
          <Text m="10px"> Not have Account CREATE acount here</Text>
          <Button alignSelf="center">
            <Link to="/signup">Click to create acount</Link>
          </Button>
        </Flex>
      </Box>
    </>
  );
}
