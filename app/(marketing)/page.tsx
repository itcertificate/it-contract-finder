'use client'

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
  Badge,
  Divider,
  Circle,
  Avatar,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import {
  FiArrowRight,
  FiCheck,
  FiPhone,
  FiCalendar,
  FiUsers,
  FiBarChart3,
  FiSettings,
  FiMessageSquare,
  FiStar,
  FiX,
  FiPlay,
  FiClock,
  FiShield,
  FiZap,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

export const meta: Metadata = {
  title: 'ContractFinder - Never Miss Your Perfect IT Contract',
  description: 'Find and track IT contracts across France, Luxembourg, and UK. Get real-time alerts for Azure, DevOps, Terraform, and Kubernetes opportunities.',
}

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />
      <TrustSection />
      <ComparisonSection />
      <CallDemoSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FinalCTASection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden" bg="white">
      <Container maxW="container.xl" pt={{ base: 20, lg: 32 }} pb="20">
        <VStack spacing={8} textAlign="center" maxW="4xl" mx="auto">
          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
            fontWeight="bold"
            lineHeight="shorter"
            color="gray.900"
          >
            Never Miss Your Perfect
            <Br />
            IT Contract Again.
          </Heading>
          
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="gray.600"
            maxW="3xl"
            lineHeight="tall"
          >
            Find and track IT contracts across France, Luxembourg, and UK. Get real-time alerts for Azure, DevOps, Terraform, and Kubernetes opportunities.
          </Text>

          <Button
            size="lg"
            colorScheme="purple"
            bg="purple.600"
            _hover={{ bg: 'purple.700' }}
            px={8}
            py={6}
            fontSize="lg"
            rightIcon={<FiArrowRight />}
            borderRadius="full"
          >
            Start Free Trial
          </Button>
        </VStack>
      </Container>
    </Box>
  )
}

const TrustSection: React.FC = () => {
  return (
    <Box py={16} bg="gray.50">
      <Container maxW="container.xl">
        <VStack spacing={8}>
          <Text color="gray.600" fontSize="lg">
            Trusted by 500+ IT contractors
          </Text>
          <HStack spacing={12} wrap="wrap" justify="center">
            {['Microsoft', 'Amazon Web Services', 'Google Cloud', 'Docker', 'HashiCorp', 'Red Hat'].map((company) => (
              <Text key={company} fontWeight="semibold" color="gray.700" fontSize="sm">
                {company}
              </Text>
            ))}
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}

const ComparisonSection: React.FC = () => {
  return (
    <Box py={20} bg="white">
      <Container maxW="container.xl">
        <VStack spacing={16}>
          <VStack spacing={4} textAlign="center" maxW="3xl">
            <Text color="purple.600" fontSize="sm" fontWeight="semibold" textTransform="uppercase">
              ContractFinder Platform
            </Text>
            <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold" color="gray.900">
              Better Way to Find & Track IT Contracts
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl">
              Stop manually searching job boards and missing opportunities. ContractFinder automatically finds and alerts you to perfect IT contracts, so you can focus on what you do best.
            </Text>
            <Button
              size="lg"
              colorScheme="purple"
              bg="purple.600"
              _hover={{ bg: 'purple.700' }}
              rightIcon={<FiArrowRight />}
            >
              Start Free Trial
            </Button>
          </VStack>

          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={12} alignItems="center">
            <VStack spacing={8} align="stretch">
              <VStack spacing={4} align="start">
                <Heading fontSize="2xl" color="red.600">Manual Job Searching</Heading>
                <VStack spacing={3} align="start">
                  {[
                    'Hours of daily searching',
                    'Missed opportunities',
                    'Manual filter setup',
                    'No real-time alerts'
                  ].map((item) => (
                    <HStack key={item} spacing={3}>
                      <Icon as={FiX} color="red.500" />
                      <Text color="gray.600">{item}</Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </VStack>

            <VStack spacing={8} align="stretch">
              <VStack spacing={4} align="start">
                <Heading fontSize="2xl" color="green.600">With ContractFinder</Heading>
                <VStack spacing={3} align="start">
                  {[
                    'Automated job discovery',
                    'Never miss opportunities',
                    'Smart filter matching',
                    'Real-time alerts'
                  ].map((item) => (
                    <HStack key={item} spacing={3}>
                      <Icon as={FiCheck} color="green.500" />
                      <Text color="gray.600">{item}</Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </VStack>
          </Grid>
        </VStack>
      </Container>
    </Box>
  )
}

const CallDemoSection: React.FC = () => {
  return (
    <Box py={20} bg="gray.50">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center" maxW="3xl">
            <Text color="purple.600" fontSize="sm" fontWeight="semibold" textTransform="uppercase">
              Call Demo
            </Text>
            <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold" color="gray.900">
              What are you waiting for call Voxtell AI Assistant
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Live Voxtell AI in real time. Click talk to Brittany to see how businesses are closing more deals without picking up the phone.
            </Text>
          </VStack>

          <Box
            bg="purple.800"
            borderRadius="full"
            p={6}
            maxW="md"
            w="full"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack spacing={4}>
              <Avatar size="md" name="Brittany" src="/static/images/avatar.jpg" />
              <VStack align="start" spacing={0}>
                <Text color="white" fontWeight="semibold">Brittany</Text>
                <Text color="white" fontSize="2xl" fontWeight="bold">+1 828-426-5504</Text>
              </VStack>
            </HStack>
            <Button
              bg="white"
              color="purple.800"
              _hover={{ bg: 'gray.100' }}
              leftIcon={<FiPhone />}
              borderRadius="full"
              px={6}
            >
              Talk to Brittany
            </Button>
          </Box>

          <Button
            size="lg"
            colorScheme="purple"
            bg="purple.600"
            _hover={{ bg: 'purple.700' }}
            rightIcon={<FiArrowRight />}
          >
            Book a Demo
          </Button>
        </VStack>
      </Container>
    </Box>
  )
}

const HowItWorksSection: React.FC = () => {
  return (
    <Box py={20} bg="white">
      <Container maxW="container.xl">
        <VStack spacing={16}>
          <Flex justify="space-between" align="center" w="full">
            <VStack spacing={4} align="start" maxW="2xl">
              <Text color="purple.600" fontSize="sm" fontWeight="semibold" textTransform="uppercase">
                How it Works
              </Text>
              <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold" color="gray.900">
                Get Set Up in 3 Easy Steps
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Start capturing, qualifying, and converting leads in just minutes—no credit card required.
              </Text>
            </VStack>
            <Button
              size="lg"
              colorScheme="purple"
              bg="purple.600"
              _hover={{ bg: 'purple.700' }}
              rightIcon={<FiArrowRight />}
            >
              Book a Demo
            </Button>
          </Flex>

          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
            {[
              {
                step: '01',
                title: 'Sign up & Connect your number',
                description: 'Create your account and connect your business phone number in seconds.',
                image: '/static/screenshots/dashboard.png'
              },
              {
                step: '02',
                title: 'Customize Your AI Assistant',
                description: 'Set up your AI assistant with your business name, voice preferences, and call handling rules.',
                image: '/static/screenshots/billing.png'
              },
              {
                step: '03',
                title: 'Let Voxtell AI Do the Work',
                description: 'Your AI assistant starts answering calls, qualifying leads, and booking appointments automatically.',
                image: '/static/screenshots/list.png'
              }
            ].map((step, index) => (
              <VStack key={index} spacing={6} align="center" textAlign="center">
                <Circle size="16" bg="purple.600" color="white" fontSize="2xl" fontWeight="bold">
                  {step.step}
                </Circle>
                <VStack spacing={4}>
                  <Heading fontSize="xl" color="gray.900">{step.title}</Heading>
                  <Text color="gray.600">{step.description}</Text>
                </VStack>
                <Box
                  w="full"
                  h="200px"
                  bg="gray.100"
                  borderRadius="lg"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="gray.500"
                >
                  Screenshot {index + 1}
                </Box>
              </VStack>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  )
}

const FeaturesSection: React.FC = () => {
  return (
    <Box py={20} bg="gray.50">
      <Container maxW="container.xl">
        <VStack spacing={16}>
          <Flex justify="space-between" align="center" w="full">
            <VStack spacing={4} align="start" maxW="2xl">
              <Text color="purple.600" fontSize="sm" fontWeight="semibold" textTransform="uppercase">
                Features
              </Text>
              <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold" color="gray.900">
                Everything you need to set up your AI Assistant
              </Heading>
              <Text fontSize="lg" color="gray.600">
                With Voxtell AI, you can instantly capture, qualify, and convert leads—without ever picking up the phone!
              </Text>
            </VStack>
            <Button
              size="lg"
              colorScheme="purple"
              bg="purple.600"
              _hover={{ bg: 'purple.700' }}
              rightIcon={<FiArrowRight />}
            >
              Book a Demo
            </Button>
          </Flex>

          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={8}>
            {[
              {
                title: 'Answer Call, Qualify Leads',
                description: 'AI answers every call and qualifies leads automatically using advanced conversation intelligence.',
                icon: FiPhone
              },
              {
                title: 'Campaign and Outbound Calls',
                description: 'Launch targeted outbound campaigns to reach your prospects and follow up automatically.',
                icon: FiUsers
              },
              {
                title: 'Appointment Scheduling & Booking',
                description: 'Seamlessly book appointments and sync with your calendar system in real-time.',
                icon: FiCalendar
              },
              {
                title: 'Transfer Calls',
                description: 'Intelligently transfer calls to the right team member based on context and availability.',
                icon: FiSettings
              },
              {
                title: 'Get Call Transcripts & recordings',
                description: 'Access detailed call transcripts and recordings for training and quality assurance.',
                icon: FiMessageSquare
              },
              {
                title: 'Integrations',
                description: 'Connect with your favorite tools like Salesforce, HubSpot, Google Calendar, and more.',
                icon: FiZap
              }
            ].map((feature, index) => (
              <VStack key={index} spacing={4} align="start" p={6} bg="white" borderRadius="lg" shadow="sm">
                <Icon as={feature.icon} boxSize={8} color="purple.600" />
                <VStack spacing={2} align="start">
                  <Heading fontSize="lg" color="gray.900">{feature.title}</Heading>
                  <Text color="gray.600" fontSize="sm">{feature.description}</Text>
                </VStack>
              </VStack>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  )
}

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Rami Iglesias",
      text: "Voxtell AI has completely transformed our lead generation. We never miss a call anymore and our conversion rate has increased by 40%.",
      rating: 5
    },
    {
      name: "Fernando Boron",
      text: "The AI assistant is incredibly smart and handles our customers professionally. It's like having a dedicated receptionist 24/7.",
      rating: 5
    },
    {
      name: "Jennifer McCabe",
      text: "Setup was incredibly easy and the results were immediate. Our team can now focus on closing deals instead of answering basic questions.",
      rating: 5
    }
  ]

  return (
    <Box py={20} bg="white">
      <Container maxW="container.xl">
        <VStack spacing={16}>
          <VStack spacing={4} textAlign="center" maxW="3xl">
            <Text color="purple.600" fontSize="sm" fontWeight="semibold" textTransform="uppercase">
              Testimonials
            </Text>
            <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold" color="gray.900">
              Voxtell AI works great with Tools you already use
            </Heading>
            <Text fontSize="lg" color="gray.600">
              That's why we built Voxtell AI. Every business should be able to engage, qualify, and convert leads 24/7 - without hiring more staff or using more tools.
            </Text>
          </VStack>

          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
            {testimonials.map((testimonial, index) => (
              <Box key={index} p={6} bg="gray.50" borderRadius="lg">
                <VStack spacing={4} align="start">
                  <HStack spacing={1}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} as={FiStar} color="yellow.400" />
                    ))}
                  </HStack>
                  <Text color="gray.600" fontSize="sm" lineHeight="tall">
                    "{testimonial.text}"
                  </Text>
                  <VStack spacing={1} align="start">
                    <Text fontWeight="semibold" color="gray.900">{testimonial.name}</Text>
                    <Text fontSize="sm" color="gray.500">Google</Text>
                  </VStack>
                </VStack>
              </Box>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  )
}

const FinalCTASection: React.FC = () => {
  return (
    <Box py={20} bg="purple.800" position="relative" overflow="hidden">
      <Container maxW="container.xl">
        <VStack spacing={12} textAlign="center" maxW="4xl" mx="auto">
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
            fontWeight="bold"
            color="white"
            lineHeight="shorter"
          >
            Never miss a call ever again.
            <Br />
            Get started with Voxtell AI today
          </Heading>
          
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="purple.100"
            maxW="3xl"
            lineHeight="tall"
          >
            Voxtell AI answers calls 24/7, books appointments, qualifies leads, and provides support helping you grow without hiring more staff.
          </Text>

          <Button
            size="lg"
            bg="purple.600"
            color="white"
            _hover={{ bg: 'purple.700' }}
            px={8}
            py={6}
            fontSize="lg"
            rightIcon={<FiArrowRight />}
            borderRadius="full"
          >
            Book a Demo
          </Button>

          <HStack spacing={8} wrap="wrap" justify="center">
            {[
              '14-days free trial',
              'AI models available',
              'Cancel anytime'
            ].map((benefit) => (
              <HStack key={benefit} spacing={2}>
                <Icon as={FiCheck} color="green.400" />
                <Text color="purple.100" fontSize="sm">{benefit}</Text>
              </HStack>
            ))}
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Home
