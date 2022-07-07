import { createI18n } from 'vue-i18n'
import en from './en'
import zh from './zh'

const i18n = createI18n({
  locale: 'zh',
  messages: {
    zh,
    en
  }
})

export default i18n
