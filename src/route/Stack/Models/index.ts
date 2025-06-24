import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
  AuthPage: undefined;
  Home: undefined;
  Frequency:undefined;
  Notes: undefined;
  Drawer: undefined;
  Finance: undefined;
  PlanClassroom: undefined;
  ClassSchedules: undefined;
  Actividy: undefined;
  Materials: undefined;
  Detalhes: { atividade: any };
}

export type propStack = NativeStackNavigationProp<propsNavigationStack>