'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import {Button} from '@/components/ui/button'
import { useState } from "react"
import { generateAPIKey } from "./actions"

export function GenerateAPI({change}) {
    const [keyName, setKeyName] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async (e) => {
      const apiKey = await generateAPIKey(keyName, description)
      console.log(apiKey)
      change(true)
    }
  return (
    <>
      <section>
          <h2 className="text-xl font-semibold">Generate New API Key</h2>
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
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
                className="max-h-10"
                id="description" placeholder="Describe the purpose of this API key" />
              </div>
            </div>
            <Button type="submit" onClick={()=>handleSubmit()}>Generate API Key</Button>
          </div>
        </section>
    </>
  )
}


