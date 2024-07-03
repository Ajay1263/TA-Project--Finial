const url = 'https://sky-scanner3.p.rapidapi.com/get-config';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd48ddd5782mshfb408088175f10ep16adffjsn832a2065a015',
		'X-RapidAPI-Host': 'sky-scanner3.p.rapidapi.com'
	}
};


async function testAPI(){
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
    console.log("API Working")
  } catch (error) {
    console.error(error);
  }
}

testAPI();
