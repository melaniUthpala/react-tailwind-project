import b1 from "../assets/images/img-1 (1).jpg";
import b2 from "../assets/images/img-2 (1).jpg";
import b3 from "../assets/images/img-3 (1).jpg";

import a1 from "../assets/images/author.jpg";
import a2 from "../assets/images/author.jpg";
import a3 from "../assets/images/author.jpg";

const blogPosts = [
  {
    title: "Important tips for your favorite car.",
    image: b1,
    author: "Lily Anne",
    authorImg: a1,
    date: "October 12, 2018"
  },
  {
    title: "Important tips for your favorite car.",
    image: b2,
    author: "Lily Anne",
    authorImg: a2,
    date: "October 12, 2018"
  },
  {
    title: "Important tips for your favorite car.",
    image: b3,
    author: "Lily Anne",
    authorImg: a3,
    date: "October 12, 2018"
  }
];

export default function LatestNews() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <p className="text-orange-500 font-medium mb-2">
          Our Blog
        </p>

        <h2 className="text-4xl font-bold mb-4">
          Latest News
        </h2>

        <div className="w-16 h-1 bg-orange-500 mx-auto mb-14"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* ✅ BLOG IMAGE */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[220px] object-cover"
              />

              {/* ✅ CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 hover:text-orange-500 transition">
                  {post.title}
                </h3>

                {/* ✅ AUTHOR */}
                <div className="flex items-center gap-3">
                  <img
                    src={post.authorImg}
                    alt={post.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <p className="text-sm text-gray-500">
                    By <span className="text-orange-500">{post.author}</span> | {post.date}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}