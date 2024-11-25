const { logger } = require("../utils/logger")
const User = require("../models/user")

const createAdminUser = async () => {
  try {
    const adminData = {
      name: "System Admin",
      email: "admin@example.com",
      password: "123456",
      role: "Admin",
      phone: "+1234567890",
    }

    const existingAdmin = await User.findOne({ email: adminData.email })
    if (existingAdmin) {
      logger.warn(`Admin user already exists with email: ${adminData.email}`)
      process.exit()
    }

    const adminUser = new User({ ...adminData })

    await adminUser.save()

    logger.info("Admin user created successfully:")

    process.exit()
  } catch (error) {
    logger.error("Error creating admin user:", error)
    process.exit(1)
  }
}

module.exports = createAdminUser
