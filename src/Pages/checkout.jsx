import {
    Box,
    FormLabel,
    Input,
    FormControl,
    Img,
    SimpleGrid,
    Button,
    Select,
    Text
  } from "@chakra-ui/react";
  import React from "react";
  import { useContext } from "react";
  import { AuthContext } from "../Context/AuthContext";
  import { Link, Navlink, Navigate } from "react-router-dom";
  
  const initState = {
    first: "",
    last: "",
    address: "",
    company: "",
    city: "",
    pincode: "",
    country: "",
    cardnum: "",
    date: "",
    cardholder: "",
    cvc: ""
  };
  
  export function Checkout() {
    const [data, setData] = React.useState([]);
    const [totle, setTotle] = React.useState(0);
    const [items, setItems] = React.useState(0);
    const [home, setToHome] = React.useState(false);
    const { mail } = useContext(AuthContext);
  
    const [userdata, setUserdata] = React.useState(initState);
    const {
      first,
      last,
      address,
      company,
      city,
      pincode,
      country,
      cardnum,
      date,
      cardholder,
      cvc
    } = userdata;
  
    const getuserData = (e) => {
      const { value, name } = e.target;
  
      setUserdata({ ...userdata, [name]: value });
     
    };
  
    let arr = 0;
    React.useEffect(() => {
      fetch("https://indeed-data.vercel.app/singleProduct")
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          setItems(res.length);
          res.forEach((el) => {
            arr += Number(el.strike_price);
            setTotle(arr);
          });
        })
        .catch((err) => console.log(err));
    }, []);
  
    const placeOrder = () => {
      if (
        first !== "" &&
        last !== "" &&
        address !== "" &&
        city !== "" &&
        pincode !== "" &&
        country !== "" &&
        cardholder !== "" &&
        cardnum !== "" &&
        date !== "" &&
        cvc !== ""
      ) {
        alert(
          `Hello ${first}${last} Your Order Worth $${totle} is confermed we will send you this order within a week on Address: ${address} ,${city} ,${pincode} ,${country} ThankYou`
        );
        setToHome(true);
      } else {
        alert("Fill all Requred Information");
      }
    };
    if (home) {
      return <Navigate to="/" />;
    }
    return (
      <>
        <Text marginTop="20px" fontSize="30px">
          CHECKOUT HERE
        </Text>
        <Box
          display="flex"
          flexDirection={{ sm: "column", md: "row" }}
          justifyContent="center"
        >
          <Box m="20px" marginTop="50px" w={{ sm: "full", md: "60%" }}>
            <Box>
              <Text>SHIPPING ADDRESS</Text>
              <SimpleGrid
                borderBottom="1px solid black"
                borderTop="1px solid black"
                padding="15px 0px"
                columns={{ sm: 1, md: 2 }}
                spacing="40px"
              >
                <Box>
                  {" "}
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input value={mail} name="email" placeholder="Email" />
                  </FormControl>
                </Box>
                <Box>
                  {" "}
                  <FormControl isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      value={first}
                      name="first"
                      onChange={getuserData}
                      placeholder="First name"
                    />
                  </FormControl>
                </Box>
                <Box>
                  {" "}
                  <FormControl isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      value={last}
                      name="last"
                      onChange={getuserData}
                      placeholder="Last name"
                    />
                  </FormControl>
                </Box>
                <Box>
                  {" "}
                  <FormControl isRequired>
                    <FormLabel>Street Address</FormLabel>
                    <Input
                      value={address}
                      name="address"
                      onChange={getuserData}
                      placeholder="Address"
                    />
                  </FormControl>
                </Box>
                <Box>
                  {" "}
                  <FormControl>
                    <FormLabel>Company (Optional)</FormLabel>
                    <Input
                      value={company}
                      name="company"
                      onChange={getuserData}
                      placeholder="Company name"
                    />
                  </FormControl>
                </Box>
                <Box>
                  {" "}
                  <FormControl isRequired>
                    <FormLabel>City</FormLabel>
                    <Input
                      value={city}
                      name="city"
                      onChange={getuserData}
                      placeholder=" City"
                    />
                  </FormControl>
                </Box>
                <Box>
                  {" "}
                  <FormControl isRequired>
                    <FormLabel>ZIP Or Postal Code</FormLabel>
                    <Input
                      value={pincode}
                      name="pincode"
                      onChange={getuserData}
                      placeholder="Enter Pin"
                    />
                  </FormControl>
                </Box>
                <Box>
                  {" "}
                  <FormControl isRequired>
                    <FormLabel>Country/Regione</FormLabel>
                    <Select
                      value={country}
                      name="country"
                      onChange={getuserData}
                      placeholder="Select Country"
                    >
                      <option value="india">India</option>
                      <option value="england">England</option>
                      <option value="bangladesh">Bangladesh</option>
                      <option value="urop">Urop</option>
                      <option value="america">America</option>
                      <option value="japan">Japan</option>
                      <option value="indoneshia">Indoneshia</option>
                      <option value="africa">Africa</option>
                      <option value="itely">Itely</option>
                    </Select>
                  </FormControl>
                </Box>
              </SimpleGrid>
            </Box>
            <Box>
              {" "}
              <Text>CARD DETAILS</Text>
              <SimpleGrid
                borderBottom="1px solid black"
                marginTop="30px"
                padding="15px 0px"
                columns={2}
                spacing={10}
              >
                <Box>
                  {" "}
                  <FormControl isRequired>
                    <FormLabel>Card Number</FormLabel>
                    <Input
                      value={cardnum}
                      name="cardnum"
                      onChange={getuserData}
                      placeholder="#### #### #### ####"
                    />
                  </FormControl>
                </Box>
                <Box>
                  {" "}
                  <FormControl isRequired>
                    <FormLabel>Expiration Date</FormLabel>
                    <Input
                      value={date}
                      name="date"
                      onChange={getuserData}
                      type="date"
                      placeholder="First name"
                    />
                  </FormControl>
                </Box>
                <Box>
                  {" "}
                  <FormControl isRequired>
                    <FormLabel>Cardholder’s name</FormLabel>
                    <Input
                      value={cardholder}
                      name="cardholder"
                      onChange={getuserData}
                      placeholder="Full name"
                    />
                  </FormControl>
                </Box>
                <Box>
                  {" "}
                  <FormControl isRequired>
                    <FormLabel>Security code</FormLabel>
                    <Input
                      value={cvc}
                      name="cvc"
                      onChange={getuserData}
                      placeholder="CVC"
                    />
                  </FormControl>
                </Box>
              </SimpleGrid>
            </Box>
          </Box>
          <Box w={{ sm: "full", md: "40%" }} p="30px">
            <Box>
              <Text fontSize="30px">GRAND TOTLE : ${totle}</Text>
  
              <Box
                display="flex"
                flexDirection="row"
                borderBottom="1px solid black"
                padding="20px "
                justifyContent="space-between"
              >
                <Text fontSize="15px">ORDER SUMMARY - ({items}) ITEMS}</Text>
                <Text>TOTLE</Text>
              </Box>
              <Box maxHeight="500px" overflow="scroll">
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
                      <Box h="130px" display="flex" flexDirection="row">
                        {" "}
                        <Img h="130px" w="50%" src={el.images} />
                        <Box padding="20px">
                          <Text>{el.title}</Text>
                          <Text>{el.subtitle}</Text>
                        </Box>
                      </Box>
                      <Box display="grid" justifyContent="space-between">
                        <Text>Price: ${el.strike_price}</Text>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Text fontSize="30px">Price to pay : ${totle}</Text>
            <Text>
              Important Notice Our prices do not include Duty and VAT. Please
              consult your country/region's customs legislation for more
              information about potential additional charges.
            </Text>
            <Button
              onClick={placeOrder}
              p="5px"
              m="20px"
              bg="black"
              color="#FFF"
              w="full"
            >
              PLACE ORDER
            </Button>
          </Box>
        </Box>
      </>
    );
  }
  