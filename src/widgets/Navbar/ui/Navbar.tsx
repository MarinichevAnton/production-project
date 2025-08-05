import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}></div>
      <AppLink to={"/"} className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>
        {t("Главная")}
      </AppLink>
      <AppLink to={"/about"} theme={AppLinkTheme.RED}>
        {t("О cайте")}
      </AppLink>
    </div>
  );
};

export default Navbar;
