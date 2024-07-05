'use client'
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { GenerateAPI } from "./GenerateAPI"
import { getAPIKeys } from "./actions"
export function ApiPage() {

  let api = getAPIKeys()

  let apis = [
    {
      name: "Test Key",
      createdAt: "2021-08-01"
    },
    {
      name: "Test Key 2",
      createdAt: "2021-08-02"
    },
    {
      name: "Test Key 3",
      createdAt: "2021-08-03"
    }
  ]
  return (
    (<div className="flex flex-col h-full">
      {/* <header className="bg-primary text-primary-foreground py-4 px-6 rounded-2xl">
        <h1 className="text-2xl font-bold">API Keys</h1>
      </header> */}
      <main className="flex-1 p-6 space-y-8">
        <GenerateAPI/>
        {
          JSON.stringify(api)
        }
        <section>
          <h2 className="text-xl font-semibold">Your API Keys</h2>
          <div className="mt-4 border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Key Name</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {apis.map((api, index) => (
                  <APIRow key={index} name={api.name} createdAt={api.createdAt} />
                ))}
                
              </TableBody>
            </Table>
          </div>
        </section>
      </main>
    </div>)
  );
}


export const APIRow = ({ name, createdAt }) => {
  return (
    (<TableRow>
      <TableCell>
        <div className="flex items-center gap-2">
          <KeyIcon className="w-5 h-5" />
          <span>{name}</span>
        </div>
      </TableCell>
      <TableCell>{createdAt}</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <CopyIcon className="w-5 h-5" />
            <span className="sr-only">Copy API Key</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-red-500 hover:bg-red-500/10">
            <TrashIcon className="w-5 h-5" />
            <span className="sr-only">Delete API Key</span>
          </Button>
        </div>
      </TableCell>
    </TableRow>)
  );
}

function CopyIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>)
  );
}


function KeyIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
      <path d="m21 2-9.6 9.6" />
      <circle cx="7.5" cy="15.5" r="5.5" />
    </svg>)
  );
}


function TrashIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>)
  );
}
