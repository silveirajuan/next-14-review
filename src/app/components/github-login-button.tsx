'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'

export function GithubLoginButton() {
  const [isLoading, setIsLoading] = useState(false)
  const { push } = useRouter()

  async function handleGithubSignIn() {
    setIsLoading(true)

    setTimeout(() => push('/onboarding'), 2000)
  }

  return (
    <Button
      onClick={handleGithubSignIn}
      className="px-8 rounded flex gap-3 border border-zinc-50 transition-colors [&:not(:disabled)]:hover:bg-zinc-50/5 disabled:opacity-35 disabled:cursor-not-allowed"
      disabled={isLoading}
      >
      {
        isLoading
        ? <Icons.Spinner className="w-4 h-4 animate-spin" />
        : <Icons.GitHub className="w-4 h-4" /> 
      }
      <span>Sign in with GitHub</span>
    </Button>
    )
  }
