import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
const SignleEvent = ({ card }) => {
    // console.log(card);
    const { id, name, img, short_description, price, price2 } = card;
    return (
        <div>
            <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                        className='h-64 w-96'
                        src={img}
                        alt="ui/ux review check"
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                </div>
                <div className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                        <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {name}
                        </h5>
                    </div>
                    <p className="block flex-grow font-sans text-base font-light leading-relaxed text-gray-700 antialiased mb-3">
                        {short_description}
                    </p>
                    <hr />
                    <div className='mt-3'>
                        <h1 className='text-center text-2xl font-bold'>Price </h1>
                        <div className='flex gap-2 items-center'>
                            <h1 className='text-lg font-semibold'>Standard: </h1>
                            <p className='text-gray-500'>{price}$</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <h1 className='text-lg font-semibold'>Premium: </h1>
                            <p className='text-gray-500'>{price2}$</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <h1 className='text-lg font-semibold'>Custom: </h1>
                            <p className='text-gray-500'>customer specific needs and preferences.</p>
                        </div>
                    </div>
                </div>
                <div className="p-6 pt-3">
                    <Link to={`/eventDetails/${id}`}>
                        <button
                            className="block w-full select-none rounded-lg bg-[#43ba7f] py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                        >
                            view all details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

SignleEvent.propTypes = {
    card: PropTypes.object
}

export default SignleEvent;