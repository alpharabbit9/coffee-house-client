import icon1 from '../assets/images/icons/1.png'
import icon2 from '../assets/images/icons/2.png'
import icon3 from '../assets/images/icons/3.png'
import icon4 from '../assets/images/icons/4.png'

const Features = () => {
    return (
        <div className='bg-[#ECEAE3] ' >

            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6'>
            <div className='p-6'>
                <img className='text-[#331A15]' src={icon1} alt="" />
                <h6 className='font-semibold text-[#331A15] mt-2 mb-2'>Awesome Aroma</h6>
                <p className='text-xs text-[#331A15]'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='p-6'>
                <img className='text-[#331A15]' src={icon2} alt="" />
                <h6 className='font-semibold text-[#331A15] mt-2 mb-2'>High Quality</h6>
                <p className='text-xs text-[#331A15]'>We served the coffee to you maintaining the best quality</p>
            </div>
            <div className='p-6'>
                <img className='text-[#331A15]' src={icon3} alt="" />
                <h6 className='font-semibold text-[#331A15] mt-2 mb-2'>Pure taste</h6>
                <p className='text-xs text-[#331A15]'>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className='p-6'>
                <img className='text-[#331A15]' src={icon4} alt="" />
                <h6 className='font-semibold text-[#331A15] mt-2 mb-2'>Proper Roasting</h6>
                <p className='text-xs text-[#331A15]'>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
            </div>
           
            
        </div>
    );
};

export default Features ;