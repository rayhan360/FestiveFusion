
import PropTypes from 'prop-types';

const SingleCard = ({ card }) => {
    const { name, img, short_description } = card;
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
                </div>
            </div>
        </div>
    );
};

SingleCard.propTypes = {
    card: PropTypes.object
}

export default SingleCard;