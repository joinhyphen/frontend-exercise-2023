import { Button, Center, Heading, Stack } from '@chakra-ui/react'

const WelcomePage = () => {
  return (
    <Center w='100vw' h='100vh'>
      <Stack maxWidth={880} alignItems='center' textAlign='center' spacing={8}>
        <Heading>
          An Eisenhower Matrix will help you assign priorities based on how
          important and urgent each task is, assigning them to 4 different
          categories: Do, Defer, Delegate and Drop, which are aligned to urgency
          and importance.
        </Heading>

        <Button size='lg' colorScheme='teal' w='fit-content' px={16}>
          Got it
        </Button>
      </Stack>
    </Center>
  )
}

export default WelcomePage
