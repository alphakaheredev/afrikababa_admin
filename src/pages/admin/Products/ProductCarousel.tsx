import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import product from "@/assets/images/products/product1.png";

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 1,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const ProductCarousel = () => {
	return (
		<Carousel
			responsive={responsive}
			arrows={false}
			autoPlay
			autoPlaySpeed={2500}
			infinite
			dotListClass="custom-dot-list"
			showDots
		>
			{[...Array(3)].map((_item, index) => (
				<div key={index}>
					<img
						src={product}
						alt="author"
						className="object-contain w-full h-full max-h-[200px]"
					/>
				</div>
			))}
		</Carousel>
	);
};

export default ProductCarousel;
