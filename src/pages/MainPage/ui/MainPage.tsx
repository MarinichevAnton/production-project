import React from "react";
import { useTranslation } from "react-i18next";
import cls from "./MainPage.module.scss";

const MainPage = () => {
  const { t } = useTranslation();

  return <>{t("Основная страница")}</>;
};

export default MainPage;
