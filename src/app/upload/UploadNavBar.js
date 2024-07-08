import React from 'react'

export default function UploadNavBar() {
  return (
    <div>
      <nav>
        <div className="bg-accent shadow-lg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <div>
                <h1 className="text-2xl font-bold">Image Gallery</h1>
                <p className="text-gray-500">Pics Shade : Free and scalable Image Hosting</p>
              </div>
              <div>
                <button className="px-4 py-2 bg-primary text-white rounded-md">Upload Images</button>
              </div>
            </div>
          </div>

        </div>
        </nav>
    </div>
  )
}
