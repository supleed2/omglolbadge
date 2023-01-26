# omg.lol Badge

A simple Cloudflare Worker to provide a shorter URL for embedding an SVG badge on a page.

Can be used in markdown via: `[![](https://omg.8bitsqu.id/?user=8bit)](https://8bit.omg.lol)`

And in html via:

```html
<object data="https://omg.8bitsqu.id/?user=8bit" type="text/html">
    Alternative Content
</object>
```

## Query Parameters

- `user`: Indicates which omg.lol user to show / link to
- `colour` / `color`: Colour for the right half of the badge, passed directly to the shields.io link, so it has the same allowed values
- `style`: Style of the badge, passed directly to the shields.io link, so it has the same allowed values

More info on the allowed values at [Shields.io](https://shields.io/)
