/**
 * @swagger
 * /rsvp:
 *   post:
 *     summary: Create an RSVP
 *     description: Allows a User or Admin to create an RSVP for an event.
 *     tags:
 *       - RSVP
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RSVP'
 *     responses:
 *       201:
 *         description: RSVP created successfully.
 *       400:
 *         description: Validation error in the request body.
 *       403:
 *         description: Unauthorized access.
 *
 * /rsvp:
 *   get:
 *     summary: Get user RSVPs
 *     description: Retrieve a list of RSVPs made by the current user.
 *     tags:
 *       - RSVP
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of RSVPs retrieved successfully.
 *       403:
 *         description: Unauthorized access.
 *
 * /rsvp/{id}:
 *   delete:
 *     summary: Delete an RSVP by ID
 *     description: Allows a User or Admin to delete their RSVP by providing the RSVP ID.
 *     tags:
 *       - RSVP
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique identifier for the RSVP.
 *     responses:
 *       200:
 *         description: RSVP deleted successfully.
 *       404:
 *         description: RSVP not found.
 *       403:
 *         description: Unauthorized access.
 */

const rsvpDocs = {
  paths: {
    "/rsvp": {
      post: {
        summary: "Create an RSVP",
        description: "Allows a User or Admin to create an RSVP for an event.",
        tags: ["RSVP"],
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/RSVP" },
            },
          },
        },
        responses: {
          201: { description: "RSVP created successfully." },
          400: { description: "Validation error in the request body." },
          403: { description: "Unauthorized access." },
        },
      },
      get: {
        summary: "Get user RSVPs",
        description: "Retrieve a list of RSVPs made by the current user.",
        tags: ["RSVP"],
        security: [{ bearerAuth: [] }],
        responses: {
          200: { description: "List of RSVPs retrieved successfully." },
          403: { description: "Unauthorized access." },
        },
      },
    },
    "/rsvp/{id}": {
      delete: {
        summary: "Delete an RSVP by ID",
        description:
          "Allows a User or Admin to delete their RSVP by providing the RSVP ID.",
        tags: ["RSVP"],
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: { type: "string" },
            description: "Unique identifier for the RSVP.",
          },
        ],
        responses: {
          200: { description: "RSVP deleted successfully." },
          404: { description: "RSVP not found." },
          403: { description: "Unauthorized access." },
        },
      },
    },
  },
}

module.exports = rsvpDocs
