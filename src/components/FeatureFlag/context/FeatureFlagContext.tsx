import { createContext, useEffect, useState } from "react";
import featureFlagsServiceCall from "../data";

type FeatureFlags = Record<string, boolean>;

export const FeatureFlagContext = createContext<{
  loading: boolean;
  enabledFlags: FeatureFlags;
}>({ loading: false, enabledFlags: {} });

export const FeatureFlagContextProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState<FeatureFlags>({});

  const fetchFeatureFlags = async () => {
    try {
      setLoading(true);
      const res: any = await featureFlagsServiceCall();
      setEnabledFlags(res);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
};
