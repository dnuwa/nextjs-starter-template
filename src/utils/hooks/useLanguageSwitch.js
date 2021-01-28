import React, { useState } from 'react';
import { ContentSwitcher, Switch } from 'components/ContentSwitch';

export const langs = {
  si: 'si',
  en: 'en',
  ta: 'ta',
};

const useLanguageSwitch = () => {
  let [lang, setLang] = useState(langs.en);
  return [
    lang,
    <ContentSwitcher default={langs.en} onChange={name => setLang(name)}>
      <Switch name={langs.en}>English</Switch>
      <Switch name={langs.si}>Sinhala</Switch>
      <Switch name={langs.ta}>Tamil</Switch>
    </ContentSwitcher>,
  ];
};

export default useLanguageSwitch;
