export const siteConfig = {
  name: 'ELAND',
  description: 'Үл хөдлөх хөрөнгийн нэгдсэн портал',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  api: {
    auth: process.env.NEXT_PUBLIC_AUTH_API_URL || 'http://localhost:3001/api/v1',
    property: process.env.NEXT_PUBLIC_PROPERTY_API_URL || 'http://localhost:3002/api/v1',
    contract: process.env.NEXT_PUBLIC_CONTRACT_API_URL || 'http://localhost:3003/api/v1',
    auction: process.env.NEXT_PUBLIC_AUCTION_API_URL || 'http://localhost:3004/api/v1',
    payment: process.env.NEXT_PUBLIC_PAYMENT_API_URL || 'http://localhost:3005/api/v1',
  },
  ws: {
    auction: process.env.NEXT_PUBLIC_AUCTION_WS_URL || 'http://localhost:3004',
  },
};
