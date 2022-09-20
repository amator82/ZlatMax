import { isMobile, MTR } from './functions.js'
import { mtrModules } from './modules.js'

import tippy from 'tippy.js'

mtrModules.tippy = tippy('[data-tippy-content]', {})
