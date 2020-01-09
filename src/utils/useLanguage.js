import { useState, useEffect } from 'react';
import i18n from 'i18next';

/**
 * Hooks for changing locale language
 * @param {String} defLanguage
 * @returns React.Hooks
 * @version 0.0.1
 * @author chongruei
 */
const useLanguage = defLanguage => {
  const [language, setLanguage] = useState(defLanguage || 'zh-TW'); // default

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  // const loadLang = async language => {
  //   return await import(`../locale/${language}.json`);
  // };

  const changeLanguage = language => {
    debugger;
    if (!i18n.hasResourceBundle(language, 'translation')) {
      // const langJson = loadLang(language);
      // console.log(langJson);
      // i18n.addResource(language, 'translation', langJson);
    }

    setLanguage(language);
  };

  return { language, changeLanguage };
};

export { useLanguage };
