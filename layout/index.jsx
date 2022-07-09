import Header from "../components/Header";

export default function Layout({ children }) {
  return (
    <div className="w-full h-screen">
      <Header />
      <main className="w-full h-[calc(100%-64px)] bg-slate-50">{children}</main>
    </div>
  );
}
