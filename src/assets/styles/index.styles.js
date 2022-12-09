// Переменные
import { variablesStyles } from "./variables/variables.styles";

// Миксины
import { mixinsStyles } from "./mixins/mixins.styles";

// Темы
import { darkThemeStyles } from "./theme/darkTheme.styles";
import { lightThemeStyles } from "./theme/lightTheme.styles";

export const indexStyles = (theme) => {
    return {
        ...variablesStyles,
        ...mixinsStyles,
        theme: theme === "dark" ? { ...darkThemeStyles } : { ...lightThemeStyles }
    };
};
