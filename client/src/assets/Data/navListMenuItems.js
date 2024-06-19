import {
	Bars4Icon,
	GlobeAmericasIcon,
	NewspaperIcon,
	PhoneIcon,
	RectangleGroupIcon,
	SquaresPlusIcon,
	SunIcon,
	TagIcon,
	UserGroupIcon,
} from '@heroicons/react/24/solid';

const navListMenuItems = [
	{
		title: 'All Services',
		path: '/services',
		description: 'Find the perfect insurance for your needs.',
		icon: TagIcon,
	},

	{
		title: 'About Insurance',
		path: '/about',
		description: 'Meet and learn about our dedication',
		icon: UserGroupIcon,
	},
	{
		title: 'Whole Life Insurance',
		path: '/services/whole-life-insurance',
		description: 'A comprehensive solution for providing lifelong protection',
		icon: SquaresPlusIcon,
	},
	{
		title: 'Super Visa Insurance',
		path: '/services/super-visa',
		description: 'Apply for Super Visa Insurance with us.',
		icon: Bars4Icon,
	},
	{
		title: 'Term Life Insurance',
		path: '/services/term-life-insurance',
		description: "Plan the future for your family's financial security",
		icon: SunIcon,
	},
	{
		title: 'RESP',
		path: '/services/resp',
		description: 'Registered Education Savings Plans',
		icon: GlobeAmericasIcon,
	},
	{
		title: 'RRSP',
		path: '/services/rrsp',
		description: 'Registered Retirement Savings Plan',
		icon: PhoneIcon,
	},
	{
		title: 'Critical Illness Insurance',
		path: '/services/critical-illness-insurance',
		description: 'We offer a lump-sum payment upon diagnosis of a covered illness. ',
		icon: NewspaperIcon,
	},
	{
		title: 'Mortgage Insurance',
		path: '/services/mortgage-insurance',
		description: 'Protecting the investment with mortgage insurance ',
		icon: RectangleGroupIcon,
	},
	{
		title: 'Disability Insurance',
		path: '/services/disability-insurance',
		description:
			"Provides essential coverage if you're unable to work due to illness or injury.",
		icon: RectangleGroupIcon,
	},
];

export default navListMenuItems;
