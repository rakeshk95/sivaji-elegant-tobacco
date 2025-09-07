import firstPic from "@/assets/first_pic.jpeg";
import secondPic from "@/assets/second_pic.jpeg";
import thirdPic from "@/assets/third_pic.jpeg";
import fourthPic from "@/assets/fourth_pic.jpeg";

const TobaccoGallery = () => {
  const images = [
    {
      src: firstPic,
      alt: "Tobacco Field Cultivation",
      title: "Field Cultivation"
    },
    {
      src: secondPic,
      alt: "Tobacco Harvesting",
      title: "Harvesting Process"
    },
    {
      src: thirdPic,
      alt: "Tobacco Curing Process",
      title: "Curing Process"
    },
    {
      src: fourthPic,
      alt: "Premium Tobacco Leaves",
      title: "Premium Quality"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            INDIAN TOBACCO
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Cultivating the Finest Indian Tobacco
          </p>
        </div>

        {/* 2x2 Image Grid */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            {images.map((image, index) => (
              <div key={index} className="relative group flex justify-center">
                <div className="relative w-full max-w-lg h-72 overflow-hidden rounded-xl border-4 border-yellow-500 bg-black p-2 shadow-2xl transition-all duration-500 group-hover:border-yellow-300 group-hover:shadow-yellow-500/25 group-hover:shadow-2xl" style={{borderColor: '#eab308'}}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-lg transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-gradient-to-t from-black/90 to-black/70 text-white p-2 rounded-lg text-center backdrop-blur-sm transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-yellow-500/90 group-hover:to-yellow-600/70 group-hover:text-black">
                    <span className="text-sm font-semibold">{image.title}</span>
                  </div>
                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TobaccoGallery;
