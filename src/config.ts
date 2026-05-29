import type { NavItems } from "./types";

export const NAV_ITEMS: NavItems = {
	home: {
		path: "/",
		title: "home",
	},
	blog: {
		path: "/blog",
		title: "writing",
	},
	about: {
		path: "/about",
		title: "about",
	},
	uses: {
		path: "/uses",
		title: "uses",
	},
};

export const SITE = {
	name: "Ruben De Raeve",
	title: "Ruben De Raeve — Software Engineer",
	description: "Writing about algorithms, C++, machine learning, and the craft of building software.",
	url: "https://rubenderaeve.dev",
	githubUrl: "https://github.com/rubenderaeve",
	listDrafts: false,
	image: "",
	ytChannelId: "",
	author: "Ruben De Raeve",
	authorTwitter: "",
	authorImage: "",
	authorBio:
		"Software engineer building CAD software in C++. Background in electromechanical engineering, applied AI, and geometric algorithms. Based in Belgium.",
};

export const PAGE_SIZE = 8;
export const USE_POST_IMG_OVERLAY = false;
export const USE_MEDIA_THUMBNAIL = false;

export const USE_AUTHOR_CARD = true;
export const USE_SUBSCRIPTION = false;

export const USE_VIEW_STATS = false;
