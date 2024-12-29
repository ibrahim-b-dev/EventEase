/**
 * @swagger
 * /public/popular-events:
 *   get:
 *     summary: Get popular events
 *     description: Retrieve a list of popular events based on user engagement and attendance.
 *     tags:
 *       - Public
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
 *         description: List of popular events retrieved successfully.
 *       400:
 *         description: Invalid query parameters.
 *       403:
 *         description: Unauthorized access.
 *
 * /public/popular-events-metadata:
 *   get:
 *     summary: Get metadata for popular events
 *     description: Retrieve metadata information related to popular events.
 *     tags:
 *       - Public
 *     responses:
 *       200:
 *         description: Metadata retrieved successfully.
 *       403:
 *         description: Unauthorized access.
 */

const eventsDocs = {
  paths: {
    "/public/popular-events": {
      get: {
        summary: "Get popular events",
        description:
          "Retrieve a list of popular events based on user engagement and attendance.",
        tags: ["Public"],
        parameters: [
          {
            in: "query",
            name: "page",
            schema: { type: "integer" },
            description: "Page number for pagination.",
          },
          {
            in: "query",
            name: "limit",
            schema: { type: "integer" },
            description: "Number of items per page.",
          },
        ],
        responses: {
          200: {
            description: "List of popular events retrieved successfully.",
          },
          400: { description: "Invalid query parameters." },
          403: { description: "Unauthorized access." },
        },
      },
    },
    "/public/popular-events-metadata": {
      get: {
        summary: "Get metadata for popular events",
        description: "Retrieve metadata information related to popular events.",
        tags: ["Public"],
        responses: {
          200: { description: "Metadata retrieved successfully." },
          403: { description: "Unauthorized access." },
        },
      },
    },
  },
}

module.exports = eventsDocs
