var auInfo = {
	title: ["Đoàn VSL Pinic"],

	time: ["5/20/2017"],

	description: [

		"<p><b>Time:</b> Saturday, May 20 – from 10am - 4pm <br><br><b>Location:</b> De Anza Park @ 5400-5598 Marquette Dr San Jose, CA 95118<br><br><b>Description:</b> Đoàn Vinh Sơn Liêm sẽ tổ chức cuộc dã ngoại ngoài trời nhằm xây dựng mối quan hệ bền vững giữa các trưởng và các em. Các em cũng sẽ có dịp được vui chơi giải trí với các trò chơi thể thao và đố vui đại học xoay quanh tình yêu và hình ảnh của Thiên Chúa.</p>"
]
};

var thieuInfo = {
	title: ["Đoàn VSL Pinic"],

	time: ["5/20/2017"],

	description: [

		"<p><b>Time:</b> Saturday, May 20 – from 10am - 4pm <br><br><b>Location:</b> De Anza Park @ 5400-5598 Marquette Dr San Jose, CA 95118<br><br><b>Description:</b> Đoàn Vinh Sơn Liêm sẽ tổ chức cuộc dã ngoại ngoài trời nhằm xây dựng mối quan hệ bền vững giữa các trưởng và các em. Các em cũng sẽ có dịp được vui chơi giải trí với các trò chơi thể thao và đố vui đại học xoay quanh tình yêu và hình ảnh của Thiên Chúa.</p>"
]
};

var nghiaInfo = {
	title: ["Đại Hội Nghĩa Hiệp - IMPORTANT",
			"Đoàn VSL Pinic"
			],

	time: ["5/27/2017 - 5/29/2017",
			"5/20/2017"],

	description: [

		"<p><b>Time:</b> Saturday, May 27 (6pm) – Monday, May 29 (12pm) <br><br><b>Location:</b> Chau Son Monastery, Walnut Grove<br><br><b>Description:</b> Ngày hội ngộ và giao lưu cho các em Nghĩa và Hiệp Sỹ từ các đoàn bạn khác nhau.</p>",
		"<p><b>Time:</b> Saturday, May 20 – from 10am - 4pm <br><br><b>Location:</b> De Anza Park @ 5400-5598 Marquette Dr San Jose, CA 95118<br><br><b>Description:</b> Đoàn Vinh Sơn Liêm sẽ tổ chức cuộc dã ngoại ngoài trời nhằm xây dựng mối quan hệ bền vững giữa các trưởng và các em. Các em cũng sẽ có dịp được vui chơi giải trí với các trò chơi thể thao và đố vui đại học xoay quanh tình yêu và hình ảnh của Thiên Chúa.</p>"
]
};

var nganh;

var holder = document.getElementById("dis");
var num = holder.innerHTML;
//alert(num);
if(num == 0){
	nganh = auInfo;
}else if(num == 1){
	nganh = thieuInfo;
}else{
	nganh = nghiaInfo;
}

var content = "";

for(var i = 0; i < nganh.title.length; i++){
	content += "<div class=\"column\" style=\"width:inherit;\"><div class=\"ui card\" style=\"margin-right:auto; margin-top:0;\"><div class=\"content\"><div class=\"header\">" + nganh.title[i] + "</div>" +
	      "<div class=\"meta\">" + nganh.time[i] + "</div>" +
	      "<div class=\"description\">" + nganh.description[i] + "</div></div></div></div>";
}

document.getElementById("dis").innerHTML = content;


























