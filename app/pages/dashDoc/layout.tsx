
import DashboardLayout from '../../../components/sidebar';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const tabs = ["notification", "appointments", "historique", "profile"];

  const links = ["notification", "appointments", "historique", "profile"]; // Menu links


  return (
    <DashboardLayout 
      tabs={tabs}
      links={links}

    >
      {children}
    </DashboardLayout>
  );
}


