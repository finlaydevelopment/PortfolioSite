import SubNavbar from '../../components/subnavbar/subnavbar';
import Footer from '../../components/footer/footer';
import ProductDisplay from '../../components/projects/calculator/ProductDisplay';

export default function ProjectCalculator() {
    return (
        <main className="bg-white min-h-screen">
            <SubNavbar />
            <div className="text-center py-5 text-lg"><a href="https://github.com/finlaydevelopment/Room-Area-calculator/tree/main" target='_'>VIEW ON GITHUB</a></div>
            <section className="container mx-auto p-5">
                <h2 className="text-2xl font-bold text-center">Flooring Measurement Calculator</h2>
                <p className="text-center text-gray-600 mb-4">Select a flooring product and calculate how much you need.</p>
                <ProductDisplay />
            </section>
            <Footer/>
        </main>
    );
  }