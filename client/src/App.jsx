import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './components/Pages/LandingPage.jsx';
import AboutUs from './components/Pages/AboutUs.jsx';
import ContactUs from './components/Pages/ContactUs.jsx';

import CriticalIllnessInsurance from './components/Pages/Services/CriticalIllnessInsurance.jsx';
import DisabilityInsurance from './components/Pages/Services/DisabilityInsurance.jsx';
import MortgageInsurance from './components/Pages/Services/MortgageInsurance.jsx';
import RESP from './components/Pages/Services/RESP.jsx';
import RRSP from './components/Pages/Services/RRSP.jsx';
import TermLifeInsurance from './components/Pages/Services/TermLifeInsurance.jsx';
import WholeLifeInsurance from './components/Pages/Services/WholeLifeInsurance.jsx';
import SuperVisaInsurance from './components/Pages/Services/SuperVisaInsurance.jsx';
import AllCategories from './components/Pages/Services/AllCategories.jsx';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/about' element={<AboutUs />} />
					<Route path='/contact' element={<ContactUs />} />
					<Route path='/services'>
						<Route path='' element={<AllCategories />} />

						<Route
							path='critical-illness-insurance'
							element={<CriticalIllnessInsurance />}
						/>
						<Route path='disability-insurance' element={<DisabilityInsurance />} />

						<Route path='mortgage-insurance' element={<MortgageInsurance />} />
						<Route path='resp' element={<RESP />} />
						<Route path='rrsp' element={<RRSP />} />

						<Route path='term-life-insurance' element={<TermLifeInsurance />} />
						<Route path='whole-life-insurance' element={<WholeLifeInsurance />} />
						{/* super visa insurances */}
						<Route path='super-visa' element={<SuperVisaInsurance />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
