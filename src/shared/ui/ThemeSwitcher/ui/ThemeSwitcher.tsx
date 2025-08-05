import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "app/providers/themeProvider";
import IconSun from "shared/assets/icons/sun.svg";
import IconMoon from "shared/assets/icons/moon.svg";
import Button, { ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}
const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;

  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? (
        <IconSun height="50px" width="40px" />
      ) : (
        <IconMoon height="50px" width="40px" />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
