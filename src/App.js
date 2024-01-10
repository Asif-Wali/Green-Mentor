import { ChakraProvider, Flex } from "@chakra-ui/react";
import "./App.css";
import HomePage from "./components/HomePage";
import SidebarLeft from "./components/SidebarLeft";

function App() {
  return (
    <div className="App">
     
     <ChakraProvider>
        <Flex>
          <SidebarLeft/>
          <HomePage/>
        </Flex>



     </ChakraProvider>
    
   
        {/* <MainSidebar /> */}
        {/* <SidebarLeft/>
        <Nav /> */}
        {/* <Cards/>
        <BarChart Data={data} /> */}
     {/* <div  style={{  width:"70" ,display: "flex", justifyContent:"center", alignItems:"center"}}>
     <PieChart Data={data} />
     <SupplierTable Data={data} />
     </div> */}
    
  
    </div>
  );
}

export default App;
