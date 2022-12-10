import {
  Box,
  GridItem,
  Grid,
  Show,
  SimpleGrid,
  Text,
  Img,
  Flex,
  Button
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export function Main() {
  return (
    <>
      <Box marginTop="70px" padding={{ sm: "0rem", md: "0.5rem 7rem" }}>
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="40px">
          <Box height="600px">
            <Img
              w="100%"
              h="90%"
              src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1663854024/hlbxtzu9okkb1ehmuf7j.jpg"
            ></Img>
            <Flex>
              <Text margin="2px 20px 2px 20px">Culture:</Text>
              <Text>CultureIS THE SPIN PIN GAY?</Text>
            </Flex>
            <Text marginBottom="20px">
              CultureIS THE SPIN PIN GAY? Minor Meditations on Hair, Queerness,
              and Presentation
            </Text>
          </Box>
          <Box height="600px">
            <Img
              w="100%"
              h="90%"
              src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1663863910/tv3hbqedysmhrgatfqf6.jpg"
            ></Img>
            <Flex>
              <Text margin="2px 20px 2px 20px">Art:</Text>
              <Text>ArtINFINITE TIMES INFINITE</Text>
            </Flex>
            <Text marginBottom="20px">
              ArtINFINITE TIMES INFINITE Artwork by Somnath Bhatt
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box marginTop="35px" padding={{ sm: "0rem", md: "0rem 2rem" }}>
        <SimpleGrid columns={{ sm: 1, md: 3 }} spacing="40px">
          <Box height="700px" marginBottom="40px">
            <Img
              w="100%"
              h="95%"
              src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1663602981/bkvepsr5bugaswa4zlcy.jpg"
            ></Img>
            <Flex>
              <Text margin="2px 20px 2px 20px">Culture:</Text>
              <Text>CultureIS THE SPIN PIN GAY?</Text>
            </Flex>
            <Text marginBottom="20px">
              CultureIS THE SPIN PIN GAY? Minor Meditations on Hair, Queerness,
              and Presentation
            </Text>
          </Box>
          <Box height="700px" marginBottom="40px">
            <Img
              w="100%"
              h="95%"
              src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1663254600/dr1pvtixrtb1z9chqc1x.jpg"
            ></Img>
            <Flex>
              <Text margin="2px 20px 2px 20px">Culture:</Text>
              <Text>CultureIS THE SPIN PIN GAY?</Text>
            </Flex>
            <Text marginBottom="20px">
              CultureIS THE SPIN PIN GAY? Minor Meditations on Hair, Queerness,
              and Presentation
            </Text>
          </Box>
          <Box height="700px" marginBottom="40px">
            <Img
              w="100%"
              h="95%"
              src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1663166854/g7olvvtw1ofq8kj8kocq.jpg"
            ></Img>
            <Flex>
              <Text margin="2px 20px 2px 20px">Culture:</Text>
              <Text>CultureIS THE SPIN PIN GAY?</Text>
            </Flex>
            <Text marginBottom="20px">
              CultureIS THE SPIN PIN GAY? Minor Meditations on Hair, Queerness,
              and Presentation
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box padding={{ sm: "1rem", md: "1rem 6rem" }}>
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="40px">
          <Box height="600px">
            <Img
              w="100%"
              h="90%"
              src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1664197917/dacney4ftxowa6hgdqow.jpg"
            ></Img>
            <Flex>
              <Text margin="2px 20px 2px 20px">Featured:</Text>
              <Text>FeaturedALEXANDER MCQUEEN</Text>
            </Flex>
            <Button marginBottom="20px">
              <Link to="/mens">SHOP MENSWEAR</Link>
            </Button>
          </Box>
          <Box height="600px">
            <Img
              w="100%"
              h="90%"
              src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1664197946/s1yfn1a8pzrnbkl1frey.jpg"
            ></Img>
            <Flex>
              <Text margin="2px 20px 2px 20px">Featured:</Text>
              <Text>ALEXANDER MCQUEEN</Text>
            </Flex>
            <Button marginBottom="20px">
              {" "}
              <Link to="/womens">SHOP WOMENSWEAR</Link>
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
      <Show above="md">
        <Box paddingBottom="30px" marginTop="30px" padding="3px 30px">
          <Grid templateColumns="repeat(5, 1fr)" gap={8}>
            <GridItem
              borderTop="1px solid #979797"
              borderBottom="1px solid #979797"
              w="100%"
              h="160"
            >
              <Text fontSize="30px" marginTop="5%" marginBottom="20%">
                FUN AND GAMES
              </Text>
              <Text marginTop="20%" marginBottom="5%">
                View All Stories
              </Text>
            </GridItem>
            <GridItem
              display="grid"
              alignItems="center"
              justifyItems="center"
              borderTop="1px solid #979797"
              borderBottom="1px solid #979797"
              w="100%"
              h="160"
            >
              <Flex padding="10px" gap="10px">
                <Img
                  height="130px"
                  width="70px"
                  src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1648162446/jq3ratinthvrzfaxnvyl.jpg"
                ></Img>
                <Box>
                  <Text fontSize="16px" marginBottom="auto%">
                    MICHAEL THE III'S MURDER MYSTERY
                  </Text>
                  <Text marginTop="auto" marginBottom="5px">
                    Culture
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem
              display="grid"
              alignItems="center"
              justifyItems="center"
              borderTop="1px solid #979797"
              borderBottom="1px solid #979797"
              w="100%"
              h="160"
            >
              <Flex padding="10px" gap="10px">
                <Img
                  height="130px"
                  width="70px"
                  src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1635338400/qxlgbpktf8pow7eiszyx.jpg"
                ></Img>
                <Box heigth="100%">
                  <Text fontSize="16px" marginBottom="auto%">
                    WITH MY LITTEL EYE
                  </Text>
                  <Text marginTop="auto%" marginBottom="5px">
                    Fashion
                  </Text>
                </Box>
              </Flex>
            </GridItem>{" "}
            <GridItem
              display="grid"
              alignItems="center"
              justifyItems="center"
              borderTop="1px solid #979797"
              borderBottom="1px solid #979797"
              w="100%"
              h="160"
            >
              <Flex padding="10px" gap="10px">
                <Img
                  height="130px"
                  width="70px"
                  src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1634218336/ucyy69klqy2all31anm7.jpg"
                ></Img>
                <Box height="100%">
                  <Text fontSize="16px" marginBottom="auto">
                    TOUGH CROWED
                  </Text>
                  <Text marginTop="auto" marginBottom="5px">
                    Culture
                  </Text>
                </Box>
              </Flex>
            </GridItem>{" "}
            <GridItem
              display="grid"
              alignItems="center"
              justifyItems="center"
              borderTop="1px solid #979797"
              borderBottom="1px solid #979797"
              w="100%"
              h="160"
            >
              <Flex height="100%" padding="10px" gap="10px">
                <Img
                  height="130px"
                  width="70px"
                  src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1633369883/uttj2shxt99kpjyqcoxg.jpg"
                ></Img>
                <Box height="100%">
                  <Text fontSize="20px" marginBottom="auto">
                    ALL THE DAY WE DREAM ABOUT PLAY
                  </Text>
                  <Text marginTop="auto" marginBottom="0px">
                    Fashion
                  </Text>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Show>
      <Show below="md">
        <Box paddingBottom="30px" marginTop="30px" padding="3px 30px">
          <Grid templateColumns="repeat(2, 1fr)" gap={8}>
            <GridItem
              display="grid"
              alignItems="center"
              justifyItems="center"
              borderTop="1px solid #979797"
              borderBottom="1px solid #979797"
              w="100%"
              h="160"
            >
              <Flex padding="10px" gap="10px">
                <Img
                  height="130px"
                  width="70px"
                  src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1648162446/jq3ratinthvrzfaxnvyl.jpg"
                ></Img>
                <Box>
                  <Text fontSize="16px" marginBottom="auto%">
                    MICHAEL THE III'S MURDER MYSTERY
                  </Text>
                  <Text marginTop="auto" marginBottom="5px">
                    Culture
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem
              display="grid"
              alignItems="center"
              justifyItems="center"
              borderTop="1px solid #979797"
              borderBottom="1px solid #979797"
              w="100%"
              h="160"
            >
              <Flex padding="10px" gap="10px">
                <Img
                  height="130px"
                  width="70px"
                  src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1635338400/qxlgbpktf8pow7eiszyx.jpg"
                ></Img>
                <Box heigth="100%">
                  <Text fontSize="16px" marginBottom="auto%">
                    WITH MY LITTEL EYE
                  </Text>
                  <Text marginTop="auto%" marginBottom="5px">
                    Fashion
                  </Text>
                </Box>
              </Flex>
            </GridItem>{" "}
          </Grid>
        </Box>
      </Show>
      <Box padding={{ sm: "1rem", md: "1rem 6rem" }}>
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="40px">
          <Box height="600px">
            <Img
              w="100%"
              h="90%"
              src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1664198081/tlfg66jhcnyhqvdwoit2.jpg"
            ></Img>
            <Flex>
              <Text margin="2px 20px 2px 20px">Featured:</Text>
              <Text>WOOYOUNGMI</Text>
            </Flex>
            <Button marginBottom="20px">
              <Link to="/mens">SHOP MENSWEAR</Link>
            </Button>
          </Box>
          <Box height="600px">
            <Img
              w="100%"
              h="90%"
              src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1664198104/f5fm4j6ykxjsur2rvndh.jpg"
            ></Img>
            <Flex>
              <Text margin="2px 20px 2px 20px">Featured:</Text>
              <Text>COPERNI</Text>
            </Flex>
            <Button marginBottom="20px">
              <Link to="/womens">SHOP WOMENSWEAR</Link>
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
      <Show above="md">
        <Box
          margin="30px 6rem"
          justifyContent="center"
          textAlign="center"
          display="flex"
        >
          <Text
            margin="0 2.5rem 1.875rem 2.5rem"
            lineHeight="5.875rem"
            fontFamily="Favorit SSENSE Inter1"
            fontSize="5.9375rem"
            letterSpacing="-0.28125rem"
          >
            PERSONAL SPACE WITH JOSH ITIOLA{" "}
          </Text>
        </Box>
      </Show>
      <Show above="md">
        <Box margin="1.875rem 2.5rem 1.25rem 2.5rem">
          <Text
            fontSize="4.375rem"
            lineHeight="4.5rem"
            letterSpacing="-0.175rem"
            fontFamily="JHA Times Now"
          >
            Talking Prized Possessions with the Multi-Talented Engineer Turned
            Vitsœ Planner
          </Text>
        </Box>
      </Show>
      <Box marginTop="35px" padding={{ sm: "0rem", md: "0rem 2rem" }}>
        <SimpleGrid columns={{ sm: 1, md: 3 }} spacing="40px">
          <Box height="700px" marginBottom="40px">
            <Img
              w="100%"
              h="95%"
              src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1662479006/m7ow0nbcrhnjcbqo1ku7.jpg"
            ></Img>
            <Text margin="2px 20px 2px 20px">Fashion:</Text>

            <Text marginBottom="20px">GET THE DENIM BLUES</Text>
          </Box>
          <Box height="700px" marginBottom="40px">
            <Img
              w="100%"
              h="95%"
              src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1662040037/batvtslikhwnueqnyk9z.jpg"
            ></Img>
            <Text margin="2px 20px 2px 20px">Fashion:</Text>

            <Text marginBottom="20px">BACK TO SCHOOL BEAUTY</Text>
          </Box>
          <Box height="700px" marginBottom="40px">
            <Img
              w="100%"
              h="95%"
              src="https://res.cloudinary.com/ssenseweb/image/upload/w_1024,q_90,f_auto,dpr_auto/v1661858974/yhzpoj6u4srx0awyrhbj.jpg"
            ></Img>

            <Text margin="2px 20px 2px 20px">Fashion:</Text>

            <Text marginBottom="20px">YOUR LIFE AS A SEPTEMBER ISSUE</Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box padding={{ sm: "1rem", md: "1rem 6rem" }}>
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="40px">
          <Box height="600px">
            <Img
              w="100%"
              h="90%"
              src="https://res.cloudinary.com/ssenseweb/image/upload/w_1024,q_90,f_auto,dpr_auto/v1664198237/qswzxq85le1ibt8nvyjv.jpg"
            ></Img>
            <Flex>
              <Text margin="2px 20px 2px 20px">Featured:</Text>
              <Text>SHIMONE ROCHA</Text>
            </Flex>
            <Button marginBottom="20px">
              <Link to="/mens">SHOP MENSWEAR</Link>
            </Button>
          </Box>
          <Box height="600px">
            <Img
              w="100%"
              h="90%"
              src="https://res.cloudinary.com/ssenseweb/image/upload/w_1024,q_90,f_auto,dpr_auto/v1664198197/lzcxgnbawcvpdmh0gm8u.jpg"
            ></Img>
            <Flex>
              <Text margin="2px 20px 2px 20px">Featured:</Text>
              <Text>SHIMONE ROCHA</Text>
            </Flex>
            <Button marginBottom="20px">
              <Link to="/womens">SHOP WOMENSWEAR</Link>
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
      <Box marginTop="35px" padding={{ sm: "0rem", md: "0rem 2rem" }}>
        <SimpleGrid columns={{ sm: 1, md: 3 }} spacing="40px">
          <Box height="700px" marginBottom="40px">
            <Img
              w="100%"
              h="95%"
              src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1661799384/aqkm2inoorishzyljgfu.jpg"
            ></Img>
            <Text margin="2px 20px 2px 20px">Fashion:</Text>

            <Text marginBottom="20px">
              RIVER L. RAMIREZ AND THE ART OF HORNINESS
            </Text>
          </Box>
          <Box height="700px" marginBottom="40px">
            <Img
              w="100%"
              h="95%"
              src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1661363667/djvgbgnkfudsfkjjegqt.jpg"
            ></Img>
            <Text margin="2px 20px 2px 20px">Fashion:</Text>

            <Text marginBottom="20px">THE SKIILFALL GENRE</Text>
          </Box>
          <Box height="700px" marginBottom="40px">
            <Img
              w="100%"
              h="95%"
              src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1661463274/me61ff8jkbscxrxjwid6.jpg"
            ></Img>

            <Text margin="2px 20px 2px 20px">Fashion:</Text>

            <Text marginBottom="20px">BROWM NOISE RESET</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
