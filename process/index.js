import Process from 'process'

// console.log(
// 	'Process === process',
// 	Process === process
// )

// console.log(
// 	process
// )

// Вызывается только при логическом завершение программы.
// Не вызывается в результате вызова process.exit()
process.on('beforeExit', function (exitCode) {
	console.log('beforeExit')

	console.log(
		'this === process',
		this === process
	)

	console.log(exitCode)
})

process.on('disconnect', function () {
	console.log('disconnect')
})

process.on('exit', function (code) {
	console.log('exit')

	console.log({
		code
	})
})

process.on('message', function (message, sendHandler) {
	console.log({ message, sendHandler })
})

process.on('multipleResolves', (type, promise, reason) => {
	console.log({ type, promise, reason })
})

async function main() {
	try {
		return await new Promise((resolve, reject) => {
			resolve('First call')
			resolve('Swallowed resolve')
			reject(new Error('Swallowed reject'))
		})
	} catch {
		throw new Error('Failed')
	}
}

main().then(console.log)

// process.exit(100500)