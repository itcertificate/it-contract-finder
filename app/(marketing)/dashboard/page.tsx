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
  Input,
  Select,
  Stack,
  Text,
  VStack,
  Badge,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Tag,
  TagLabel,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { useState } from 'react'
import { 
  FiSearch, 
  FiFilter, 
  FiPlus, 
  FiEdit, 
  FiTrash2, 
  FiBell, 
  FiMail, 
  FiMessageCircle,
  FiMapPin,
  FiDollarSign,
  FiClock,
  FiExternalLink
} from 'react-icons/fi'

// Mock data for demonstration
const mockJobs = [
  {
    id: 1,
    title: 'Senior Azure DevOps Engineer',
    company: 'TechCorp France',
    location: 'Paris, France',
    rate: '€600-800/day',
    type: 'Contract',
    remote: 'Hybrid',
    skills: ['Azure', 'DevOps', 'Terraform', 'Kubernetes'],
    posted: '2 hours ago',
    source: 'LinkedIn',
    match: 95
  },
  {
    id: 2,
    title: 'Kubernetes Platform Engineer',
    company: 'CloudStart Luxembourg',
    location: 'Luxembourg City, Luxembourg',
    rate: '€700-900/day',
    type: 'Contract',
    remote: 'Remote',
    skills: ['Kubernetes', 'Docker', 'AWS', 'Terraform'],
    posted: '4 hours ago',
    source: 'Indeed',
    match: 88
  },
  {
    id: 3,
    title: 'Terraform Infrastructure Specialist',
    company: 'DevOps Solutions UK',
    location: 'London, UK',
    rate: '£500-700/day',
    type: 'Contract',
    remote: 'On-site',
    skills: ['Terraform', 'AWS', 'Azure', 'CI/CD'],
    posted: '6 hours ago',
    source: 'Company Website',
    match: 92
  }
]

const mockFilters = [
  {
    id: 1,
    name: 'Azure DevOps Focus',
    skills: ['Azure', 'DevOps', 'Terraform'],
    location: 'France',
    minRate: 500,
    maxRate: 800,
    remote: 'Any',
    alerts: true
  },
  {
    id: 2,
    name: 'Kubernetes Specialist',
    skills: ['Kubernetes', 'Docker', 'AWS'],
    location: 'Luxembourg',
    minRate: 600,
    maxRate: 900,
    remote: 'Remote',
    alerts: true
  }
]

const Dashboard: NextPage = () => {
  const [activeTab, setActiveTab] = useState('jobs')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <Flex justify="space-between" align="center">
            <VStack align="start" spacing={2}>
              <Heading fontSize="3xl" color={useColorModeValue('gray.900', 'white')}>
                Contract Dashboard
              </Heading>
              <Text color={useColorModeValue('gray.600', 'gray.400')}>
                Find and track your perfect IT contracts
              </Text>
            </VStack>
            <Button
              colorScheme="purple"
              leftIcon={<FiPlus />}
              size="lg"
            >
              Create Filter
            </Button>
          </Flex>

          {/* Stats Cards */}
          <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={6}>
            <Card>
              <CardBody>
                <VStack spacing={2}>
                  <Text fontSize="2xl" fontWeight="bold" color="purple.600">12</Text>
                  <Text fontSize="sm" color="gray.600">Active Filters</Text>
                </VStack>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <VStack spacing={2}>
                  <Text fontSize="2xl" fontWeight="bold" color="green.600">47</Text>
                  <Text fontSize="sm" color="gray.600">New Matches Today</Text>
                </VStack>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <VStack spacing={2}>
                  <Text fontSize="2xl" fontWeight="bold" color="blue.600">3</Text>
                  <Text fontSize="sm" color="gray.600">Applications Sent</Text>
                </VStack>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <VStack spacing={2}>
                  <Text fontSize="2xl" fontWeight="bold" color="orange.600">2</Text>
                  <Text fontSize="sm" color="gray.600">Interviews Scheduled</Text>
                </VStack>
              </CardBody>
            </Card>
          </Grid>

          {/* Search and Filter Bar */}
          <Card>
            <CardBody>
              <HStack spacing={4}>
                <Input
                  placeholder="Search contracts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  leftIcon={<FiSearch />}
                  flex={1}
                />
                <Select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  w="200px"
                >
                  <option value="all">All Filters</option>
                  <option value="azure">Azure DevOps Focus</option>
                  <option value="kubernetes">Kubernetes Specialist</option>
                </Select>
                <Button leftIcon={<FiFilter />} variant="outline">
                  Advanced
                </Button>
              </HStack>
            </CardBody>
          </Card>

          {/* Tabs */}
          <HStack spacing={0} borderBottom="1px" borderColor="gray.200">
            <Button
              variant={activeTab === 'jobs' ? 'solid' : 'ghost'}
              colorScheme={activeTab === 'jobs' ? 'purple' : 'gray'}
              onClick={() => setActiveTab('jobs')}
              borderRadius="none"
              borderBottom={activeTab === 'jobs' ? '2px solid' : 'none'}
              borderBottomColor={activeTab === 'jobs' ? 'purple.500' : 'transparent'}
            >
              Matched Jobs (47)
            </Button>
            <Button
              variant={activeTab === 'filters' ? 'solid' : 'ghost'}
              colorScheme={activeTab === 'filters' ? 'purple' : 'gray'}
              onClick={() => setActiveTab('filters')}
              borderRadius="none"
              borderBottom={activeTab === 'filters' ? '2px solid' : 'none'}
              borderBottomColor={activeTab === 'filters' ? 'purple.500' : 'transparent'}
            >
              My Filters (12)
            </Button>
            <Button
              variant={activeTab === 'alerts' ? 'solid' : 'ghost'}
              colorScheme={activeTab === 'alerts' ? 'purple' : 'gray'}
              onClick={() => setActiveTab('alerts')}
              borderRadius="none"
              borderBottom={activeTab === 'alerts' ? '2px solid' : 'none'}
              borderBottomColor={activeTab === 'alerts' ? 'purple.500' : 'transparent'}
            >
              Alert Settings
            </Button>
          </HStack>

          {/* Content based on active tab */}
          {activeTab === 'jobs' && (
            <VStack spacing={4} align="stretch">
              {mockJobs.map((job) => (
                <Card key={job.id} _hover={{ shadow: 'lg' }}>
                  <CardBody>
                    <Flex justify="space-between" align="start">
                      <VStack align="start" spacing={3} flex={1}>
                        <HStack spacing={4}>
                          <Heading fontSize="lg">{job.title}</Heading>
                          <Badge colorScheme="green" variant="subtle">
                            {job.match}% match
                          </Badge>
                        </HStack>
                        
                        <HStack spacing={6} color="gray.600" fontSize="sm">
                          <HStack spacing={1}>
                            <Icon as={FiMapPin} />
                            <Text>{job.location}</Text>
                          </HStack>
                          <HStack spacing={1}>
                            <Icon as={FiDollarSign} />
                            <Text>{job.rate}</Text>
                          </HStack>
                          <HStack spacing={1}>
                            <Icon as={FiClock} />
                            <Text>{job.posted}</Text>
                          </HStack>
                          <Text>via {job.source}</Text>
                        </HStack>

                        <HStack spacing={2}>
                          {job.skills.map((skill) => (
                            <Tag key={skill} size="sm" colorScheme="purple" variant="subtle">
                              <TagLabel>{skill}</TagLabel>
                            </Tag>
                          ))}
                        </HStack>
                      </VStack>

                      <VStack spacing={2}>
                        <Button size="sm" colorScheme="purple" leftIcon={<FiExternalLink />}>
                          Apply
                        </Button>
                        <Button size="sm" variant="outline" leftIcon={<FiBell />}>
                          Save
                        </Button>
                      </VStack>
                    </Flex>
                  </CardBody>
                </Card>
              ))}
            </VStack>
          )}

          {activeTab === 'filters' && (
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
              {mockFilters.map((filter) => (
                <Card key={filter.id}>
                  <CardHeader>
                    <Flex justify="space-between" align="center">
                      <Heading fontSize="lg">{filter.name}</Heading>
                      <HStack spacing={2}>
                        <Button size="sm" variant="outline" leftIcon={<FiEdit />}>
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" colorScheme="red" leftIcon={<FiTrash2 />}>
                          Delete
                        </Button>
                      </HStack>
                    </Flex>
                  </CardHeader>
                  <CardBody pt={0}>
                    <VStack spacing={3} align="stretch">
                      <HStack spacing={2}>
                        <Text fontSize="sm" fontWeight="medium">Skills:</Text>
                        {filter.skills.map((skill) => (
                          <Tag key={skill} size="sm" colorScheme="purple" variant="subtle">
                            <TagLabel>{skill}</TagLabel>
                          </Tag>
                        ))}
                      </HStack>
                      
                      <HStack spacing={4} fontSize="sm">
                        <Text><strong>Location:</strong> {filter.location}</Text>
                        <Text><strong>Rate:</strong> €{filter.minRate}-{filter.maxRate}/day</Text>
                      </HStack>
                      
                      <HStack spacing={4} fontSize="sm">
                        <Text><strong>Remote:</strong> {filter.remote}</Text>
                        <HStack spacing={1}>
                          <Icon as={filter.alerts ? FiBell : FiBell} color={filter.alerts ? 'green.500' : 'gray.400'} />
                          <Text color={filter.alerts ? 'green.600' : 'gray.500'}>
                            {filter.alerts ? 'Alerts ON' : 'Alerts OFF'}
                          </Text>
                        </HStack>
                      </HStack>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </Grid>
          )}

          {activeTab === 'alerts' && (
            <VStack spacing={6} align="stretch">
              <Alert status="info">
                <AlertIcon />
                <AlertTitle>Alert Preferences</AlertTitle>
                <AlertDescription>
                  Configure how you want to receive notifications about new contract matches.
                </AlertDescription>
              </Alert>

              <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
                <Card>
                  <CardHeader>
                    <HStack spacing={3}>
                      <Icon as={FiMail} color="blue.500" boxSize={6} />
                      <Heading fontSize="lg">Email Alerts</Heading>
                    </HStack>
                  </CardHeader>
                  <CardBody>
                    <VStack spacing={4} align="stretch">
                      <Text fontSize="sm" color="gray.600">
                        Receive email notifications when new contracts match your filters.
                      </Text>
                      <HStack justify="space-between">
                        <Text fontSize="sm">Enable email alerts</Text>
                        <Button size="sm" colorScheme="blue" variant="outline">
                          Configure
                        </Button>
                      </HStack>
                    </VStack>
                  </CardBody>
                </Card>

                <Card>
                  <CardHeader>
                    <HStack spacing={3}>
                      <Icon as={FiMessageCircle} color="green.500" boxSize={6} />
                      <Heading fontSize="lg">Telegram Alerts</Heading>
                    </HStack>
                  </CardHeader>
                  <CardBody>
                    <VStack spacing={4} align="stretch">
                      <Text fontSize="sm" color="gray.600">
                        Get instant notifications via Telegram for urgent opportunities.
                      </Text>
                      <HStack justify="space-between">
                        <Text fontSize="sm">Enable Telegram alerts</Text>
                        <Button size="sm" colorScheme="green" variant="outline">
                          Connect
                        </Button>
                      </HStack>
                    </VStack>
                  </CardBody>
                </Card>
              </Grid>
            </VStack>
          )}
        </VStack>
      </Container>
    </Box>
  )
}

export default Dashboard
