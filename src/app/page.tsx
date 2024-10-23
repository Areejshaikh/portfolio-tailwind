import Contect from './component/contect/page';
import Hero from './component/hero/page';
import Navbar from './component/navber/page';
import Services from './component/services/page';
import Work from './component/works/page';


const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero/>
            <Services/>
            <Work/>
            <Contect/>
        </div>
    );
};

export default Home;

