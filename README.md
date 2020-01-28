# nextjs-link-query-render-bug

- When you load http://localhost:3000/ directly then the renderer will be called once.
- When you load http://localhost:3000/test?id=5 directly then the renderer will be called **twice**.

When you click on the links, rendered will be also called just once.

So when you use queries in the link href, and load the page directly, the page will be rendered twice on client side.
