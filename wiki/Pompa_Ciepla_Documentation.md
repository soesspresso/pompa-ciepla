# Pompa Ciepla Project Wiki

## Project Overview
The Pompa Ciepla project is a sophisticated web application designed for monitoring heat pumps. Built with modern web technologies, it provides users with real-time insights and controls for their heating systems.

## Features
- Real-time monitoring of heat pump performance.
- User-friendly interface with responsive design.
- Notifications and alerts for system anomalies.
- Data analytics to optimize energy consumption.

## Technology Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Supabase (for database management and authentication)
- **Hosting:** Netlify (or a suitable web hosting solution)

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your/repository.git
   cd repository
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Supabase:
   - Create a Supabase project and set up your database.
   - Update environment variables in `.env` file with your Supabase credentials.
4. Run the application:
   ```bash
   npm start
   ```

## Architecture
The application is built on a client-server architecture where the frontend interacts with the Supabase backend for data retrieval and storage. It's designed to be modular, allowing easy updates and maintenance.

## API Documentation
This section will provide detailed information on the APIs exposed by Supabase and how to interact with them for CRUD operations.

### Example API Endpoints
- `GET /api/heatpumps`: Retrieve all heat pump data.
- `POST /api/heatpumps`: Add a new heat pump.
- `GET /api/heatpumps/{id}`: Retrieve specific heat pump details.
- `PUT /api/heatpumps/{id}`: Update heat pump information.
- `DELETE /api/heatpumps/{id}`: Remove heat pump from the database.

## Usage Guide
To effectively monitor your heat pumps:
- Login to your account.
- Access the dashboard to view the performance metrics.
- Create alerts for specific temperature thresholds.
- Utilize the analytics section to track performance over time.

For further assistance, refer to the FAQs or contact support.