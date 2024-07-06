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
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { parseDate } from "@/lib/funcs";

export function ApiPage() {
  const { toast } = useToast();

  const [apis, setAPIs] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    getAPIKeys().then((data) => {
      setAPIs(data);
      console.log(data, apis);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                  <APIRow key={api.id} api={api} setChange={setChange} toast={toast} />
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </main>
    </div>
  );
}

export const APIRow = ({ api, setChange, toast }) => {
  const { name, createdAt, key, id } = api;

  const handleDelete = () => {
    deleteAPIKey(id)
      .then(() => {
        setChange((prev) => !prev); // Trigger a re-fetch or state change
        toast({
          title: "Deleted",
          description: "API Key successfully deleted",
          action: (
            <ToastAction altText="Close">Close</ToastAction>
          ),
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Error",
          description: "Failed to delete API Key",
          action: (
            <ToastAction altText="Close">Close</ToastAction>
          ),
        });
      });
  };

  return (
    <TableRow>
      <TableCell>
        <div className="flex items-center gap-2">
          <KeyIcon className="w-5 h-5" />
          <span>{name}</span>
        </div>
      </TableCell>
      <TableCell>{parseDate(createdAt)}</TableCell>
      <TableCell>
        <span>{key.substring(0, 4)}....</span>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => copyToClipboard(key, toast)}>
            <CopyIcon className="w-5 h-5" />
            <span className="sr-only">Copy API Key</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-red-500 hover:bg-red-500/10"
            onClick={handleDelete}
          >
            <TrashIcon className="w-5 h-5" />
            <span className="sr-only">Delete API Key</span>
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export const copyToClipboard = (text, toast) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      toast({
        title: "Copied",
        description: "API Key copied to clipboard",
        action: (
          <ToastAction altText="Close">Close</ToastAction>
        ),
      });
    })
    .catch((err) => {
      console.error(err);
      toast({
        title: "Error",
        description: "Failed to copy API Key",
        action: (
          <ToastAction altText="Close">Close</ToastAction>
        ),
      });
    });
};
