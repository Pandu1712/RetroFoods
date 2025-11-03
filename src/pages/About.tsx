

export default function About() {
  return (
    <main className="bg-gradient-to-b from-orange-50 to-white text-slate-700">
      {/* --- Hero Section --- */}


      {/* --- Intro Story --- */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-orange-700 mb-4">
            Our Story
          </h2>
          <p className="text-lg leading-relaxed">
            Born from a small family kitchen in Andhra Pradesh,{" "}
            <span className="font-semibold text-orange-600">
              Retro Foods
            </span>{" "}
            started with a simple dream — to bring the authentic taste of
            traditional Indian snacks to every household. What began as handmade
            batches for friends and family has grown into a proud brand loved
            across India.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Every bite reflects our values — **purity, freshness, and
            craftsmanship**. We still roast, fry, and spice our snacks the same
            way our grandparents did — with care, patience, and heart.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://res.cloudinary.com/dd4oiwnep/image/upload/v1762180674/ChatGPT_Image_Nov_3_2025_08_07_34_PM_p7jnqd.png"
            alt="Traditional Snacks"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* --- Mission & Values --- */}
      <section className="bg-gradient-to-r from-orange-100 via-orange-50 to-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:-translate-y-1 hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
              alt="Quality"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-orange-700">Quality</h4>
            <p className="text-sm mt-2 text-slate-600">
              Only premium ingredients sourced locally, ensuring authentic
              flavors and freshness in every batch.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:-translate-y-1 hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
              alt="Tradition"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-orange-700">
              Tradition
            </h4>
            <p className="text-sm mt-2 text-slate-600">
              Every recipe is a story — preserved through generations, still
              prepared with traditional methods.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:-translate-y-1 hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1791/1791333.png"
              alt="Innovation"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-orange-700">
              Innovation
            </h4>
            <p className="text-sm mt-2 text-slate-600">
              We blend traditional tastes with modern packaging — ensuring
              hygiene, convenience, and long shelf life.
            </p>
          </div>
        </div>
      </section>

      {/* --- Image Gallery Section --- */}
      <section className="max-w-6xl mx-auto py-14 px-6">
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-8">
          From Our Kitchen to Yours
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "https://t4.ftcdn.net/jpg/04/22/75/59/360_F_422755956_LsYfkCmZ0RxDGzYBw3JUmhmOkogQfq8r.jpg",
            "https://t4.ftcdn.net/jpg/04/22/75/59/360_F_422755956_LsYfkCmZ0RxDGzYBw3JUmhmOkogQfq8r.jpg",
            "https://t4.ftcdn.net/jpg/04/22/75/59/360_F_422755956_LsYfkCmZ0RxDGzYBw3JUmhmOkogQfq8r.jpg",
            "https://t4.ftcdn.net/jpg/04/22/75/59/360_F_422755956_LsYfkCmZ0RxDGzYBw3JUmhmOkogQfq8r.jpg",
             "https://t4.ftcdn.net/jpg/04/22/75/59/360_F_422755956_LsYfkCmZ0RxDGzYBw3JUmhmOkogQfq8r.jpg",
            "https://t4.ftcdn.net/jpg/04/22/75/59/360_F_422755956_LsYfkCmZ0RxDGzYBw3JUmhmOkogQfq8r.jpg",
          ].map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform"
            >
              <img
  src={img}
  alt={`Snack ${i}`}
  className="w-full h-auto object-contain rounded-none"
/>

            </div>
          ))}
        </div>
      </section>

      
    </main>
  );
}
