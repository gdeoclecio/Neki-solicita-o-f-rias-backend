import {useTranslations} from "next-intl";

export default function Page() {
  const t = useTranslations("Common");

  return (
    <div className="p-10">
      <h1>{t("welcome")}</h1>
    </div>
  );
}