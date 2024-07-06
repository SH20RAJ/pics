"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { GenerateAPI } from "./GenerateAPI";
import { getAPIKeys, deleteAPIKey } from "./actions";
import { useEffect, useState } from "react";
import { CopyIcon, KeyIcon, TrashIcon } from "lucide-react";
import { toast } from "sonner";

export function ApiPage() {
  const [apis, setAPIs] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    getAPIKeys().then((data) => {
      setAPIs(data);
      console.log(data, apis);
    });
  }, [change]);

  return (
    <div className="flex flex-col h-full">
      <main className="flex-1 p-6 space-y-8">
        <GenerateAPI change={setChange} />
        <section>
          <h2 className="text-xl font-semibold">Your API Keys</h2>
          <div className="mt-4 border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Key Name</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead>Key</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {apis.map((api) => (
                  <APIRow key={api.id} api={api} setChange={setChange} />
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </main>
    </div>
  );
}

export const APIRow = ({ api, setChange }) => {
  const { name, createdAt, key, id } = api;
  return (
    <TableRow>
      <TableCell>
        <div className="flex items-center gap-2">
          <KeyIcon className="w-5 h-5" />
          <span>{name}</span>
        </div>
      </TableCell>
      <TableCell>{JSON.stringify(createdAt)}</TableCell>
      <TableCell>
        <span>{key.substring(0, 4)}....</span>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => copyToClipboard(key)}>
            <CopyIcon className="w-5 h-5" />
            <span className="sr-only">Copy API Key</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-red-500 hover:bg-red-500/10"
            onClick={() => {
              deleteAPIKey(id).then(() => setChange((prev) => !prev));
            }}
          >
            <TrashIcon className="w-5 h-5" />
            <span className="sr-only">Delete API Key</span>
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => toast('copied'))
    .catch((err) => console.error(err));
};
