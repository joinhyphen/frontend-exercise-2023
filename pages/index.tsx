import { Button, Center, Heading, Stack } from '@chakra-ui/react'

type Scale = 'low' | 'high'

type TaskCards = Array<{
  title: React.ReactNode
  importance: Scale
  urgency: Scale
}>

const taskCards: TaskCards = [
  {
    title: <>Finish presentation</>,
    importance: 'high',
    urgency: 'low'
  },
  {
    title: <>Re-design website</>,
    importance: 'high',
    urgency: 'high'
  },
  {
    title: <>Choose gift for customer</>,
    importance: 'low',
    urgency: 'high'
  },
  {
    title: <>Tweak ad text color</>,
    importance: 'low',
    urgency: 'low'
  },
  {
    title: <>Get birthday card for Pam</>,
    importance: 'low',
    urgency: 'high'
  },
  {
    title: <>Send email to Sarah</>,
    importance: 'high',
    urgency: 'low'
  }
]

const Index = () => {
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

export default Index
