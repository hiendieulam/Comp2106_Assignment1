var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Home - Assignment 1' });
});
/* GET about me page. */
router.get('/about-me', function(request, response, next) {
	response.render('about-me', {title: 'About Me'});
});

/* GET projects page. */
router.get('/projects', function(request, response, next) {
	response.render('projects', {title: 'pPojects'});
});

/* GET services page. */
router.get('/services', function(request, response, next) {
	response.render('services', {title: 'Services'});
});

/* GET contact me page. */
router.get('/contact-me', function(request, response, next) {
	response.render('contact-me', {title: 'Contact Me'});
});

/* POST contact me page. */
router.post('/contact-me', function(request, response, next) {
	const body = request.body;
	console.log(body);
	fs.writeFile('data/userSubmit.txt', JSON.stringify(request.body), function(err){
		if(err) {
			// return response.render('contact-us', {
			// 	failure: true, 
			// 	title: 'Contact Us'
			// });
			return console.log(err);
		}
		return response.render('contact-me', {
			success: true, 
			title: 'Contact Me'
		});
	});
	
});

module.exports = router;
