import Button from "@/component/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-5">
      <h1 className="font-bold text-6xl text-red-500">
       Hello Next.Js Im a Developer
      </h1>
      <p>
      Its a Home Page
      </p>
      <Button />
      <div>
       <Button />
      </div>
    </main>
  );
}