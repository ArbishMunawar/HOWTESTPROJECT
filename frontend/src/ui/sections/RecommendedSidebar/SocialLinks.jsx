import XIcon from '../../../assets/icons/Xicon'
import Ficon from '../../../assets/icons/Ficon'
import InIcon from '../../../assets/icons/InIcon'
import IIcon from '../../../assets/icons/IIcon'
import Wicon from '../../../assets/icons/Wicon'

const SocialLinks = () => (
  <div className="bg-[#F9F9F9]
   rounded-lg p-4 mb-9">
    <h3 className="font-semibold text-gray-800 mb-3">Follow Us On</h3>
    <div className="flex gap-3">
      <Ficon />
              <XIcon />
              <InIcon />
              <IIcon />
              <Wicon />
    </div>
  </div>
);

export default SocialLinks