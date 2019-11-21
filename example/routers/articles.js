import express from 'express'

const r = new express.Router()

r.get('/', async (req, res) => {
	// const articles = await req.db.filter('type', 'eq', 'Article').order('created', 'DESC').exec()
	const articles = [{
		created: new Date().toISOString(),
		title: 'How to Kickstart and Scale a Marketplace',
		url: 'https://www.lennyrachitsky.com/p/how-to-kickstart-and-scale-a-marketplace'
	}]
	res.render('article-list', { articles })
})

r.get('/new', async (req, res) => {
	res.render('article-edit', {})
})

export default r
