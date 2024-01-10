import React from "react";
import logo from "../Assets/logo.svg";
import energy from "../Assets/energy.svg";
import water from "../Assets/water.svg";
import deletes from "../Assets/delete.svg";
import log from "../Assets/Longsight 1.svg";
import dropdown from "../Assets/drop-down.svg";
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Select,
  Text,
} from "@chakra-ui/react";

const SidebarLeft = () => {
  return (
    <>
      <Box w="249px" h="1306px" bgColor="#181818" p={"15px"} textAlign="left">
        <Button
          bgColor="#181818"
          w="219px"
          h="73px"
          padding="13px 10px 13px 20px"
          borderRadius="45px"
          gap="5px"
          _hover={{}}
        >
          <Image src={logo} alt="err" w="128px" h="47px" />
        </Button>

        <Box
          p={"15px"}
          w="219px"
          h="44px"
          borderRadius="45px"
          padding="13px 10px 13px 20px"
          gap="5px"
          textAlign="left"
        >
          <Text color="#5C5C5C" w="157px" h="18px">
            DATA-IN
          </Text>
        </Box>

        <Button color="#FFFFFF" bgColor="#181818" textAlign="left">
          <Image src={energy} alt="err" w="17px" h="17px" marginRight="8px" />
          <Text width="51px" height="18px" marginLeft="8px">
            Energy
          </Text>
          <Image src={dropdown} w="24px" h="24px" color="#FFFFFF" />
        </Button>
        <HStack borderBottom="2px solid grey">
          <Button color="#FFFFFF" bgColor="#181818">
            <Image src={water} alt="err" w="17px" h="17px" marginRight="8px" />
            <Text width="51px" height="18px" marginLeft="8px">
              Water and Effluents
            </Text>
          </Button>
          {/* <Box>
      <Image src={dropdown} w="24px" h="24px" color="#FFFFFF"/>
      </Box> */}
        </HStack>

        <Box
          p={"15px"}
          w="219px"
          h="44px"
          borderRadius="45px"
          padding="13px 10px 13px 20px"
          gap="5px"
          textAlign="left"
        >
          <Text color="#5C5C5C" w="157px" h="18px">
            ANALYZE
          </Text>
        </Box>

        <Button p="15px" color="#FFFFFF" bgColor="#181818" textAlign="center">
          <Image src={energy} alt="err" w="17px" h="17px" marginRight="8px" />
          <Text width="51px" height="18px" marginLeft="8px">
            Energy
          </Text>
          <Image src={dropdown} w="24px" h="24px" color="#FFFFFF" />
        </Button>
        <Box borderBottom="2px solid grey">
          <Button
            p="15px"
            color="#FFFFFF"
            bgColor="#181818"
            textAlign="center"
            position="relative"
          >
            <Image
              src={deletes}
              alt="err"
              w="17px"
              h="17px"
              marginRight="8px"
            />
            <Text width="51px" height="18px" marginLeft="8px">
              Waste <span>(beta)</span>
            </Text>
          </Button>
        </Box>

        <Box mt={"30px"}>
          <Text
            borderRadius="5px"
            justifyContent="center"
            p="6px"
            color="white"
            w="187px"
            h="50px"
            bgColor="#02AB6C"
            align="center"
            m="auto"
            textAlign="center"
          >
            Open Help Centre
          </Text>
        </Box>
        <Box
        display="flex"
        color="#FFFFFF"
        width="220px"
        height="48px"
        padding="8px 0px"
        justifyContent="center"
        alignItems="end"
        gap="8px"
        marginTop={250}
        background="linear-gradient(0deg, #02AB6C 0%, #02AB6C 100%) #FAFBFC"
      >
        <Text display="inline">POWERED BY</Text>
        <Image src={log} alt="logo" />
      </Box>

      </Box>

     
    </>
  );
};

export default SidebarLeft;

// import React from "react";
// import { Sidebar } from "flowbite-react";
// import {
//   HiArrowSmRight,
//   HiChartPie,
//   HiInbox,
//   HiShoppingBag,
//   HiTable,
//   HiUser,
//   HiSun,
// } from "react-icons/hi";
// import { IoWater } from "react-icons/io5";
// import { RiDeleteBin6Line } from "react-icons/ri";

// const SidebarLeft = () => {

//     return (
//     <Sidebar css={{ background: 'black'}} aria-label="Sidebar with multi-level dropdown example">
//       <Sidebar.Items>
//         <Sidebar.ItemGroup>
//           <Sidebar.Item href="#">
//             <img
//               src="./Button.png"
//               alt="Dashboard"
//               style={{ width: "20px", marginRight: "8px" }}
//             />
//             Dashboard
//           </Sidebar.Item>

//           <Sidebar.Collapse icon={HiSun} label="Energy">
//             <Sidebar.Item href="#">Products</Sidebar.Item>
//             <Sidebar.Item href="#">Sales</Sidebar.Item>
//             <Sidebar.Item href="#">Refunds</Sidebar.Item>
//             <Sidebar.Item href="#">Shipping</Sidebar.Item>
//           </Sidebar.Collapse>

//           <Sidebar.Collapse icon={IoWater} label="Water and Effulents">
//             <Sidebar.Item href="#">Products</Sidebar.Item>
//             <Sidebar.Item href="#">Sales</Sidebar.Item>
//             <Sidebar.Item href="#">Refunds</Sidebar.Item>
//             <Sidebar.Item href="#">Shipping</Sidebar.Item>
//           </Sidebar.Collapse>

//           <Sidebar.Item href="#" icon={HiSun}>
//             Energy
//           </Sidebar.Item>
//           <Sidebar.Item href="#" icon={RiDeleteBin6Line}>
//             Waste
//           </Sidebar.Item>
//         </Sidebar.ItemGroup>
//       </Sidebar.Items>
//     </Sidebar>
//   );
// };

// export default SidebarLeft;
