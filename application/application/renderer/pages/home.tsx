import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Flex, Stack, Avatar, Heading, Box, FormControl, Input, Button } from '@chakra-ui/react';

// a page with a form with one input and one button
// the input is a text input
// the button is a submit button
// the form has an onSubmit handler
// the onSubmit handler saves the input value to localStorage and redirects to the next page
// the next page is next.tsx
function Home() {

  const [apiUrl, setApiUrl] = React.useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    localStorage.setItem('apiUrl', apiUrl);
    window.location.href = '/login';
  };

  useEffect(() => {
    if (localStorage.getItem('apiUrl')) {
      window.location.href = '/login';
    }
  })

  return (
    <>
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="teal.500" />
          <Heading color="teal.400" as='h3' size='lg'>Welcome</Heading>
          <Heading color="teal.400" as='h5' size='sm'>Please enter the address of your server (API)</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form>
              <Stack spacing={4} p="1rem" backgroundColor="white" boxShadow="md" rounded="md">
                <FormControl isRequired>
                  <Input
                    type='url'
                    placeholder="API URL"
                    onChange={(event) => setApiUrl(event.target.value)}
                  />
                </FormControl>
                <Link href={{
                  pathname: '/login',
                }}>
                  <Button onClick={handleSubmit}>
                    Next
                  </Button>
                </Link>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Home;
