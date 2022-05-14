import React from 'react'
import {Flex,Button,ButtonGroup,Text} from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()
    const location = useLocation()
    const notRender = location.pathname.includes('login') || location.pathname.includes('signup')
    const admin = sessionStorage.getItem('token') && location.pathname.includes('admin')
  return (
    <>
    {
        !notRender &&
    <Flex justify={'space-between'} p={4} >
        <Text fontWeight={'bold'} fontSize='3xl'>
            SMIT APP
        </Text>
        {
            admin ? 
            <>
            </>:
        <Flex >
        <ButtonGroup size='md'>
        <Button colorScheme={'green'} onClick={()=>navigate('/newcourses')}>
            New Courses
        </Button>
            <Button onClick={()=>navigate('/login')} colorScheme='blue'>
                Login
            </Button>
            <Button colorScheme={'red'}>
                Signup
            </Button>
        </ButtonGroup>
        </Flex>
        }
    </Flex>
    }
    </>
  )
}
