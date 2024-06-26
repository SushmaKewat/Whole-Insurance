import React from 'react';
import {
	Navbar,
	Collapse,
	Typography,
	IconButton,
	List,
	ListItem,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
} from '@material-tailwind/react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import Logo from '../assets/Images/14 cropped.png';

import navListMenuItems from '../assets/Data/navListMenuItems.js';

function NavListMenu() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
	const renderItems = navListMenuItems.map(({ icon, title, description, path }, key) => (
		<a href={path} key={key}>
			<MenuItem className='flex items-center gap-3 rounded-lg'>
				<div className='flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 '>
					{' '}
					{React.createElement(icon, {
						strokeWidth: 2,
						className: 'h-6 text-gray-900 w-6',
					})}
				</div>
				<div>
					<Typography
						variant='h6'
						color='blue-gray'
						className='flex items-center text-sm font-bold'>
						{title}
					</Typography>
					<Typography
						variant='paragraph'
						className='text-xs !font-medium text-blue-gray-500'>
						{description}
					</Typography>
				</div>
			</MenuItem>
		</a>
	));
	return (
		<React.Fragment>
			<Menu
				open={isMenuOpen}
				handler={setIsMenuOpen}
				offset={{ mainAxis: 20 }}
				placement='bottom'>
				<MenuHandler>
					<Typography as='div' variant='small' className='font-medium'>
						<ListItem
							className='flex items-center gap-2 py-2 pr-4 text-lg font-medium text-gray-900'
							selected={isMenuOpen || isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen((cur) => !cur)}>
							Services
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`hidden h-3 w-3 transition-transform lg:block ${
									isMenuOpen ? 'rotate-180' : ''
								}`}
							/>
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`block h-3 w-3 transition-transform lg:hidden ${
									isMobileMenuOpen ? 'rotate-180' : ''
								}`}
							/>
						</ListItem>
					</Typography>
				</MenuHandler>
				<MenuList className='hidden max-w-screen-xl rounded-xl lg:block'>
					<ul className='grid grid-cols-3 gap-y-2 outline-none outline-0'>
						{renderItems}
					</ul>
				</MenuList>
			</Menu>
			<div className='block lg:hidden'>
				<Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
			</div>
		</React.Fragment>
	);
}

function NavList() {
	return (
		<List className='w-full mt-4 mb-6 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1'>
			<Typography
				as='a'
				href='/'
				variant='small'
				color='blue-gray'
				className='font-medium text-lg'>
				<ListItem className='flex items-center gap-2 py-2 pr-4'>Home</ListItem>
			</Typography>
			<Typography
				as='a'
				href='/about'
				variant='small'
				color='blue-gray'
				className='font-medium text-lg'>
				<ListItem className='flex items-center gap-2 py-2 pr-4'>About Us</ListItem>
			</Typography>

			<Typography
				as='a'
				href='/contact'
				variant='small'
				color='blue-gray'
				className='font-medium text-lg'>
				<ListItem className='flex items-center gap-2 py-2 pr-4'>Contact Us</ListItem>
			</Typography>

			<NavListMenu />
		</List>
	);
}

const Hero = () => {
	const [openNav, setOpenNav] = React.useState(false);

	React.useEffect(() => {
		window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
	}, []);

	return (
		<Navbar className='min-w-full mx-0 px-4 py-2 rounded-none'>
			<div className='flex items-center justify-between text-blue-gray-900'>
				<img src={Logo} alt='Whole Insurance Logo' width={200} height={100} />

				{/* <Typography
					as='a'
					href='#'
					variant='h6'
					className='mr-4 cursor-pointer py-1.5 lg:ml-2'>
					
				</Typography> */}
				<div className='hidden lg:block'>
					<NavList />
				</div>
				<IconButton
					variant='text'
					color='blue-gray'
					className='lg:hidden'
					onClick={() => setOpenNav(!openNav)}>
					{openNav ? (
						<XMarkIcon className='h-6 w-6' strokeWidth={2} />
					) : (
						<Bars3Icon className='h-6 w-6' strokeWidth={2} />
					)}
				</IconButton>
			</div>
			<Collapse open={openNav}>
				<NavList />
			</Collapse>
		</Navbar>
	);
};

export default Hero;
