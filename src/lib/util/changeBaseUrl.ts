const changeBaseUrl = (url: string) => {
  return url.replace(
    "http://localhost:9000",
    "https://proshelves-app-m75ot.ondigitalocean.app"
  )
}

export default changeBaseUrl
