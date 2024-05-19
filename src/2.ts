type Square = {
	kind: 'square'
	size: number
}

type Rectangle = {
	kind: 'rectangle'
	width: number
	height: number
}

type Circle = {
	kind: 'circle'
	radius: number
}

type Shape = Square | Rectangle | Circle

export function area(shape: Shape): number {
	// Return the area for each kind of shape
	switch (shape.kind) {
		case 'square':
			return shape.size ** 2

		case 'rectangle':
			return shape.width * shape.height

		case 'circle':
			return shape.radius ** 2 * Math.PI

		default:
			throw new Error('Unknown shape')
	}
}
