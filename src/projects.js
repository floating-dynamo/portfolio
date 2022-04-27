import image0 from "./images/voterq/voterQMain.png";
import image1 from "./images/music_player/image2.jpeg";
import image2 from "./images/keeper/image3.jpeg";
import image3 from "./images/todo-react/image1.png";
import image4 from "./images/newsletter/SignUp_landingPage.jpeg";
import image5 from "./images/card_template/image1.png";
import image6 from "./images/carousel/image1.png";

const projects = [
	{
		title: "VoterQ",
		img: image0,
		desc: "Created an android app for the Government of Goa. Dealth mostly with the Front-end using React-Native. The app was developed in the view of the State Election. The following features were implemented which could tell :  A voter how many people were currently in the queue to vote in his/her ward and the percentage of people that have voted till now. Django was used for the Back-end and was deployed using AWS.",
		downloadLink:
			"https://drive.google.com/file/d/1faXKJaydOdmLvsh4sozM1lFD4_qNoAb7/view?usp=sharing",
		appDesign:
			"https://drive.google.com/drive/folders/1DYuRL5xdSfy4LJakoeD7iO9y98DVmETO?usp=sharing",
		imgType: "potrait",
	},
	{
		title: "Music Player",
		img: image1,
		desc: "Created a responsive Music Player web App using HTML, CSS and JS.   Added a responsive volume bar and a song duration bar so that the user can reduce the volume or change the duration of the song respectively.",
		website: "https://floating-dynamo.github.io/Music-Player/",
		code: "https://github.com/floating-dynamo/Music-Player",
		imgType: "landscape",
	},
	{
		title: "Keeper",
		img: image2,
		desc: "Created a simple google keep clone(Keeper). Used React JS to create the web app. Made use of props,hooks,states etc.",
		alt: "Keeper img",
		website: "https://o96oq.csb.app/",
		code: "https://codesandbox.io/s/o96oq",
		imgType: "landscape",
	},
	{
		title: "To-do List",
		img: image3,
		desc: "Created a Todo list web app using React. Used some React functionalities like hooks, states and destructuring of arrays or objects. Added delete functionality to it as well(on clicking on the todo, it deletes it).",
		alt: "todo img",
		website: "https://jy849.csb.app/",
		code: "https://codesandbox.io/s/jy849",
		imgType: "landscape",
	},
	{
		title: "Newsletter",
		img: image4,
		desc: "Created a Sign Up landing page using HTML,CSS and JS. Used the MailChimp API to store the data entered by the user while signing up. Used Heroku to host the web app.",
		alt: "newsletter img",
		website: "",
		code: "",
		imgType: "landscape",
	},
	{
		title: "Card Template",
		img: image5,
		desc: "Created a responsive card template with HTML and CSS, using the concept of Flex Box.",
		alt: "card img",
		website: "https://codepen.io/Flaating_dynamo/full/wvgXwdq",
		code: "https://codepen.io/Flaating_dynamo/pen/wvgXwdq",
		imgType: "landscape",
	},
	{
		title: "Carousel",
		img: image6,
		desc: "Created a Carousel Template using React JS and Javascript",
		alt: "carousel img",
		website: "https://5k6l7.csb.app/",
		code: "https://codesandbox.io/s/carousel-5k6l7",
		imgType: "potrait",
	},
];

export default projects;
