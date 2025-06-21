import { Button } from '@repo/ui/components/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
	return (
		<main className="max-w-4xl w-full mx-auto flex flex-col gap-4">
			<div className="border w-full aspect-video rounded-xl bg-muted" />

			<div className="flex justify-between w-full">
				<div className="">
					<h1 className="text-xl font-semibold">
						Alcance sua independência financeira
					</h1>
					<p className="text-muted-foreground text-sm">
						Importe seus extratos e descubra quando você pode se aposentar.
					</p>
				</div>

				<Button className="rounded-full gap-2" variant="ghost">
					<ArrowRight />
					Começar a Planejar
				</Button>
			</div>
		</main>
	)
}
