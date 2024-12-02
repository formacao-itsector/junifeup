import { action, EmptyAction } from 'typesafe-actions';
import { Actions } from './types';

export const switchTheme = (): EmptyAction<string> => action(Actions.SWITCH_THEME);

export const switchLanguage = (): EmptyAction<string> => action(Actions.SWITCH_LANGUAGE);
/** other example not in use, this time with the theme being passed by payload */
// export const switchTheme = (theme: ThemeEnum): PayloadAction<string, ThemeEnum> => action(Actions.SWITCH_THEME, theme);
