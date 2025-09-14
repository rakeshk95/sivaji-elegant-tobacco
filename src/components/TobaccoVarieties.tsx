import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/tobacco-field-2.jpg";

const TobaccoVarieties = () => {
	const varieties = [
		{
			name: "Flue Cured Virginia Tobacco (Traditional)",
      imagePath: "/src/assets/tobacco-leaves/one.png",
			planting: "Mid October to First week of November",
			marketing: "February to April",
      physical: {
			color: "Lemon",
			leafSize: "Medium to Large",
        poreVolume: "0.13 MI/Gm",
        fillingValue: "2.6 to 2.8 CC/GM"
      },
      chemical: {
        nicotine: "1.0 to 2.5%",
        reducingSugars: "8.6 to 20.9%"
      }
		},
		{
			name: "Flue Cured Virginia Tobacco (Mysore)",
      imagePath: "/src/assets/tobacco-leaves/two.png",
			planting: "Early May",
			marketing: "September to December",
      physical: {
			color: "Lemon to Orange",
			leafSize: "Large",
        poreVolume: "0.13 MI/Gm",
        fillingValue: "2.9 to 3.8 CC/GM"
      },
      chemical: {
        nicotine: "1.5 to 2.5%",
        reducingSugars: "18.0 to 27.0%"
      }
		},
		{
			name: "Flue Cured Virginia (NLS)",
      imagePath: "/src/assets/tobacco-leaves/three.png",
			planting: "Early October",
			marketing: "February to April",
      physical: {
        color: "Lemon-Orange to Orange/Mahogany",
			leafSize: "Large",
        poreVolume: "0.13 MI/Gm",
        fillingValue: "2.2 to 2.8 CC/GM"
      },
      chemical: {
        nicotine: "1.5 to 3.0-4.0%",
        reducingSugars: "13.8 to 23.5%"
      }
		},
		{
			name: "Flue Cured Virginia (SLS)",
      imagePath: "/src/assets/tobacco-leaves/four.png",
      planting: "Mid-October to Mid-November",
			marketing: "February to May",
      physical: {
			color: "Lemon to Orange",
			leafSize: "Small to Medium",
        poreVolume: "0.13 MI/Gm",
        fillingValue: "2.6 to 3.5 CC/GM"
      },
      chemical: {
        nicotine: "1.0 to 2.0%",
        reducingSugars: "10 to 17.5%"
      }
		},
		{
			name: "Indian Burley Tobacco",
      imagePath: "/src/assets/tobacco-leaves/five.png",
      planting: "Late July to Early August",
			marketing: "November to January",
      physical: {
			color: "Rich-tan to Brown",
			leafSize: "Medium to Large",
        poreVolume: "0.18 to 0.28 MI/Gm",
        fillingValue: "5.0 to 6.2 CC/GM"
      },
      chemical: {
        nicotine: "1.25 to 3.5%",
        reducingSugars: "1.6 to 3.6%"
      }
		},
		{
			name: "Dark Fired Tobacco",
      imagePath: "/src/assets/tobacco-leaves/six.png",
      planting: "Mid August to Early September",
      marketing: "February to March",
      physical: {
			color: "Nut-Brown",
        leafSize: "Medium to Heavy",
        poreVolume: "0.07 to 0.20 MI/Gm",
        fillingValue: "3.8 to 5.8 CC/GM"
      },
      chemical: {
        nicotine: "1.0 to 3.25%",
        reducingSugars: "3.0 to 9.0%"
      }
		},
		{
			name: "Sun-Cured Burley Tobacco (Traditional)",
      imagePath: "/src/assets/tobacco-leaves/seven.png",
      planting: "Early October to Early November",
      marketing: "April to June",
      physical: {
			color: "Rich-tan to Brown",
			leafSize: "Medium to Heavy",
        poreVolume: "N/A",
        fillingValue: "N/A"
      },
      chemical: {
        nicotine: "2.5 to 4.5%",
        reducingSugars: "1.89 to 4.8%"
      }
    }
	];

	return (
    <section id="tobacco-varieties" className="bg-gradient-to-br from-gray-900 to-black w-full max-w-full overflow-hidden">
      {/* Hero Image Section */}
      <div className="relative">
        <div 
          className="h-[72vh] bg-cover bg-center bg-no-repeat w-full"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Blinking Company Name at Top */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-black/50 px-3 py-2 rounded-lg mx-auto inline-block max-w-[80vw]">
              <h1 className="text-lg md:text-xl font-bold text-white animate-enhanced-pulse drop-shadow-lg">
                SIVAJI <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">ENTERPRISES</span>
              </h1>
            </div>
          </div>
          
          <div className="relative z-10 h-full flex items-end justify-center pb-20">
            <div className="text-center text-white group cursor-pointer">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in drop-shadow-lg transition-all duration-500 group-hover:text-yellow-400 group-hover:scale-105 group-hover:drop-shadow-2xl">
                OUR PRODUCTS
              </h1>
              <p className="text-xl text-white/90 mb-4 transition-all duration-500 group-hover:text-yellow-300 group-hover:scale-105">
                TOBACCO VARIETIES
              </p>
              <p className="text-lg text-yellow-400 font-semibold animate-fade-in drop-shadow-md transition-all duration-500 group-hover:text-yellow-300 group-hover:scale-105 group-hover:drop-shadow-xl">
                PREMIUM QUALITY TOBACCO PRODUCTS
              </p>
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg -m-4"></div>
            </div>
          </div>
						</div>
					</div>

      <div className="container mx-auto px-2 py-24 w-full max-w-full overflow-hidden">

        {/* Modern Horizontal Scrolling */}
        <div className="relative max-w-full overflow-hidden">
          {/* Scroll Container */}
          <div className="overflow-x-auto scrollbar-hide max-w-full">
            <div className="flex gap-4 pb-6" style={{ width: 'max-content' }}>
              {varieties.map((variety, index) => (
                <div key={index} className="flex-shrink-0 w-[85vw] max-w-[500px]">
                  <div className="bg-white rounded-xl shadow-xl border-2 border-yellow-500 overflow-hidden">
                    {/* Header */}
                    <div className="bg-yellow-500 p-4">
                      <h3 className="text-lg font-bold text-white text-center">
                        {variety.name}
                      </h3>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="grid lg:grid-cols-3 gap-6">
                        {/* Left Column - Data */}
                        <div className="lg:col-span-2">
                          <div className="space-y-4">
                            {/* Planting & Marketing */}
                            <div className="border border-yellow-500 rounded-lg overflow-hidden h-24">
                              <table className="w-full h-full">
                                <tbody>
                                  <tr className="border-b border-yellow-500 h-1/2">
                                    <td className="bg-yellow-50 px-4 py-2 font-bold text-gray-900 border-r border-yellow-500 w-1/3 text-sm">
                                      PLANTING
                                    </td>
                                    <td className="px-4 py-2 text-gray-700 text-sm">
                                      {variety.planting}
                                    </td>
                                  </tr>
                                  <tr className="h-1/2">
                                    <td className="bg-yellow-50 px-4 py-2 font-bold text-gray-900 border-r border-yellow-500 text-sm">
                                      MARKETING
                                    </td>
                                    <td className="px-4 py-2 text-gray-700 text-sm">
                                      {variety.marketing}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
							</div>

									{/* Physical Characteristics */}
                            <div className="border border-yellow-500 rounded-lg overflow-hidden h-32">
                              <div className="bg-yellow-50 px-4 py-2 border-b border-yellow-500 h-8">
                                <h4 className="font-bold text-gray-900 text-center text-sm">PHYSICAL CHARACTERISTICS</h4>
										</div>
                              <table className="w-full h-24">
                                <tbody>
                                  <tr className="border-b border-yellow-500 h-1/4">
                                    <td className="bg-yellow-50 px-4 py-1 font-bold text-gray-900 border-r border-yellow-500 text-xs">
                                      Color
                                    </td>
                                    <td className="px-4 py-1 text-gray-700 text-xs">
                                      {variety.physical.color}
                                    </td>
                                  </tr>
                                  <tr className="border-b border-yellow-500 h-1/4">
                                    <td className="bg-yellow-50 px-4 py-1 font-bold text-gray-900 border-r border-yellow-500 text-xs">
                                      Leaf Size
                                    </td>
                                    <td className="px-4 py-1 text-gray-700 text-xs">
                                      {variety.physical.leafSize}
                                    </td>
                                  </tr>
                                  {variety.physical.poreVolume !== "N/A" && (
                                    <tr className="border-b border-yellow-500 h-1/4">
                                      <td className="bg-yellow-50 px-2 py-1 font-bold text-gray-900 border-r border-yellow-500 text-xs">
                                        Pore Vol.(MI/Gm)
                                      </td>
                                      <td className="px-2 py-1 text-gray-700 text-xs">
                                        {variety.physical.poreVolume}
                                      </td>
                                    </tr>
                                  )}
                                  {variety.physical.fillingValue !== "N/A" && (
                                    <tr className="h-1/4">
                                      <td className="bg-yellow-50 px-2 py-1 font-bold text-gray-900 border-r border-yellow-500 text-xs">
                                        Fill Value(CC/GM)
                                      </td>
                                      <td className="px-2 py-1 text-gray-700 text-xs">
                                        {variety.physical.fillingValue}
                                      </td>
                                    </tr>
                                  )}
                                </tbody>
                              </table>
									</div>

									{/* Chemical Characteristics */}
                            <div className="border border-yellow-500 rounded-lg overflow-hidden h-24">
                              <div className="bg-yellow-50 px-4 py-2 border-b border-yellow-500 h-8">
                                <h4 className="font-bold text-gray-900 text-center text-sm">CHEMICAL CHARACTERISTICS</h4>
                              </div>
                              <table className="w-full h-16">
                                <tbody>
                                  <tr className="border-b border-yellow-500 h-1/2">
                                    <td className="bg-yellow-50 px-4 py-1 font-bold text-gray-900 border-r border-yellow-500 text-xs">
                                      Nicotine(%)
                                    </td>
                                    <td className="px-4 py-1 text-gray-700 text-xs">
                                      {variety.chemical.nicotine}
                                    </td>
                                  </tr>
                                  <tr className="h-1/2">
                                    <td className="bg-yellow-50 px-4 py-1 font-bold text-gray-900 border-r border-yellow-500 text-xs">
                                      Reducing Sugars(%)
                                    </td>
                                    <td className="px-4 py-1 text-gray-700 text-xs">
                                      {variety.chemical.reducingSugars}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
										</div>
									</div>
								</div>

                         {/* Right Column - Tobacco Image */}
                         <div className="flex justify-center items-center">
                           <div className="w-48 h-64 rounded-lg border-2 border-yellow-500 overflow-hidden">
                             <img
                               src={variety.imagePath}
                               alt={`${variety.name} tobacco leaves`}
                               className="w-full h-full object-cover"
                               onError={(e) => {
                                 // Fallback to placeholder if image fails to load
                                 e.currentTarget.style.display = 'none';
                                 e.currentTarget.nextElementSibling.style.display = 'flex';
                               }}
                             />
                             {/* Fallback placeholder - shown when image fails to load */}
                             <div className="w-full h-full bg-gradient-to-b from-yellow-100 to-yellow-200 flex items-center justify-center" style={{display: 'none'}}>
                               <div className="text-center text-gray-600">
                                 <div className="w-24 h-32 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-lg mx-auto mb-3 flex items-center justify-center">
                                   <span className="text-yellow-800 font-bold text-xs">TOBACCO<br/>LEAVES</span>
                                 </div>
                                 <p className="text-xs font-medium">Premium Quality</p>
                                 <p className="text-xs text-gray-500">Dried & Cured</p>
                               </div>
									</div>
								</div>
							</div>
							</div>
						</div>
					</div>
				</div>
              ))}
            </div>
				</div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {varieties.map((_, index) => (
              <div key={index} className="w-3 h-3 bg-yellow-500 rounded-full opacity-50"></div>
            ))}
						</div>
					</div>

			</div>
		</section>
	);
};

export default TobaccoVarieties;