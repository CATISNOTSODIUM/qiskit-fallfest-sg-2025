import About from "@/components/common/content/about";
import Partner from "@/components/common/content/partner";
import Schedule from "@/components/common/content/schedule";
import Footer from "@/components/common/footer";
import NavigationBar from "@/components/common/navbar";

/**
 * Main component for the website.
 * Since the website is (mostly) single-paged, the navigation bar should redirect
 * to the specific part of this main page.
 * Each subpage is imported from components/content
 * @returns Main page
 */
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16">
      <NavigationBar/>
      <main className="dark flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div>{'LOGO'}</div>
          <About/>
          <Partner/>
          <Schedule/>
          <div>{'Speakers'}</div>
      </main>
      <Footer/>
    </div>
  );
}
