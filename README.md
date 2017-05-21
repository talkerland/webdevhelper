#Web Development Helper
>jQuery plugin which is developed to help a web designer configure their web design with minimal coding.

For a working demo, please see [https://www.talkerland.com](https://www.talkerland.com).

## Dependencies
In order to use webDevHelper.js, jQuery library is required, and it is the only library, which you need to ensure to include. It has been tested with jQuery version 3.2.1.

Other files, such as CSS files, are not required. You can use your own css file. For an instance, normalize.css is not required even if it was included in this repository. The normalize.css was used in a demo example.

## Installation
Add both jquery.min.js and webDevHelper.min.js after `</body>` or inside `<header></header>`. The placement order of library files is important, and jQuery library file must be placed before webDevHelper.js as shown in the example below. You can also use the public jQuery library CDN link instead of the local jquery library file link.

```html
<html>
<header></header>
<body>

</body>

<!-- Library Javascript Scripts -->
<script src="vendor/jquery/dist/jquery.min.js"></script>
<script src="assets/js/webDevHelper.min.js"></script>

</html>
```

## Usages
webDevHelper.js currently supports following functions:

    - `isStickyFooter()` - Turns a footer container sticky at the bottom.

Other functions will be added in the future.

#### isStickyFooter()
> isStickyFooter() turns a footer container to be sticky at the bottom of a web page or at the bottom of a browser window, depending on its condition and option setup.

[1]. Add a container, which will hold your footer contents. This container can be either `<div></div>` or `<footer></footer>` tag, but the `<footer></footer>` tag has been used in the following example with a ID property.

```html
<html>
<header></header>
<body>

    <footer id="yourFooterId">
        <!-- Add your footer contents inside your footer container -->
    </footer>

</body>

<!-- Library Javascript Scripts -->
<script src="vendor/jquery/dist/jquery.min.js"></script>
<script src="assets/js/webDevHelper.min.js"></script>

</html>
```

[2]. Add a script, which calls the function `isStickyFooter()`, after webDevHelper.js.

```html
<html>
<header></header>
<body>

    <footer id="yourFooterId">
        <!-- Add your footer contents inside your footer container -->
    </footer>

</body>

<!-- Library Javascript Scripts -->
<script src="vendor/jquery/dist/jquery.min.js"></script>
<script src="assets/js/webDevHelper.min.js"></script>

<script>
    $(document).ready(function(){
        $("#yourFooterId").isStickyFooter({
            isStickyFooterFixed: true
        });
    });
</script>

</html>
```

[3]. `isStickyFooter()` function has a configurable option.

| Name                | Description                                      | Value            | Default |
| ------------------- | ------------------------------------------------ | ---------------- | ------- |
| isStickyFooterFixed | Is the sticky footer always fixed at the bottom? | `true` / `false` | `true`  |

Regardless of `isStickyFooterFixed` option setup, the footer container will be always sticky as long as the contents do not exceed the window viewport height. However, when the vertical window scrollbar appears due to contents longer than window viewport height, the effect of this option can be observed. When set to `true`, the footer will keep shown at the bottom of the window, while it will move to the bottom of the page with the setting `false`.

## License

This jQuery plugin, `webDevHelper.js` and/or `webDevHelper.min.js`, have been released under the MIT License.