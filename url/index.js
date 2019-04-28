import url from 'url'

const str = 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'

console.log(
	'url.URL === URL',
	url.URL === URL
)

console.log(
	new URL(str)
)

console.log(
	url.parse(str)
)