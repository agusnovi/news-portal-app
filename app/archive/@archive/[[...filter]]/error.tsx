'use client'
export default function FilterError({ error }: { error: { message: string } }) {
    
    return <main className="main">
        <h1>An error occurred!</h1>
        <p>{error.message}</p>
    </main>
}