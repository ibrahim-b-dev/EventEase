/**
 * @swagger
 * components:
 *   schemas:
 *     AdminCreateUser:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         role:
 *           type: string
 *         password:
 *           type: string
 *     AdminUpdateUser:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         role:
 *           type: string
 *     AddEvent:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         date:
 *           type: string
 *           format: date-time
 *     CreateRSVP:
 *       type: object
 *       properties:
 *         userId:
 *           type: string
 *         eventId:
 *           type: string
 *         response:
 *           type: string
 *           enum: [Yes, No, Maybe]
 *
 * paths:
 *   '/admin/users':
 *     post:
 *       summary: Create a new user
 *       description: Allows Admins to create a new user with valid details.
 *       tags:
 *         - Admin - Users
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AdminCreateUser'
 *       responses:
 *         201:
 *           description: User created successfully.
 *         400:
 *           description: Validation error in the request body.
 *     get:
 *       summary: Get all users
 *       description: Retrieve a list of all users.
 *       tags:
 *         - Admin - Users
 *       responses:
 *         200:
 *           description: List of users retrieved successfully.
 *         403:
 *           description: Unauthorized access.
 *   '/admin/users/{id}':
 *     get:
 *       summary: Get a user by ID
 *       description: Retrieve details of a specific user by their ID.
 *       tags:
 *         - Admin - Users
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: User ID.
 *       responses:
 *         200:
 *           description: User details retrieved successfully.
 *         404:
 *           description: User not found.
 *     put:
 *       summary: Update a user
 *       description: Allows Admins to update user details.
 *       tags:
 *         - Admin - Users
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: User ID.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AdminUpdateUser'
 *       responses:
 *         200:
 *           description: User updated successfully.
 *         404:
 *           description: User not found.
 *     delete:
 *       summary: Delete a user
 *       description: Allows Admins to delete a user.
 *       tags:
 *         - Admin - Users
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: User ID.
 *       responses:
 *         200:
 *           description: User deleted successfully.
 *         404:
 *           description: User not found.
 *   '/admin/events':
 *     post:
 *       summary: Create a new event
 *       description: Allows Admins to create an event.
 *       tags:
 *         - Admin - Events
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AddEvent'
 *       responses:
 *         201:
 *           description: Event created successfully.
 *         400:
 *           description: Validation error in the request body.
 *     get:
 *       summary: Get all events
 *       description: Retrieve a list of all events.
 *       tags:
 *         - Admin - Events
 *       responses:
 *         200:
 *           description: List of events retrieved successfully.
 *         403:
 *           description: Unauthorized access.
 *   '/admin/events/{id}':
 *     get:
 *       summary: Get an event by ID
 *       description: Retrieve details of a specific event.
 *       tags:
 *         - Admin - Events
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: Event ID.
 *       responses:
 *         200:
 *           description: Event details retrieved successfully.
 *         404:
 *           description: Event not found.
 *     put:
 *       summary: Update an event
 *       description: Allows Admins to update event details.
 *       tags:
 *         - Admin - Events
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: Event ID.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AddEvent'
 *       responses:
 *         200:
 *           description: Event updated successfully.
 *         404:
 *           description: Event not found.
 *     delete:
 *       summary: Delete an event
 *       description: Allows Admins to delete an event.
 *       tags:
 *         - Admin - Events
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: Event ID.
 *       responses:
 *         200:
 *           description: Event deleted successfully.
 *         404:
 *           description: Event not found.
 *   '/admin/events/{id}/rsvps':
 *     get:
 *       summary: Get RSVPs for an event
 *       description: Retrieve all RSVPs for a specific event.
 *       tags:
 *         - Admin - Events
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: Event ID.
 *       responses:
 *         200:
 *           description: RSVPs retrieved successfully.
 *         404:
 *           description: Event not found.
 *   '/admin/rsvp':
 *     post:
 *       summary: Create an RSVP
 *       description: Allows Admins to create an RSVP.
 *       tags:
 *         - Admin - RSVP
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateRSVP'
 *       responses:
 *         201:
 *           description: RSVP created successfully.
 *         400:
 *           description: Validation error.
 *     get:
 *       summary: Get all RSVPs
 *       description: Retrieve a list of all RSVPs.
 *       tags:
 *         - Admin - RSVP
 *       responses:
 *         200:
 *           description: List of RSVPs retrieved successfully.
 *   '/admin/rsvp/{id}':
 *     delete:
 *       summary: Delete an RSVP
 *       description: Allows Admins to delete an RSVP.
 *       tags:
 *         - Admin - RSVP
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: RSVP ID.
 *       responses:
 *         200:
 *           description: RSVP deleted successfully.
 *         404:
 *           description: RSVP not found.
 */

const adminDocs = {
  components: {
    schemas: {
      AdminCreateUser: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          email: { type: 'string' },
          role: { type: 'string' },
          password: { type: 'string' },
        },
      },
      AdminUpdateUser: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          email: { type: 'string' },
          role: { type: 'string' },
        },
      },
      AddEvent: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          description: { type: 'string' },
          date: { type: 'string', format: 'date-time' },
        },
      },
      CreateRSVP: {
        type: 'object',
        properties: {
          userId: { type: 'string' },
          eventId: { type: 'string' },
          response: { type: 'string', enum: ['Yes', 'No', 'Maybe'] },
        },
      },
    },
  },
  paths: {
    '/admin/users': {
      post: {
        summary: 'Create a new user',
        description: 'Allows Admins to create a new user with valid details.',
        tags: ['Admin - Users'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/AdminCreateUser' },
            },
          },
        },
        responses: {
          201: { description: 'User created successfully.' },
          400: { description: 'Validation error in the request body.' },
        },
      },
      get: {
        summary: 'Get all users',
        description: 'Retrieve a list of all users.',
        tags: ['Admin - Users'],
        responses: {
          200: { description: 'List of users retrieved successfully.' },
          403: { description: 'Unauthorized access.' },
        },
      },
    },
    '/admin/users/{id}': {
      get: {
        summary: 'Get a user by ID',
        description: 'Retrieve details of a specific user by their ID.',
        tags: ['Admin - Users'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'User ID.',
          },
        ],
        responses: {
          200: { description: 'User details retrieved successfully.' },
          404: { description: 'User not found.' },
        },
      },
      put: {
        summary: 'Update a user',
        description: 'Allows Admins to update user details.',
        tags: ['Admin - Users'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'User ID.',
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/AdminUpdateUser' },
            },
          },
        },
        responses: {
          200: { description: 'User updated successfully.' },
          404: { description: 'User not found.' },
        },
      },
      delete: {
        summary: 'Delete a user',
        description: 'Allows Admins to delete a user.',
        tags: ['Admin - Users'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'User ID.',
          },
        ],
        responses: {
          200: { description: 'User deleted successfully.' },
          404: { description: 'User not found.' },
        },
      },
    },
    '/admin/events': {
      post: {
        summary: 'Create a new event',
        description: 'Allows Admins to create an event.',
        tags: ['Admin - Events'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/AddEvent' },
            },
          },
        },
        responses: {
          201: { description: 'Event created successfully.' },
          400: { description: 'Validation error in the request body.' },
        },
      },
      get: {
        summary: 'Get all events',
        description: 'Retrieve a list of all events.',
        tags: ['Admin - Events'],
        responses: {
          200: { description: 'List of events retrieved successfully.' },
          403: { description: 'Unauthorized access.' },
        },
      },
    },
    '/admin/events/{id}': {
      get: {
        summary: 'Get an event by ID',
        description: 'Retrieve details of a specific event.',
        tags: ['Admin - Events'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'Event ID.',
          },
        ],
        responses: {
          200: { description: 'Event details retrieved successfully.' },
          404: { description: 'Event not found.' },
        },
      },
      put: {
        summary: 'Update an event',
        description: 'Allows Admins to update event details.',
        tags: ['Admin - Events'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'Event ID.',
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/AddEvent' },
            },
          },
        },
        responses: {
          200: { description: 'Event updated successfully.' },
          404: { description: 'Event not found.' },
        },
      },
      delete: {
        summary: 'Delete an event',
        description: 'Allows Admins to delete an event.',
        tags: ['Admin - Events'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'Event ID.',
          },
        ],
        responses: {
          200: { description: 'Event deleted successfully.' },
          404: { description: 'Event not found.' },
        },
      },
    },
    '/admin/events/{id}/rsvps': {
      get: {
        summary: 'Get RSVPs for an event',
        description: 'Retrieve all RSVPs for a specific event.',
        tags: ['Admin - Events'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'Event ID.',
          },
        ],
        responses: {
          200: { description: 'RSVPs retrieved successfully.' },
          404: { description: 'Event not found.' },
        },
      },
    },
    '/admin/rsvp': {
      post: {
        summary: 'Create an RSVP',
        description: 'Allows Admins to create an RSVP.',
        tags: ['Admin - RSVP'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/CreateRSVP' },
            },
          },
        },
        responses: {
          201: { description: 'RSVP created successfully.' },
          400: { description: 'Validation error.' },
        },
      },
      get: {
        summary: 'Get all RSVPs',
        description: 'Retrieve a list of all RSVPs.',
        tags: ['Admin - RSVP'],
        responses: {
          200: { description: 'List of RSVPs retrieved successfully.' },
        },
      },
    },
    '/admin/rsvp/{id}': {
      delete: {
        summary: 'Delete an RSVP',
        description: 'Allows Admins to delete an RSVP.',
        tags: ['Admin - RSVP'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'RSVP ID.',
          },
        ],
        responses: {
          200: { description: 'RSVP deleted successfully.' },
          404: { description: 'RSVP not found.' },
        },
      },
    },
  },
};

module.exports = adminDocs;
