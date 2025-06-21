import { cn } from '@repo/ui/lib/utils'
import { User } from 'lucide-react'
import Link from 'next/link'

export function Header() {
	return (
		<header className="flex items-center justify-center p-4">
			<div className="flex items-center border rounded-full px-4 py-2 gap-4">
				<div className="flex items-center text-2xl font-bold">
					<span>🔥</span>
					<span className="text-lg font-semibold ">Fire</span>
				</div>

				<nav className="flex items-center gap-4 font-medium text-muted-foreground text-sm">
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
				</nav>

				<button
					type="button"
					className={cn(
						'relative overflow-hidden rounded-full border text-xs px-3 py-1 flex items-center gap-1.5 cursor-pointer',
						'hover:'
					)}
				>
					<User className="w-3 h-3" />
					Login
				</button>
			</div>
		</header>
	)
}
