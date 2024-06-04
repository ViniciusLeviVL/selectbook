import { getRandomInt } from '@/lib/utils'
import { User } from '@/types/User'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface LoginUser {
  name: string
  email: string
  image?: string
}

interface UserStates {
  user?: User
  signIn: (user: LoginUser) => void
  signOut: () => void
}

export const useUserContext = create<UserStates>()(
  persist(
    (set) => ({
      signIn: (loginUser) => {
        set(() => ({
          user: { ...loginUser, id: 'Usuario' + getRandomInt(2, 50) },
        }))
      },
      signOut: () => {
        set(() => ({ user: undefined }))
      },
    }),
    { name: 'user' },
  ),
)
