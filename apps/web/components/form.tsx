import { Input } from '@repo/ui/components/input'

export function Form() {
	return (
		<div className="flex flex-col gap-4">
			<Input type="file" accept=".csv" />
		</div>
	)
}
