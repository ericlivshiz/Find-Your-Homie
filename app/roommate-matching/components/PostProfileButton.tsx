'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import PostProfileForm from './PostProfileForm'

export default function PostProfileButton() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <Button size="lg" onClick={() => setIsFormOpen(true)}>
        Post Your Profile
      </Button>
      <PostProfileForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}

