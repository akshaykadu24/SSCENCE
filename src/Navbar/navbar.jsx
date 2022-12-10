import {
  Show,
  MenuButton,
  Menu,
  IconButton,
  MenuList,
  Select,
  Popover,
  PopoverTrigger,
  MenuItem,
  Flex,
  Box,
  Portal,
  Button,
  Input,
  PopoverCloseButton,
  PopoverBody,
  PopoverContent,
  PopoverArrow,
  Spacer,
  Img,
  Heading
} from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

import { Link } from "react-router-dom";
import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
export function Navbar() {
  const { isAuth, toggleAuth, change } = useContext(AuthContext);
  const [data, setData] = React.useState(0);

  React.useEffect(() => {
    fetch("https://indeed-data.vercel.app/singleProduct")
      .then((res) => res.json())
      .then((res) => setData(res.length))
      .catch((err) => console.log(err));
  }, [change]);
  function toggleState() {
    toggleAuth();

    return;
  }

  return (
    <>
      <Show breakpoint='(min-width: 885px)' >
        <Box position="fixed" z-index="-1" marginTop="-70px" w="100%">
          <Flex bg=" black" color="#FFF" p="10px">
            <Box fontSize="11px" m="10px" >
              <Flex >
                {" "}
                <Box margin="10px">
                <Heading size="sm"><Link to="/mens">MENSWEAR</Link></Heading>
                </Box>
                <Box margin="10px">
                  <Heading size="sm"><Link to="/womens">WOMENSWEAR</Link></Heading>
                </Box>
                <Box margin="10px" >
                  <Heading size="sm"><Link to="/everything-else">EVERYTINKG-ELSE</Link></Heading>
                </Box>
              </Flex>
            </Box>

            <Spacer />
            <Box margin="14px 10px 10px 10px">
              <Heading size="md"><Link to="/">SSENSE</Link></Heading>
            </Box>

            <Spacer />
            <Box fontSize="11px" m="10px" w="30%">
              <Flex justifyContent="flex-end">
                {" "}
                <Box margin="10px">
                  <Popover>
                    <PopoverTrigger>
                      <Heading size="sm"><Link>SEARCH</Link></Heading>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverArrow />
                        <Select width="80%" placeholder="Select option">
                          <option value="option1">MENSWEAR</option>
                          <option value="option2">WOMENSWEAR</option>
                          <option value="option3">EVERYTINKG-ELSE</option>
                        </Select>
                        <PopoverCloseButton
                          margin="5px"
                          // fontSize="18px"
                          variant="outline"
                        />
                        <PopoverBody>
                          <Flex>
                            <Input
                              placeholder="SEARCH HERE"
                              margin="10px"
                              size="md"
                            />
                            <IconButton
                              margin="10px"
                              fontSize="18px"
                              variant="outline"
                              aria-label="Search database"
                              size="md"
                              icon={<SearchIcon />}
                            />
                          </Flex>
                        </PopoverBody>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                </Box>
                <Box margin="10px">
                  {isAuth ? (
                    <button
                      color="white"
                      bg="none"
                      onClick={() => {
                        toggleState();
                      }}
                    >
                      LOGOUT
                    </button>
                  ) : (
                    <Heading size="sm"><Link to="/login">LOGIN</Link></Heading>
                  )}
                </Box>
                <Box margin="10px">
                  <Heading size="sm"><Link to="/cart">SHOPING_BAG({data})</Link></Heading>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Show>
      <Show breakpoint='(max-width: 885px)'>
        <Box position="fixed" w="100%" marginTop="-70px" bg="white">
          <Flex p="10px">
            <Box>
              <Menu>
                <MenuButton
                  margin="10px"
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                />
                <MenuList>
                  <MenuItem>
                    <Link to="/mens">MENSWEAR</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="./womens">WOMENSWEAR</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/everything-else">EVERYTINKG-ELSE</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link to="/login">LOGIN</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/cart">SHOPING_BAG({data})</Link>
                  </MenuItem>
                </MenuList>
              </Menu>

              <Popover>
                <PopoverTrigger>
                  <IconButton
                    margin="10px"
                    fontSize="18px"
                    variant="outline"
                    aria-label="Search database"
                    size="md"
                    icon={<SearchIcon />}
                  />
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <Select width="80%" placeholder="Select option">
                      <option value="option1">MENSWEAR</option>
                      <option value="option2">WOMENSWEAR</option>
                      <option value="option3">EVERYTINKG-ELSE</option>
                    </Select>
                    <PopoverCloseButton
                      margin="5px"
                      // fontSize="18px"
                      variant="outline"
                    />
                    <PopoverBody>
                      <Flex>
                        <Input
                          placeholder="SEARCH HERE"
                          margin="10px"
                          size="md"
                        />
                        <IconButton
                          margin="10px"
                          fontSize="18px"
                          variant="outline"
                          aria-label="Search database"
                          size="md"
                          icon={<SearchIcon />}
                        />
                      </Flex>
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </Popover>
            </Box>
            <Spacer />
            <Heading> <Link to="/">SSENSE</Link></Heading>
            <Spacer />
            <Box>
              <Button margin="10px" padding="0px">
                <Link to="/login">
                  <Img
                    fontSize="18px"
                    size="md"
                    width="25px"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8KGl_KSisz6hjoKP5iBpmUJmOVnqglWkCCCunX-b10HJ-HaLtnhZKukedAzDRvpNH4bc&usqp=CAU"
                  ></Img>
                </Link>
              </Button>
              <Button margin="10px" padding="0px">
                <Link to="/cart">
                  <Img
                    fontSize="18px"
                    size="md"
                    width="25px"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMsq2lipdJDei07_jKRH5v4WlTzgQ2YuSEQdoZj4BaWzf1NBmOkss3pbScJairRJuk8E0&usqp=CAU"
                  ></Img>
                </Link>
                {data}
              </Button>
            </Box>
          </Flex>
        </Box>
      </Show>
    </>
  );
}
