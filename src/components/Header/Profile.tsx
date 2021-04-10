import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Vitor DevSP</Text>

        <Text color="gray.300" fontSize="small">
          contatodevsp@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Vitor DevSP" />
    </Flex>
  )
}
