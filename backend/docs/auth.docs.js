/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Allows a new user to create an account by providing valid details.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Register'
 *     responses:
 *       201:
 *         description: User registered successfully.
 *       400:
 *         description: Validation error in the request body.
 *       409:
 *         description: User already exists.
 *
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     description: Authenticate a user with valid credentials.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: User logged in successfully.
 *       400:
 *         description: Invalid credentials.
 *       403:
 *         description: User account is inactive.
 */

const authDocs = {
  paths: {
    "/auth/register": {
      post: {
        summary: "Register a new user",
        description:
          "Allows a new user to create an account by providing valid details.",
        tags: ["Auth"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Register" },
            },
          },
        },
        responses: {
          201: { description: "User registered successfully." },
          400: { description: "Validation error in the request body." },
          409: { description: "User already exists." },
        },
      },
    },
    "/auth/login": {
      post: {
        summary: "Login a user",
        description: "Authenticate a user with valid credentials.",
        tags: ["Auth"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Login" },
            },
          },
        },
        responses: {
          200: { description: "User logged in successfully." },
          400: { description: "Invalid credentials." },
          403: { description: "User account is inactive." },
        },
      },
    },
  },
}

module.exports = authDocs
