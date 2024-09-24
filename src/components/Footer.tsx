import { Container } from '@/components/Container'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-6 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link href="/" passHref>
          <img
              alt=""
              src="/logo.webp"
              className="h-12 w-auto"
            />
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} AI Guard House. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
