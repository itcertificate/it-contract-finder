'use client'

import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  Checkbox,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import NextLink from 'next/link'
import { useState } from 'react'
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'

import siteConfig from '#data/config'

const Login: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="container.xl" py={8}>
        <Flex minH="100vh" align="center" justify="center">
          <Stack spacing={8} w="full" maxW="md">
            {/* Header */}
            <VStack spacing={4} textAlign="center">
              <NextLink href="/">
                <Box
                  as={siteConfig.logo}
                  fontSize="2xl"
                  fontWeight="bold"
                  color={useColorModeValue('purple.600', 'purple.400')}
                  _hover={{ opacity: 0.8 }}
                />
              </NextLink>
              <Heading fontSize="2xl" color={useColorModeValue('gray.900', 'white')}>
                Welcome back
              </Heading>
              <Text color={useColorModeValue('gray.600', 'gray.400')}>
                Sign in to your Voxtell AI account
              </Text>
            </VStack>

            {/* Login Form */}
            <Box
              bg={useColorModeValue('white', 'gray.800')}
              rounded="lg"
              shadow="xl"
              p={8}
              border="1px"
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <form onSubmit={handleSubmit}>
                <VStack spacing={6}>
                  {/* Social Login Buttons */}
                  <VStack spacing={4} w="full">
                    <Button
                      w="full"
                      variant="outline"
                      leftIcon={<FaGoogle />}
                      size="lg"
                      _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }}
                    >
                      Continue with Google
                    </Button>
                    <Button
                      w="full"
                      variant="outline"
                      leftIcon={<FaGithub />}
                      size="lg"
                      _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }}
                    >
                      Continue with GitHub
                    </Button>
                  </VStack>

                  <HStack w="full">
                    <Divider />
                    <Text fontSize="sm" color="gray.500">or</Text>
                    <Divider />
                  </HStack>

                  {/* Form Fields */}
                  <Stack spacing={4} w="full">
                    <FormControl isRequired>
                      <FormLabel fontSize="sm" fontWeight="medium">Email address</FormLabel>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        size="lg"
                        borderColor={useColorModeValue('gray.300', 'gray.600')}
                        _focus={{ borderColor: 'purple.500', boxShadow: '0 0 0 1px purple.500' }}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel fontSize="sm" fontWeight="medium">Password</FormLabel>
                      <InputGroup>
                        <Input
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="Enter your password"
                          size="lg"
                          borderColor={useColorModeValue('gray.300', 'gray.600')}
                          _focus={{ borderColor: 'purple.500', boxShadow: '0 0 0 1px purple.500' }}
                        />
                        <InputRightElement h="full">
                          <Button
                            variant="ghost"
                            onClick={() => setShowPassword(!showPassword)}
                            size="sm"
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>

                    <Flex justify="space-between" align="center">
                      <Checkbox
                        name="rememberMe"
                        isChecked={formData.rememberMe}
                        onChange={handleInputChange}
                        colorScheme="purple"
                        size="sm"
                      >
                        <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                          Remember me
                        </Text>
                      </Checkbox>
                      <Link
                        href="#"
                        fontSize="sm"
                        color="purple.500"
                        _hover={{ textDecoration: 'underline' }}
                      >
                        Forgot password?
                      </Link>
                    </Flex>
                  </Stack>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    w="full"
                    size="lg"
                    bg="purple.600"
                    color="white"
                    _hover={{ bg: 'purple.700' }}
                    _active={{ bg: 'purple.800' }}
                    rightIcon={<FiArrowRight />}
                  >
                    Sign in
                  </Button>

                  {/* Sign Up Link */}
                  <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                    Don't have an account?{' '}
                    <Link as={NextLink} href="/signup" color="purple.500" fontWeight="medium">
                      Start your free trial
                    </Link>
                  </Text>
                </VStack>
              </form>
            </Box>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Login
