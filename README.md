# ContractFinder - IT Contract Discovery Platform

A modern SaaS platform designed to help IT contractors find and track job opportunities across France, Luxembourg, and the UK. Built with Next.js, Chakra UI, and TypeScript.

## 🚀 Features

### Core Functionality
- **Smart Job Discovery**: Automatically finds IT contracts matching your skills and preferences
- **Advanced Filtering**: Save custom filters for Azure, DevOps, Terraform, Kubernetes, and more
- **Real-time Alerts**: Get instant notifications via email or Telegram when new opportunities match
- **Multi-source Aggregation**: Pulls jobs from LinkedIn, Indeed, and other major job boards
- **Dashboard Analytics**: Track your applications, interviews, and success metrics

### Target Technologies
- **Cloud Platforms**: Azure, AWS, Google Cloud
- **DevOps Tools**: Terraform, Kubernetes, Docker, CI/CD
- **Programming Languages**: Python, JavaScript, Go, Java
- **Infrastructure**: Microservices, Serverless, Containerization

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **UI Framework**: Chakra UI
- **Styling**: Emotion, Tailwind CSS (via Chakra)
- **Icons**: React Icons
- **Animations**: Framer Motion
- **State Management**: React Hooks
- **Authentication**: Custom implementation (ready for Supabase/Clerk)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/contractfinder.git
   cd contractfinder
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
contractfinder/
├── app/
│   ├── (auth)/                 # Authentication pages
│   │   ├── login/page.tsx      # Login page
│   │   └── signup/page.tsx     # Signup page
│   ├── (marketing)/            # Marketing pages
│   │   ├── dashboard/page.tsx  # Main dashboard
│   │   ├── pricing/page.tsx    # Pricing plans
│   │   └── page.tsx           # Landing page
│   ├── layout.tsx             # Root layout
│   └── provider.tsx           # Chakra UI provider
├── components/                 # Reusable UI components
├── data/                      # Configuration and mock data
├── hooks/                     # Custom React hooks
├── public/                    # Static assets
└── theme/                     # Chakra UI theme configuration
```

## 🎯 Key Pages

### Landing Page (`/`)
- Hero section with value proposition
- Feature comparison (manual vs automated)
- Trust indicators and testimonials
- Call-to-action sections

### Dashboard (`/dashboard`)
- Job listings with match percentages
- Filter management (create, edit, delete)
- Alert preferences (email, Telegram)
- Application tracking

### Pricing (`/pricing`)
- Three pricing tiers: Starter (€29), Growth (€59), Scale (€99)
- Feature comparison table
- Enterprise custom pricing

### Authentication (`/login`, `/signup`)
- Modern, clean design
- Social login options (Google, GitHub)
- Form validation and error handling

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
NEXT_PUBLIC_APP_URL=http://localhost:3000
# Add Supabase, Make.com, or other service credentials
```

### Customization
- **Branding**: Update `data/config.tsx` for site-wide configuration
- **Theme**: Modify `theme/` directory for design system changes
- **Components**: All components are in `components/` directory

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: Connect GitHub repository
- **Railway**: Deploy with `railway up`
- **Docker**: Use the included Dockerfile

## 🔌 Backend Integration

### Ready for Integration
The frontend is prepared for integration with:

- **Supabase**: For user authentication and data storage
- **Airtable**: For job listings and user preferences
- **Make.com**: For job aggregation and alerting
- **n8n**: Alternative automation platform

### API Endpoints (To be implemented)
```
POST /api/auth/login
POST /api/auth/signup
GET  /api/jobs
POST /api/filters
PUT  /api/filters/:id
DELETE /api/filters/:id
POST /api/alerts/configure
```

## 📊 Automation Workflows

### Make.com Integration
1. **Job Aggregation**: Pull jobs from LinkedIn, Indeed, company websites
2. **Filter Matching**: Compare jobs against user filters
3. **Alert Triggering**: Send emails/Telegram notifications
4. **Data Storage**: Save jobs and user preferences

### n8n Alternative
- Similar workflow capabilities
- Self-hosted option
- Custom node development

## 🎨 Design System

### Color Palette
- **Primary**: Purple (#8952e0)
- **Secondary**: Blue (#2ab4d9)
- **Success**: Green (#0ea371)
- **Warning**: Orange (#c37b24)
- **Error**: Red (#dc4a41)

### Typography
- **Headings**: Inter Variable
- **Body**: Inter Variable
- **Monospace**: SFMono-Regular

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [GitHub Wiki](https://github.com/yourusername/contractfinder/wiki)
- **Issues**: [GitHub Issues](https://github.com/yourusername/contractfinder/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/contractfinder/discussions)

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Frontend MVP with mock data
- ✅ Dashboard and filter management
- ✅ Authentication pages
- ✅ Pricing and landing pages

### Phase 2 (Next)
- [ ] Supabase integration for real data
- [ ] User authentication implementation
- [ ] Make.com automation workflows
- [ ] Real job aggregation

### Phase 3 (Future)
- [ ] Advanced analytics and reporting
- [ ] Mobile app (React Native)
- [ ] API for third-party integrations
- [ ] Multi-language support

## 🙏 Acknowledgments

- Built on the foundation of the SaaS UI Next.js template
- Inspired by the needs of IT contractors in Europe
- Designed with modern UX/UI principles

---

**Made with ❤️ for IT contractors across Europe**