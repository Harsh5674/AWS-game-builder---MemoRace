# MemoRace - AWS Game Challenge

## Testing Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Auth0 account
- npm or yarn package manager

### Environment Setup
1. Clone the repository to your local machine
2. Create a `.env` file in the root directory with the following variables:


MONGODB_URI=your_mongodb_connection_string
PORT=7000
AUTH0_DOMAIN=your_auth0_domain
AUTH0_CLIENT_ID=your_auth0_client_id


### Backend Testing

1. Install Dependencies
```bash
cd backend
npm install

2. Start the server
npm start

3. Test API Endpoints

Use Postman or similar API testing tool to test the following endpoints:

{
  "auth0Id": "test_id",
  "email": "test@example.com",
  "name": "Test User",
  "lastLogin": "2024-01-01T00:00:00.000Z"
}


Database Testing
Verify MongoDB Connection

Check console for "Connected to MongoDB" message

Verify data is being stored in MongoDB Atlas dashboard

Error Handling Testing
Test Invalid Requests

Submit incomplete user data

Submit invalid score data

Use invalid Auth0 IDs

Performance Testing
Response Time

Test API endpoint response times

Monitor database query performance

Security Testing
Authentication

Verify Auth0 integration

Test unauthorized access to endpoints

Troubleshooting
If you encounter issues:

Check MongoDB connection string

Verify Auth0 credentials

Check server logs for error messages

Ensure all required environment variables are set

Monitoring
Monitor the following:

Server status

Database connections

API response times

Error rates

Additional Notes
The server runs on port 7000 by default

MongoDB Atlas connection requires proper network access

Keep Auth0 credentials secure and never commit them to version cont