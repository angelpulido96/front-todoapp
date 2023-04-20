import { store } from "@/pages/store"
import { useRouter } from "next/router"
import { useEffect } from "react"

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

export function ManagementRoutes({ children }: Props) {

    const paths = [
        '/',
        '/signup'
    ]

    const router = useRouter()

    const { pathname } = router
    const checkRoutes = paths.includes(pathname)
    const { loged } = store.getState()

    useEffect(() => {

        if (!checkRoutes && !loged.name) {
            router.push('/')
        }
    }, [])

    return <>{children}</>
}