// import Link from "next/link"

// export function DocsPage() {
//   return (
//     (<div className="flex min-h-screen w-full">
//       <aside className="hidden w-64 shrink-0 border-r bg-background md:block">
//         <div className="sticky top-0 flex h-16 items-center border-b px-6">
//           <Link href="#" className="font-bold" prefetch={false}>
//             Pics Shade Docs
//           </Link>
//         </div>
//         <nav className="py-6">
//           <ul className="space-y-1">
//             <li>
//               <Link
//                 href="#"
//                 className="flex items-center gap-2 rounded-md px-6 py-2 text-sm font-medium hover:bg-muted"
//                 prefetch={false}>
//                 <FileTextIcon className="h-5 w-5" />
//                 Getting Started
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#"
//                 className="flex items-center gap-2 rounded-md px-6 py-2 text-sm font-medium hover:bg-muted"
//                 prefetch={false}>
//                 <CodeIcon className="h-5 w-5" />
//                 API Reference
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#"
//                 className="flex items-center gap-2 rounded-md px-6 py-2 text-sm font-medium hover:bg-muted"
//                 prefetch={false}>
//                 <BookOpenIcon className="h-5 w-5" />
//                 Guides
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#"
//                 className="flex items-center gap-2 rounded-md px-6 py-2 text-sm font-medium hover:bg-muted"
//                 prefetch={false}>
//                 <CircleHelpIcon className="h-5 w-5" />
//                 Support
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </aside>
//       <main className="flex-1 py-10 px-4 md:px-8">
//         <div className="mx-auto max-w-4xl">
//           <h1 className="text-3xl font-bold">Documentation</h1>
//           <div className="mt-8 space-y-8">
//             <section>
//               <h2 className="text-2xl font-bold">Getting Started</h2>
//               <div className="mt-4 prose">
//                 <p>
//                   Welcome to the Acme Docs! This section will guide you through the process of setting up and getting
//                   started with our platform.
//                 </p>
//                 <h3>Prerequisites</h3>
//                 <ul>
//                   <li>Node.js version 14 or later</li>
//                   <li>npm version 6 or later</li>
//                 </ul>
//                 <h3>Installation</h3>
//                 <p>To get started, follow these steps:</p>
//                 <ol>
//                   <li>
//                     Clone the repository:
//                     <pre>
//                       <code>git clone https://github.com/acme/docs.git</code>
//                     </pre>
//                   </li>
//                   <li>
//                     Install the dependencies:
//                     <pre>
//                       <code>cd docs npm install</code>
//                     </pre>
//                   </li>
//                   <li>
//                     Start the development server:
//                     <pre>
//                       <code>npm start</code>
//                     </pre>
//                   </li>
//                 </ol>
//                 <p>
//                   The documentation website should now be running at
//                   <code>http://localhost:3000</code>.
//                 </p>
//               </div>
//             </section>
//             <section>
//               <h2 className="text-2xl font-bold">API Reference</h2>
//               <div className="mt-4 prose">
//                 <p>
//                   This section provides a comprehensive overview of the Acme API. You'll find detailed information about
//                   the available endpoints, request and response formats, and more.
//                 </p>
//                 <h3>Authentication</h3>
//                 <p>
//                   To use the Acme API, you'll need to authenticate with a valid API key. You can obtain an API key by
//                   signing up for an account on the Acme platform.
//                 </p>
//                 <h3>Endpoints</h3>
//                 <ul>
//                   <li>
//                     <Link href="#" prefetch={false}>
//                       /users
//                     </Link>
//                     <p>Manage user accounts and profiles.</p>
//                   </li>
//                   <li>
//                     <Link href="#" prefetch={false}>
//                       /products
//                     </Link>
//                     <p>Interact with the product catalog.</p>
//                   </li>
//                   <li>
//                     <Link href="#" prefetch={false}>
//                       /orders
//                     </Link>
//                     <p>Manage customer orders and transactions.</p>
//                   </li>
//                 </ul>
//               </div>
//             </section>
//             <section>
//               <h2 className="text-2xl font-bold">Guides</h2>
//               <div className="mt-4 prose">
//                 <p>Explore our guides to learn more about specific features and use cases of the Acme platform.</p>
//                 <h3>Integrations</h3>
//                 <p>Learn how to integrate Acme with your existing tools and workflows.</p>
//                 <h3>Customization</h3>
//                 <p>Discover how to customize the Acme platform to fit your unique business needs.</p>
//                 <h3>Deployment</h3>
//                 <p>Get guidance on deploying and scaling your Acme-powered applications.</p>
//               </div>
//             </section>
//           </div>
//         </div>
//       </main>
//     </div>)
//   );
// }

// function BookOpenIcon(props) {
//   return (
//     (<svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round">
//       <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
//       <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
//     </svg>)
//   );
// }


// function CircleHelpIcon(props) {
//   return (
//     (<svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round">
//       <circle cx="12" cy="12" r="10" />
//       <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
//       <path d="M12 17h.01" />
//     </svg>)
//   );
// }


// function CodeIcon(props) {
//   return (
//     (<svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round">
//       <polyline points="16 18 22 12 16 6" />
//       <polyline points="8 6 2 12 8 18" />
//     </svg>)
//   );
// }


// function FileTextIcon(props) {
//   return (
//     (<svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round">
//       <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
//       <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//       <path d="M10 9H8" />
//       <path d="M16 13H8" />
//       <path d="M16 17H8" />
//     </svg>)
//   );
// }
