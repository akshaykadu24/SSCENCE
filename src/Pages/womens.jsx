import { Text, Button, Img, SimpleGrid, Flex, Box } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import React from "react";
// import { useContext } from "react";
// import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

export function Womens() {
  let [data, setData] = React.useState([]);
  const { toggleChange } = useContext(AuthContext);
  React.useEffect(() => {
    axios
      .get(
        "https://indeed-data.vercel.app/clothing?category=Womens"
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const createData = (el) => {
    fetch("https://indeed-data.vercel.app/singleProduct", {
      method: "POST",

      body: JSON.stringify(el),

      headers: {
        "Content-type": "application/json"
      }
    });
    alert("product added succesfully to bag");
    toggleChange();
  };

  return (
    <Box>
      <SimpleGrid columns={[2, 3, 4]} gap={30}>
        {data?.map((el, index) => {
          return (
            <Box
              display="grid"
              // flexDirection="columns"
              justifyContent="center"
              justifyItems="center"
              padding="20px"
              boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
              heigth="full"
              key={index}
            >
              <Img heigth="50%" src={el.images[0]}></Img>
              <Text>{el.title}</Text>
              <Text>{el.subtitle}</Text>
              <Text>Price : ${el.strike_price}</Text>
              <Text>Rating : {el.rating}</Text>
              <Button cursor="pointer" onClick={() => createData(el)}>
                ADD to CART
              </Button>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
// Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
// will have the same effect.
