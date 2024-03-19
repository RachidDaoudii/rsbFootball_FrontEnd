import { useRouter } from 'next/router'
export default function Page() {
    const router = useRouter()
    const handleLogout = async()=>{
        const response = await fetch('http://localhost:4000/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
        })

        if (response.ok) {
            localStorage.removeItem('user');
            router.push('/')
        } else {
        
        }
    }
 
  return (
    <button
    onClick={handleLogout}
    className="w-full flex items-center text-white  gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-500 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    >
    <svg
        className="flex-shrink-0 w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
    Logout
    </button>
  )
}