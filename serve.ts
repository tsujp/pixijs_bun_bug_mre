import { join } from 'path'

const INDEX_HTML = Bun.file('./public/index.html')

const server = Bun.serve({
    fetch(req: Request) {
        const url = new URL(req.url)

        if (url.pathname === '/') {
            return new Response(INDEX_HTML)
        }

        if (url.pathname.startsWith('/out')) {
            const f = join(process.cwd(), url.pathname.substring(1))
            return new Response(Bun.file(f))
        }

        console.log('url:', url.href)

        // TODO: 404.
        return new Response('BAD')
    }
})
// Trap cleanup.
process.on('SIGINT', async () => {
    console.log('Cleaning up...')

    // HTTP server.
    server.stop()

    console.log('Done')
    process.exit(0)
})
