import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

export default function TestExample() {
	return (
		<div className="tldraw__editor">
			<Tldraw persistenceKey="test" />
		</div>
	)
}
