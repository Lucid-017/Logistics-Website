import Food from '../asset/food.jpg'
import Business from '../asset/business.jpg'
import Partner from '../asset/partner.jpg'
import Features from '../Features'
import { HiOutlineMinus } from 'react-icons/hi'
import { Link } from 'react-router-dom'
const OurFeatures = ({png,title,text}) => {
    return (
        <div className='lg:h-screen '>
            <div className='px-20 mb-16'>
                <p className='flex gap-2 self-center'><HiOutlineMinus className='text-4xl '/><p className='text-xs self-center'> AMAZING FEATURES</p></p>
                <p className='text-4xl font-bold uppercase text-center md:text-start lg:text-start'>We Deliver More Than Just Parcels</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-20 gap-8" >
                <Link to={'/order'}>
                    <Features png={Food} title={'Food order?'} text='got a food Delivery ? we got you covered'/>
                </Link>
                <Link to={'/business'}>
                    <Features png={Business} title={'Managing a Business?'} text='Do you own a business?Lets manage your delivery.'/>
                </Link>
                <Link to={'/partnerUp'}>
                  <Features png={Partner} title={'partner with us'} text='If you’re a bike owner and looking to more than double your earning capacity, we want you on the Team'/>
                </Link>
        </div> 
        </div>
         )
}

export default OurFeatures