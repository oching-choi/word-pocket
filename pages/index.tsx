import { useRouter } from "next/router"
import { useEffect } from "react"

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("study")
  }, [])

  return <main>home</main>
}
export default Home
