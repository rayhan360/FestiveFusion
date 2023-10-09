import PropTypes from 'prop-types';

const RightSideBlog = ({ recent }) => {
    const { img, title } = recent
    return (
        <div>
            
            <div className="flex gap-3 mb-2 cursor-pointer">
                <img src={img} className="h-20 w-20" alt="" />
                <p className='hover:text-[#43ba7f]'>{title}</p>
            </div>
        </div>
    );
};

RightSideBlog.propTypes = {
    recent: PropTypes.object
}

export default RightSideBlog;