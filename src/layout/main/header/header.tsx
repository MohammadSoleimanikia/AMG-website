import NavBar from '@/layout/main/nav/navBar';
import TopHeader from './components/topHeader';
import { fetchHeaderData } from '@/services/headerDataService';

export default async function HomeHeader() {
  const headerData = await fetchHeaderData();
  
  if (!headerData.data) {
    return <p>یک خطایی پیش آمده</p>;
  }
  
  return (
    <header className="fixed left-0 right-0 top-0 z-[999]">
      {/* top header */}
      <TopHeader headerData={headerData.data} />

      {/* bottom navbar */}
      <NavBar headerData={headerData.data} />
    </header>
  );
}
