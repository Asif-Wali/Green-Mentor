import { Box, Flex, Image, Select, Text } from "@chakra-ui/react";
import React from "react";
import cat from "../Assets/cat-1.svg";
import navimg from "../Assets/NavImag.svg";
import bell from "../Assets/bell.svg";
import { TriangleDownIcon } from "@chakra-ui/icons";
const Nav = () => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          width: "1200px",
          height: "64px",
          padding: "0px 20px",
          justifyContent: "space-between",
          alignItems: "center",
          flexShrink: "0",
        }}
      >
        <Box
          style={{
            display: "flex",
            height: "64px",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Image src={cat} />
          <Text
            style={{
              color: "#000000D6",
              fontFamily: "HelveticaNeue",
              fontSize: "16px",

              fontWeight: "400",
              lineHeight: "normal",
              fontStyle: "normal",
            }}
            w={"83px"}
            h={"19px"}
          >
            Category-1
          </Text>
        </Box>
        <Box
          style={{
            display: "flex",

            height: "56px",
            padding: "8px 16px",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Image src={navimg} />
          <TriangleDownIcon w={"24px"} h={"24px"} />
          <Image src={bell} />
        </Box>
      </Box>
      <Box
        textAlign="right"
        w="250px"
        h="44px"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        p={"23px"}
        ml="auto"
        border={"1px solid #02AB6C"}
        borderRadius={"6px"}
      >
        <Text display="inline">Show Time :</Text>
        <Select color="#02AB6C" border="none" w={"100px"}>
          <option value="">Mar`23-Apr`23</option>
        </Select>
      </Box>
    </>
  );
};

export default Nav;
