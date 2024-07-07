'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import {Button} from '@/components/ui/button'
import { useState } from "react"
import { generateAPIKey } from "./actions"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import Link from "next/link"

export function GenerateAPI({change}) {
    const [keyName, setKeyName] = useState('')
    const [description, setDescription] = useState('')
    const { toast } = useToast()

    const handleSubmit = async (e) => {
      const apiKey = await generateAPIKey(keyName, description)
      console.log(apiKey)
      change(true)
      toast({
        title: "API Key Generated",
        description: `Your new API key is ${apiKey.key}`,
        action: (
          <>
          <ToastAction altText="Close">Close</ToastAction>
          </>
        )
      })
    }
  return (
    <>
      <section>
          <h2 className="text-xl font-semibold">Generate New API Key</h2>
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4 align-top">
              <div>
                <Label htmlFor="name">Key Name</Label>
                <Input onChange={(e)=>setKeyName(e.target.value)} id="name" placeholder="Enter a name for your API key" className=" mt-4" />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                onChange={(e)=>setDescription(e.target.value)}
                // make the height of the as small as possible
                // to make it look like an input field
                className="max-h-1 h-4 mt-4"
                id="description" placeholder="Describe the purpose of this API key" />
              </div>
            </div>
            <Button disabled={!keyName || !description} type="submit" onClick={()=>handleSubmit()}>Generate API Key</Button>
            {/* Give link to the docs */}
            <p className="text-sm text-gray-500">Learn how to use your API key <Link href="/docs" className="text-blue-500">here</Link></p>
          </div>
        </section>
    </>
  )
}


