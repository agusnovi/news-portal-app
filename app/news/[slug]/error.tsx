'use client'
export default function ErrorDetail({ error }: { error: { message: string } }) {
    return (
      <main className="main">
        <h1>Occurred an Error!</h1>
        <p>{error.message}</p>
      </main>
    );
}