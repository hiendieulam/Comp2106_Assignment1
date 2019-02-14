var express = require('express');
var fs = require('fs');
var router = express.Router();
fs.readFile('data/database.json', 'utf8', function (err, data) {
	if (err) throw err;
	obj = JSON.parse(data);
	projects = obj.projects;
});

/* GET users listing. */
router.get('/', function(req, res) {
	res.render('projects', {
		title: 'projects',
		projects: projects
	});
});

router.get('/:id', function(req, res) {
	const project = projects.find(function(prod){
		return prod.id == req.params.id;
	});
	if (project)
		res.render('project', {
			title: project.title,
			project: project
		});
	else
		res.render('projects', {
			title: 'projects',
			projects: projects
		});
});

module.exports = router;
