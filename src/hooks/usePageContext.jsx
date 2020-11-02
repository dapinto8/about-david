import React from 'react';
import { PageContext } from 'context/pageContext';

export const usePageContext = () => React.useContext(PageContext);