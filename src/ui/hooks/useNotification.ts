import { NotificationProps } from '@/components/Notification'
import { useCallback, useState } from 'react'

export type ShowNotificationOptions = Omit<NotificationProps, 'onClose'>
export interface UseNotificationType {
  notification: ShowNotificationOptions | null
  showNotification: (options: ShowNotificationOptions) => void
  hideNotification: () => void
}

const useNotification = (): UseNotificationType => {
  const [notification, setNotification] =
    useState<ShowNotificationOptions | null>(null)

  const showNotification = useCallback((options: ShowNotificationOptions) => {
    console.log('Show Notification:', options) // Debug log
    setNotification(options)
  }, [])

  const hideNotification = useCallback(() => {
    console.log('Hide Notification') // Debug log
    setNotification(null)
  }, [])

  return { notification, showNotification, hideNotification }
}

export default useNotification
