import DashboardLayout from '../../../components/sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const tabs = ["search","notification", "chat","appointments", "profile"];

  const links = ["notification", "appointments", "chat","search", "profile"]; // Menu links

  return (
    <DashboardLayout 
      tabs={tabs}
      links={links}

    >
      {children}
    </DashboardLayout>
  );
}
