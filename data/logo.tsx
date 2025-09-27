import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'div'>> = (props) => {
  const color = useColorModeValue('#231f20', '#fff')
  return (
    <chakra.div
      fontSize="2xl"
      fontWeight="bold"
      color={color}
      {...props}
    >
      ContractFinder
    </chakra.div>
  )
}
