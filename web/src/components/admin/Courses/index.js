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
  ButtonGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CourseDialog from "./CourseDialog";
import axios from "axios";
import backendHost from "../../../lib/backendHost";
import useSWR from 'swr'
import moment from 'moment'

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Courses() {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [type, setType] = useState("Create");
  const [openDialogue, setOpenDialogue] = useState(false);
  const { data, error } = useSWR(`${backendHost}/course/`, fetcher);
  const handleSaveClick = () => {
    const token = sessionStorage.getItem("token");
    const createData = {
      token,
      name,
      date,
    };
    const url = `${backendHost}/course/create`;
    axios
      .post(url, createData)
      .then((res) => {
        console.log(res);
        setOpenDialogue(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEdit = (item)=>{
    console.log(new Date(), item.date)
    // setName(item.name)
    // setDate(Date(item.date))
    // setType('Edit')
    // setOpenDialogue(true)
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
        <Button
          onClick={() => {
            setOpenDialogue(true);
          }}
          colorScheme='blue'
        >
          Create
        </Button>
      </Flex>
      {/* <Flex> */}
      <TableContainer p={4}>
        <Table>
          <Thead>
            <Tr>
              <Th>Serial No.</Th>
              <Th>Name</Th>
              <Th>Registration Date</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data === undefined ? [] : data.map((item, index) => {
              console.log(item)
              return (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{item.name}</Td>
                  <Td>{moment(item.date).format('DD-MM-YYYY')}</Td>
                  <Td>
                    <ButtonGroup>

                    <Button size='sm'  colorScheme='green' onClick={()=>{handleEdit(item)}}>
                      Edit
                    </Button>
                    <Button size='sm' colorScheme={'red'}>
                      Delete
                    </Button>
                    </ButtonGroup>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      {/* </Flex> */}
    </>
  );
}
