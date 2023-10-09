import { useState, useEffect } from "react"

const Blog = () => {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        fetch("/blog.json")
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])

    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    blog.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white p-4 rounded shadow-md transition-transform transform hover:scale-105"
                        >
                            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">By {post.author}</p>
                            <p className="text-gray-800">{post.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Blog;
