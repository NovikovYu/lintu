const getTabAccessibilityProps = (index: number, tabsGroupName: string) => {
  return {
    id: `${tabsGroupName}-tab-${index}`,
    'aria-controls': `${tabsGroupName}-tabpanel-${index}`,
  };
};

export default getTabAccessibilityProps;
