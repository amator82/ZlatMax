import { isMobile, FLS } from './functions.js'
import { flsModules } from './modules.js'

import tippy from 'tippy.js'

flsModules.tippy = tippy('[data-tippy-content]', {})
