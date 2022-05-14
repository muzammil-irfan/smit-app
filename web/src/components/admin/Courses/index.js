import {
  Flex,
  Heading,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import React,{useState} from "react";
import CourseDialog from "./CourseDialog";

export default function Courses() {
  const [date,setDate] = useState(new Date());
  const [name,setName] = useState('')
  const [type,setType] = useState('create')
  const [openDialogue,setOpenDialogue] = useState(false)
  const handleSaveClick = ()=>{
    console.log('save')
  }
  return (
    //date,setDate,setOpenDialogue,openDialogue,type,name,setName,handleSaveClick
    <>
    <CourseDialog 
    date={date}
    setDate={setDate}
    name={name}
    setName={setName}
    type={type}
    openDialogue={openDialogue}
    setOpenDialogue={setOpenDialogue}
    handleSaveClick={handleSaveClick}
    />
      <Flex p={2} justify="space-between">
        <Heading>Courses</Heading>
        <Button onClick={()=>{setOpenDialogue(true)}}>Create</Button>
      </Flex>
      {/* <Flex> */}
        <TableContainer p={4}>
          <Table  >
            <Thead>
              <Tr>
                <Th>Serial No.</Th>
                <Th>Name</Th>
                <Th>Registration Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      {/* </Flex> */}
    </>
  );
}
