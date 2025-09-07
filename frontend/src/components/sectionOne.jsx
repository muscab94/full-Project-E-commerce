import Header from "./Header";
import PostData from "./postDatabase";

function SectionOne()  {
     return (
        <div>

        
    <>
     <Header/>
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-gradient-to-r from-blue-50 to-white">
      {/* Left Content */}
      <div className="max-w-xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Discover Your Next <span className="text-blue-600">Favorite Book</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Welcome to <span className="font-semibold text-blue-700">BookHeaven</span> – 
          your ultimate destination for bestsellers, categories, and timeless classics. 
          Shop now and enjoy reading like never before.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition shadow-md">
            Shop Now
          </button>
          <button className="px-6 py-3 rounded-xl bg-gray-200 text-gray-700 hover:bg-gray-300 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0">
        <img
          src="https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg"
          alt="Book"
          className="w-[400px] md:w-[500px] rounded-2xl shadow-lg"
        />
      </div>
      
    </section>
   <PostData/>
   
    </>
    </div>
  );
  
}

export default SectionOne;
