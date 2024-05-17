import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div className="h-[60vh] flex object-cover border-4 border-black-2">
          <Image
            src={"/icons/auth-image1.png"}
            alt="Auth Asset"
            width={850}
            height={850}
          />
        </div>
      </div>
    </main>
  );
}
