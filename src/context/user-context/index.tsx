import { User } from '@/types/User'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserStates {
  user?: User
  signIn: (user: User) => void
  signOut: () => void
}

export const useUserContext = create<UserStates>()(
  persist(
    (set) => ({
      signIn: (user) => {
        set(() => ({ user }))
      },
      signOut: () => {
        set(() => ({ user: undefined }))
      },
    }),
    { name: 'user' },
  ),
)
