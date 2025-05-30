import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
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


export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export type DetalhesRouteProp = RouteProp<RootStackParamList, 'Detalhes'>;
