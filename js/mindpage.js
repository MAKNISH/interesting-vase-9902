let mindData = [
	{
		img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,ar_2.279,c_fit/dpr_2/image/vm/9355d11a-f088-4f10-b9df-72ea3ecf8e0b.png",
		heading: "Therapy",
		detail: "Experts who help solve emotional problems ₹699",
		time: "50 Mins Session",
		amount: "₹ 1300",
		discount:"₹ 699"
	},
	{
		img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,ar_2.279,c_fit/dpr_2/image/vm/9ce1d9a2-d3c6-4a19-91bd-028d52f58c84.png",
		heading: "Couple Therapy",
		detail: "Resolve emotional conflicts in relationships and marriage ₹11700",
		time: "50 Mins Session",
		amount: "₹ 15600",
		discount:"₹ 11700"
	},
	{
		img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,ar_2.279,c_fit/dpr_2/image/vm/5e9f8ee5-83dd-4dca-beca-61885323ce3c.png",
		heading: "COVID Stress",
		detail: "Seek expert help from our therapists for coping with isolation and COVID-related stress and worry ₹699",
		time: "50 Mins Session",
		amount: "₹ 1300",
		discount:"₹ 699"
	},
	{
		img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,ar_2.279,c_fit/dpr_2/image/vm/84248218-f8c0-44d8-b2d6-be415b742b9a.png",
		heading: "Better Sleep",
		detail: "Consult with experts to learn effective strategies for restful sleep and good sleep health ₹699",
		time: "50 Mins Session",
		amount: "₹ 1300",
		discount:"₹ 699"
	},
	{
		img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,ar_2.279,c_fit/dpr_2/image/vm/dcd1728e-d7dc-4952-b552-b1b1c97e9ac1.png",
		heading: "Rise to Confidence",
		detail: "Grow into a more confident and self-assured you by talking to our experts ₹699",
		time: "50 Mins Session",
		amount: "₹ 1300",
		discount:"₹ 699"
	},
	{
		img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,ar_2.279,c_fit/dpr_2/image/vm/18a8d3b2-d262-4f78-908b-79a55a40ef68.png",
		heading: "Thrive at work",
		detail: "Make work fulfilling and meaningful with the help of our experts ₹699",
		time: "50 Mins Session",
		amount: "₹ 1300",
		discount:"₹ 699"
	},
	{
		img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,ar_2.279,c_fit/dpr_2/image/vm/1a2d8f7e-2c24-4cbf-88be-e2cf266dfa23.png",
		heading: "Healthy Relationships",
		detail: "Understand your relationship patterns and exploring healthy ways of connecting ₹699",
		time: "50 Mins Session",
		amount: "₹ 1300",
		discount:"₹ 699"
	},
	{
		img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,ar_2.279,c_fit/dpr_2/image/vm/aebc57c2-ee58-41f7-a854-00fb5c5d55f9.png",
		heading: "Transform Your Thinking",
		detail: "Manage negative or anxious thoughts or overthinking ₹699",
		time: "50 Mins Session",
		amount: "₹ 1300",
		discount:"₹ 699"
	}
];

mindData.forEach (function(elem){
	
	let box = document.createElement("div");
	box.style.display = "flex";

	let image = document.createElement("img");
	image.setAttribute("src", elem.img);

	let head = document.createElement("h2");
	head.innerText = elem.heading;

	let detail = document.createElement("p");
	detail.innerText = elem.detail;

	let time = document.createElement("h5");
	time.innerText = elem.time;

	let amount = document.createElement("h4");
	amount.innerText = elem.amount;

	let discount = document.createElement("h4");
	discount.innerText = elem.discount;

	box.append(image, head, detail, time, amount, discount);

	document.querySelector("#content-mind").append(box);

})

mindData.forEach (function(elem){

	
})