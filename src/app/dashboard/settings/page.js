import { auth } from '@/auth'

export default  async function page() {
  const session = await auth()
 
  return (
    <div>
      {
        JSON.stringify(session)
      }
    </div>
  )
}
