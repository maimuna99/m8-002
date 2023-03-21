"use client"
import {useRouter} from 'next/navigation'
const BlogWrapper = () => {
     // Get the router object
  const router = useRouter();
  // Navigate with router.push()
  return <button onClick={(e) => router.push("/")}>Home</button>;
   
}

export default BlogWrapper;