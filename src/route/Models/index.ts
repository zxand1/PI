import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack= {
  AuthPage: undefined;
  Home: undefined;
  Frequency: undefined;
  Notes: undefined;
  Drawer: undefined;
  Finance: undefined;
  ClassPlan: undefined;
  ClassSchedules: undefined;
  Actividy: undefined;
  Detalhes: { atividade: any };
};

export type propStack = NativeStackNavigationProp<propsNavigationStack>

