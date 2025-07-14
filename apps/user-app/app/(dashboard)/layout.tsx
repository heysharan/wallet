import { ReactNode } from "react";
import { AppBarClient } from "../components/AppbarClient";
import { Sidebar } from "../components/Sidebar";

export default function Layout({ children }: { children: ReactNode }) {

    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            <div className="p-4">
                <AppBarClient />
            </div>
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 px-4">{children}</main>
            </div>
        </div>
    )
}