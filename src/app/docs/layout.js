import { redirect } from "next/navigation"



export default function DocsLayout({ children}) {
    redirect('https://docs.pics.shade.cool/')
    return (
        <>
            {/* <div className="flex min-h-screen w-full">
                <aside className="hidden w-64 shrink-0 border-r bg-background md:block">
                    <div className="sticky top-0 flex h-16 items-center border-b px-6">
                        <Link href="#" className="font-bold" prefetch={false}>
                            Pics Shade Docs
                        </Link>
                    </div>
                    <nav className="py-6">
                        <ul className="space-y-1">
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 rounded-md px-6 py-2 text-sm font-medium hover:bg-muted"
                                    prefetch={false}>
                                    <FileTextIcon className="h-5 w-5" />
                                    Getting Started
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 rounded-md px-6 py-2 text-sm font-medium hover:bg-muted"
                                    prefetch={false}>
                                    <CodeIcon className="h-5 w-5" />
                                    API Reference
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 rounded-md px-6 py-2 text-sm font-medium hover:bg-muted"
                                    prefetch={false}>
                                    <BookOpenIcon className="h-5 w-5" />
                                    Guides
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 rounded-md px-6 py-2 text-sm font-medium hover:bg-muted"
                                    prefetch={false}>
                                    <CircleHelpIcon className="h-5 w-5" />
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <main className="flex-1 py-10 px-4 md:px-8">
                    {   children
                    }
                </main>

            </div> */}

        </>
    )
}