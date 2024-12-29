/**
 * @swagger
 * /users/profile:
 *   get:
 *     summary: Get user profile
 *     description: Retrieve the profile details of the authenticated user.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Profile retrieved successfully.
 *       401:
 *         description: Unauthorized access.
 *       404:
 *         description: User profile not found.
 *   put:
 *     summary: Update user profile
 *     description: Allows the authenticated user to update their profile details.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUser'
 *     responses:
 *       200:
 *         description: Profile updated successfully.
 *       400:
 *         description: Validation error in request data.
 *       404:
 *         description: User profile not found.
 *       409:
 *         description: Conflict (e.g., duplicate data).
 */

const usersRouterDocs = {
  paths: {
    "/users/profile": {
      get: {
        summary: "Get user profile",
        description: "Retrieve the profile details of the authenticated user.",
        tags: ["Users"],
        responses: {
          200: {
            description: "Profile retrieved successfully.",
          },
          401: {
            description: "Unauthorized access.",
          },
          404: {
            description: "User profile not found.",
          },
        },
      },
      put: {
        summary: "Update user profile",
        description:
          "Allows the authenticated user to update their profile details.",
        tags: ["Users"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UpdateUser",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Profile updated successfully.",
          },
          400: {
            description: "Validation error in request data.",
          },
          404: {
            description: "User profile not found.",
          },
          409: {
            description: "Conflict (e.g., duplicate data).",
          },
        },
      },
    },
  },
}

module.exports = usersRouterDocs
