import { useState, useEffect } from "react";
import BlogDetails from "./BlogDetails";
import RightSideBlog from "./RightSideBlog";
import blogBg from "../assets/bgBlog.png";

import toast, { Toaster } from 'react-hot-toast';

const Blog = () => {
    const [blog, setBlog] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 4;


    const handleSubmit = e => {
        e.preventDefault()
        toast.success("your blog submission successful")
        e.target.reset()

    }

    useEffect(()=> {
        window.scrollTo(0,0)
    },[])

    useEffect(() => {
        fetch("/blog.json")
            .then((res) => res.json())
            .then((data) => setBlog(data));
    }, []);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blog.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className="container mx-auto">
            <div className="blogBg relative">
                <img src={blogBg} className="w-screen" alt="" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 max-w-7xl mx-auto mt-20 gap-10">
                <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentPosts.map((post) => (
                        <BlogDetails key={post.id} post={post}></BlogDetails>
                    ))}
                    <div className="text-center my-5 md:col-span-2">
                        {currentPage > 1 && (
                            <button
                                onClick={() => setCurrentPage(currentPage - 1)}
                                className="bg-[#43ba7f] text-white px-4 py-2 rounded-md mx-2"
                            >
                                Previous
                            </button>
                        )}
                        {currentPosts.length === postsPerPage && (
                            <button
                                onClick={() => setCurrentPage(currentPage + 1)}
                                className="bg-[#43ba7f] text-white px-4 py-2 rounded-md mx-2"
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
                <div className="">
                    <h1 className="text-2xl font-bold mb-7">Popular blog</h1>
                    <hr />
                    <div className="mt-3">
                        {blog.slice(6, 12).map((recent) => (
                            <RightSideBlog key={recent.id} recent={recent}></RightSideBlog>
                        ))}
                    </div>
                </div>
            </div>



            {/* upload section */}
            <section className="contact bg-contact-bg bg-cover bg-center bg-fixed">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 mx-auto max-w-3xl">
                    <h3 className="text-3xl font-bold text-center mb-6">Upload Your Experience</h3>
                    <div className="mb-4 flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3 mb-4">
                            <input
                                className="appearance-none block w-full bg-gray-100 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <input
                                className="appearance-none block w-full bg-gray-100 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4 flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3 mb-4">
                            <input
                                className="appearance-none block w-full bg-gray-100 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="date"
                                name=""
                                id=""
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <input
                                className="appearance-none block w-full bg-gray-100 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                placeholder="Title"
                                required
                            />
                        </div>
                    </div>
                    <input type="file" name="" id="" className="mb-4" />
                    <textarea
                        className="appearance-none block w-full bg-gray-100 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name=""
                        placeholder="Message"
                        id=""
                        cols="30"
                        rows="10"
                    ></textarea>
                    <input
                        type="submit"
                        value="Submit"
                        className="btn bg-[#43ba7f] text-white px-5 py-2 rounded-md mt-4 hover:bg-[#3eaf76]"
                        required
                    />
                </form>
            </section>
            <Toaster></Toaster>
        </div>
    );
};

export default Blog;
