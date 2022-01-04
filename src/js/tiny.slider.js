/* Import all plugins from tiny-slider */
import { tns } from "tiny-slider";

const slider = tns({
  autoplay: true,
  autoWidth: true,
  center: true,
  container: ".slideshow",
  edgePadding: 0,
  gutter: 0,
  items: 1,
  mouseDrag: true,
  slideBy: "page",
  speed: 200,
});

/* Export all plugins from tiny-slider */
export default tns;
