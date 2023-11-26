import React, { createContext, ReactNode, useState, useEffect } from 'react'

// Define the context type
type WindowUtilsContextType = {
  isDesktopWidth: boolean
  showSecondRow: boolean
  navbarData: {
    rowTwo: string[]
  }
}

// Dummy data to be used in the context
const dummyData = {
  navbar: {
    rowTwo: ['Feed', 'Tracks', 'Sound Kits', 'Publishing', 'Beat ID', 'Gift Cards', 'Lemonaide'],
  },
}

// Create the context
export const WindowUtilsContext = createContext<WindowUtilsContextType>({
  isDesktopWidth: window.innerWidth >= 1024,
  showSecondRow: true,
  navbarData: dummyData.navbar,
})

// Context Provider component
type WindowUtilsProviderProps = {
  children: ReactNode
}

const desktopWidth = 1024 // Define desktop width threshold

export const WindowUtilsProvider: React.FC<WindowUtilsProviderProps> = ({ children }) => {
  const [isDesktopWidth, setIsDesktopWidth] = useState(window.innerWidth >= desktopWidth)
  const [showSecondRow, setShowSecondRow] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth
      setIsDesktopWidth(newWidth >= desktopWidth)
    }
    const handleScroll = () => setShowSecondRow(window.scrollY <= 100)

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <WindowUtilsContext.Provider value={{ isDesktopWidth, showSecondRow, navbarData: dummyData.navbar }}>
      {children}
    </WindowUtilsContext.Provider>
  )
}
