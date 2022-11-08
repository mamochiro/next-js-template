import {
  Container,
  Button,
  Stack,
  Box
} from '@chakra-ui/react'
import * as React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Box padding='4' bg='blue.300' color='black' maxW='md'>
        Home page
      </Box>
      <Stack direction='row' spacing={4} align='center'>
        <Link href="/login">
          <Button colorScheme='teal' variant='solid'>
            Login
          </Button>
        </Link>

      </Stack>
    </Container>
  )
}
