type ShortResponse = {
	code: 200 | 201 | 301;
	text: string;
};

type DetailedResponse = {
	code: 400 | 404 | 500;
	text: string;
	printChars?: number;
};

const httpCodes = (httpResponse: DetailedResponse | ShortResponse): void => {
	if ("printChars" in httpResponse) {
		console.log(httpResponse.text.slice(0, httpResponse.printChars));
	} else {
		console.log(httpResponse.text);
	}
};

httpCodes({ code: 200, text: "OK" });
httpCodes({ code: 201, text: "Created" });
httpCodes({ code: 400, text: "Bad Request", printChars: 4 });
httpCodes({ code: 404, text: "Not Found" });
httpCodes({ code: 404, text: "Not Found", printChars: 3 });
httpCodes({ code: 500, text: "Internal Server Error", printChars: 1 });


