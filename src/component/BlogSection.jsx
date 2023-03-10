import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";

function Blog() {
  const blogs = [
    {
      names: "Damola Olagbite",
      title: "Some Essential Home Care",
      blogImg: blog2,
    },
    {
      names: "Kingsley Brit",
      title: "Wall color Selection Affect...",
      blogImg: blog3,
    },
    {
      names: "Chris Gordons",
      title: "Let the Hot House be Experienced...",
      blogImg: blog4,
    },
  ];
  return (
    <section className="px-5 max-w-7xl mx-auto font-poppins py-24 lg:flex gap-10 xl:gap-0 xl:justify-between">
      <div className="hidden lg:block max-w-[550px]">
        <h3 className="text-lg mb-7 lg:text-2xl hidden lg:block">
          BLOG & ARTICLE
        </h3>
        <h2 className="text-2xl font-bold lg:text-4xl xl:text-5xl mb-10 hidden lg:block">
          Always Check Our Latest Blog
        </h2>
        <img src={blog1} alt="" className=" hidden lg:block w-full" />
        <p className="hidden lg:block mt-9 text-2xl font-semibold">
          This is the Appearance of the Interior of the Newest...
        </p>
      </div>
      <div className="max-w-lg mx-auto lg:max-w-lg lg:mx-0 lg:self-center">
        <h3 className="text-lg mb-7 lg:text-2xl lg:hidden">BLOG & ARTICLE</h3>
        <h2 className="text-2xl font-bold lg:text-4xl xl:text-5xl mb-10 lg:hidden">
          Always Check Our Latest Blog
        </h2>
        <div>
          {blogs.map((blog, i) => {
            return (
              <article
                key={i}
                className="flex flex-col mb-10 max-w-lg mx-auto lg:mx-0 lg:mb-0 lg:flex-row lg:items-end lg:mt-8 mt-10 gap-3 "
              >
                <img
                  src={blog.blogImg}
                  alt=""
                  className="w-full lg:w-[200px]"
                />
                <div>
                  <h6 className="text-lg md:text-2xl font-semibold mb-6 l lg:mb-12">
                    {blog.title}
                  </h6>
                  <p className="text-[#ACACAC]">{blog.names}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Blog;
