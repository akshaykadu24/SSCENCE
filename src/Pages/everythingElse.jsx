import { Text, Button, Select, Img, SimpleGrid, Box } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

export function OtherProduct() {
  let [data, setData] = React.useState([]);

  const { toggleChange } = useContext(AuthContext);

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

  React.useEffect(() => {
    let url =
      "https://indeed-data.vercel.app/clothing?category=Child";

    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box>
      <SimpleGrid columns={[2, 3, 4]} spacing="40px">
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
              <Img heigth="50%" src={el.images[1]}></Img>

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
