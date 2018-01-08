import showBlog from './components/showBlog'
import addBlog from './components/addBlog'
import singleBlog from './components/singleBlog'

export default [
	{path: '/', component: showBlog},
	{path: '/add', component: addBlog},
	{path: '/blog/:id', component: singleBlog}
]