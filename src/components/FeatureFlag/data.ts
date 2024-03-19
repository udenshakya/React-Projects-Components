const dummyApiResponse = {
  showLightAndDarkMode: false,
  showTicTacToe: true,
  showRandomColorGenerator: true,
  showAccordian: true,
  showTreeView: true,
};

const featureFlagsServiceCall = () => {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(()=>resolve(dummyApiResponse), 500);
    else reject("Some Error Occured");
  });
};

export default featureFlagsServiceCall;
