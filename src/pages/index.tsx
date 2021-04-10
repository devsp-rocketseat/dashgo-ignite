import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Input } from '../components/Form/Input'

interface SignInFormProps {
  email: string
  password: string
}

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm()

  const handleSignIn: SubmitHandler<SignInFormProps> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input type="email" name="email" {...register('email')} label="E-mail" />
          <Input type="password" name="password" {...register('password')} label="Senha" />
        </Stack>

        <Button
          type="submit"
          mt="6"
          size="lg"
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
