import { MissingTranslationHandler, MissingTranslationHandlerParams, TranslateModuleConfig, TranslateParser } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';



export class CustomMissingTranslationHandler implements MissingTranslationHandler {
  static readonly MISSING_KEY_PREFIX = '|||';

  handle(params: MissingTranslationHandlerParams) {
    console.warn('Missing translation for key: ' + params.key);
    let result = params.translateService.store.translations[environment.defaultLang];
    try {
      params.key.split('.').forEach(k => {
        result = result[k];
      });
    } catch (ex) {
      result = params.key;
      console.error(params.key);
    }
    return `${CustomMissingTranslationHandler.MISSING_KEY_PREFIX} ` + (result || params.key);
  }
}

export const DEBUG_MISSING_TRANSLATION =
environment.production ? { useDefaultLang: true } :
{
  missingTranslationHandler: {
    provide: MissingTranslationHandler,
    useClass: CustomMissingTranslationHandler,
    deps: [TranslateParser]
  },
  useDefaultLang: false
} as Partial<TranslateModuleConfig>;
