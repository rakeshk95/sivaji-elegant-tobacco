import heroImage from "@/assets/tobacco-field-2.jpg";
import farmpic1 from "@/assets/farmpic1.jpg";
import farmpic2 from "@/assets/farmpic2.jpg";
import farmpic3 from "@/assets/farmpic3.jpg";
import farmpic4 from "@/assets/farmpic4.jpg";

const FarmGrades = () => {
  return (
    <section id="farm-grades" className="bg-gray-50 text-gray-800 font-sans w-full max-w-full overflow-hidden">
      
      {/* Hero Image Section */}
      <div className="relative">
        <div 
          className="h-[68vh] bg-cover bg-center w-full"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Blinking Company Name at Top */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-black/50 px-3 py-2 rounded-lg mx-auto inline-block max-w-[80vw]">
              <h1 className="text-lg md:text-xl font-bold text-white animate-enhanced-pulse drop-shadow-lg">
                SIVAJI <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">ENTERPRISES</span>
              </h1>
            </div>
          </div>
          
          <div className="relative z-10 h-full flex items-end justify-center px-4 text-center pb-20">
            <div className="text-white max-w-2xl group cursor-pointer">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 tracking-wide drop-shadow-lg transition-all duration-700 group-hover:text-yellow-400 group-hover:scale-105 group-hover:drop-shadow-2xl animate-slide-up">
                FROM GREEN TO GOLD
              </h1>
              <p className="text-lg text-white/90 mb-4 transition-all duration-700 group-hover:text-yellow-300 group-hover:scale-105 animate-slide-up-delay">
                Tobacco Curing Process
              </p>
              <p className="text-base text-yellow-400 font-semibold drop-shadow-md transition-all duration-700 group-hover:text-yellow-300 group-hover:scale-105 animate-slide-up-delay-2">
                Premium Quality Tobacco Products
              </p>
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg -m-4"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 py-20 w-full max-w-full overflow-hidden">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10 md:p-12 lg:p-16 space-y-12">
          
          {/* Farm Grades – Black Soil Tobacco */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Farm Grades – Black Soil Tobacco</h2>
            <div className="border-b-2 border-yellow-500 w-20 mx-auto mb-10"></div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Bright / Light Grades</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg leading-relaxed">
                <li><span className="font-medium text-yellow-600">Farm 1:</span> Bright lemon/orange; Thin to medium body; Soft; 2.5% blemish → <span className="font-semibold">LBY1</span></li>
                <li><span className="font-medium text-yellow-600">Farm 2:</span> Light brownish yellow; Medium body; Good texture; 8.5% blemish → <span className="font-semibold">LBY2</span></li>
                <li><span className="font-medium text-yellow-600">Farm 3:</span> Light brown; Good to medium body; Medium texture; 50% blemish → <span className="font-semibold">Brown</span></li>
                <li><span className="font-medium text-yellow-600">Farm 4:</span> Brown; Heavy body; Medium to coarse; 50% blemish → <span className="font-semibold">Brown</span></li>
                <li><span className="font-medium text-yellow-600">Farm 5:</span> Dark brown; Heavy body; Medium to coarse; 50% blemish → <span className="font-semibold">Dark Brown</span></li>
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Green Grades</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg leading-relaxed">
                <li><span className="font-medium text-yellow-600">Farm 6:</span> Light greenish orange; Good body; Soft to medium texture; 10% blemish → <span className="font-semibold">LGO</span></li>
                <li><span className="font-medium text-yellow-600">Farm 7:</span> Light medium green; Heavy body; Medium to coarse; 25% blemish → <span className="font-semibold">LMG</span></li>
                <li><span className="font-medium text-yellow-600">Farm 8:</span> Medium green; Heavy body; Medium to coarse; 35% blemish → <span className="font-semibold">MG</span></li>
                <li><span className="font-medium text-yellow-600">Farm 9:</span> Dark green; Coarse body; Coarse texture → <span className="font-semibold">DG</span></li>
                <li><span className="font-medium text-yellow-600">Farm 10:</span> Mixed colors (orange, yellow, green, brown); Variable body → <span className="font-semibold">PI & Bits</span></li>
              </ul>
            </div>
          </div>

          {/* Light Soil Tobacco – Position Grades */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Light Soil Tobacco – Position Grades</h2>
            <div className="border-b-2 border-yellow-500 w-20 mx-auto mb-10"></div>

            <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Lugs (Bottom leaves)</h3>
                <ul className="list-disc list-inside ml-6 space-y-2">
                  <li><span className="text-yellow-600 font-medium">Thin, light, quick curing.</span></li>
                  <li><span className="text-yellow-600 font-medium">Grades:</span> LL (Low Lugs), HL (High Lugs)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Cutters (Middle leaves)</h3>
                <ul className="list-disc list-inside ml-6 space-y-2">
                  <li><span className="text-yellow-600 font-medium">Balanced body, good quality, bright color.</span></li>
                  <li><span className="text-yellow-600 font-medium">Grades:</span> LC (Low Cutters), HC (High Cutters)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Leaf (Upper/Middle-Top leaves)</h3>
                <ul className="list-disc list-inside ml-6 space-y-2">
                  <li><span className="text-yellow-600 font-medium">Thicker, more body, higher nicotine.</span></li>
                  <li><span className="text-yellow-600 font-medium">Grades:</span> LLF (Low Leaf), HLF (High Leaf)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Tips (Top leaves)</h3>
                <ul className="list-disc list-inside ml-6 space-y-2">
                  <li><span className="text-yellow-600 font-medium">Strong, heavy body, slow curing.</span></li>
                  <li><span className="text-yellow-600 font-medium">Grades:</span> T (Tips)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tobacco Curing */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Tobacco Curing</h2>
            <div className="border-b-2 border-yellow-500 w-20 mx-auto mb-10"></div>

            <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Curing Basics</h3>
                <ul className="list-disc list-inside ml-6 space-y-2">
                  <li><span className="text-yellow-600 font-medium">Removes moisture, develops desirable qualities.</span></li>
                  <li><span className="text-yellow-600 font-medium">Methods:</span> Flue-curing, Air-curing, Fire-curing, Sun-curing.</li>
                  <li><span className="text-yellow-600 font-medium">Quality depends on curing method + genetics.</span></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Flue-Cured Virginia Tobacco (Harvesting)</h3>
                <ul className="list-disc list-inside ml-6 space-y-2">
                  <li><span className="text-yellow-600 font-medium">Harvest ripe, greenish-yellow, soft leaves.</span></li>
                  <li><span className="text-yellow-600 font-medium">Pick from bottom to top, ~3 leaves at a time.</span></li>
                  <li><span className="text-yellow-600 font-medium">Done weekly (priming) on clear weather days.</span></li>
                  <li><span className="text-yellow-600 font-medium">Leaves snap crisply when ripe.</span></li>
                  <li><span className="text-yellow-600 font-medium">Carry in baskets → shift to tying shed quickly.</span></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Post-Curing</h3>
                <ul className="list-disc list-inside ml-6 space-y-2">
                  <li><span className="text-yellow-600 font-medium">Unloading barn: Cool barn, open ventilators, maintain humidity.</span></li>
                  <li><span className="text-yellow-600 font-medium">Sticks removed, leaves untied early morning.</span></li>
                  <li><span className="text-yellow-600 font-medium">Bulking: Keep varieties/stalk positions separate, ~1m high, raised platform.</span></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Grading & Tying</h3>
                <ul className="list-disc list-inside ml-6 space-y-2">
                  <li><span className="text-yellow-600 font-medium">Green-leaf grading: Sort immature/overripe leaves.</span></li>
                  <li><span className="text-yellow-600 font-medium">Overripe = yellowish-white; Under-ripe = dark green.</span></li>
                  <li><span className="text-yellow-600 font-medium">Tying: 90–100 leaves per stick, evenly spaced.</span></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Farm Gallery Section */}
      <div className="bg-gradient-to-br from-green-50 to-yellow-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Farm Operations</h2>
              <div className="border-b-2 border-yellow-500 w-24 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience our state-of-the-art tobacco processing facilities and see the quality that goes into every product
              </p>
            </div>

            {/* 2x2 Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Farm Picture 1 */}
              <div className="relative group">
                <div className="relative w-full h-80 overflow-hidden rounded-2xl shadow-xl border-4 border-yellow-500 bg-black p-2 transition-all duration-500 group-hover:border-yellow-300 group-hover:shadow-2xl group-hover:shadow-yellow-500/25">
                  <img
                    src={farmpic1}
                    alt="Tobacco Warehouse Storage"
                    className="w-full h-full object-cover rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-gradient-to-t from-black/90 to-black/70 text-white p-3 rounded-xl text-center backdrop-blur-sm transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-yellow-500/90 group-hover:to-yellow-600/70 group-hover:text-black">
                    <span className="text-lg font-bold">Premium Storage Facility</span>
                    <p className="text-sm mt-1">State-of-the-art tobacco bale storage</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                </div>
              </div>

              {/* Farm Picture 2 */}
              <div className="relative group">
                <div className="relative w-full h-80 overflow-hidden rounded-2xl shadow-xl border-4 border-yellow-500 bg-black p-2 transition-all duration-500 group-hover:border-yellow-300 group-hover:shadow-2xl group-hover:shadow-yellow-500/25">
                  <img
                    src={farmpic2}
                    alt="Tobacco Processing Plant"
                    className="w-full h-full object-cover rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-gradient-to-t from-black/90 to-black/70 text-white p-3 rounded-xl text-center backdrop-blur-sm transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-yellow-500/90 group-hover:to-yellow-600/70 group-hover:text-black">
                    <span className="text-lg font-bold">Processing Excellence</span>
                    <p className="text-sm mt-1">Advanced tobacco processing operations</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                </div>
              </div>

              {/* Farm Picture 3 */}
              <div className="relative group">
                <div className="relative w-full h-80 overflow-hidden rounded-2xl shadow-xl border-4 border-yellow-500 bg-black p-2 transition-all duration-500 group-hover:border-yellow-300 group-hover:shadow-2xl group-hover:shadow-yellow-500/25">
                  <img
                    src={farmpic3}
                    alt="Tobacco Quality Control"
                    className="w-full h-full object-cover rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-gradient-to-t from-black/90 to-black/70 text-white p-3 rounded-xl text-center backdrop-blur-sm transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-yellow-500/90 group-hover:to-yellow-600/70 group-hover:text-black">
                    <span className="text-lg font-bold">Quality Control Center</span>
                    <p className="text-sm mt-1">Meticulous sorting and grading process</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                </div>
              </div>

              {/* Farm Picture 4 */}
              <div className="relative group">
                <div className="relative w-full h-80 overflow-hidden rounded-2xl shadow-xl border-4 border-yellow-500 bg-black p-2 transition-all duration-500 group-hover:border-yellow-300 group-hover:shadow-2xl group-hover:shadow-yellow-500/25">
                  <img
                    src={farmpic4}
                    alt="Tobacco Curing Process"
                    className="w-full h-full object-cover rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-gradient-to-t from-black/90 to-black/70 text-white p-3 rounded-xl text-center backdrop-blur-sm transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-yellow-500/90 group-hover:to-yellow-600/70 group-hover:text-black">
                    <span className="text-lg font-bold">Traditional Curing</span>
                    <p className="text-sm mt-1">Time-honored tobacco curing methods</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="text-center mt-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Excellence in Every Step</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From our state-of-the-art processing facilities to our traditional curing methods, 
                  Sivaji Enterprises ensures the highest quality standards in every aspect of tobacco production. 
                  Our commitment to excellence is reflected in our modern infrastructure and skilled workforce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmGrades;
