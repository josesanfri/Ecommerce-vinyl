import BannerDiscount from "@/components/banner-discount";
import BannerVinyl from "@/components/banner-vinyl";
import CarouselBanner from "@/components/carousel-banner";
import ChooseCategory from "@/components/choose-category";
import FeaturedProducts from "@/components/featured-products";



export default function Home() {
	return (
		<main>
			<CarouselBanner />
			<FeaturedProducts />
			<BannerDiscount />
			<ChooseCategory />
			<BannerVinyl />
		</main>
	);
}
