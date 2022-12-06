import { Box, Img, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, Navlink, Navigate } from "react-router-dom";
export function Cart() {
  const [data, setData] = React.useState([]);
  const { mail, isAuth, change, toggleChange, toggleAuth } = useContext(
    AuthContext
  );

  React.useEffect(() => {
    fetch("https://indeed-data.vercel.app/singleProduct")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }, [change]);
  console.log(isAuth);

  const createData = (id) => {
    fetch(
      `https://indeed-data.vercel.app/singleProduct/${id}`,
      {
        method: "DELETE",

        headers: {
          "Content-type": "application/json"
        }
      }
    );
    alert("product deleted succesfully from bag");
    toggleChange();
  };

  const goToCkeckout = () => {
    toggleAuth();
    return;
  };
console.log(mail)
  return (
    <Box p="0px 30px"
      display="flex"
      flexDirection={{ sm: "column", md: "row" }}
      justifyContent="center"
    >
      {/* SHOPPING BAG */}
      <Box w={{ sm: "full", md: "60%" }}>
        <Text marginTop="20px" fontSize="30px">
          SHOPPING BAG
        </Text>
        <Box
          display="flex"
          flexDirection="row"
          borderBottom="1px solid black"
          padding="20px 40px 20px 130px "
          justifyContent="space-between"
        >
          <Text>ITEMS</Text>
          <Text>TOTLE</Text>
        </Box>
        {data?.map((el, index) => {
          return (
            <Box
              display="flex"
              flexDirection="row"
              borderBottom="1px solid black"
              padding="20px"
              justifyContent="space-between"
              key={index}
            >
              <Box display="flex" flexDirection="row">
                {" "}
                <Img h="150px" w="50%" src={el.images} />
                <Box padding="20px">
                  <Text>{el.title}</Text>
                  <Text>{el.subtitle}</Text>
                </Box>
              </Box>
              <Box display="grid" justifyContent="space-between">
                <Text>Price: ${el.strike_price}</Text>
                <Button
                  onClick={() => {
                    createData(el.id);
                  }}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box w={{ sm: "full", md: "40%" }} p="30px">
        {isAuth ? (
          <Box marginTop="100px">
            <Text>LOGGED IN AS</Text>
            <Text>{mail}</Text>
            <Text m="10px 0px">
              Not your account?
              <Text
                onClick={goToCkeckout}
                cursor="pointer"
                style={{ color: "blue" }}
              >
                <Link to="/login">Sign in as another user</Link>
              </Text>
            </Text>
            <Button bg="#000000" color="#FFF" m="20px 0px" w="full">
              <Link to="/checkout">PROCEED TO CHECKOUT</Link>
            </Button>
          </Box>
        ) : (
          ""
        )}
        {!isAuth ? (
          <Box marginTop="100px">
            <Text>YOU ARE NOT LOGGED IN</Text>

            <Text m="10px 0px">
              Login to your account?
              <Text cursor="pointer" style={{ color: "blue" }}>
                <Link to="/login">Sign in from Here</Link>
              </Text>
            </Text>
            <Button
              onClick={() => {
                alert("You need to signin first");
              }}
              bg="#000000"
              color="#FFF"
              m="20px 0px"
              w="full"
            >
              PROCEED TO CHECKOUT
            </Button>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}
