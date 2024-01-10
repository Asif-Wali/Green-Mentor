import React from 'react';
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

const SupplierTable = ({ Data }) => {
  // Calculate MoM values
  const calculateMoM = () => {
    const momData = [];
    for (let i = 1; i < Data.length; i++) {
      const momValue = ((Data[i].Revenue - Data[i - 1].Revenue) / Data[i - 1].Revenue) * 100;
      momData.push(momValue.toFixed(2)); // Round to 2 decimal places
    }
    return momData;
  };

  // Get MoM values
  const momValues = calculateMoM();

  return (
    <Box  mt={50} p="6" borderRadius="lg" boxShadow="lg" bg="white">
     
      <Table variant="striped" colorScheme="teal" borderWidth="1px" borderColor="gray.200">
        <Thead>
          <Tr>
            <Th borderBottom="1px" borderColor="gray.300" >Date</Th>
            <Th borderBottom="1px" borderColor="gray.300">Supplier</Th>
            <Th borderBottom="1px" borderColor="gray.300" >Revenue</Th>
            <Th borderBottom="1px" borderColor="gray.300" >MoM Change</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Data.map((item, index) => (
            <Tr key={index}  marginBottom="8px"> {/* Added maxW for the entire row */}
              <Td borderBottom="1px" borderColor="gray.300" >{item.Date}</Td>
              <Td borderBottom="1px" borderColor="gray.300" >{item.Supplier}</Td>
              <Td borderBottom="1px" borderColor="gray.300" >{item.Revenue}</Td>
              <Td borderBottom="1px" color={momValues[index] > 0 ? 'green' : 'red'} borderColor="gray.300" >
                {momValues[index] > 0 ? `↑ ${momValues[index]}%` : `↓ ${Math.abs(momValues[index])}%`}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default SupplierTable;
