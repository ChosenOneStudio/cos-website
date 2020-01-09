import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../utils';

/**
 * Component for changing locale language
 * @param {String} defLanguage
 * @returns React.Component
 * @version 0.0.1
 * @author chongruei
 */
const SelectLanguage = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage('zh-TW');

  const langOptions = [
    {
      name: t('locale.zh-TW'),
      value: 'zh-TW',
    },
    {
      name: t('locale.en'),
      value: 'en',
    },
  ];

  const handleChange = event => {
    changeLanguage(event.target.value);
  };

  return (
    <select onChange={handleChange} value={language}>
      {langOptions.map(item => (
        <option key={item.value} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export { SelectLanguage };
