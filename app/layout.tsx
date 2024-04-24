import SideNav from './ui/dashboard/sidenav';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen   flex-col md:flex-row md:overflow-hidden">
      <div className={`${inter.className} antialiased`}>{children}</div>
    </div>
  );
}
