
export const require = (value , {$i18n}) => !!value || $i18n.t('LoginBox.Empty_Input');
export const user_rule = (value, {$i18n}) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ||  $i18n.t('LoginBox.Input_Error_Username');