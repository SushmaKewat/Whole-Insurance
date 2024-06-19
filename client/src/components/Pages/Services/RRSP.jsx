import Dummy from '../../Dummy';
import { RRSPService } from '../../../assets/Data/services.js';
import Image from '../../../assets/Images/rrsp.jpg';

const RRSP = () => {
	return <Dummy title={'RRSP'} service={RRSPService} image={Image} />;
};

export default RRSP;
