// Импорты
import { Outlet } from "react-router-dom";

/**
 * Главны layout приложения
 * @returns {JSX.Element}
 * @constructor
 */
const AppLayout = () => {
    return (
        <>
            <header>Шапка</header>

            <main>
                <Outlet />
            </main>

            <footer>Подвал</footer>
        </>
    );
};

export default AppLayout;
