import {getRequestConfig} from "next-intl/server";
import {routing} from "./routing";

type Locale = (typeof routing.locales)[number];

const messagesMap = {
  "pt-BR": () => import("@/messages/pt-BR.json"),
  en: () => import("@/messages/en.json")
};

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  const messages = await messagesMap[locale as keyof typeof messagesMap]();

  return {
    locale,
    messages: messages.default
  };
});