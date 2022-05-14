import React from 'react'
import {Flex,Button,ButtonGroup} from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()
    const location = useLocation()
    const notRender = location.pathname.includes('login') || location.pathname.includes('signup')
  return (
    <>
    {
        !notRender &&
    <Flex justify={'space-between'} p={4}>
        <Button>
            New Courses
        </Button>
        <ButtonGroup>
            <Button onClick={()=>navigate('/login')}>
                Login
            </Button>
            <Button>
                Signup
            </Button>
        </ButtonGroup>
    </Flex>
    }
    </>
  )
}
