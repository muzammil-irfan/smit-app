import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
} from "@chakra-ui/react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker'

export default function CourseDialog({date,setDate,setOpenDialogue,openDialogue,type,name,setName,handleSaveClick}) {
  return (
    <Modal
      isOpen={openDialogue}
      onClose={() => {
        setOpenDialogue(false);
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{type} Course</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel htmlFor="name">Course Name</FormLabel>
            <Input id="name" type="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Date</FormLabel>
            <DatePicker minDate={new Date()} selected={date} onChange={date=>{setDate(date)}} />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              setOpenDialogue(false);
            }}
          >
            Close
          </Button>
          <Button variant="ghost" onClick={handleSaveClick}>
            {type}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
