// Импорты
import { Outlet } from "react-router-dom";

// Компоненты
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

/**
 * Главны layout приложения
 * @returns {JSX.Element}
 * @constructor
 */
const AppLayout = () => {
    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    );
};

export default AppLayout;
