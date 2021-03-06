import { useState } from 'react';
import { SiEthereum } from 'react-icons/si';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const NavbarItem = ({ title, classProps }) => {
	return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const ToggleMenu = ({ navbarItems }) => {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<div className="flex relative">
			{toggleMenu ? (
				<AiOutlineClose
					fontSize={28}
					className="text-white md:hidden cursor-pointer"
					onClick={() => setToggleMenu(false)}
				/>
			) : (
				<HiMenuAlt4
					fontSize={28}
					className="text-white md:hidden cursor-pointer"
					onClick={() => setToggleMenu(true)}
				/>
			)}
			{toggleMenu && (
				<ul
					className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl list-none
		flex flex-col justify-start items-end rounded-md green-glassmorphism text-white animate-slide-in"
				>
					<li className="text-xl w-full my-2">
						<AiOutlineClose onClick={() => setToggleMenu(false)} />
					</li>
					{navbarItems.map((item, index) => (
						<NavbarItem key={item + index} title={item} classProps="my-2 text-lg" />
					))}
				</ul>
			)}
		</div>
	);
};

export const Navbar = () => {
	const navbarItems = ['Market', 'Exchange', 'Tutorials', 'Wallets'];
	return (
		<nav className="w-full flex md:justify-center justify-between items-center p-4">
			<div className="md:flex-[0.5] flex-initial justify-center items-center text-white">
				<div className="flex text-xl font-extrabold">
					<SiEthereum fontSize={28} className="text-white cursor-pointer" /> AgaCrypt
				</div>
			</div>
			<ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
				{navbarItems.map((item, index) => (
					<NavbarItem key={item + index} title={item} />
				))}
				<li className="bg-blue-400 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-blue-500">login</li>
			</ul>
			<ToggleMenu navbarItems={navbarItems} />
		</nav>
	);
};
