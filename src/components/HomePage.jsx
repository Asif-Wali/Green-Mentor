import React from 'react'
import Nav from './Nav'
import Cards from './Cards'
import BarChart from './BarChart'
import { Flex } from '@chakra-ui/react'
import PieChart from './PieChart'
import SupplierTable from './SupplierTable'
import {data} from "../Data"
import {data2} from "../Data2"


const HomePage = () => {
  
    return (
    <div  >
    <Nav/>
    <Cards/>
    <BarChart Data={data}/>

    <Flex  >
        <PieChart  Data={data}/>
        <SupplierTable  Data={data2}/>
    </Flex>
      
    </div>
  )
}

export default HomePage
