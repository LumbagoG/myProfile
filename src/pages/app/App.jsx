// Импорты
import { ThemeProvider } from "styled-components";

// Роуты
import { MainRoutes } from "../../routes/MainRoutes";

// Стили
import { indexStyles } from "../../assets/styles/index.styles";
import { GlobalStyles } from "../../assets/styles/global/global.styles";

/**
 * Главный компонент приложения
 * @returns {JSX.Element}
 * @constructor
 */
export const App = () => {
    return (
        <>
            {/* Провайдер тем приложения */}
            <ThemeProvider theme={indexStyles("dark")}>
                {/* Глобальные стили */}
                <GlobalStyles theme={indexStyles("dark")} />
                <MainRoutes />
            </ThemeProvider>
        </>
    );
};
