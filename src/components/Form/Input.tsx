import { forwardRef, ForwardRefRenderFunction as FR_RenderFunc } from 'react'
import { FormLabel, FormControl, Input as ChakraInput, InputProps } from '@chakra-ui/react'

interface Props extends InputProps {
  name: string
  label?: string
}

const InputBase: FR_RenderFunc<HTMLInputElement, Props> = ({ name, label, ...rest }, ref) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg"
        ref={ref}
        {...rest}
      />
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
