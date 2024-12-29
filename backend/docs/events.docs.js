/**
 * @swagger
 * /events:
 *   post:
 *     summary: Create a new event
 *     description: Allows Organizers and Admins to create a new event.
 *     tags:
 *       - Events
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       201:
 *         description: Event created successfully.
 *       400:
 *         description: Validation error in the request body.
 *       403:
 *         description: Unauthorized access.
 * /events:
 *   get:
 *     summary: Retrieve all events
 *     description: Fetch a list of all events. Accessible by Organizers, Users, and Admins.
 *     tags:
 *       - Events
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination.
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items per page.
 *     responses:
 *       200:
 *         description: A list of events.
 *       403:
 *         description: Unauthorized access.
 * /events/{id}:
 *   get:
 *     summary: Get event details by ID
 *     description: Retrieve details of a specific event. Accessible by Organizers, Users, and Admins.
 *     tags:
 *       - Events
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique identifier for the event.
 *     responses:
 *       200:
 *         description: Event details retrieved successfully.
 *       404:
 *         description: Event not found.
 *       403:
 *         description: Unauthorized access.
 * /events/{id}/rsvps:
 *   get:
 *     summary: Get RSVPs for an event
 *     description: Retrieve a list of RSVPs for a specific event. Accessible by Organizers and Admins.
 *     tags:
 *       - Events
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique identifier for the event.
 *     responses:
 *       200:
 *         description: List of RSVPs retrieved successfully.
 *       404:
 *         description: Event not found.
 *       403:
 *         description: Unauthorized access.
 * /events/{id}:
 *   put:
 *     summary: Update an event by ID
 *     description: Allows Organizers and Admins to update event details.
 *     tags:
 *       - Events
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique identifier for the event.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       200:
 *         description: Event updated successfully.
 *       400:
 *         description: Validation error in the request body.
 *       403:
 *         description: Unauthorized access.
 *       404:
 *         description: Event not found.
 * /events/{id}:
 *   delete:
 *     summary: Delete an event by ID
 *     description: Allows Organizers and Admins to delete an event.
 *     tags:
 *       - Events
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique identifier for the event.
 *     responses:
 *       200:
 *         description: Event deleted successfully.
 *       404:
 *         description: Event not found.
 *       403:
 *         description: Unauthorized access.
 */

const eventsDocs = {
  paths: {
    '/events': {
      post: {
        summary: 'Create a new event',
        description: 'Allows Organizers and Admins to create a new event.',
        tags: ['Events'],
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Event' },
            },
          },
        },
        responses: {
          201: { description: 'Event created successfully.' },
          400: { description: 'Validation error in the request body.' },
          403: { description: 'Unauthorized access.' },
        },
      },
      get: {
        summary: 'Retrieve all events',
        description: 'Fetch a list of all events. Accessible by Organizers, Users, and Admins.',
        tags: ['Events'],
        security: [{ bearerAuth: [] }],
        parameters: [
          { in: 'query', name: 'page', schema: { type: 'integer' }, description: 'Page number for pagination.' },
          { in: 'query', name: 'limit', schema: { type: 'integer' }, description: 'Number of items per page.' },
        ],
        responses: {
          200: { description: 'A list of events.' },
          403: { description: 'Unauthorized access.' },
        },
      },
    },
    '/events/{id}': {
      get: {
        summary: 'Get event details by ID',
        description: 'Retrieve details of a specific event.',
        tags: ['Events'],
        security: [{ bearerAuth: [] }],
        parameters: [
          { in: 'path', name: 'id', required: true, schema: { type: 'string' }, description: 'Event ID' },
        ],
        responses: {
          200: { description: 'Event details retrieved successfully.' },
          404: { description: 'Event not found.' },
          403: { description: 'Unauthorized access.' },
        },
      },
      put: {
        summary: 'Update an event by ID',
        description: 'Allows Organizers and Admins to update event details.',
        tags: ['Events'],
        security: [{ bearerAuth: [] }],
        parameters: [
          { in: 'path', name: 'id', required: true, schema: { type: 'string' }, description: 'Event ID' },
        ],
        responses: {
          200: { description: 'Event updated successfully.' },
          400: { description: 'Validation error.' },
          403: { description: 'Unauthorized access.' },
          404: { description: 'Event not found.' },
        },
      },
      delete: {
        summary: 'Delete an event by ID',
        description: 'Allows Organizers and Admins to delete an event.',
        tags: ['Events'],
        security: [{ bearerAuth: [] }],
        parameters: [
          { in: 'path', name: 'id', required: true, schema: { type: 'string' }, description: 'Event ID' },
        ],
        responses: {
          200: { description: 'Event deleted successfully.' },
          404: { description: 'Event not found.' },
          403: { description: 'Unauthorized access.' },
        },
      },
    },
  },
};

module.exports = eventsDocs;
