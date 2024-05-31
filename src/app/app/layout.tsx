import NavBar from '@/components/MainNavBar'

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="lg:flex justify-center">
      <NavBar />
      <div className="p-4 sm:px-6 lg:px-8 lg:max-w-[calc(100%-14rem)]">
        {children}
      </div>
    </main>
  )
}
