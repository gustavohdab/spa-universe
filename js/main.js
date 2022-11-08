import { Router } from "./router.js";

const router = new Router()
router.add('/', 'index.html')
router.add('/universe', '/pages/universe.html')
router.add('/exploring', '/pages/exploring.html')
router.add(404, '/pages/404.html')

window.onpopstate = () => router.handle()
window.route = () => router.route()