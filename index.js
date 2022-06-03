const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();
const port = 3000;

router.get("/", (ctx) => {
  ctx.status = 200;
  ctx.body = "<h1>Index sayfasına hoşgeldiniz</h1>";
});

router.get("/hakkimda", (ctx) => {
  ctx.status = 200;
  ctx.body = "<h1>Hakkımda sayfasına hoşgeldiniz</h1>";
});

router.get("/iletisim", (ctx) => {
  ctx.status = 200;
  ctx.body = "<h1>İletişim sayfasına hoşgeldiniz</h1>";
});

app.use(router.routes());

app.listen(port, () => {
  console.log(`${port} portunda sunucu başlatıldı.`);
});
