import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'ContractFinder - Never Miss Your Perfect IT Contract',
    description: 'Find and track IT contracts across France, Luxembourg, and UK. Get real-time alerts for Azure, DevOps, Terraform, and Kubernetes opportunities.',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'how-it-works',
        label: 'How it Works',
      },
      {
        id: 'features',
        label: 'Features',
      },
      {
        label: 'Pricing',
        href: '/pricing',
      },
      {
        label: 'Dashboard',
        href: '/dashboard',
      },
      {
        label: 'Login',
        href: '/login',
      },
      {
        label: 'Start Free Trial',
        href: '/signup',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        © 2023 ContractFinder
      </>
    ),
    links: [
      {
        href: '#',
        label: 'Privacy Policy',
      },
      {
        href: '#',
        label: 'Terms & Conditions',
      },
      {
        href: '#',
        label: 'Cookie Policy',
      },
      {
        href: 'https://linkedin.com/company/voxtell-ai',
        label: <FaLinkedin size="14" />,
      },
      {
        href: 'https://twitter.com/voxtell_ai',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://facebook.com/voxtellai',
        label: <FaFacebook size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start finding your perfect IT contracts',
    features: [
      {
        icon: FiCheck,
        title: '14-days free trial',
        description: 'Try ContractFinder risk-free for 14 days.',
      },
      {
        icon: FiCheck,
        title: 'Real-time alerts',
        description: 'Get instant notifications for matching contracts.',
      },
      {
        icon: FiCheck,
        title: 'Cancel anytime',
        description: 'No long-term commitments required.',
      },
    ],
  },
}

export default siteConfig
