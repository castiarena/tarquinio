import { PropsWithChildren } from "react"
import { Header } from ".."

export const Layout = ({ children }: LayoutProps) => {

    return <div>
        <Header />
        <div>
            {children}
        </div>
    </div>
}

type LayoutProps = PropsWithChildren<{}>