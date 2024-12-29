# EventEase - Event Management Platform
EventEase is a powerful event management application designed to simplify the process of organizing, managing, and attending events. Whether you're hosting a tech meetup, a conference, or a workshop, EventEase provides all the tools you need to streamline event operations.

🚀 **Features**
- **Event Creation & Management:** Organize events with detailed descriptions, schedules, and ticketing options.
- **RSVP & Attendee Management:** Handle guest responses, track attendance, and manage registrations.
- **Ticket Pricing & Payment Integration:** Set different ticket types with pricing and integration with payment gateways.
- **Event Filtering:** Easily search and filter events by date, location, and category.
- **User Authentication:** Secure login and registration with role-based access (e.g., organizer, attendee).
- **Real-Time Notifications:** Send updates and reminders to attendees and organizers.
- **Admin Panel:** Manage users, events, and RSVPs with an intuitive interface.

📌 **Table of Contents**
- Demo
- Installation
- Technologies Used
- API Documentation
- Contributing
- License

🔥 **Demo**
Live Demo Link - Experience EventEase in action!

⚙️ **Backend API**
The backend API is deployed and ready for use:
- **Backend URL:** [https://eventease-s37i.onrender.com](https://eventease-s37i.onrender.com)
- **API Documentation:** [Full API Docs](https://eventease-s37i.onrender.com/api-docs)

🚧 **Status:**
- ✅ **Database:** Ready
- ✅ **Backend API:** Ready
- 🚧 **Frontend:** Under Development
- 🚧 **Testing:** Under Development

📦 **Installation**
Follow the steps below to run EventEase on your local machine:

### **Prerequisites**
Ensure you have the following installed:
- Node.js (version 14.x or higher)
- MongoDB (or a MongoDB Atlas account for cloud database)
- npm or yarn

### **Steps**
1. **Clone the repository:**
```bash
git clone https://github.com/your-username/eventease.git
cd eventease
```

2. **Install dependencies:**
```bash
npm install
# or if using yarn
yarn install
```

3. **Set up environment variables:**
Create a `.env` file in the root directory and configure it with the following values:
```
MONGO_URI=mongodb://localhost:27017/eventease
JWT_SECRET=your-secret-key
```

4. **Start the application:**
```bash
npm run dev
# or if using yarn
yarn dev
```

The application will be running at [http://localhost:5000](http://localhost:5000).

⚙️ **Technologies Used**
EventEase is built with modern technologies to provide a seamless and scalable event management experience. The following technologies were used in its development:

**Frontend:**
- React.js: A popular JavaScript library for building dynamic and responsive UIs.
- Redux: State management for predictable application flow.
- Styled-Components: For creating reusable, styled components in React.
- Axios: For making HTTP requests to the backend.

**Backend:**
- Node.js: JavaScript runtime environment for building scalable network applications.
- Express.js: A minimal web application framework for building REST APIs.
- MongoDB: NoSQL database to store event and user data.
- Mongoose: ODM (Object Data Modeling) library for MongoDB.
- JWT (JSON Web Tokens): For secure user authentication and authorization.
- Winston: For logging and error tracking.

**Testing:**
- Jest: JavaScript testing framework.
- Supertest: For testing RESTful APIs.
- React Testing Library: For testing React components.

**Deployment:**
- Render: Modern cloud hosting platform for deployment.
- Docker: Containerization for consistent environments across all stages.

📚 **API Documentation**
EventEase exposes a well-documented RESTful API. The key endpoints are as follows:

**Event Endpoints**
- **GET /events:** Get all events.
- **POST /events:** Create a new event.
- **GET /events/:id:** Get event details by ID.
- **PUT /events/:id:** Update an event by ID.
- **DELETE /events/:id:** Delete an event by ID.

**RSVP Endpoints**
- **GET /rsvps:** Get RSVPs by user or event.
- **POST /rsvps:** Create a new RSVP.
- **DELETE /rsvps/:id:** Delete an RSVP.

For full API documentation, visit: [Full API Docs](https://github.com/ibrahim-b-dev/EventEase/tree/main/backend/docs)

🤝 **Contributing**
We welcome contributions! If you'd like to improve EventEase, please follow these steps:

1. Fork the repository.
2. Create a new branch:
```bash
git checkout -b feature/your-feature
```
3. Make your changes.
4. Commit your changes:
```bash
git commit -m 'Add new feature'
```
5. Push to your branch:
```bash
git push origin feature/your-feature
```
6. Open a Pull Request.

**Tips for contributing:**
- Ensure your code adheres to our coding standards.
- Add tests for new features or bug fixes.
- Run the tests locally before submitting your PR.

📄 **License**
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
