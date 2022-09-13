import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

const useBackground = () => {
  const location = useLocation()

  const [viewPortWidth, setviewPortWidth] = useState(window.innerWidth)
  const [currentPath, setcurrentPath] = useState(location)
  const [currentPage, setcurrentPage] = useState("home")
  const [deviceType, setdeviceType] = useState("mobile")

  const handleWindowResize = () => {
    setviewPortWidth(window.innerWidth)
  }

  useEffect(() => {
    setcurrentPath(location.pathname)
  }, [location])

  useEffect(() => {
    if (currentPath === "/") {
      setcurrentPage("home")
    } else if (currentPath === "/destination") {
      setcurrentPage("destination")
    } else if (currentPath === "/crew") {
      setcurrentPage("crew")
    } else if (currentPath === "/technology") {
      setcurrentPage("technology")
    } else {
      return
    }
  }, [currentPath])

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize)
    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  })

  useEffect(() => {
    if (viewPortWidth >= 1 && viewPortWidth <= 480) {
      setdeviceType("mobile")
    } else if (viewPortWidth >= 481 && viewPortWidth <= 1024) {
      setdeviceType("tablet")
    } else if (viewPortWidth >= 1025) {
      setdeviceType("desktop")
    }
  }, [viewPortWidth])

  let backgroundImage = `./assets/${currentPage}/background-${currentPage}-${deviceType}.jpg`
  return backgroundImage
}

export default useBackground
