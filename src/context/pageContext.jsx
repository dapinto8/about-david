import React, { createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';

export const PageContext = createContext({});

export const PageContextProvider = ({ props, children }) => {
  const { i18n } = useTranslation();
  if (!i18n.language) {
    i18n.changeLanguage(props.pageContext.locale);
  }

  return (
    <PageContext.Provider value={props}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);
