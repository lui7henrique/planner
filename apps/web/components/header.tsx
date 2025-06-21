import { Button } from '@repo/ui/components/button'
import { User } from 'lucide-react'
import Link from 'next/link'

const links = [
	{
		label: 'Home',
		href: '/',
	},
]

export function Header() {
	return (
		<header className="flex items-center justify-center p-4">
			<div className="flex w-full max-w-4xl items-center border rounded-full px-4 py-2 gap-4 justify-between">
				<div className="flex items-center w-full gap-4">
					<div className="flex items-center text-2xl font-bold">
						<span>🔥</span>
						<span className="text-lg font-semibold ">Fire</span>
					</div>

					<nav className="flex items-center gap-4 font-medium text-muted-foreground text-sm">
						{links.map(link => (
							<Link key={link.href} href={link.href}>
								{link.label}
							</Link>
						))}
					</nav>
				</div>

				<Button
					type="button"
					variant="outline"
					size="sm"
					className="rounded-full"
				>
					<User />
					Login
				</Button>
			</div>
		</header>
	)
}
