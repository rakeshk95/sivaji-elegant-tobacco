import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import tobaccoWarehouseImage from "@/assets/tobacco-warehouse.jpg";
import tobaccoProcessingImage from "@/assets/tobacco-processing.jpg";

const TobaccoVarieties = () => {
	const [activeTab, setActiveTab] = useState(0);

	const varieties = [
		{
			name: "Flue Cured Virginia Tobacco (Traditional)",
			planting: "Mid October to First week of November",
			marketing: "February to April",
			color: "Lemon",
			leafSize: "Medium to Large",
			poreVolume: "0.13",
			fillingValue: "2.6 to 2.8",
			nicotine: "1.0 to 2.5",
			reducingSugars: "8.6 to 20.9",
			image: tobaccoWarehouseImage,
		},
		{
			name: "Flue Cured Virginia Tobacco (Mysore)",
			planting: "Early May",
			marketing: "September to December",
			color: "Lemon to Orange",
			leafSize: "Large",
			poreVolume: "0.13",
			fillingValue: "2.9 to 3.8",
			nicotine: "1.5 to 2.5",
			reducingSugars: "18.0 to 27.0",
			image: tobaccoProcessingImage,
		},
		{
			name: "Flue Cured Virginia (NLS)",
			planting: "Early October",
			marketing: "February to April",
			color: "Lemon - Orange to Orange / mahogany",
			leafSize: "Large",
			poreVolume: "0.13",
			fillingValue: "2.2 to 2.8",
			nicotine: "1.5 to 3.0-4.0",
			reducingSugars: "13.8 to 23.5",
			image: tobaccoWarehouseImage,
		},
		{
			name: "Flue Cured Virginia (SLS)",
			planting: "Mid-October to mid-November",
			marketing: "February to May",
			color: "Lemon to Orange",
			leafSize: "Small to Medium",
			poreVolume: "0.13",
			fillingValue: "2.6 to 3.5",
			nicotine: "1.0 to 2.0",
			reducingSugars: "10 to 17.5",
			image: tobaccoProcessingImage,
		},
		{
			name: "Indian Burley Tobacco",
			planting: "July Last week to August Ist week",
			marketing: "November to January",
			color: "Rich-tan to Brown",
			leafSize: "Medium to Large",
			poreVolume: "0.18 to 0.28",
			fillingValue: "5.0 to 6.2",
			nicotine: "1.25 to 3.5",
			reducingSugars: "1.6 to 3.6",
			image: tobaccoWarehouseImage,
		},
		{
			name: "Dark Fired Tobacco",
			planting: "Monsoon Crop: Mid August -1st week of September",
			marketing: "Monsoon Crop: February to March",
			color: "Nut-Brown",
			leafSize: "Medium to heavy",
			poreVolume: "0.07 to 0.20",
			fillingValue: "3.8 to 5.8",
			nicotine: "1.0 to 3.25",
			reducingSugars: "3.0 to 9.0",
			image: tobaccoProcessingImage,
		},
		{
			name: "Sun-Cured Burley Tobacco (Traditional)",
			planting: "October 1st week to November 1st week",
			marketing: "May-June, Winter Crop April to June",
			color: "Rich-tan to Brown",
			leafSize: "Medium to Heavy",
			poreVolume: "---",
			fillingValue: "---",
			nicotine: "2.5 to 4.5",
			reducingSugars: "1.89 to 4.8",
			image: tobaccoWarehouseImage,
		},
	];

	const additionalVarieties = [
		"chewing tobacco",
		"cigar-wrapper",
		"Oriental",
		"Traditional Burley (HDBRG)",
		"Dark fire cured",
		"FCV Rustica",
		"Bidi",
		"Hookah tobacco",
		"Cheroot",
	];

	return (
		<section id="varieties" className="py-24 bg-background">
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-16">
					<div className="tobacco-badge mb-4 mx-auto animate-fade-in">
						<Leaf className="w-4 h-4" />
						<span>Premium Tobacco Varieties</span>
					</div>
					<h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
						Tobacco
						<span className="text-primary"> Varieties</span>
					</h2>
				</div>

				{/* Varieties: Left list + Right details */}
				<div className="max-w-6xl mx-auto animate-fade-in grid lg:grid-cols-12 gap-8">
					{/* Left list */}
					<div className="lg:col-span-4">
						<div className="space-y-2">
							{varieties.map((variety, index) => (
								<button
									key={index}
									onClick={() => setActiveTab(index)}
									className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${
										activeTab === index
											? "bg-primary text-primary-foreground border-primary"
											: "bg-white hover:bg-muted border-border"
									}`}
								>
									<div className="font-semibold text-sm">{variety.name}</div>
									<div className="text-xs opacity-80">{variety.color}</div>
								</button>
							))}
						</div>
					</div>

					{/* Right detail panel */}
					<div className="lg:col-span-8">
						{/* Container matching screenshot: yellow title bar + table rows with image */}
						<div className="bg-white rounded-lg border overflow-hidden">
							{/* Title bar */}
							<div className="bg-yellow-400 text-gray-900 px-6 py-4 text-2xl font-bold">
								{varieties[activeTab].name}
							</div>

							{/* Content grid: left specs, right image */}
							<div className="grid lg:grid-cols-[1fr_260px]">
								{/* Specs side */}
								<div className="divide-y">
									{/* Planting */}
									<div className="px-6 py-3 font-semibold text-gray-900">PLANTING</div>
									<div className="px-6 py-3 text-gray-700">{varieties[activeTab].planting}</div>
									{/* Marketing */}
									<div className="px-6 py-3 font-semibold text-gray-900">MARKETING</div>
									<div className="px-6 py-3 text-gray-700">{varieties[activeTab].marketing}</div>
									{/* Physical Characteristics */}
									<div className="px-6 py-3 font-semibold text-gray-900">PHYSICAL CHARACTERISTICS</div>
									<div className="px-6 py-3">
										<div className="grid sm:grid-cols-2 gap-4 text-sm">
											<div className="flex items-center justify-between border rounded-md p-2"><span className="text-gray-600">Color</span><span className="font-medium text-gray-900">{varieties[activeTab].color}</span></div>
											<div className="flex items-center justify-between border rounded-md p-2"><span className="text-gray-600">Leaf Size</span><span className="font-medium text-gray-900">{varieties[activeTab].leafSize}</span></div>
											<div className="flex items-center justify-between border rounded-md p-2"><span className="text-gray-600">Pore Volume (MI/Gm)</span><span className="font-medium text-gray-900">{varieties[activeTab].poreVolume}</span></div>
											<div className="flex items-center justify-between border rounded-md p-2"><span className="text-gray-600">Filling Value (CC/GM)</span><span className="font-medium text-gray-900">{varieties[activeTab].fillingValue}</span></div>
										</div>
									</div>
									{/* Chemical Characteristics */}
									<div className="px-6 py-3 font-semibold text-gray-900">CHEMICAL CHARACTERISTICS</div>
									<div className="px-6 py-3">
										<div className="grid sm:grid-cols-2 gap-4 text-sm">
											<div className="flex items-center justify-between border rounded-md p-2"><span className="text-gray-600">Nicotine (%)</span><span className="font-medium text-gray-900">{varieties[activeTab].nicotine}</span></div>
											<div className="flex items-center justify-between border rounded-md p-2"><span className="text-gray-600">Reducing Sugars (%)</span><span className="font-medium text-gray-900">{varieties[activeTab].reducingSugars}</span></div>
										</div>
									</div>
								</div>

								{/* Image side */}
								<div className="p-6 border-l flex items-start justify-center bg-white">
									<div className="w-[220px] h-[300px] bg-gray-50 rounded-lg overflow-hidden shadow">
										<img src={varieties[activeTab].image} alt={varieties[activeTab].name} className="w-full h-full object-contain" />
									</div>
								</div>
							</div>

							{/* Actions */}
							<div className="flex flex-col sm:flex-row gap-3 p-6 border-t bg-white">
								<Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold flex-1">Get Quote</Button>
								<Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 flex-1">Learn More</Button>
							</div>
						</div>
					</div>
				</div>

				{/* Additional Varieties (paragraph, like source) */}
				<div className="mt-16 max-w-4xl mx-auto text-center animate-fade-in text-muted-foreground">
					There are further sorts of {additionalVarieties.join(", ") }.
				</div>

				{/* CTA Section */}
				<div className="text-center mt-16 animate-fade-in">
					<div className="bg-primary/5 rounded-2xl p-8 md:p-12">
						<h3 className="text-2xl font-bold text-foreground mb-4">Need Custom Tobacco Solutions?</h3>
						<p className="text-muted-foreground mb-6 max-w-xl mx-auto">
							We offer custom processing and blending services to meet your specific requirements.
							Our cutting-edge facilities and skilled staff provide services on par with customer demands.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button variant="hero" size="lg">Request Custom Quote</Button>
							<Button variant="tobacco" size="lg">Speak with Expert</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TobaccoVarieties;