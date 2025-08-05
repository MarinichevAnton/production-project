import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import LangSwitcher from "shared/ui/LangSwitcher/LangSwitcher";
import Logo from "../../../shared/assets/icons/logo.svg";

interface NavbarProps {
  className?: string;
}

const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.NavbarRoutes, {}, [className])}>
        <div className={classNames(cls.Logo, {}, [className])}>
          <Logo fill="var(--primary-color)" height="30" width="30" />
          <h1>СК Вертикаль</h1>
        </div>
      </div>
      <div className={classNames(cls.NavbarButtons, {}, [className])}>
        <AppLink
          to={"/"}
          className={cls.MainLink}
          theme={AppLinkTheme.SECONDARY}
        >
          {t("Главная")}
        </AppLink>
        <AppLink to={"/about"} theme={AppLinkTheme.PRIMARY}>
          {t("О cайте")}
        </AppLink>
        <ThemeSwitcher />
        <LangSwitcher className={cls.Language} />
      </div>
    </div>
  );
};

export default Navbar;
