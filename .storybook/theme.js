import { create } from "@storybook/theming";
import Logo from "../public/assets/images/myPhoto.png";

export default create({
    base: "dark",
    brandTitle: "Моя книга",
    brandUrl: "https://github.com/LumbagoG",
    brandImage: Logo,
    brandTarget: "_blank"
});
