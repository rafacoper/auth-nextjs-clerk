import { auth, currentUser } from '@clerk/nextjs'

export default async function Home() {
  const { userId } = auth();
  const user = await currentUser();

  if(!userId){
    return new Response("Unauthorized", { status: 401 });
  }

  if (!user) return <div>Not logged in</div>;


  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex-grow'>
        HOME
        <div>Hello {user?.firstName}</div>
      </div>
    </main>
  )
}
