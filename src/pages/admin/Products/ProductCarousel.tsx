import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

interface Props {
	images: string[];
}

const ProductCarousel = ({ images }: Props) => {
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
			{images.map((image, index) => (
				<div key={index}>
					<img
						src={image}
						alt="author"
						className="object-contain w-full h-full max-h-[200px]"
					/>
				</div>
			))}
		</Carousel>
	);
};

export default ProductCarousel;
