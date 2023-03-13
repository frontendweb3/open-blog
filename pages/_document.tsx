import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='light' lang="en">
      <Head />
      <body className='bg-transparent dark:bg-gray-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
