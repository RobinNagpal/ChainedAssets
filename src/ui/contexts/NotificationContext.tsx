'use client'
import { createContext, useContext, ReactNode } from 'react'
import useNotification, { UseNotificationType } from '../hooks/useNotification'

interface NotificationProviderProps {
  children: ReactNode
}

const NotificationContext = createContext<UseNotificationType | undefined>(
  undefined,
)

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const notification = useNotification()
  // console.log('Notification Context Value:', notification) // Debug log

  return (
    <NotificationContext.Provider value={notification}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotificationContext = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error(
      'useNotificationContext must be used within a NotificationProvider',
    )
  }
  return context
}
