'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  VStack,
  Badge,
  Divider,
} from '@chakra-ui/react'
import { FiCheck, FiX } from 'react-icons/fi'
import * as React from 'react'

export const meta = {
  title: 'Pricing - ContractFinder',
  description: 'Choose your plan to start your 7-day free trial. You can change or cancel at any time.',
}

const PricingPage: React.FC = () => {
  const plans = [
    {
      id: 'starter',
      title: 'Starter',
      description: 'Perfect for individual IT contractors starting out.',
      price: '€29/month',
      isPopular: false,
      features: {
        users: '1 user',
        filters: '5 saved filters',
        alerts: 'Email alerts only',
        sources: '3 job sources',
        history: '30 days history',
        support: 'Email support',
      }
    },
    {
      id: 'growth',
      title: 'Growth',
      description: 'Most popular choice for active contractors.',
      price: '€59/month',
      isPopular: true,
      features: {
        users: '1 user',
        filters: 'Unlimited filters',
        alerts: 'Email + Telegram',
        sources: 'All job sources',
        history: '90 days history',
        support: 'Priority support',
      }
    },
    {
      id: 'scale',
      title: 'Scale',
      description: 'For contractors managing multiple opportunities.',
      price: '€99/month',
      isPopular: false,
      features: {
        users: '1 user',
        filters: 'Unlimited filters',
        alerts: 'All alert types',
        sources: 'All job sources',
        history: '1 year history',
        support: 'Phone + Email support',
      }
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      description: 'For agencies managing multiple contractors.',
      price: 'Custom',
      isPopular: false,
      features: {
        users: 'Unlimited',
        filters: 'Unlimited filters',
        alerts: 'Custom integrations',
        sources: 'Custom sources',
        history: 'Unlimited history',
        support: 'Dedicated support',
      }
    }
  ]

  const features = [
    { name: 'Users', key: 'users' },
    { name: 'Saved Filters', key: 'filters' },
    { name: 'Alert Methods', key: 'alerts' },
    { name: 'Job Sources', key: 'sources' },
    { name: 'Search History', key: 'history' },
    { name: 'Support Level', key: 'support' },
  ]

  return (
    <Box minH="100vh" bg="gray.900" color="white">
      <Container maxW="container.xl" py={20}>
        <VStack spacing={16}>
          {/* Header */}
          <VStack spacing={4} textAlign="center" maxW="3xl">
            <Heading as="h1" fontSize={{ base: '4xl', md: '5xl' }} fontWeight="bold">
              Choose your plan
            </Heading>
            <Text fontSize="lg" color="gray.300">
              Choose a plan to start your 7-day free trial. You can change or cancel at any time.
            </Text>
          </VStack>

          {/* Pricing Cards */}
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6} w="full">
            {plans.map((plan) => (
              <Box
                key={plan.id}
                bg="gray.800"
                borderRadius="lg"
                p={6}
                border={plan.isPopular ? '2px solid' : '1px solid'}
                borderColor={plan.isPopular ? 'purple.500' : 'gray.600'}
                position="relative"
              >
                {plan.isPopular && (
                  <Badge
                    position="absolute"
                    top={-2}
                    left="50%"
                    transform="translateX(-50%)"
                    bg="purple.500"
                    color="white"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight="semibold"
                  >
                    Most Popular
                  </Badge>
                )}
                
                <VStack spacing={4} align="stretch">
                  <VStack spacing={2} align="start">
                    <Heading fontSize="xl" fontWeight="bold">{plan.title}</Heading>
                    <Text color="gray.300" fontSize="sm">{plan.description}</Text>
                  </VStack>
                  
                  <Box>
                    <Text fontSize="3xl" fontWeight="bold">{plan.price}</Text>
                  </Box>
                  
                  <Button
                    w="full"
                    bg={plan.isPopular ? 'purple.500' : 'transparent'}
                    color="white"
                    border="1px solid"
                    borderColor="white"
                    _hover={{
                      bg: plan.isPopular ? 'purple.600' : 'white',
                      color: plan.isPopular ? 'white' : 'gray.900'
                    }}
                    borderRadius="full"
                    py={6}
                  >
                    {plan.id === 'enterprise' ? 'Talk to Sales' : 'Start free trial'}
                  </Button>
                </VStack>
              </Box>
            ))}
          </Grid>

          {/* Feature Comparison Table */}
          <Box w="full" overflowX="auto">
            <Table variant="simple" size="lg">
              <Thead>
                <Tr>
                  <Th color="gray.300" borderColor="gray.600" fontSize="sm" fontWeight="semibold">
                    Features
                  </Th>
                  {plans.map((plan) => (
                    <Th key={plan.id} color="gray.300" borderColor="gray.600" fontSize="sm" fontWeight="semibold" textAlign="center">
                      {plan.title}
                    </Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {features.map((feature) => (
                  <Tr key={feature.key} borderColor="gray.600">
                    <Td color="gray.300" borderColor="gray.600" fontWeight="medium">
                      {feature.name}
                    </Td>
                    {plans.map((plan) => (
                      <Td key={plan.id} borderColor="gray.600" textAlign="center">
                        {plan.features[feature.key as keyof typeof plan.features] === 'Unlimited' || 
                         plan.features[feature.key as keyof typeof plan.features] === 'Custom' ? (
                          <HStack justify="center" spacing={2}>
                            <Text color="green.400" fontSize="sm">
                              {plan.features[feature.key as keyof typeof plan.features]}
                            </Text>
                            <Icon as={FiCheck} color="green.400" />
                          </HStack>
                        ) : plan.features[feature.key as keyof typeof plan.features] === 'Outbound campaigns' ? (
                          <HStack justify="center" spacing={2}>
                            <Text color="green.400" fontSize="sm">
                              {plan.features[feature.key as keyof typeof plan.features]}
                            </Text>
                            <Icon as={FiCheck} color="green.400" />
                          </HStack>
                        ) : plan.features[feature.key as keyof typeof plan.features] === 'Inbound only' ? (
                          <HStack justify="center" spacing={2}>
                            <Text color="green.400" fontSize="sm">
                              {plan.features[feature.key as keyof typeof plan.features]}
                            </Text>
                            <Icon as={FiCheck} color="green.400" />
                          </HStack>
                        ) : (
                          <Text color="gray.300" fontSize="sm">
                            {plan.features[feature.key as keyof typeof plan.features]}
                          </Text>
                        )}
                      </Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default PricingPage
