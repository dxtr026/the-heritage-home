import localFont from 'next/font/local';
import Logo from './assets/logo';
import LogoText from './assets/logo-text';

const recoletoFont = localFont({ src: './custom-font.woff' });

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center ${recoletoFont.className}`}
		>
			<header className="bg-[#132f39] w-full p-[40px]">
				<div className="flex items-center">
					<Logo height={150} width={60} />
					<LogoText height={60} width={310} />
				</div>
			</header>
			<section className="bg-[#132f39] w-full h-[80vh] flex justify-center items-top pt-8">
				<div className="text-2xl w-1/2 text-white text-center leading-10">
					Bringing you artisanal delights from the land of the Royals. Embrace
					the rich heritage and culture of Rajasthan through the legacy of
					prints, patterns and designs passed from generation to generation of
					artisans.{' '}
					<div className="font-extrabold pt-[20px]">
						Crafted with quality, curated for you.
					</div>
					<div className="flex items-center justify-center">
						<a
							href="mailto:hello@theheritagehome.in"
							className="mr-[20px] text-xl w-fit px-4 py-2 mt-[100px] bg-[#d4cfbf] rounded-md text-[#132f39]"
						>
							hello@theheritagehome.in
						</a>
						<a
							href="tel:+919930177697"
							className="text-xl w-fit px-4 py-2 mt-[100px] bg-[#d4cfbf] rounded-md text-[#132f39]"
						>
							+919930177697
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}
