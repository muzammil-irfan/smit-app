import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import backendHost from "../../lib/backendHost";
import axios from 'axios'

export default function AdminLogin() {
    const location = useLocation();
    const admin = location.pathname.includes("admin");
    const initialValues = admin && {
        email:'',
        password:''
    }
    const [values, setvalues] = useState(initialValues);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setvalues({ ...values, [e.target.name]: e.target.value });
    };
    const handleSubmit = () => {
        setLoading(true)
        const url = admin
        ? `${backendHost}/admin/login`
        : `${backendHost}/auth/login`;
        axios.post(url, values)
        .then(res=>{
            
            console.log('res',res)
            sessionStorage.setItem('token',res.data.token)
            setLoading(false)
            navigate('/admin/courses')
        })
        .catch(err=>{
            setLoading(false)
            console.log(err)
        })
        console.log("submit");
    };
  return (
    <>
      <Flex
        minH={"100vh"}
        // maxW={'4xl'}
        align={"center"}
        justify={"center"}
        bg={"gray.50"}
      >
        <Stack mx={"auto"} w={"xl"} py={6} px={6}>
          <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
            <Stack spacing={8}>
              <Stack align={"center"}>
                <Heading fontSize={"4xl"}>Login</Heading>
              </Stack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  mx={4}
                  loadingText="Processing"
                  isLoading={loading}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleSubmit}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
