"use client"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <button className="rounded-full bg-blue-600 p-3" onClick={() => console.log("Button clicked")}>
        Authenticate
      </button>
      <p></p>
    </main>
  );
}
