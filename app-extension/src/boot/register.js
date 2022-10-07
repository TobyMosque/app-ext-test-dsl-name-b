import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-dsl-name-b'
import { sayHello } from 'quasar-ui-design-system'

export default boot(({ app }) => {
  sayHello('name-b');
  app.use(VuePlugin)
})
