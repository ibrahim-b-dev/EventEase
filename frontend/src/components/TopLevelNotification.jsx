import React from "react"
import NotificationsSystem, {
  wyboTheme,
  setUpNotifications,
  useNotifications,
} from "reapop"

setUpNotifications({
  defaultProps: {
    position: "top-center",
    dismissible: true,
    status: "info",
    duration: 5000,
  },
})

const TopLevelNotification = () => {
  const { notifications, dismissNotification } = useNotifications()

  return (
    <div>
      <NotificationsSystem
        notifications={notifications}
        dismissNotification={(id) => dismissNotification(id)}
        theme={wyboTheme}
      />
    </div>
  )
}

export default TopLevelNotification
