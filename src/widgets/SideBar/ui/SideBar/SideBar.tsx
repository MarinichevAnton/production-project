import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SideBar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import LangSwitcher from "shared/ui/LangSwitcher/LangSwitcher";

interface SideBarProps {
  className?: string;
}
const SideBar = (props: SideBarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const onToffle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToffle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.language} />
      </div>
    </div>
  );
};

export default SideBar;
