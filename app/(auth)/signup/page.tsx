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
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import NextLink from 'next/link'
import { useState } from 'react'
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'

import siteConfig from '#data/config'

const SignUp: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
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
                Start your free trial
              </Heading>
              <Text color={useColorModeValue('gray.600', 'gray.400')}>
                Join thousands of businesses using Voxtell AI to never miss a call again
              </Text>
            </VStack>

            {/* Sign Up Form */}
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
                    <HStack spacing={4}>
                      <FormControl isRequired>
                        <FormLabel fontSize="sm" fontWeight="medium">First name</FormLabel>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          size="lg"
                          borderColor={useColorModeValue('gray.300', 'gray.600')}
                          _focus={{ borderColor: 'purple.500', boxShadow: '0 0 0 1px purple.500' }}
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel fontSize="sm" fontWeight="medium">Last name</FormLabel>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          size="lg"
                          borderColor={useColorModeValue('gray.300', 'gray.600')}
                          _focus={{ borderColor: 'purple.500', boxShadow: '0 0 0 1px purple.500' }}
                        />
                      </FormControl>
                    </HStack>

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
                          placeholder="Create a strong password"
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

                    <FormControl isRequired>
                      <FormLabel fontSize="sm" fontWeight="medium">Confirm password</FormLabel>
                      <Input
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm your password"
                        size="lg"
                        borderColor={useColorModeValue('gray.300', 'gray.600')}
                        _focus={{ borderColor: 'purple.500', boxShadow: '0 0 0 1px purple.500' }}
                      />
                    </FormControl>

                    <Checkbox
                      name="agreeToTerms"
                      isChecked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      colorScheme="purple"
                      size="sm"
                    >
                      <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                        I agree to the{' '}
                        <Link href={siteConfig.termsUrl} color="purple.500" textDecoration="underline">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href={siteConfig.privacyUrl} color="purple.500" textDecoration="underline">
                          Privacy Policy
                        </Link>
                      </Text>
                    </Checkbox>
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
                    rightIcon={<FiCheck />}
                  >
                    Start free trial
                  </Button>

                  {/* Login Link */}
                  <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                    Already have an account?{' '}
                    <Link as={NextLink} href="/login" color="purple.500" fontWeight="medium">
                      Sign in
                    </Link>
                  </Text>
                </VStack>
              </form>
            </Box>

            {/* Features */}
            <VStack spacing={4} textAlign="center">
              <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} fontWeight="medium">
                What you get with your free trial:
              </Text>
              <HStack spacing={8} wrap="wrap" justify="center">
                {siteConfig.signup.features.map((feature, index) => (
                  <HStack key={index} spacing={2}>
                    <Icon as={feature.icon} color="green.500" boxSize={4} />
                    <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                      {feature.title}
                    </Text>
                  </HStack>
                ))}
              </HStack>
            </VStack>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

export default SignUp
