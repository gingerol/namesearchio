# NameSearch.io - Technical Documentation

## Project Overview
NameSearch.io is a culturally-intelligent domain search platform that helps businesses find globally appropriate domain names.

## Technical Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn/UI
- **State Management**: Jotai
- **Data Visualization**: D3.js
- **Internationalization**: next-intl

### Backend
- **Runtime**: Node.js 18+
- **API Layer**: Next.js API Routes
- **Authentication**: NextAuth.js
- **Database**: PostgreSQL
- **Caching**: Redis
- **Search**: Custom implementation

### AI/ML
- **Translation**: OPUS-MT
- **NLP**: spaCy + Transformers
- **Cultural Analysis**: Fine-tuned BERT models

## Development Principles

1. **Real Data First**
   - No mock data in development
   - Real domain availability checks
   - Actual cultural analysis

2. **Performance**
   - Edge caching for API responses
   - Optimistic UI updates
   - Code splitting and lazy loading

3. **Security**
   - Input sanitization
   - Rate limiting
   - Secure authentication
   - Regular dependency updates

## Project Structure

```
src/
├── app/                    # App router pages
│   ├── (auth)/             # Authentication routes
│   ├── api/                # API routes
│   └── dashboard/          # Protected routes
├── components/             # Reusable components
│   ├── domain/            # Domain search components
│   ├── ui/                 # UI components
│   └── analytics/         # Data visualization
├── lib/                    # Utilities and configs
│   ├── auth.ts            # Authentication
│   ├── db.ts              # Database client
│   └── services/          # Business logic
└── styles/                # Global styles
```

## API Endpoints

### Domain Search
- `POST /api/domains/search` - Search for domains
- `GET /api/domains/check/:domain` - Check domain availability
- `GET /api/domains/whois/:domain` - Get WHOIS information

### Cultural Analysis
- `POST /api/analyze/cultural` - Analyze cultural implications
- `GET /api/analyze/languages` - Get supported languages

## Environment Variables

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/namesearch
REDIS_URL=redis://localhost:6379

# Authentication
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=http://localhost:3000

# External Services
WHOIS_API_KEY=your-key
TRANSLATION_API_URL=your-url
```

## Development Setup

1. **Prerequisites**
   - Node.js 18+
   - PostgreSQL 14+
   - Redis 6+
   - pnpm (recommended)

2. **Installation**
   ```bash
   pnpm install
   cp .env.example .env.local
   # Update environment variables
   ```

3. **Database Setup**
   ```bash
   pnpm db:push
   pnpm db:seed
   ```

4. **Running Locally**
   ```bash
   pnpm dev
   ```

## Testing

```bash
# Unit tests
pnpm test:unit

# Integration tests
pnpm test:integration

# E2E tests
pnpm test:e2e
```

## Deployment

### Production
- **Platform**: Vercel
- **Branch**: `main`
- **Environment**: Production

### Staging
- **Branch**: `staging`
- **Environment**: Staging

## Monitoring
- **Error Tracking**: Sentry
- **Performance**: Vercel Analytics
- **Uptime**: Better Stack

## Contributing

1. Create a feature branch
2. Commit changes
3. Open a pull request
4. Request review

## License
Proprietary - All rights reserved
