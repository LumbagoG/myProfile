import { useTheme } from "styled-components";

const HomePage = () => {
    const theme = useTheme();
    console.log(theme);

    return <h1 className="text-3xl font-bold underline">Привет, меня зовут Глеб!</h1>;
};

export default HomePage;
