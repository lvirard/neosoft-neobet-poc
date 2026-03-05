// plugins/vuetify.js
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiHandshake, mdiClose, mdiChevronDown, mdiChevronUp, mdiChevronRight, mdiAccountCircle } from '@mdi/js'

export default createVuetify({
	icons: {
        defaultSet: 'mdi',
        aliases: {
            ...aliases,
            handshake: mdiHandshake,
            close: mdiClose,
            chevronUp: mdiChevronUp,
            chevronDown: mdiChevronDown,
            chevronRight: mdiChevronRight,
            account: mdiAccountCircle,
        },
        sets: { mdi }
    }
})