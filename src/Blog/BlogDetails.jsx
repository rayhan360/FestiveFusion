import PropTypes from 'prop-types';
import authorImg from "../assets/testimonial/testi1.jpg"


const BlogDetails = ({ post }) => {
    const {title, img, author, date, content} = post;

    return (
        <div>
            <div className="relative flex h-[650px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        src={img}
                        className='h-64 w-screen hover:translate-y-8'
                        alt="ui/ux review check"
                    />
                </div>
                <div className="p-6">
                    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                       {content.slice(0, 200)}<span className='text-green-600'>.....read more</span>
                    </p>
                </div>
                <div className="flex items-center justify-between p-6">
                    <div className="flex gap-5 items-center -space-x-3">
                        <img
                            alt="natali craig"
                            src={authorImg}
                            className="relative inline-block h-12 w-12 rounded-full border-2 0"
                            data-tooltip-target="author-1"
                        />
                        <div
                            data-tooltip="author-1"
                            className="z-50 whitespace-normal break-words rounded-lg py-1.5 px-3 font-sans text-sm font-normal focus:outline-none"
                        >
                            {author}
                        </div>
                    </div>
                    <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        {date}
                    </p>
                </div>
            </div>
        </div>
    );
};

BlogDetails.propTypes = {
    post: PropTypes.object
}


export default BlogDetails;