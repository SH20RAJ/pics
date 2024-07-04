import { Button } from "@/components/ui/button";
import Link  from "next/link";
import React from "react";

export default function page() {
  return (
    <div className=" flex justify-center align-middle ">
      {/* Write in middle that analytics cant be used on your plan */}
      <div className=" flex  flex-col justify-center align-middle text-center  ">
        <h1 className=" text-4xl">Analytics</h1>
        <p className=" mt-4">Analytics {"can't"} be used on your plan.</p>
        <br />
        {/* <div className="">
          <button className="">Upgrade Plan</button>

          <button className="">Learn More</button>

          <button className="">Contact Support</button>

          <button className="">View Documentation</button>

          <button className="">View API Reference</button>

          <button className="">View SDK Reference</button>

          <button className="">View Pricing</button>

          <button className=''>View FAQ</button>

          <button className=''>View Blog</button>

          <button className=''>View Status</button>

          <button className=''>View Terms</button>

          <button className=''>View Privacy</button>

          <button className=''>View Security</button>

          <button className=''>View Compliance</button>

          <button className=''>View Contact</button> 
        </div> */}

        <div className=" flex flex-wrap justify-center align-middle">

          <Link href="/pricing">
          <Button className=" p-4 m-4" >
            Upgrade Plan
          </Button>
          </Link>

          <Link href="/explore">
          <Button className=" p-4 m-4" >
            Learn More
          </Button>
          </Link>

          </div>
      </div>
    </div>
  );
}
